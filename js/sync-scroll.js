/* ======================================================
   WxMark — 同步滚动模块
   编辑器与预览区按比例同步滚动
   ====================================================== */

class SyncScroll {
    constructor(editorEl, previewEl) {
        this.editor = editorEl;
        this.preview = previewEl;
        this.isSyncing = false;
        this.enabled = true;
        this.init();
    }

    init() {
        this.editor.addEventListener('scroll', () => {
            if (!this.enabled) return;
            this.syncPreview();
        });

        this.preview.addEventListener('scroll', () => {
            if (!this.enabled) return;
            this.syncEditor();
        });
    }

    /**
     * 编辑器滚动 → 同步到预览区
     */
    syncPreview() {
        if (this.isSyncing) return;
        this.isSyncing = true;

        const percentage = this.editor.scrollTop / (this.editor.scrollHeight - this.editor.clientHeight || 1);
        const targetScroll = percentage * (this.preview.scrollHeight - this.preview.clientHeight);

        this.preview.scrollTop = targetScroll;

        requestAnimationFrame(() => {
            this.isSyncing = false;
        });
    }

    /**
     * 预览区滚动 → 同步到编辑器
     */
    syncEditor() {
        if (this.isSyncing) return;
        this.isSyncing = true;

        const percentage = this.preview.scrollTop / (this.preview.scrollHeight - this.preview.clientHeight || 1);
        const targetScroll = percentage * (this.editor.scrollHeight - this.editor.clientHeight);

        this.editor.scrollTop = targetScroll;

        requestAnimationFrame(() => {
            this.isSyncing = false;
        });
    }

    /**
     * 启用/禁用同步滚动
     */
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}
