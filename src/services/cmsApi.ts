// ─── n0de CMS API Service ─────────────────────────────────────────────────────
// Base URL    : https://n0de-laravel-main-acyxzt.laravel.cloud
// Project ID  : 56df7c73-d7a2-4651-bb4c-a57740d2932d
// Collection  : Blogs  (slug: blogs)
// Endpoint    : GET /api/blogs
// Auth        : Bearer token  +  Project-Id header
// ──────────────────────────────────────────────────────────────────────────────

const CMS_BASE_URL = import.meta.env.VITE_CMS_BASE_URL as string;
const CMS_PROJECT_ID = import.meta.env.VITE_CMS_PROJECT_ID as string;
const CMS_API_KEY = import.meta.env.VITE_CMS_API_KEY as string;
// ── Types ─────────────────────────────────────────────────────────────────────

/** Shape of each media item inside fields.media[] */
export interface CmsMediaItem {
  uuid: string;
  filename: string;
  mime_type: string;
  url: string;
  thumbnail_url: string;
  metadata?: {
    alt_text?: string;
    title?: string;
    [key: string]: unknown;
  };
}

/** Shape returned by the n0de CMS REST API for each entry */
export interface CmsEntry {
  uuid: string;
  locale: string;
  published_at: string;
  /** Dynamic field values defined in the collection schema */
  fields: {
    title?: string;
    slug?: string;
    content?: string;
    /** Rich-text / long content field (actual key from the CMS) */
    'long-text'?: string;
    /** Media attachments array */
    media?: CmsMediaItem[];
    [key: string]: unknown;
  };
}

/** Normalised blog post shape used by the UI */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  /** Plain-text excerpt stripped from the HTML content */
  description: string;
  /** Raw HTML content from the rich-text field */
  contentHtml: string;
  category: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  comments: number;
  shares: number;
}


function buildHeaders(): HeadersInit {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${CMS_API_KEY}`,
    'Project-Id': CMS_PROJECT_ID,
  };
}

/** Strip HTML tags and return a short plain-text excerpt (max 160 chars) */
function htmlToExcerpt(html: string, maxLen = 160): string {
  const plain = html
    .replace(/<[^>]*>/g, ' ')      // remove tags
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')          // collapse whitespace
    .trim();
  return plain.length > maxLen ? plain.slice(0, maxLen) + '…' : plain;
}

/** Map a raw CMS entry → BlogPost */
function normaliseEntry(entry: CmsEntry): BlogPost {
  const f = entry.fields;

  const formattedDate = entry.published_at
    ? new Date(entry.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';

  // Support both 'long-text' (actual CMS key) and 'content' field names
  const contentHtml =
    typeof f['long-text'] === 'string'
      ? f['long-text']
      : typeof f.content === 'string'
        ? f.content
        : '';

  // Image: prefer the first media array item, then fall back to legacy field names
  const imageUrl =
    Array.isArray(f.media) && f.media.length > 0
      ? f.media[0].url
      : (f.image as string) ?? (f.cover as string) ?? (f.thumbnail as string) ?? '';

  return {
    id: entry.uuid,
    title: f.title ?? 'Untitled',
    slug: f.slug ?? entry.uuid,
    description: htmlToExcerpt(contentHtml),
    contentHtml,
    category: (f.category as string) ?? (f.tags as string) ?? 'General',
    date: formattedDate,
    image: imageUrl,
    author: {
      name:
        (f.author_name as string) ??
        (typeof f.author === 'object' && f.author !== null
          ? ((f.author as Record<string, unknown>).name as string) ?? ''
          : (f.author as string) ?? '') ??
        'Unknown',
      avatar:
        (f.author_avatar as string) ??
        (typeof f.author === 'object' && f.author !== null
          ? ((f.author as Record<string, unknown>).avatar as string) ?? ''
          : '') ??
        '',
    },
    likes:    typeof f.likes    === 'number' ? f.likes    : 0,
    comments: typeof f.comments === 'number' ? f.comments : 0,
    shares:   typeof f.shares   === 'number' ? f.shares   : 0,
  };
}

// ── API Functions ─────────────────────────────────────────────────────────────

/**
 * Fetch **all** entries from the Blogs collection.
 *
 * Endpoint: GET /api/{collectionSlug}
 * e.g.    : GET /api/blogs
 */
export async function fetchBlogs(collectionSlug = 'blogs'): Promise<BlogPost[]> {
  const url = `${CMS_BASE_URL}/api/${collectionSlug}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: buildHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => response.statusText);
    throw new Error(`CMS API error ${response.status}: ${errorText}`);
  }

  const json: CmsEntry[] | { data: CmsEntry[] } = await response.json();

  // Handle both plain-array and { data: [...] } response shapes
  const entries: CmsEntry[] = Array.isArray(json) ? json : (json.data ?? []);

  return entries.map(normaliseEntry);
}

/**
 * Fetch a **single** blog entry by its UUID.
 *
 * Endpoint: GET /api/{collectionSlug}/{uuid}
 */
export async function fetchBlogById(
  uuid: string,
  collectionSlug = 'blogs',
): Promise<BlogPost> {
  const url = `${CMS_BASE_URL}/api/${collectionSlug}/${uuid}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: buildHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => response.statusText);
    throw new Error(`CMS API error ${response.status}: ${errorText}`);
  }

  const json = await response.json();
  const entry: CmsEntry = Array.isArray(json) ? json[0] : (json.data ?? json);

  return normaliseEntry(entry);
}

/**
 * Fetch a **single** blog entry by its slug.
 * First tries a direct API lookup by slug; if that fails (slug-based lookup
 * not supported), falls back to fetching all posts and filtering by slug.
 *
 * Endpoint: GET /api/{collectionSlug}/{slug}  (or fallback via fetchBlogs)
 */
export async function fetchBlogBySlug(
  slug: string,
  collectionSlug = 'blogs',
): Promise<BlogPost> {
  // Try direct lookup first (works if the API accepts slugs as identifiers)
  try {
    const url = `${CMS_BASE_URL}/api/${collectionSlug}/${slug}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: buildHeaders(),
    });

    if (response.ok) {
      const json = await response.json();
      const entry: CmsEntry = Array.isArray(json) ? json[0] : (json.data ?? json);
      return normaliseEntry(entry);
    }
  } catch {
    // fall through to slug-match fallback
  }

  // Fallback: fetch all posts and match by slug
  const all = await fetchBlogs(collectionSlug);
  const match = all.find((p) => p.slug === slug);
  if (!match) {
    throw new Error(`Blog post with slug "${slug}" not found.`);
  }
  return match;
}
