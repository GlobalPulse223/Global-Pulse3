import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { ArrowLeft, Share2, Check } from 'lucide-react';
import { db } from '../firebase';
import { Article } from '../types';
import { formatNewsDate } from '../utils/dateFormatter';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() } as Article);
        } else {
          console.error('Article not found');
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 animate-pulse space-y-6">
        <div className="h-6 w-32 bg-gray-200 rounded"></div>
        <div className="h-80 w-full bg-gray-200 rounded-xl"></div>
        <div className="h-10 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Article Not Found</h2>
        <p className="text-gray-600 mb-6">The article you are looking for may have been moved or removed.</p>
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-semibold hover:bg-slate-800"
        >
          Return to News Feed
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => navigate('/')} 
          className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-red-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Latest Articles
        </button>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-gray-700 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-gray-500" />}
          {copied ? 'Link Copied!' : 'Share Article'}
        </button>
      </div>

      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="relative w-full h-80 sm:h-96 bg-gray-100 overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          {article.category && (
            <span className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
              {article.category}
            </span>
          )}
        </div>

        <div className="p-6 sm:p-10">
          <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-gray-950 leading-tight mb-4">
            {article.title}
          </h1>

          {/* Byline as requested: By [Author] | [19 Sep 2026] */}
          <div className="flex items-center justify-between py-3 border-y border-gray-100 text-xs sm:text-sm text-gray-600 mb-8 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>
                By <strong className="text-gray-900 font-semibold">{article.author || 'News Desk'}</strong> | {formatNewsDate(article.createdAt)}
              </span>
            </div>
            <span className="text-xs text-gray-400">Shangla & Regional Desk</span>
          </div>

          <div className="text-gray-800 text-base sm:text-lg leading-relaxed space-y-4 whitespace-pre-line font-serif">
            {article.content}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>Reported by Global Pulse Newsroom • Alpuri, District Shangla</p>
            <div className="flex items-center gap-2">
              <span className="bg-slate-100 px-2.5 py-1 rounded text-slate-700 font-medium">Verified Editorial Dispatch</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

