import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource/instrument-sans/400.css';
import '@fontsource/instrument-sans/500.css';
import App from './App.tsx';
import './index.css';

// HashRouter keeps deep links working on any static host (incl. GitHub Pages
// under a subpath) with no server-side rewrite needed.
// MotionConfig reducedMotion="user" makes Framer Motion honor the OS
// "reduce motion" setting (skips transform/layout animations).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <App />
      </HashRouter>
    </MotionConfig>
  </StrictMode>
);
