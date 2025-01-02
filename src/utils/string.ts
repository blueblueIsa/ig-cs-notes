export function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  export function truncateString(str: string, length: number): string {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
  }
  
  export function highlightText(text: string, query: string): string {
    const escapedQuery = escapeRegExp(query);
    return text.replace(
      new RegExp(`(${escapedQuery})`, 'gi'),
      '<mark>$1</mark>'
    );
  }