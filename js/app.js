/* ======================================================
   WxMark — 主应用入口
   初始化所有模块，绑定事件
   ====================================================== */

// 默认示例 Markdown 内容
const DEFAULT_MARKDOWN = `# 欢迎使用 WxMark ✨

> WxMark 是一款专为 **微信公众号** 设计的 Markdown 排版工具，让你的公众号文章更加精美。

## 功能特点

- 🎨 **多主题切换** — 6 套精美主题，一键切换
- 📝 **实时预览** — 左侧编辑，右侧即时预览
- 🔄 **同步滚动** — 编辑与预览同步联动
- 📋 **一键复制** — 复制后直接粘贴到微信后台

## Markdown 语法示例

### 文本格式

这是一段普通文本，支持 **加粗**、*斜体*、~~删除线~~ 等常见格式。

### 引用

> 生活不止眼前的苟且，还有诗和远方的田野。
>
> — 许巍

### 代码

行内代码：\`const hello = "world"\`

代码块：

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to WxMark!\`;
}

greet('微信公众号');
\`\`\`

### 列表

**有序列表：**

1. 打开 WxMark 网站
2. 在左侧编辑区输入 Markdown
3. 选择喜欢的主题风格
4. 点击「复制到微信」按钮
5. 粘贴到微信公众号后台

**无序列表：**

- 支持 GitHub Flavored Markdown
- 支持表格、代码高亮
- 自动转换为微信兼容的内联样式
- 完全免费、开源

### 表格

| 功能 | 描述 | 状态 |
|------|------|------|
| 多主题 | 6 套精美排版主题 | ✅ |
| 实时预览 | 所见即所得 | ✅ |
| 同步滚动 | 编辑器与预览同步 | ✅ |
| 一键复制 | 带样式复制到微信 | ✅ |

### 分割线

---

### 图片

图片会自动适应微信公众号的宽度限制，确保在手机端也能完美显示。

---

> **💡 小提示：** 点击上方的彩色圆点可以切换不同的排版主题，找到最适合你文章风格的样式！
`;

/**
 * 应用主类
 */
class App {
    constructor() {
        this.themeManager = new ThemeManager();
        this.renderer = new MarkdownRenderer(this.themeManager);
        this.editor = null;
        this.syncScroll = null;
        this.init();
    }

    init() {
        // 等待 DOM 就绪
        this.bindElements();
        this.initEditor();
        this.initSyncScroll();
        this.initThemeSelector();
        this.initQuickInsert();
        this.initResizeHandle();
        this.bindActions();

        // 初始渲染
        this.renderPreview(this.editor.getValue());
    }

    /**
     * 绑定 DOM 元素
     */
    bindElements() {
        this.editorEl = document.getElementById('editor');
        this.previewEl = document.getElementById('preview');
        this.previewWrapper = document.querySelector('.preview-wrapper');
        this.copyBtn = document.getElementById('btn-copy');
        this.syncBtn = document.getElementById('btn-sync');
    }

    /**
     * 初始化编辑器
     */
    initEditor() {
        this.editor = new Editor(this.editorEl, (value) => {
            this.renderPreview(value);
        });

        // 加载上次保存的内容或默认内容
        const saved = localStorage.getItem('wxmark-content');
        this.editor.setValue(saved || DEFAULT_MARKDOWN);
    }

    /**
     * 初始化同步滚动
     */
    initSyncScroll() {
        this.syncScroll = new SyncScroll(this.editorEl, this.previewWrapper);
    }

