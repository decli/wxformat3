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
      wrapper: 'color: #333333; font-size: 17px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      // 标题
      h1: 'font-size: 24px; font-weight: bold; color: #1a73e8; border-bottom: 2px solid #1a73e8; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 21px; font-weight: bold; color: #1a73e8; border-left: 4px solid #1a73e8; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 19px; font-weight: bold; color: #1565c0; background: rgba(26,115,232,0.1); padding: 7px 14px; border-radius: 6px; margin: 24px 0 12px 0; line-height: 1.4; display: block;',
      h4: 'font-size: 18px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      // 段落
      p: 'margin: 12px 0; color: #333333; font-size: 17px; line-height: 1.8;',
      // 强调
      strong: 'font-weight: bold; color: #1a73e8; background: rgba(26,115,232,0.08); padding: 2px 6px; border-radius: 4px;',
      em: 'font-style: italic; color: #555555;',
      del: 'text-decoration: line-through; color: #999999;',
      // 链接
      a: 'color: #1a73e8; text-decoration: none; border-bottom: 1px solid #1a73e8;',
      // 引用
      blockquote: 'border-left: 4px solid #1a73e8; background: #f0f7ff; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 16px; line-height: 1.75; border-radius: 0 6px 6px 0; font-style: italic;',
      // 列表
      ul: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 17px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 17px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #333333; font-size: 17px; line-height: 1.8;',
      // 行内代码
      codeInline: 'background: #f0f7ff; color: #1a73e8; padding: 2px 6px; border-radius: 3px; font-size: 15px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      // 代码块
      codeBlock: 'background: #282c34; color: #abb2bf; padding: 16px; border-radius: 6px; font-size: 15px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      // 图片
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      // 分割线
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #1a73e8, transparent); margin: 24px 0;',
      // 表格
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 16px;',
      th: 'background: #1a73e8; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #e8e8e8; color: #333333;',
      trEven: 'background: #f8fafd;',
      // 脚注样式
      sup: 'font-size: 14px; color: #1a73e8; vertical-align: super;',
    }
  },

  green: {
    name: '翠绿',
    emoji: '🌿',
    styles: {
      wrapper: 'color: #2d3436; font-size: 17px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 24px; font-weight: bold; color: #059669; border-bottom: 2px solid #059669; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 21px; font-weight: bold; color: #059669; border-left: 4px solid #059669; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 19px; font-weight: bold; color: #065f46; background: rgba(5,150,105,0.1); padding: 7px 14px; border-radius: 6px; margin: 24px 0 12px 0; line-height: 1.4; display: block;',
      h4: 'font-size: 18px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #2d3436; font-size: 17px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #059669; background: rgba(5,150,105,0.08); padding: 2px 6px; border-radius: 4px;',
      em: 'font-style: italic; color: #555555;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #059669; text-decoration: none; border-bottom: 1px solid #059669;',
      blockquote: 'border-left: 4px solid #34d399; background: #ecfdf5; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 16px; line-height: 1.75; border-radius: 0 6px 6px 0; font-style: italic;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #2d3436; font-size: 17px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #2d3436; font-size: 17px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #2d3436; font-size: 17px; line-height: 1.8;',
      codeInline: 'background: #ecfdf5; color: #059669; padding: 2px 6px; border-radius: 3px; font-size: 15px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #1a2332; color: #a3be8c; padding: 16px; border-radius: 6px; font-size: 15px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #059669, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 16px;',
      th: 'background: #059669; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #e8e8e8; color: #2d3436;',
      trEven: 'background: #f0fdf4;',
      sup: 'font-size: 14px; color: #059669; vertical-align: super;',
    }
  },

  pink: {
    name: '樱花粉',
    emoji: '🌸',
    styles: {
      wrapper: 'color: #333333; font-size: 17px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 24px; font-weight: bold; color: #db2777; border-bottom: 2px solid #f472b6; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 21px; font-weight: bold; color: #db2777; border-left: 4px solid #f472b6; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 19px; font-weight: bold; color: #9d174d; background: rgba(219,39,119,0.1); padding: 7px 14px; border-radius: 6px; margin: 24px 0 12px 0; line-height: 1.4; display: block;',
      h4: 'font-size: 18px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #333333; font-size: 17px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #db2777; background: rgba(219,39,119,0.08); padding: 2px 6px; border-radius: 4px;',
      em: 'font-style: italic; color: #777777;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #db2777; text-decoration: none; border-bottom: 1px solid #f472b6;',
      blockquote: 'border-left: 4px solid #f472b6; background: #fdf2f8; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 16px; line-height: 1.75; border-radius: 0 6px 6px 0; font-style: italic;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 17px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 17px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #333333; font-size: 17px; line-height: 1.8;',
      codeInline: 'background: #fdf2f8; color: #db2777; padding: 2px 6px; border-radius: 3px; font-size: 15px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #2d2030; color: #f8a4c8; padding: 16px; border-radius: 6px; font-size: 15px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #f472b6, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 16px;',
      th: 'background: #db2777; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #f0e0e8; color: #333333;',
      trEven: 'background: #fdf2f8;',
      sup: 'font-size: 14px; color: #db2777; vertical-align: super;',
    }
  },

  purple: {
    name: '暗夜紫',
    emoji: '🌙',
    styles: {
      wrapper: 'color: #333333; font-size: 17px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 24px; font-weight: bold; color: #7c3aed; border-bottom: 2px solid #a78bfa; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 21px; font-weight: bold; color: #7c3aed; border-left: 4px solid #a78bfa; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 19px; font-weight: bold; color: #4c1d95; background: rgba(124,58,237,0.1); padding: 7px 14px; border-radius: 6px; margin: 24px 0 12px 0; line-height: 1.4; display: block;',
      h4: 'font-size: 18px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #333333; font-size: 17px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #7c3aed; background: rgba(124,58,237,0.08); padding: 2px 6px; border-radius: 4px;',
      em: 'font-style: italic; color: #777777;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #7c3aed; text-decoration: none; border-bottom: 1px solid #a78bfa;',
      blockquote: 'border-left: 4px solid #a78bfa; background: #f5f3ff; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 16px; line-height: 1.75; border-radius: 0 6px 6px 0; font-style: italic;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 17px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 17px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #333333; font-size: 17px; line-height: 1.8;',
      codeInline: 'background: #f5f3ff; color: #7c3aed; padding: 2px 6px; border-radius: 3px; font-size: 15px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #1e1b2e; color: #c4b5fd; padding: 16px; border-radius: 6px; font-size: 15px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #a78bfa, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 16px;',
      th: 'background: #7c3aed; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #e8e0f0; color: #333333;',
      trEven: 'background: #faf5ff;',
      sup: 'font-size: 14px; color: #7c3aed; vertical-align: super;',
    }
  },

  orange: {
    name: '橙暖',
    emoji: '🔥',
    styles: {
      wrapper: 'color: #333333; font-size: 17px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 24px; font-weight: bold; color: #ea580c; border-bottom: 2px solid #fb923c; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 21px; font-weight: bold; color: #ea580c; border-left: 4px solid #fb923c; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 19px; font-weight: bold; color: #9a3412; background: rgba(234,88,12,0.1); padding: 7px 14px; border-radius: 6px; margin: 24px 0 12px 0; line-height: 1.4; display: block;',
      h4: 'font-size: 18px; font-weight: bold; color: #555555; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #333333; font-size: 17px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #ea580c; background: rgba(234,88,12,0.08); padding: 2px 6px; border-radius: 4px;',
      em: 'font-style: italic; color: #777777;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #ea580c; text-decoration: none; border-bottom: 1px solid #fb923c;',
      blockquote: 'border-left: 4px solid #fb923c; background: #fff7ed; padding: 12px 16px; margin: 16px 0; color: #555555; font-size: 16px; line-height: 1.75; border-radius: 0 6px 6px 0; font-style: italic;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 17px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #333333; font-size: 17px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #333333; font-size: 17px; line-height: 1.8;',
      codeInline: 'background: #fff7ed; color: #ea580c; padding: 2px 6px; border-radius: 3px; font-size: 15px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #2c1e10; color: #fbbf6a; padding: 16px; border-radius: 6px; font-size: 15px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #fb923c, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 16px;',
      th: 'background: #ea580c; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #f0e0d0; color: #333333;',
      trEven: 'background: #fffbf5;',
      sup: 'font-size: 14px; color: #ea580c; vertical-align: super;',
    }
  },

  brown: {
    name: '咖啡棕',
    emoji: '☕',
    styles: {
      wrapper: 'color: #3c3028; font-size: 17px; line-height: 1.8; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',
      h1: 'font-size: 24px; font-weight: bold; color: #78604c; border-bottom: 2px solid #a8896c; padding-bottom: 8px; margin: 30px 0 15px 0; line-height: 1.4;',
      h2: 'font-size: 21px; font-weight: bold; color: #78604c; border-left: 4px solid #a8896c; padding-left: 12px; margin: 28px 0 14px 0; line-height: 1.4;',
      h3: 'font-size: 19px; font-weight: bold; color: #4a3728; background: rgba(120,96,76,0.12); padding: 7px 14px; border-radius: 6px; margin: 24px 0 12px 0; line-height: 1.4; display: block;',
      h4: 'font-size: 18px; font-weight: bold; color: #5a4a3c; margin: 20px 0 10px 0; line-height: 1.4;',
      p: 'margin: 12px 0; color: #3c3028; font-size: 17px; line-height: 1.8;',
      strong: 'font-weight: bold; color: #78604c; background: rgba(120,96,76,0.08); padding: 2px 6px; border-radius: 4px;',
      em: 'font-style: italic; color: #777777;',
      del: 'text-decoration: line-through; color: #999999;',
      a: 'color: #78604c; text-decoration: none; border-bottom: 1px solid #a8896c;',
      blockquote: 'border-left: 4px solid #a8896c; background: #faf6f1; padding: 12px 16px; margin: 16px 0; color: #5a4a3c; font-size: 16px; line-height: 1.75; border-radius: 0 6px 6px 0; font-style: italic;',
      ul: 'margin: 12px 0; padding-left: 28px; color: #3c3028; font-size: 17px; line-height: 1.8;',
      ol: 'margin: 12px 0; padding-left: 28px; color: #3c3028; font-size: 17px; line-height: 1.8;',
      li: 'margin: 4px 0; color: #3c3028; font-size: 17px; line-height: 1.8;',
      codeInline: 'background: #faf6f1; color: #78604c; padding: 2px 6px; border-radius: 3px; font-size: 15px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace;',
      codeBlock: 'background: #2a2420; color: #d4b896; padding: 16px; border-radius: 6px; font-size: 15px; line-height: 1.6; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 16px 0; white-space: pre-wrap; word-wrap: break-word;',
      img: 'max-width: 100%; height: auto; border-radius: 6px; margin: 12px 0; display: block;',
      hr: 'border: none; height: 1px; background: linear-gradient(to right, transparent, #a8896c, transparent); margin: 24px 0;',
      table: 'width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 16px;',
      th: 'background: #78604c; color: #ffffff; padding: 10px 14px; text-align: left; font-weight: 600;',
      td: 'padding: 10px 14px; border-bottom: 1px solid #e8e0d8; color: #3c3028;',
      trEven: 'background: #faf6f1;',
      sup: 'font-size: 14px; color: #78604c; vertical-align: super;',
    }
  },

  /* ============================================================
     Studio ✦ — 自定义可配置主题
     独特视觉语言：居中标题、渐变色块、胶囊代码、玻璃态引用
     ============================================================ */
  custom: {
    name: 'Studio ✦',
    emoji: '✦',
    isCustom: true,
    styles: null  // 动态生成，见 ThemeManager.getTheme()
  }
};

