import React from 'react';
import { Link } from 'react-router-dom';
import type { SearchResult } from '../../lib/search';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isLoading: boolean;
  selectedIndex: number;
}

export function SearchResults({ results, query, isLoading, selectedIndex }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="p-4 text-center" role="status" aria-label="Loading results">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
      </div>
    );
  }

  if (!query) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500" role="status">
        No results found for "{query}"
      </div>
    );
  }

  return (
    <div 
      className="divide-y max-h-[60vh] overflow-y-auto"
      role="listbox"
      id="search-results"
      aria-label="Search results"
    >
      <div className="p-2 text-sm text-gray-500">
        Found {results.length} results for "{query}"
      </div>
      {results.map((result, index) => (
        <Link
          key={result.id}
          to={result.path}
          className={`block p-4 hover:bg-gray-50 dark:hover:bg-gray-800 ${
            index === selectedIndex ? 'bg-gray-50 dark:bg-gray-800' : ''
          }`}
          role="option"
          aria-selected={index === selectedIndex}
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {result.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {result.snippet}
          </p>
          <div className="mt-2 text-xs text-gray-400">
            Relevance: {result.relevance} • Type: {result.type}
          </div>
        </Link>
      ))}
    </div>
  );
}