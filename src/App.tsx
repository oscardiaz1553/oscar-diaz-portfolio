import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';

export default function App() {
  return (
    <main
      className="min-h-screen font-kanit"
      style={{ background: 'var(--bg)', color: 'var(--ink)', overflowX: 'clip' }}
    >
      <ScrollToTop />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabajos/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}
