export const toSentenceCase = (text: string) => {
  if (!text) return '';

  // Ignore leading spaces
  const trimmedStart = text.trimStart();
  const leadingSpaces = text.slice(0, text.length - trimmedStart.length);

  return leadingSpaces + trimmedStart.charAt(0).toUpperCase() + trimmedStart.slice(1).toLowerCase();
};
