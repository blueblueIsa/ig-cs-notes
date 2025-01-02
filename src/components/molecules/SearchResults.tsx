// import React from 'react';
import { SearchResult } from '../../lib/search';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isLoading: boolean;
  selectedIndex: number;
}

export function SearchResults({ results, query, isLoading, selectedIndex }: SearchResultsProps) {
  if (!query) return null;

  return (
    <div
      id="search-results"
      role="listbox"
      className="max-h-96 overflow-y-auto border-t border-gray-200 dark:border-gray-700"
    >
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li
              key={result.path}
              role="option"
              aria-selected={index === selectedIndex}
              className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                index === selectedIndex ? 'bg-gray-50 dark:bg-gray-700' : ''
              }`}
            >
              <h3 className="text-sm font-medium">{result.title}</h3>
              {result.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {result.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 text-sm text-gray-500 dark:text-gray-400">
          {isLoading ? 'Searching...' : 'No results found.'}
        </div>
      )}
    </div>
  );
} 