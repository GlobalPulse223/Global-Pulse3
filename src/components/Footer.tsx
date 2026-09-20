import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-16 border-t-4 border-red-600">
      {/* Top Footer Strip */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & About */}
          <div className="md:col-span-1 space-y-4">
            <Logo variant="footer" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Global Pulse News is an independent journalistic network committed to truth, verified regional reporting from District Shangla, and transparent nationwide coverage across Pakistan.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>24/7 Editorial Newsroom Active</span>
            </div>
          </div>

          {/* Col 2: Editorial Navigation */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Sections & Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Shangla & Northern KP</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Pakistan Economy & Fuel</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Sports & Cricket</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Weather & Disasters</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Tech & Innovation</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Governance */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Organization
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us & News Tips</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><span className="text-slate-500">Editorial Code of Ethics</span></li>
              <li><span className="text-slate-500">Fact-Checking Methodology</span></li>
            </ul>
          </div>

          {/* Col 4: Bureau Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-serif font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Regional Bureau
            </h4>
            <div className="flex items-start gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span>Main Road Alpuri, District Shangla, Khyber Pakhtunkhwa, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
              <a href="mailto:contact@globalpulsenews.com" className="hover:text-white">
                contact@globalpulsenews.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Global Pulse News. All rights reserved. Reproduction without attribution is prohibited.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-300">About</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300">Contact</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
