import { useState, useEffect } from 'react';

const MAX_HISTORY_ITEMS = 10;
const STORAGE_KEY = 'search-history';

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = (query: string) => {
    if (!query.trim()) return;
    
    setHistory(prev => {
      const filtered = prev.filter(item => item !== query);
      return [query, ...filtered].slice(0, MAX_HISTORY_ITEMS);
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const removeFromHistory = (query: string) => {
    setHistory(prev => prev.filter(item => item !== query));
  };

  return {
    history,
    addToHistory,
    clearHistory,
    removeFromHistory
  };
}