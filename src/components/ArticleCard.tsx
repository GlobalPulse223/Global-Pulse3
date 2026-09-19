import { Article } from '../types';
import { formatNewsDate } from '../utils/dateFormatter';

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <button 
      onClick={() => onClick(article)}
      className="text-left bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all flex flex-col h-full group"
    >
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          referrerPolicy="no-referrer" 
        />
        {article.category && (
          <span className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
            {article.category}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 group-hover:text-blue-900 transition-colors mb-2 leading-snug">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {article.content}
          </p>
        </div>
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
          <span className="text-gray-700">
            By <span className="font-semibold">{article.author || 'News Desk'}</span> | {formatNewsDate(article.createdAt)}
          </span>
          <span className="text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform">
            Read →
          </span>
        </div>
      </div>
    </button>
  );
}

