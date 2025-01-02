import React from 'react';
import { Clock, X } from 'lucide-react';
import { Button } from '../atoms/Button';

interface SearchHistoryProps {
  items: string[];
  onSelect: (query: string) => void;
  onRemove: (query: string) => void;
  onClear: () => void;
}

export function SearchHistory({ items, onSelect, onRemove, onClear }: SearchHistoryProps) {
  if (items.length === 0) return null;

  return (
    <div className="p-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">Recent Searches</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="text-xs"
        >
          Clear all
        </Button>
      </div>
      <div className="space-y-1">
        {items.map((query) => (
          <div
            key={query}
            className="flex items-center justify-between group"
          >
            <button
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => onSelect(query)}
            >
              <Clock className="h-4 w-4" />
              <span>{query}</span>
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(query)}
              className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0"
              aria-label="Remove from history"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}