/**
 * Studio 主题样式生成器
 * 接受主色 (primary) 和辅助色 (accent) 动态生成完整的内联样式
 */
function generateStudioStyles(primary, accent) {
  // 从 hex 提取 RGB 用于半透明处理
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  // 生成浅色背景 (10% 透明度)
  const primaryRgb = hexToRgb(primary);
  const accentRgb = hexToRgb(accent);

  // 根据主色生成深色代码块背景
  const r = parseInt(primary.slice(1, 3), 16);
  const g = parseInt(primary.slice(3, 5), 16);
  const b = parseInt(primary.slice(5, 7), 16);
  const codeBlockBg = `#${Math.floor(r * 0.12).toString(16).padStart(2, '0')}${Math.floor(g * 0.12).toString(16).padStart(2, '0')}${Math.floor(b * 0.15).toString(16).padStart(2, '0')}`;

  return {
    // 全局容器
    wrapper: 'color: #2c3e50; font-size: 17px; line-height: 1.9; word-break: break-word; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;',

    // ★ H1: 居中 + 渐变背景色块 + 大圆角
    h1: `font-size: 24px; font-weight: 800; color: #ffffff; text-align: center; background: linear-gradient(135deg, ${primary}, ${accent}); padding: 14px 24px; border-radius: 12px; margin: 32px 0 18px 0; line-height: 1.5; letter-spacing: 1px; box-shadow: 0 4px 15px rgba(${primaryRgb}, 0.3);`,

    // ★ H2: 居中 + 渐变底部装饰线
    h2: `font-size: 21px; font-weight: 700; color: ${primary}; text-align: center; margin: 28px 0 14px 0; line-height: 1.4; padding-bottom: 10px; border-bottom: 3px solid transparent; background-image: linear-gradient(#fff, #fff), linear-gradient(90deg, ${primary}, ${accent}); background-origin: padding-box, border-box; background-clip: padding-box, border-box; border-bottom: 3px solid ${primary}; background: none; border-bottom: 3px solid transparent; border-image: linear-gradient(90deg, ${primary}, ${accent}) 1;`,

    // ★ H3: 渐变背景色章节标签（区分于引用的左边框风格）
    h3: `font-size: 19px; font-weight: 700; color: ${primary}; background: linear-gradient(135deg, rgba(${primaryRgb}, 0.12), rgba(${accentRgb}, 0.06)); padding: 8px 16px; border-radius: 8px; margin: 24px 0 12px 0; line-height: 1.4; display: block;`,

    // H4
    h4: `font-size: 18px; font-weight: 600; color: ${primary}; margin: 20px 0 10px 0; line-height: 1.4; font-style: italic;`,

    // 段落
    p: 'margin: 14px 0; color: #2c3e50; font-size: 17px; line-height: 1.9;',

    // ★ 加粗: 带背景色块 + 圆角
    strong: `font-weight: 800; color: ${primary}; background: rgba(${primaryRgb}, 0.1); padding: 2px 6px; border-radius: 4px;`,

    // ★ 斜体: 带底部虚线装饰
    em: `font-style: italic; color: ${accent}; border-bottom: 1px dashed ${accent}; padding-bottom: 1px;`,

    // 删除线
    del: 'text-decoration: line-through; color: #adb5bd;',

    // ★ 链接: 渐变色 + 装饰下划线
    a: `color: ${primary}; text-decoration: none; border-bottom: 2px solid rgba(${accentRgb}, 0.4); font-weight: 500;`,

    // ★ 引用: 大圆角 + 渐变左边框 + 半透明背景（玻璃态）+ 斜体强化区分
    blockquote: `border-left: 5px solid ${primary}; background: linear-gradient(135deg, rgba(${primaryRgb}, 0.05), rgba(${accentRgb}, 0.03)); padding: 16px 20px; margin: 18px 0; color: #555; font-size: 16px; line-height: 1.8; border-radius: 0 12px 12px 0; box-shadow: 0 2px 12px rgba(${primaryRgb}, 0.08); font-style: italic;`,

    // 列表
    ul: 'margin: 14px 0; padding-left: 28px; color: #2c3e50; font-size: 17px; line-height: 1.9;',
    ol: 'margin: 14px 0; padding-left: 28px; color: #2c3e50; font-size: 17px; line-height: 1.9;',
    li: 'margin: 5px 0; color: #2c3e50; font-size: 17px; line-height: 1.9;',

    // ★ 行内代码: 胶囊 pill 形状 + 渐变边框
    codeInline: `background: rgba(${primaryRgb}, 0.08); color: ${primary}; padding: 3px 10px; border-radius: 20px; font-size: 15px; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; border: 1px solid rgba(${primaryRgb}, 0.2);`,

    // 代码块
    codeBlock: `background: ${codeBlockBg}; color: #c9d1d9; padding: 18px; border-radius: 12px; font-size: 15px; line-height: 1.65; font-family: "JetBrains Mono", Menlo, Monaco, Consolas, monospace; overflow-x: auto; margin: 18px 0; white-space: pre-wrap; word-wrap: break-word; box-shadow: inset 0 2px 10px rgba(0,0,0,0.3);`,

    // 图片
    img: `max-width: 100%; height: auto; border-radius: 12px; margin: 16px 0; display: block; box-shadow: 0 4px 20px rgba(${primaryRgb}, 0.15);`,

    // ★ 分割线: 三点装饰 (使用背景渐变模拟)
    hr: `border: none; height: 20px; background: none; margin: 28px auto; max-width: 200px; text-align: center; background-image: radial-gradient(circle, ${primary} 3px, transparent 3px), radial-gradient(circle, ${accent} 3px, transparent 3px), radial-gradient(circle, ${primary} 3px, transparent 3px); background-size: 8px 8px; background-position: center left, center, center right; background-repeat: no-repeat;`,

    // ★ 表格: 渐变头部 + 大圆角
    table: `width: 100%; border-collapse: separate; border-spacing: 0; margin: 18px 0; font-size: 16px; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 12px rgba(${primaryRgb}, 0.1);`,
    th: `background: linear-gradient(135deg, ${primary}, ${accent}); color: #ffffff; padding: 12px 16px; text-align: left; font-weight: 600; letter-spacing: 0.5px;`,
    td: `padding: 11px 16px; border-bottom: 1px solid rgba(${primaryRgb}, 0.1); color: #2c3e50;`,
    trEven: `background: rgba(${primaryRgb}, 0.04);`,

    // 脚注
    sup: `font-size: 14px; color: ${accent}; vertical-align: super; font-weight: 600;`,
  };
}

