# Astronaut 3D Dynamic Site

一个由 Codex 生成的电影感太空旅行落地页。项目包含全屏动态视频背景、液态玻璃 UI、逐词模糊入场标题动画，以及 Framer Motion 动效。

在线仓库：

https://github.com/Zhaohls/astronaut-3d-dynamic-site

## 项目效果

- 两个满屏页面：Hero 首屏和 Capabilities 能力展示区
- 循环背景视频，使用 JavaScript 和 `requestAnimationFrame` 实现淡入淡出
- 液态玻璃风格导航、标签、按钮、数据卡片和能力卡片
- React 组件化结构
- Tailwind CSS CDN 配置
- Framer Motion 入场动画
- 支持桌面和移动端响应式布局

## 如何使用

先克隆项目：

```bash
git clone https://github.com/Zhaohls/astronaut-3d-dynamic-site.git
cd astronaut-3d-dynamic-site
```

安装依赖：

```bash
npm install
```

启动本地开发服务：

```bash
npm run dev
```

终端会输出一个本地访问地址，通常类似：

```text
http://localhost:5173/
```

用浏览器打开这个地址即可预览。

## 构建生产版本

```bash
npm run build
```

构建后的文件会输出到：

```text
dist/
```

本地预览生产版本：

```bash
npm run preview
```

## 文件结构

```text
.
├── index.html
├── public/
│   └── components/
│       ├── App.jsx
│       ├── BlurText.jsx
│       ├── Capabilities.jsx
│       ├── FadingVideo.jsx
│       ├── Hero.jsx
│       ├── Navbar.jsx
│       └── icons.jsx
├── package.json
├── README.md
└── LICENSE
```

## 修改文字

主要文案在这些文件里：

- `public/components/Hero.jsx`
- `public/components/Capabilities.jsx`
- `public/components/Navbar.jsx`

例如首页标题在 `Hero.jsx`：

```jsx
<BlurText text="Venture Past Our Sky Across the Universe" />
```

你可以改成自己的标题。

## 替换背景视频

背景视频地址在：

- `public/components/Hero.jsx`
- `public/components/Capabilities.jsx`

找到类似代码：

```jsx
const HERO_VIDEO = "https://...";
```

替换成你自己的视频地址即可。

如果你想完全本地化素材，可以把视频放到：

```text
public/videos/
```

然后写成：

```jsx
const HERO_VIDEO = "/videos/your-video.mp4";
```

## 部署

这个项目可以部署到 Vercel、Netlify、Cloudflare Pages 或 GitHub Pages。

常见部署方式：

```bash
npm run build
```

然后把 `dist/` 目录部署到静态托管平台。

## 素材版权说明

本仓库中的代码使用 MIT 协议开源。

当前演示视频是远程引用，并没有被打包进仓库。正式发布或商业使用前，建议替换成你自己拥有版权或已获得授权的视频、图片、音频和 3D 素材。

## 开源协议

MIT
