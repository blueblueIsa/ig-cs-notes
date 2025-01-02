export const formatBinary = (binary: string): string => {
  return binary.replace(/(.{4})/g, '$1 ').trim();
};

export const formatHex = (hex: string): string => {
  return hex.toUpperCase();
};