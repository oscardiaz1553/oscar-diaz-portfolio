import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';

export default function App() {
  return (
    <main
      className="min-h-screen font-kanit"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabajos/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}
