/* ======================================================
   WxMark — 编辑器逻辑
   增强 textarea 编辑体验
   ====================================================== */

class Editor {
    constructor(textarea, onInput) {
        this.textarea = textarea;
        this.onInput = onInput;
        this.debounceTimer = null;
        this.init();
    }

    init() {
        // 监听输入事件（防抖）
        this.textarea.addEventListener('input', () => {
            this.debouncedInput();
            this.updateStats();
        });

        // Tab 键支持
        this.textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                this.insertTab(e.shiftKey);
            }
        });

        // 初始统计
        this.updateStats();
    }

    /**
     * 防抖输入
     */
    debouncedInput() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.onInput(this.textarea.value);
        }, 80);
    }

    /**
     * Tab 缩进/反缩进
     */
    insertTab(reverse) {
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        const value = this.textarea.value;

        if (reverse) {
            // Shift+Tab: 移除缩进
            const beforeCursor = value.substring(0, start);
            const lastNewline = beforeCursor.lastIndexOf('\n');
            const lineStart = lastNewline + 1;
            const linePrefix = value.substring(lineStart, lineStart + 2);

            if (linePrefix === '  ') {
                this.textarea.value = value.substring(0, lineStart) + value.substring(lineStart + 2);
                this.textarea.selectionStart = this.textarea.selectionEnd = start - 2;
            }
        } else {
            // Tab: 插入两个空格
            this.textarea.value = value.substring(0, start) + '  ' + value.substring(end);
            this.textarea.selectionStart = this.textarea.selectionEnd = start + 2;
        }

        this.debouncedInput();
    }

    /**
     * 插入 Markdown 语法
     */
    insertMarkdown(prefix, suffix = '', placeholder = '') {
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        const value = this.textarea.value;
        const selectedText = value.substring(start, end) || placeholder;

        const insertion = prefix + selectedText + suffix;
        this.textarea.value = value.substring(0, start) + insertion + value.substring(end);

        // 定位光标到选中文本
        const cursorPos = start + prefix.length;
        this.textarea.selectionStart = cursorPos;
        this.textarea.selectionEnd = cursorPos + selectedText.length;
        this.textarea.focus();

        this.debouncedInput();
    }

    /**
     * 在行首插入语法
     */
    insertLinePrefix(prefix) {
        const start = this.textarea.selectionStart;
        const value = this.textarea.value;
        const beforeCursor = value.substring(0, start);
        const lastNewline = beforeCursor.lastIndexOf('\n');
        const lineStart = lastNewline + 1;

        this.textarea.value = value.substring(0, lineStart) + prefix + value.substring(lineStart);
        this.textarea.selectionStart = this.textarea.selectionEnd = start + prefix.length;
        this.textarea.focus();

        this.debouncedInput();
    }

    /**
     * 获取文本统计
     */
    updateStats() {
        const value = this.textarea.value;
        const charCount = value.length;
        const lineCount = value.split('\n').length;

        const charEl = document.getElementById('char-count');
        const lineEl = document.getElementById('line-count');
        if (charEl) charEl.textContent = `${charCount} 字符`;
        if (lineEl) lineEl.textContent = `${lineCount} 行`;
    }

    /**
     * 获取编辑器内容
     */
    getValue() {
        return this.textarea.value;
    }

    /**
     * 设置编辑器内容
     */
    setValue(text) {
        this.textarea.value = text;
        this.onInput(text);
        this.updateStats();
    }
}
