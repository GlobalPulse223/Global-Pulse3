import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export default function Logo({ className = '', variant = 'header' }: LogoProps) {
  const isFooter = variant === 'footer';

  return (
    <Link to="/" className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Icon Emblem */}
      <div className="relative flex-shrink-0">
        <div className={`w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center shadow-sm ${
          isFooter 
            ? 'bg-red-600 text-white' 
            : 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white border border-slate-700'
        }`}>
          <svg 
            viewBox="0 0 48 48" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 md:w-7 md:h-7"
          >
            {/* Globe latitude / longitude rings */}
            <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
            <ellipse cx="24" cy="24" rx="9" ry="18" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.6" />
            <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.6" />
            {/* Red Pulse wave */}
            <path 
              d="M8 24H17L20 14L24 33L28 19L31 24H40" 
              stroke="#EF4444" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </div>
        {/* Live Red Indicator Dot */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border-2 border-white"></span>
        </span>
      </div>

      {/* Typography Brand Title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-serif tracking-tight font-extrabold text-xl md:text-2xl leading-none ${
            isFooter ? 'text-white' : 'text-gray-900 group-hover:text-blue-900'
          }`}>
            GLOBAL PULSE
          </span>
          <span className="bg-red-600 text-white text-[10px] md:text-[11px] font-bold tracking-widest px-1.5 py-0.5 rounded uppercase leading-none shadow-sm">
            NEWS
          </span>
        </div>
        <span className={`text-[10px] md:text-[11px] tracking-wider uppercase font-medium mt-0.5 ${
          isFooter ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Independent Journalistic Network • Shangla & Beyond
        </span>
      </div>
    </Link>
  );
}
