# Astronaut 3D Dynamic Site

A cinematic space-travel landing page generated with Codex. It uses full-screen looping video backgrounds, liquid-glass interface elements, word-by-word blur text animation, and Framer Motion entrance transitions.

## Features

- Two full-height sections: hero and capabilities
- Custom JavaScript video looping with requestAnimationFrame-driven crossfade
- Liquid-glass UI system for nav, chips, stats, cards, and CTA buttons
- React components loaded from simple CDN-friendly JSX files
- Tailwind CSS CDN configuration
- Framer Motion entrance animations
- Responsive desktop and mobile layout

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

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
└── package.json
```

## Media Rights

The code is MIT licensed. The demo video URLs are referenced remotely and are not redistributed in this repository. Before using this project commercially or publishing your own deployment, replace the video URLs with media you own or have permission to use.

## License

MIT
