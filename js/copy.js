/* ======================================================
   WxMark — 复制模块
   一键复制带内联样式的 HTML 到剪贴板
   ====================================================== */

class CopyManager {
    /**
     * 复制渲染后的 HTML 到剪贴板
     * 同时写入 text/html 和 text/plain 两种格式
     */
    static async copyToClipboard(styledHtml) {
        try {
            // 使用现代 Clipboard API
            const blob = new Blob([styledHtml], { type: 'text/html' });
            const plainBlob = new Blob([styledHtml], { type: 'text/plain' });

            const item = new ClipboardItem({
                'text/html': blob,
                'text/plain': plainBlob
            });

            await navigator.clipboard.write([item]);
            CopyManager.showToast('✅ 复制成功！可直接粘贴到微信公众号', 'success');
            return true;
        } catch (err) {
            // 降级方案：使用 execCommand
            try {
                return CopyManager.fallbackCopy(styledHtml);
            } catch (fallbackErr) {
                CopyManager.showToast('❌ 复制失败，请手动选择内容复制', 'error');
                return false;
            }
        }
    }

    /**
     * 降级复制方案
     */
    static fallbackCopy(html) {
        const container = document.createElement('div');
        container.innerHTML = html;
        container.style.position = 'fixed';
        container.style.left = '-9999px';
        container.style.top = '0';
        container.style.opacity = '0';
        document.body.appendChild(container);

        const range = document.createRange();
        range.selectNodeContents(container);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        const success = document.execCommand('copy');
        selection.removeAllRanges();
        document.body.removeChild(container);

        if (success) {
            CopyManager.showToast('✅ 复制成功！可直接粘贴到微信公众号', 'success');
        } else {
            CopyManager.showToast('❌ 复制失败，请手动选择内容复制', 'error');
        }
        return success;
    }

    /**
     * 显示 Toast 提示
     */
    static showToast(message, type = 'success') {
        const container = document.querySelector('.toast-container') || CopyManager.createToastContainer();

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✅' : '❌'}</span>
      <span>${message}</span>
    `;

        container.appendChild(toast);

        // 3 秒后移除
        setTimeout(() => {
            toast.classList.add('leaving');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /**
     * 创建 Toast 容器
     */
    static createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    }
}
