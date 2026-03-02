/* ======================================================
   WxMark — 主题管理模块
   定义 6 套微信排版主题的内联样式映射
   ====================================================== */

const THEMES = {
  default: {
    name: '默认蓝',
    emoji: '🌊',
    styles: {
      // 全局容器
      wrapper: 'color: #333333; font-size: 15px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      // 标题
      h1: 'font-size: 22px; font-weight: bold; color: #1a73e8; border-bottom: 2px solid #1a73e8; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 19px; font-weight: bold; color: #1a73e8; border-left: 4px solid #1a73e8; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 17px; font-weight: bold; color: #333333; margin: 24px 0 12px 0; line-height: 1.4;',
      h4: 'font-size: 16px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      // 段落
      p: 'margin: 12px 0; color: #333333; font-size: 15px; line-height: 1.8;',
      // 强调
      strong: 'font-weight: bold; color: #1a73e8;',
      em: 'font-style: italic; color: #555555;',
      del: 'text-decoration: line-through; color: #999999;',
      // 链接
      a: 'color: #1a73e8; text-decoration: none; border-bottom: 1px solid #1a73e8;',
      // 引用
      blockquote: 'border-left: 4px solid #1a73e8; background: #f0f7ff; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 14px; line-height: 1.75; border-radius: 0 4px 4px 0;',
      // 列表
      ul: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 15px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 15px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #333333; font-size: 15px; line-height: 1.8;',
      // 行内代码
      codeInline: 'background: #f0f7ff; color: #1a73e8; padding: 2px 6px; border-radius: 3px; font-size: 13px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      // 代码块
      codeBlock: 'background: #282c34; color: #abb2bf; padding: 16px; border-radius: 6px; font-size: 13px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      // 图片
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      // 分割线
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #1a73e8, transparent); margin: 24px 0;',
      // 表格
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;',
      th: 'background: #1a73e8; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #e8e8e8; color: #333333;',
      trEven: 'background: #f8fafd;',
      // 脚注样式
      sup: 'font-size: 12px; color: #1a73e8; vertical-align: super;',
    }
  },

  green: {
    name: '翠绿',
    emoji: '🌿',
    styles: {
      wrapper: 'color: #2d3436; font-size: 15px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 22px; font-weight: bold; color: #059669; border-bottom: 2px solid #059669; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 19px; font-weight: bold; color: #059669; border-left: 4px solid #059669; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 17px; font-weight: bold; color: #2d3436; margin: 24px 0 12px 0; line-height: 1.4;',
      h4: 'font-size: 16px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #2d3436; font-size: 15px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #059669;',
      em: 'font-style: italic; color: #555555;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #059669; text-decoration: none; border-bottom: 1px solid #059669;',
      blockquote: 'border-left: 4px solid #34d399; background: #ecfdf5; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 14px; line-height: 1.75; border-radius: 0 4px 4px 0;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #2d3436; font-size: 15px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #2d3436; font-size: 15px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #2d3436; font-size: 15px; line-height: 1.8;',
      codeInline: 'background: #ecfdf5; color: #059669; padding: 2px 6px; border-radius: 3px; font-size: 13px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #1a2332; color: #a3be8c; padding: 16px; border-radius: 6px; font-size: 13px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #059669, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;',
      th: 'background: #059669; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #e8e8e8; color: #2d3436;',
      trEven: 'background: #f0fdf4;',
      sup: 'font-size: 12px; color: #059669; vertical-align: super;',
    }
  },

  pink: {
    name: '樱花粉',
    emoji: '🌸',
    styles: {
      wrapper: 'color: #333333; font-size: 15px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 22px; font-weight: bold; color: #db2777; border-bottom: 2px solid #f472b6; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 19px; font-weight: bold; color: #db2777; border-left: 4px solid #f472b6; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 17px; font-weight: bold; color: #333333; margin: 24px 0 12px 0; line-height: 1.4;',
      h4: 'font-size: 16px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #333333; font-size: 15px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #db2777;',
      em: 'font-style: italic; color: #777777;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #db2777; text-decoration: none; border-bottom: 1px solid #f472b6;',
      blockquote: 'border-left: 4px solid #f472b6; background: #fdf2f8; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 14px; line-height: 1.75; border-radius: 0 4px 4px 0;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 15px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 15px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #333333; font-size: 15px; line-height: 1.8;',
      codeInline: 'background: #fdf2f8; color: #db2777; padding: 2px 6px; border-radius: 3px; font-size: 13px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #2d2030; color: #f8a4c8; padding: 16px; border-radius: 6px; font-size: 13px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #f472b6, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;',
      th: 'background: #db2777; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #f0e0e8; color: #333333;',
      trEven: 'background: #fdf2f8;',
      sup: 'font-size: 12px; color: #db2777; vertical-align: super;',
    }
  },

  purple: {
    name: '暗夜紫',
    emoji: '🌙',
    styles: {
      wrapper: 'color: #333333; font-size: 15px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 22px; font-weight: bold; color: #7c3aed; border-bottom: 2px solid #a78bfa; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 19px; font-weight: bold; color: #7c3aed; border-left: 4px solid #a78bfa; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 17px; font-weight: bold; color: #333333; margin: 24px 0 12px 0; line-height: 1.4;',
      h4: 'font-size: 16px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #333333; font-size: 15px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #7c3aed;',
      em: 'font-style: italic; color: #777777;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #7c3aed; text-decoration: none; border-bottom: 1px solid #a78bfa;',
      blockquote: 'border-left: 4px solid #a78bfa; background: #f5f3ff; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 14px; line-height: 1.75; border-radius: 0 4px 4px 0;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 15px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 15px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #333333; font-size: 15px; line-height: 1.8;',
      codeInline: 'background: #f5f3ff; color: #7c3aed; padding: 2px 6px; border-radius: 3px; font-size: 13px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #1e1b2e; color: #c4b5fd; padding: 16px; border-radius: 6px; font-size: 13px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #a78bfa, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;',
      th: 'background: #7c3aed; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #e8e0f0; color: #333333;',
      trEven: 'background: #faf5ff;',
      sup: 'font-size: 12px; color: #7c3aed; vertical-align: super;',
    }
  },

  orange: {
    name: '橙暖',
    emoji: '🔥',
    styles: {
      wrapper: 'color: #333333; font-size: 15px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 22px; font-weight: bold; color: #ea580c; border-bottom: 2px solid #fb923c; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 19px; font-weight: bold; color: #ea580c; border-left: 4px solid #fb923c; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 17px; font-weight: bold; color: #333333; margin: 24px 0 12px 0; line-height: 1.4;',
      h4: 'font-size: 16px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #333333; font-size: 15px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #ea580c;',
      em: 'font-style: italic; color: #777777;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #ea580c; text-decoration: none; border-bottom: 1px solid #fb923c;',
      blockquote: 'border-left: 4px solid #fb923c; background: #fff7ed; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 14px; line-height: 1.75; border-radius: 0 4px 4px 0;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 15px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 15px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #333333; font-size: 15px; line-height: 1.8;',
      codeInline: 'background: #fff7ed; color: #ea580c; padding: 2px 6px; border-radius: 3px; font-size: 13px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #2c1e10; color: #fbbf6a; padding: 16px; border-radius: 6px; font-size: 13px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #fb923c, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;',
      th: 'background: #ea580c; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #f0e0d0; color: #333333;',
      trEven: 'background: #fffbf5;',
      sup: 'font-size: 12px; color: #ea580c; vertical-align: super;',
    }
  },

  brown: {
    name: '咖啡棕',
    emoji: '☕',
    styles: {
      wrapper: 'color: #3c3028; font-size: 15px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 22px; font-weight: bold; color: #78604c; border-bottom: 2px solid #a8896c; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 19px; font-weight: bold; color: #78604c; border-left: 4px solid #a8896c; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 17px; font-weight: bold; color: #3c3028; margin: 24px 0 12px 0; line-height: 1.4;',
      h4: 'font-size: 16px; font-weight: bold; color: #5a4a3c; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #3c3028; font-size: 15px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #78604c;',
      em: 'font-style: italic; color: #777777;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #78604c; text-decoration: none; border-bottom: 1px solid #a8896c;',
      blockquote: 'border-left: 4px solid #a8896c; background: #faf6f1; padding: 12px 16px; margin: 16px 0; color: #5a4a3c; font-size: 14px; line-height: 1.75; border-radius: 0 4px 4px 0;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #3c3028; font-size: 15px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #3c3028; font-size: 15px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #3c3028; font-size: 15px; line-height: 1.8;',
      codeInline: 'background: #faf6f1; color: #78604c; padding: 2px 6px; border-radius: 3px; font-size: 13px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #2a2420; color: #d4b896; padding: 16px; border-radius: 6px; font-size: 13px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #a8896c, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;',
      th: 'background: #78604c; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #e8e0d8; color: #3c3028;',
      trEven: 'background: #faf6f1;',
      sup: 'font-size: 12px; color: #78604c; vertical-align: super;',
    }
  }
};

/**
 * 主题管理器
 */
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('wxmark-theme') || 'default';
    this.listeners = [];
  }

  /**
   * 获取当前主题
   */
  getTheme() {
    return THEMES[this.currentTheme];
  }

  /**
   * 获取当前主题 ID
   */
  getThemeId() {
    return this.currentTheme;
  }

  /**
   * 获取所有主题
   */
  getAllThemes() {
    return THEMES;
  }

  /**
   * 切换主题
   */
  setTheme(themeId) {
    if (!THEMES[themeId]) return;
    this.currentTheme = themeId;
    localStorage.setItem('wxmark-theme', themeId);
    this.notify();
  }

  /**
   * 监听主题变化
   */
  onChange(callback) {
    this.listeners.push(callback);
  }

  /**
   * 通知所有监听者
   */
  notify() {
    this.listeners.forEach(cb => cb(this.currentTheme, this.getTheme()));
  }
}
