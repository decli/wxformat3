/* ======================================================
   WxMark — Markdown 渲染引擎
   使用 marked.js 解析 Markdown，并转为带内联样式的 HTML
   确保与微信公众号编辑器的兼容性
   ====================================================== */

class MarkdownRenderer {
    constructor(themeManager) {
        this.themeManager = themeManager;
        this.setupMarked();
    }

    /**
     * 配置 marked.js
     */
    setupMarked() {
        marked.setOptions({
            gfm: true,
            breaks: true,
            smartypants: false,
            headerIds: false,
            mangle: false,
        });

        // 自定义 highlight.js 代码高亮
        marked.setOptions({
            highlight: function (code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(code, { language: lang }).value;
                    } catch (e) { }
                }
                try {
                    return hljs.highlightAuto(code).value;
                } catch (e) { }
                return code;
            }
        });
    }

    /**
     * 渲染 Markdown 为带内联样式的 HTML
     */
    render(markdown) {
        if (!markdown || !markdown.trim()) {
            return '<p style="color: #999; font-size: 14px; text-align: center; padding: 40px 0;">在左侧输入 Markdown 内容开始预览...</p>';
        }

        const theme = this.themeManager.getTheme();
        const styles = theme.styles;

        // 先用 marked 转换为 HTML
        let html = marked.parse(markdown);

        // 创建一个临时 DOM 来处理内联样式
        const container = document.createElement('div');
        container.innerHTML = html;

        // 遍历并注入内联样式
        this.applyInlineStyles(container, styles);

        return container.innerHTML;
    }

    /**
     * 递归遍历 DOM 树，注入内联样式
     */
    applyInlineStyles(container, styles) {
        // 处理标题
        container.querySelectorAll('h1').forEach(el => {
            el.setAttribute('style', styles.h1);
        });
        container.querySelectorAll('h2').forEach(el => {
            el.setAttribute('style', styles.h2);
        });
        container.querySelectorAll('h3').forEach(el => {
            el.setAttribute('style', styles.h3);
        });
        container.querySelectorAll('h4, h5, h6').forEach(el => {
            el.setAttribute('style', styles.h4);
        });

        // 处理段落
        container.querySelectorAll('p').forEach(el => {
            el.setAttribute('style', styles.p);
        });

        // 处理加粗
        container.querySelectorAll('strong').forEach(el => {
            el.setAttribute('style', styles.strong);
        });

        // 处理斜体
        container.querySelectorAll('em').forEach(el => {
            el.setAttribute('style', styles.em);
        });

        // 处理删除线
        container.querySelectorAll('del').forEach(el => {
            el.setAttribute('style', styles.del);
        });

        // 处理链接 — 微信不支持 target，去掉
        container.querySelectorAll('a').forEach(el => {
            el.setAttribute('style', styles.a);
            el.removeAttribute('target');
            el.removeAttribute('rel');
        });

        // 处理引用
        container.querySelectorAll('blockquote').forEach(el => {
            el.setAttribute('style', styles.blockquote);
            // 引用内的段落也需要调整
            el.querySelectorAll('p').forEach(p => {
                p.setAttribute('style', 'margin: 4px 0; color: inherit; font-size: inherit; line-height: inherit;');
            });
        });

        // 处理无序列表
        container.querySelectorAll('ul').forEach(el => {
            el.setAttribute('style', styles.ul);
        });

        // 处理有序列表
        container.querySelectorAll('ol').forEach(el => {
            el.setAttribute('style', styles.ol);
        });

        // 处理列表项
        container.querySelectorAll('li').forEach(el => {
            el.setAttribute('style', styles.li);
        });

        // 处理代码块（pre > code）
        container.querySelectorAll('pre').forEach(el => {
            el.setAttribute('style', styles.codeBlock);
            // 内部的 code 标签重置样式
            const code = el.querySelector('code');
            if (code) {
                code.setAttribute('style', 'background: none; padding: 0; font-size: inherit; font-family: inherit; color: inherit;');
            }
        });

        // 处理行内代码（非 pre 内的 code）
        container.querySelectorAll('code').forEach(el => {
            if (el.parentElement && el.parentElement.tagName !== 'PRE') {
                el.setAttribute('style', styles.codeInline);
            }
        });

        // 处理图片
        container.querySelectorAll('img').forEach(el => {
            el.setAttribute('style', styles.img);
        });

        // 处理分割线
        container.querySelectorAll('hr').forEach(el => {
            el.setAttribute('style', styles.hr);
        });

        // 处理表格
        container.querySelectorAll('table').forEach(el => {
            el.setAttribute('style', styles.table);
        });
        container.querySelectorAll('th').forEach(el => {
            el.setAttribute('style', styles.th);
        });
        container.querySelectorAll('td').forEach(el => {
            el.setAttribute('style', styles.td);
        });
        // 偶数行背景
        container.querySelectorAll('tr').forEach((el, index) => {
            if (index % 2 === 0 && index > 0) {
                el.setAttribute('style', styles.trEven);
            }
        });

        // sup 脚注标记
        container.querySelectorAll('sup').forEach(el => {
            el.setAttribute('style', styles.sup);
        });
    }

    /**
     * 获取完整的可复制 HTML（带容器样式）
     */
    getStyledHTML(markdown) {
        const theme = this.themeManager.getTheme();
        const innerHtml = this.render(markdown);
        return `<div style="${theme.styles.wrapper}">${innerHtml}</div>`;
    }
}