    /**
     * 初始化主题选择器
     */
    initThemeSelector() {
        const themes = this.themeManager.getAllThemes();
        const selector = document.querySelector('.theme-selector');

        Object.entries(themes).forEach(([id, theme]) => {
            const btn = document.createElement('button');
            btn.className = 'theme-btn';
            btn.dataset.theme = id;
            btn.dataset.tooltip = theme.name;
            btn.textContent = theme.emoji;
            btn.id = `theme-${id}`;

            if (id === this.themeManager.getThemeId()) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', () => {
                this.themeManager.setTheme(id);
            });

            selector.appendChild(btn);
        });

        // 监听主题变化
        this.themeManager.onChange((themeId) => {
            // 更新按钮状态
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.theme === themeId);
            });
            // 重新渲染预览
            this.renderPreview(this.editor.getValue());
        });
    }

    /**
     * 初始化快捷插入工具栏
     */
    initQuickInsert() {
        const actions = {
            'bold': () => this.editor.insertMarkdown('**', '**', '粗体文本'),
            'italic': () => this.editor.insertMarkdown('*', '*', '斜体文本'),
            'strike': () => this.editor.insertMarkdown('~~', '~~', '删除文本'),
            'h1': () => this.editor.insertLinePrefix('# '),
            'h2': () => this.editor.insertLinePrefix('## '),
            'h3': () => this.editor.insertLinePrefix('### '),
            'quote': () => this.editor.insertLinePrefix('> '),
            'code': () => this.editor.insertMarkdown('`', '`', 'code'),
            'codeblock': () => this.editor.insertMarkdown('\n```\n', '\n```\n', 'code block'),
            'link': () => this.editor.insertMarkdown('[', '](url)', '链接文本'),
            'image': () => this.editor.insertMarkdown('![', '](url)', '图片描述'),
            'ul': () => this.editor.insertLinePrefix('- '),
            'ol': () => this.editor.insertLinePrefix('1. '),
            'hr': () => this.editor.insertMarkdown('\n---\n', '', ''),
            'table': () => this.editor.insertMarkdown('\n| 列1 | 列2 | 列3 |\n|------|------|------|\n| ', ' | 数据 | 数据 |\n', '数据'),
        };

        document.querySelectorAll('.quick-btn[data-action]').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                if (actions[action]) {
                    actions[action]();
                }
            });
        });
    }

    /**
     * 初始化拖拽调整分栏宽度
     */
    initResizeHandle() {
        const handle = document.querySelector('.resize-handle');
        const editorPane = document.querySelector('.pane-editor');
        const previewPane = document.querySelector('.pane-preview');
        const editorArea = document.querySelector('.editor-area');

        if (!handle) return;

        let isResizing = false;

        handle.addEventListener('mousedown', (e) => {
            isResizing = true;
            handle.classList.add('active');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            const rect = editorArea.getBoundingClientRect();
            const offset = e.clientX - rect.left;
            const totalWidth = rect.width;
            const percentage = (offset / totalWidth) * 100;

            if (percentage > 20 && percentage < 80) {
                editorPane.style.flex = `0 0 ${percentage}%`;
                previewPane.style.flex = `0 0 ${100 - percentage}%`;
            }
        });

        document.addEventListener('mouseup', () => {
            if (isResizing) {
                isResizing = false;
                handle.classList.remove('active');
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
            }
        });
    }

    /**
     * 绑定操作按钮
     */
    bindActions() {
        // 复制按钮
        this.copyBtn.addEventListener('click', () => {
            const styledHtml = this.renderer.getStyledHTML(this.editor.getValue());
            CopyManager.copyToClipboard(styledHtml);
        });

        // 同步滚动切换
        if (this.syncBtn) {
            this.syncBtn.addEventListener('click', () => {
                const enabled = this.syncScroll.toggle();
                this.syncBtn.classList.toggle('active', enabled);
                const icon = this.syncBtn.querySelector('.btn-icon');
                if (icon) icon.textContent = enabled ? '🔗' : '🔓';
                CopyManager.showToast(enabled ? '已开启同步滚动' : '已关闭同步滚动', 'success');
            });
        }

        // 自动保存
        let saveTimer;
        this.editorEl.addEventListener('input', () => {
            clearTimeout(saveTimer);
            saveTimer = setTimeout(() => {
                localStorage.setItem('wxmark-content', this.editorEl.value);
            }, 1000);
        });
    }

    /**
     * 渲染预览
     */
    renderPreview(markdown) {
        const html = this.renderer.render(markdown);
        this.previewEl.innerHTML = html;
    }
}

// 启动应用
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
