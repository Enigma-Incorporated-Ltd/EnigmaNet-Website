function looksLikeHtml(value: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}
export function extractRenderableHtml(value: unknown): string | null {
  if (typeof value === 'string') return looksLikeHtml(value) ? value : null;

  if (Array.isArray(value)) {
    for (const item of value) {
      const found = extractRenderableHtml(item);
      if (found) return found;
    }
    return null;
  }

  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    for (const key of ['legal-content', 'content', 'body', 'long-text', 'markup', 'template']) {
      const found = extractRenderableHtml(obj[key]);
      if (found) return found;
    }
    if (obj.fields && typeof obj.fields === 'object') {
      const found = extractRenderableHtml(obj.fields);
      if (found) return found;
    }
    for (const child of Object.values(obj)) {
      const found = extractRenderableHtml(child);
      if (found) return found;
    }
  }

  return null;
}