/**
 * Studio 主题预设配色方案
 */
const STUDIO_PRESETS = {
  aurora: { name: '极光', primary: '#6366f1', accent: '#06b6d4', emoji: '🌌' },
  sunset: { name: '落霞', primary: '#e11d48', accent: '#f97316', emoji: '🌅' },
  forest: { name: '密林', primary: '#059669', accent: '#84cc16', emoji: '🌲' },
  lavender: { name: '薰衣草', primary: '#8b5cf6', accent: '#ec4899', emoji: '💜' },
  ocean: { name: '深海', primary: '#0369a1', accent: '#22d3ee', emoji: '🌊' },
};

const STUDIO_DEFAULT_CONFIG = { primary: '#e11d48', accent: '#f97316' };

/**
 * 主题管理器
 */
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('wxmark-theme') || 'custom';
    this.listeners = [];
    this.customConfig = this._loadCustomConfig();
  }

  /**
   * 加载自定义主题配色
   */
  _loadCustomConfig() {
    try {
      const saved = localStorage.getItem('wxmark-custom-config');
      if (saved) return JSON.parse(saved);
    } catch (e) { /* ignore */ }
    return { ...STUDIO_DEFAULT_CONFIG };
  }

  /**
   * 保存自定义主题配色
   */
  _saveCustomConfig() {
    localStorage.setItem('wxmark-custom-config', JSON.stringify(this.customConfig));
  }

  /**
   * 获取当前主题
   */
  getTheme() {
    if (this.currentTheme === 'custom') {
      return {
        name: 'Studio ✦',
        emoji: '✦',
        isCustom: true,
        styles: generateStudioStyles(this.customConfig.primary, this.customConfig.accent)
      };
    }
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
   * 获取自定义配色
   */
  getCustomConfig() {
    return { ...this.customConfig };
  }

  /**
   * 设置自定义配色
   */
  setCustomConfig(config) {
    this.customConfig = { ...this.customConfig, ...config };
    this._saveCustomConfig();
    if (this.currentTheme === 'custom') {
      this.notify();
    }
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
