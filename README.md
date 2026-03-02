<div align="center">

# ✨ WxMark

**微信公众号 Markdown 排版工具**

一款专为微信公众号设计的 Markdown 在线排版工具，多主题切换、实时预览、一键复制，让你的公众号文章更精美。

[在线体验](https://decli.github.io/wxformat3) · [问题反馈](https://github.com/decli/wxformat3/issues)

</div>

---

## 🎯 功能特性

- 🎨 **6 套精美主题** — 默认蓝 / 翠绿 / 樱花粉 / 暗夜紫 / 橙暖 / 咖啡棕，一键切换
- 📝 **实时预览** — 左侧 Markdown 编辑，右侧即时渲染预览
- 🔄 **同步滚动** — 编辑区与预览区按比例同步联动
- 📋 **一键复制** — 生成带内联样式的 HTML，直接粘贴到微信公众号后台
- ⌨️ **快捷工具栏** — 标题、加粗、斜体、引用、代码、表格等常用语法一键插入
- 💾 **自动保存** — 内容和主题选择自动持久化到 localStorage
- 📱 **响应式布局** — 支持桌面和移动端
- 🖱️ **可拖拽分栏** — 自由调整编辑区与预览区宽度比例

## 🚀 快速开始

### 在线使用

访问 [https://decli.github.io/wxformat3](https://decli.github.io/wxformat3) 即可直接使用。

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/decli/wxformat3.git
cd wxformat3

# 使用任意静态服务器启动，例如：
npx http-server . -p 8080

# 或者直接用浏览器打开 index.html
```

> 纯静态站点，无需安装依赖，无需构建步骤。

## 📁 项目结构

```
├── index.html          # 主页面
├── css/
│   ├── style.css       # 布局、工具栏、动画、响应式
│   └── themes.css      # 主题按钮色彩
├── js/
│   ├── app.js          # 应用入口、事件绑定
│   ├── editor.js       # 编辑器增强（Tab、语法插入）
│   ├── renderer.js     # Markdown 渲染 + 内联样式转换
│   ├── themes.js       # 6 套主题的完整样式定义
│   ├── sync-scroll.js  # 同步滚动
│   └── copy.js         # 一键复制到剪贴板
└── favicon.svg         # 站点图标
```

## 🎨 主题预览

| 主题 | 风格 | 适用场景 |
|------|------|----------|
| 🌊 默认蓝 | 清爽蓝色调 | 科技 / 技术文章 |
| 🌿 翠绿 | 清新绿色调 | 自然 / 生活文章 |
| 🌸 樱花粉 | 温馨粉色调 | 情感 / 生活类 |
| 🌙 暗夜紫 | 深邃紫色调 | 品牌 / 高端感 |
| 🔥 橙暖 | 活力橙色调 | 营销 / 运营类 |
| ☕ 咖啡棕 | 沉稳棕色调 | 商务 / 严肃内容 |

## 🔧 技术方案

- **Markdown 解析**：[marked.js](https://github.com/markedjs/marked)
- **代码高亮**：[highlight.js](https://highlightjs.org/)
- **微信兼容**：渲染时将所有 CSS 转为内联样式（`style="..."`），确保粘贴到微信公众号后样式不丢失
- **部署**：纯静态文件，支持 GitHub Pages / Cloudflare Pages / Vercel 等任意静态托管

## 📦 部署

### GitHub Pages

仓库 Settings → Pages → Deploy from branch: `main`

### Cloudflare Pages

1. 连接 GitHub 仓库
2. Build command 留空
3. Output directory: `/`

## 📄 License

MIT License © 2026
