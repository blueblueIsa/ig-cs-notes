export const getSymbolDimensions = (type: string, text: string) => {
  // Calculate base width based on text length and character width
  const charWidth = 30; // Average character width in pixels
  const minPadding = 20; // Minimum padding on each side
  const lineHeight = 2.0; // Line height multiplier
  
  // Split text into lines and find the longest line
  const lines = text.split('\n');
  const maxLineLength = Math.max(...lines.map(line => line.length));
  
  // Calculate width based on longest line plus padding
  const baseWidth = Math.max(
    240, // Minimum width
    maxLineLength * charWidth + (minPadding * 2)
  );
  
  // For decision boxes, make height equal to width for diamond shape
  const height = type === 'decision' 
    ? baseWidth 
    : Math.max(180, lines.length * 20 * lineHeight + (minPadding * 2));
  
  switch (type) {
    case 'decision':
      // console.log("base wid: ", baseWidth)
      // return 'w-40 h-40';
      return `w-[${baseWidth}px] h-[${height}px]`;
    case 'input':
    case 'output':
      return `w-[${baseWidth + 40}px] h-[${height}px]`; // Extra width for parallelogram
    default:
      return `w-[${baseWidth}px] h-[${height}px]`;
  }
};

export const getSymbolClass = (type: string) => {
  const baseClasses = 'flex items-center justify-center text-center';
  
  switch (type) {
    case 'start':
    case 'end':
      return `${baseClasses} rounded-full bg-blue-100 border-blue-300`;
    case 'process':
      return `${baseClasses} bg-green-100 border-green-300`;
    case 'decision':
      return `${baseClasses} bg-yellow-100 border-yellow-300 [transform:rotate(45deg)] relative`;
    case 'input':
    case 'output':
      return `${baseClasses} bg-purple-100 border-purple-300 [transform:skew(-45deg)] [&>span]:[transform:skew(45deg)]`;
    default:
      return baseClasses;
  }
};