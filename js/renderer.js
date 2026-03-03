/* ======================================================
   WxMark — Markdown 渲染引擎
   使用 marked.js 解析 Markdown，并转为带内联样式的 HTML
   确保与微信公众号编辑器的兼容性
   ====================================================== */

class MarkdownRenderer {
    constructor(themeManager) {
        this.themeManager = themeManager;
        this.setupMarked();

        // highlight.js atom-one-dark 配色 → 内联样式映射
        // 确保语法高亮在微信粘贴后仍能保留颜色
        this.hljsColorMap = {
            'hljs-keyword': '#c678dd',
            'hljs-built_in': '#e6c07b',
            'hljs-type': '#e6c07b',
            'hljs-literal': '#56b6c2',
            'hljs-number': '#d19a66',
            'hljs-string': '#98c379',
            'hljs-regexp': '#98c379',
            'hljs-symbol': '#61aeee',
            'hljs-title': '#61aeee',
            'hljs-function': '#61aeee',
            'hljs-class': '#e6c07b',
            'hljs-params': '#abb2bf',
            'hljs-comment': '#5c6370',
            'hljs-doctag': '#c678dd',
            'hljs-meta': '#61aeee',
            'hljs-attr': '#d19a66',
            'hljs-attribute': '#98c379',
            'hljs-variable': '#e06c75',
            'hljs-template-variable': '#e06c75',
            'hljs-tag': '#e06c75',
            'hljs-name': '#e06c75',
            'hljs-selector-id': '#e06c75',
            'hljs-selector-class': '#d19a66',
            'hljs-section': '#61aeee',
            'hljs-link': '#56b6c2',
            'hljs-deletion': '#e06c75',
            'hljs-addition': '#98c379',
            'hljs-emphasis': '#c678dd',
            'hljs-strong': '#d19a66',
            'hljs-bullet': '#61aeee',
            'hljs-quote': '#5c6370',
            'hljs-property': '#e06c75',
            'hljs-operator': '#56b6c2',
            'hljs-punctuation': '#abb2bf',
            'hljs-subst': '#e06c75',
            'hljs-title.function_': '#61aeee',
            'hljs-title.class_': '#e6c07b',
        };
    }

    /**
     * 配置 marked.js
     */
    setupMarked() {
        // marked v12 移除了 highlight 选项，需要通过自定义 renderer 实现代码高亮
        const renderer = new marked.Renderer();

        // 自定义 code 渲染器 — 在渲染时直接注入 highlight.js 语法高亮
        renderer.code = function (text) {
            // marked v12: text 参数可能是 {text, lang, escaped} 对象
            let code, lang;
            if (typeof text === 'object' && text !== null) {
                code = text.text || '';
                lang = text.lang || '';
            } else {
                code = text || '';
                lang = '';
            }

            let highlighted;
            if (lang && hljs.getLanguage(lang)) {
                try {
                    highlighted = hljs.highlight(code, { language: lang }).value;
                } catch (e) {
                    highlighted = code;
                }
            } else {
                try {
                    highlighted = hljs.highlightAuto(code).value;
                } catch (e) {
                    highlighted = code;
                }
            }

            return `<pre><code class="hljs language-${lang || 'plaintext'}">${highlighted}</code></pre>\n`;
        };

        marked.setOptions({
            gfm: true,
            breaks: true,
            smartypants: false,
            headerIds: false,
            mangle: false,
            renderer: renderer,
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

                // ★ 内联 highlight.js 语法高亮颜色
                // highlight.js 通过 class 给 span 上色，微信会丢弃 class，
                // 所以需要将颜色写入 inline style
                code.querySelectorAll('span[class]').forEach(span => {
                    const classList = span.className.split(/\s+/);
                    let color = null;

                    for (const cls of classList) {
                        if (this.hljsColorMap[cls]) {
                            color = this.hljsColorMap[cls];
                            break;
                        }
                    }

                    // 尝试组合类名匹配 (e.g., "hljs-title function_")
                    if (!color && classList.length > 1) {
                        const combined = classList.join('.');
                        if (this.hljsColorMap[combined]) {
                            color = this.hljsColorMap[combined];
                        }
                    }

                    if (color) {
                        span.setAttribute('style', `color: ${color};`);
                    }
                });

                // ★ 将普通空格替换为不间断空格，防止微信压缩空格
                const walker = document.createTreeWalker(code, NodeFilter.SHOW_TEXT);
                let textNode;
                while (textNode = walker.nextNode()) {
                    textNode.textContent = textNode.textContent.replace(/ /g, '\u00A0');
                }
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
