import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { Search } from 'lucide-react';
import { db } from '@/src/firebase';
import { Article, OperationType } from '@/src/types';
import ArticleCard from './ArticleCard';

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, 'articles'));
    
    console.log('Setting up onSnapshot for articles...');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log('onSnapshot fired, docs:', snapshot.docs.length);
      const rawArticles = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Article));

      // Strictly deduplicate by title so duplicate articles never appear twice
      const uniqueMap = new Map<string, Article>();
      for (const a of rawArticles) {
        const normalizedTitle = (a.title || '').trim().toLowerCase();
        if (normalizedTitle && !uniqueMap.has(normalizedTitle)) {
          uniqueMap.set(normalizedTitle, a);
        }
      }

      const deduplicatedArticles = Array.from(uniqueMap.values()).sort(
        (a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
      );

      setArticles(deduplicatedArticles);
      setLoading(false);
    }, (error) => {
      console.error('onSnapshot error:', error);
      handleFirestoreError(error, OperationType.LIST, 'articles');
    });

    return () => unsubscribe();
  }, []);

  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category || 'Uncategorized')))];

  const filteredArticles = articles.filter(article => 
    (selectedCategory === 'All' || (article.category || 'Uncategorized') === selectedCategory) &&
    (article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     article.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return (
      <div id="article-list-skeleton">
        {/* Search & Category Filter Skeleton */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 animate-pulse">
          <div className="h-10 bg-gray-200 rounded-md flex-grow" />
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-20 bg-gray-200 rounded-md" />
            ))}
          </div>
        </div>

        {/* Article Cards Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              id={`skeleton-card-${idx}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse"
            >
              <div className="w-full h-48 bg-gray-200" />
              <div className="p-6 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-4/5" />
                <div className="h-5 bg-gray-200 rounded w-3/5" />
                <div className="space-y-2 pt-2">
                  <div className="h-3.5 bg-gray-100 rounded w-full" />
                  <div className="h-3.5 bg-gray-100 rounded w-5/6" />
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-1.5">
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-3 bg-gray-200 rounded w-1/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-gray-100 shadow-sm max-w-lg mx-auto">
          <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">No Articles Found</h3>
          <p className="text-gray-500 text-sm mb-4">
            No articles match your current search query or category filter.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 bg-red-600 text-white text-xs font-semibold rounded-md hover:bg-red-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} onClick={(a) => navigate(`/article/${a.id}`)} />
          ))}
        </div>
      )}

    </>
  );
}
