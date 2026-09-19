/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { 
  Database, 
  Menu, 
  X, 
  Sparkles,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { db } from './firebase';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Logo from './components/Logo';
import Footer from './components/Footer';
import { initialNewsArticles } from './data/seedArticles';

function NavigationBar({ onSeed, isSeeding, seedSuccess }: { onSeed: () => void; isSeeding: boolean; seedSuccess: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      {/* Top Dateline Bar (Dawn.com style) */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium text-slate-200">
              <Calendar className="w-3 h-3 text-red-500" /> Saturday, 19 September 2026
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-red-500" /> Shangla Bureau: Alpuri & Besham
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-amber-400 font-medium hidden md:inline">18°C Sunny</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Verified Wire
            </span>
            <span className="text-slate-600">•</span>
            <span>Dawn-standard Editorial Quality</span>
          </div>
        </div>
      </div>

      {/* Main Header with Logo, Navigation & Seed Button */}
      <nav className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Newspaper Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 font-serif text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-2 rounded-md transition-colors font-medium ${
                isActive(link.path)
                  ? 'text-red-700 bg-red-50 font-bold'
                  : 'text-gray-700 hover:text-red-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions (Seed Articles & Mobile Menu) */}
        <div className="flex items-center gap-2">
          {/* Seed 10 Articles Button */}
          <button
            id="seed-articles-button"
            disabled={isSeeding}
            onClick={onSeed}
            title="Populate database with 10 verified news stories including Petrol price, Shangla weather, and sports"
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-sm ${
              seedSuccess
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-red-600 text-white hover:bg-red-700 active:scale-95'
            } disabled:opacity-50`}
          >
            {seedSuccess ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>10 Stories Seeded!</span>
              </>
            ) : isSeeding ? (
              <>
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Database className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Seed 10+ Articles</span>
                <span className="sm:hidden">Seed 10</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                isActive(link.path)
                  ? 'bg-red-50 text-red-700 font-bold'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 px-2 py-1">
            <span>Global Pulse News Mobile Edition</span>
            <span className="text-red-600 font-semibold">Alpuri Bureau</span>
          </div>
        </div>
      )}

      {/* Editorial Ticker (Dawn style) */}
      <div className="bg-red-50/80 border-t border-red-100 py-1.5 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs text-gray-800">
          <span className="bg-red-700 text-white font-bold uppercase tracking-wider text-[10px] px-2 py-0.5 rounded flex-shrink-0 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> BREAKING WIRE
          </span>
          <p className="truncate text-slate-800 font-medium">
            Petrol & diesel prices revised for fortnight • Shangla weather alert: heavy precipitation forecast for Alpuri & Besham • Pakistan Cricket squad announced
          </p>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedSuccess, setSeedSuccess] = useState(false);

  useEffect(() => {
    // Check if initial articles need to be seeded on load
    const checkAndSeed = async () => {
      try {
        const articlesRef = collection(db, 'articles');
        const snapshot = await getDocs(articlesRef);
        // If there are fewer than 5 articles, auto-seed the full rich dataset
        if (snapshot.docs.length < 5) {
          console.log('Fewer than 5 articles detected. Auto-seeding 10 full articles...');
          await seedArticles();
        }
      } catch (e) {
        console.error('Initial check error:', e);
      }
    };
    checkAndSeed();
  }, []);

  const seedArticles = async () => {
    if (isSeeding) return;
    setIsSeeding(true);
    setSeedSuccess(false);
    try {
      const articlesRef = collection(db, 'articles');
      const snapshot = await getDocs(articlesRef);
      
      console.log('Clearing existing articles for fresh seed...');
      await Promise.all(snapshot.docs.map(doc => deleteDoc(doc.ref)));
      
      console.log('Seeding 10 authentic articles...');
      for (const article of initialNewsArticles) {
        await addDoc(articlesRef, article);
      }
      console.log('Seeding complete. 10 articles written.');
      setSeedSuccess(true);
      setTimeout(() => setSeedSuccess(false), 4000);
    } catch (e) {
      console.error('Seeding error:', e);
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-gray-900 flex flex-col font-sans antialiased selection:bg-red-600 selection:text-white">
        <NavigationBar onSeed={seedArticles} isSeeding={isSeeding} seedSuccess={seedSuccess} />

        <main className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
          <Routes>
            <Route path="/" element={
              <div>
                {/* Page Heading banner */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-3 border-b-2 border-slate-900">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                      Top Stories & Regional Dispatches
                    </h2>
                    <p className="text-sm text-gray-600 mt-0.5 font-medium">
                      Reporting on District Shangla, Khyber Pakhtunkhwa & Pakistan National Affairs
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Edition: Alpuri • Besham • Islamabad
                  </span>
                </div>

                <ArticleList />
              </div>
            } />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
