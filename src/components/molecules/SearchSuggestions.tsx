import { SearchResult } from '../../lib/search';
import { highlightText } from '../../lib/utils';

interface SearchSuggestionsProps {
  results: SearchResult[];
  query: string;
  onSelect: (result: SearchResult) => void;
}

export function SearchSuggestions({ results, query, onSelect }: SearchSuggestionsProps) {
  if (!query || results.length === 0) return null;

  return (
    <div className="py-2">
      <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Suggestions
      </h3>
      <div className="mt-1">
        {results.slice(0, 5).map((result) => (
          <button
            key={result.id}
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => onSelect(result)}
            dangerouslySetInnerHTML={{
              __html: highlightText(result.title, query)
            }}
          />
        ))}
      </div>
    </div>
  );
}