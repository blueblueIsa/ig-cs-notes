import { useEffect } from 'react';

export function useKeyboardShortcut(
  keys: string[],
  callback: (e: KeyboardEvent) => void
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCommandOrControl = event.metaKey || event.ctrlKey;
      const key = event.key.toLowerCase();
      
      if (
        isCommandOrControl &&
        keys.some(k => k.toLowerCase() === key)
      ) {
        callback(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keys, callback]);
}