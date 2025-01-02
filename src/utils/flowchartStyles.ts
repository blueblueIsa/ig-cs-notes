export function getSymbolClass(type: string) {
  switch (type) {
    case 'start':
    case 'end':
      return 'rounded-full';
    case 'process':
      return 'rounded';
    case 'decision':
      return 'transform rotate-45';
    case 'input':
    case 'output':
      return 'transform skew-x-12';
    default:
      return '';
  }
}

export function getSymbolDimensions(type: string) {
  switch (type) {
    case 'decision':
      return 'w-16 h-16';
    case 'start':
    case 'end':
      return 'w-24 h-24';
    default:
      return 'w-30 h-16';
  }
} 