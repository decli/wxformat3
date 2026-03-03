/* ======================================================
   WxMark — Studio 主题自定义配置面板
   管理自定义主题的配色选择和预设方案切换
   ====================================================== */

class ThemeCustomizer {
    constructor(themeManager) {
        this.themeManager = themeManager;
        this.panel = null;
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createPanel();
        this.bindEvents();

        // 监听主题变化 — 控制设置按钮可见性
        this.themeManager.onChange((themeId) => {
            this.updateSettingsButtonVisibility(themeId);
        });
    }

    /**
     * 创建设置面板 DOM
     */
    createPanel() {
        // ---- 设置按钮（嵌入工具栏） ----
        this.settingsBtn = document.createElement('button');
        this.settingsBtn.className = 'btn btn-settings';
        this.settingsBtn.id = 'btn-customizer';
        this.settingsBtn.title = 'Studio 主题配色设置';
        this.settingsBtn.innerHTML = '<span class="btn-icon">⚙️</span><span class="btn-text">配色</span>';
        this.settingsBtn.style.display = this.themeManager.getThemeId() === 'custom' ? '' : 'none';

        // 插入到工具栏右侧，复制按钮之前
        const toolbarRight = document.querySelector('.toolbar-right');
        const copyBtn = document.getElementById('btn-copy');
        if (toolbarRight && copyBtn) {
            toolbarRight.insertBefore(this.settingsBtn, copyBtn);
        }

        // ---- 遮罩 ----
        this.overlay = document.createElement('div');
        this.overlay.className = 'customizer-overlay';
        this.overlay.id = 'customizer-overlay';

        // ---- 面板 ----
        this.panel = document.createElement('div');
        this.panel.className = 'customizer-panel';
        this.panel.id = 'customizer-panel';

        const config = this.themeManager.getCustomConfig();

        this.panel.innerHTML = `
      <div class="customizer-header">
        <h3 class="customizer-title">✦ Studio 配色工坊</h3>
        <button class="customizer-close" id="customizer-close">✕</button>
      </div>

      <div class="customizer-body">
        <!-- 预设方案 -->
        <div class="customizer-section">
          <label class="customizer-label">🎨 预设方案</label>
          <div class="preset-grid" id="preset-grid">
            ${Object.entries(STUDIO_PRESETS).map(([id, preset]) => `
              <button class="preset-btn" data-preset="${id}" title="${preset.name}">
                <span class="preset-swatch" style="background: linear-gradient(135deg, ${preset.primary}, ${preset.accent});"></span>
                <span class="preset-name">${preset.emoji} ${preset.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- 自定义颜色 -->
        <div class="customizer-section">
          <label class="customizer-label">🎯 自定义颜色</label>

          <div class="color-row">
            <div class="color-field">
              <span class="color-field-label">主色</span>
              <div class="color-input-wrap">
                <input type="color" id="color-primary" value="${config.primary}" class="color-input">
                <span class="color-hex" id="hex-primary">${config.primary}</span>
              </div>
            </div>
            <div class="color-field">
              <span class="color-field-label">辅助色</span>
              <div class="color-input-wrap">
                <input type="color" id="color-accent" value="${config.accent}" class="color-input">
                <span class="color-hex" id="hex-accent">${config.accent}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 渐变预览 -->
        <div class="customizer-section">
          <label class="customizer-label">👁️ 渐变预览</label>
          <div class="gradient-preview" id="gradient-preview" style="background: linear-gradient(135deg, ${config.primary}, ${config.accent});"></div>
        </div>

        <!-- 重置按钮 -->
        <div class="customizer-section customizer-actions">
          <button class="customizer-reset" id="customizer-reset">↺ 恢复默认</button>
        </div>
      </div>
    `;

        document.body.appendChild(this.overlay);
        document.body.appendChild(this.panel);
    }

    /**
     * 绑定事件
     */
    bindEvents() {
        // 打开面板
        this.settingsBtn.addEventListener('click', () => this.open());

        // 关闭面板
        document.getElementById('customizer-close').addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());

        // Escape 关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.close();
        });

        // 预设方案
        document.getElementById('preset-grid').addEventListener('click', (e) => {
            const btn = e.target.closest('.preset-btn');
            if (!btn) return;
            const presetId = btn.dataset.preset;
            const preset = STUDIO_PRESETS[presetId];
            if (preset) {
                this.applyColors(preset.primary, preset.accent);
            }
        });

        // 颜色选择器
        const primaryInput = document.getElementById('color-primary');
        const accentInput = document.getElementById('color-accent');

        primaryInput.addEventListener('input', () => {
            this.applyColors(primaryInput.value, accentInput.value);
        });

        accentInput.addEventListener('input', () => {
            this.applyColors(primaryInput.value, accentInput.value);
        });

        // 重置
        document.getElementById('customizer-reset').addEventListener('click', () => {
            this.applyColors(STUDIO_DEFAULT_CONFIG.primary, STUDIO_DEFAULT_CONFIG.accent);
        });
    }

    /**
     * 应用颜色配置
     */
    applyColors(primary, accent) {
        // 更新 UI
        document.getElementById('color-primary').value = primary;
        document.getElementById('color-accent').value = accent;
        document.getElementById('hex-primary').textContent = primary;
        document.getElementById('hex-accent').textContent = accent;
        document.getElementById('gradient-preview').style.background =
            `linear-gradient(135deg, ${primary}, ${accent})`;

        // 更新高亮的预设按钮
        document.querySelectorAll('.preset-btn').forEach(btn => {
            const preset = STUDIO_PRESETS[btn.dataset.preset];
            btn.classList.toggle('active', preset.primary === primary && preset.accent === accent);
        });

        // 保存并触发重新渲染
        this.themeManager.setCustomConfig({ primary, accent });
    }

    /**
     * 打开面板
     */
    open() {
        this.isOpen = true;
        this.panel.classList.add('open');
        this.overlay.classList.add('open');

        // 同步 UI 状态
        const config = this.themeManager.getCustomConfig();
        document.getElementById('color-primary').value = config.primary;
        document.getElementById('color-accent').value = config.accent;
        document.getElementById('hex-primary').textContent = config.primary;
        document.getElementById('hex-accent').textContent = config.accent;
        document.getElementById('gradient-preview').style.background =
            `linear-gradient(135deg, ${config.primary}, ${config.accent})`;

        // 高亮匹配的预设
        document.querySelectorAll('.preset-btn').forEach(btn => {
            const preset = STUDIO_PRESETS[btn.dataset.preset];
            btn.classList.toggle('active', preset.primary === config.primary && preset.accent === config.accent);
        });
    }

    /**
     * 关闭面板
     */
    close() {
        this.isOpen = false;
        this.panel.classList.remove('open');
        this.overlay.classList.remove('open');
    }

    /**
     * 控制设置按钮显示
     */
    updateSettingsButtonVisibility(themeId) {
        if (this.settingsBtn) {
            this.settingsBtn.style.display = themeId === 'custom' ? '' : 'none';
        }
        // 非 custom 主题时关闭面板
        if (themeId !== 'custom' && this.isOpen) {
            this.close();
        }
    }
}
