// ─── n0de CMS API Service ─────────────────────────────────────────────────────
// Base URL    : https://n0de-laravel-main-acyxzt.laravel.cloud
// Project ID  : 56df7c73-d7a2-4651-bb4c-a57740d2932d
// Collection  : Blogs  (slug: blogs)
// Collection  : Header (slug: header)
// Endpoint    : GET /api/blogs  |  GET /api/header
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

// ── Header / Navigation ───────────────────────────────────────────────────────

/** A single nav link (used in dropdowns and plain links) */
export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

/** A titled group of links inside a mega-menu "Pages" column */
export interface NavSection {
  title: string;
  links: NavLink[];
}

/** One top-level nav item */
export interface NavItem {
  label: string;
  /** "mega-columns" = Landings-style grid | "mega-sections" = Pages-style | "dropdown" = simple list | "link" = plain */
  type: 'mega-columns' | 'mega-sections' | 'dropdown' | 'link';
  href?: string;                   // only for type === 'link'
  columns?: NavLink[][];           // only for type === 'mega-columns'
  sectioned_columns?: NavSection[][];  // only for type === 'mega-sections'
  links?: NavLink[];               // only for type === 'dropdown'
}

/** CTA button in the top-right corner */
export interface CtaButton {
  label: string;
  href: string;
  icon?: string;
  variant: string;
  size?: string;
}

/** Full header config shape (mirrors the CMS JSON) */
export interface HeaderConfig {
  logo: { text: string; href: string };
  nav_items: NavItem[];
  cta_button: CtaButton;
}

/**
 * Fetch the Header collection config from the CMS.
 * The CMS entry's `fields` object must contain a `json` field
 * (or a field named `config`) with the HeaderConfig value.
 *
 * Endpoint: GET /api/header
 */
export async function fetchHeader(collectionSlug = 'header'): Promise<HeaderConfig> {
  const url = `${CMS_BASE_URL}/api/${collectionSlug}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: buildHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => response.statusText);
    throw new Error(`CMS Header API error ${response.status}: ${errorText}`);
  }

  const json = await response.json();

  // Entries can come as an array or wrapped in { data: [...] }
  const entries: CmsEntry[] = Array.isArray(json) ? json : (json.data ?? [json]);

  if (entries.length === 0) {
    throw new Error('No header config found in CMS.');
  }

  // The JSON field is stored under fields.json (the "#json" field type in n0de CMS)
  const fields = entries[0].fields;
  
  // Debug: log available field names
  console.log('📋 Available fields in CMS entry:', Object.keys(fields));
  
  // Try multiple possible field names and handle both object and string JSON
  // In n0de CMS, JSON fields might be stored with the field name as-is
  let rawConfig = fields.json ?? fields.config ?? fields.header ?? fields.data ?? fields.content;
  
  // If still not found, try to find any object/string field that looks like our config
  if (!rawConfig) {
    for (const [key, value] of Object.entries(fields)) {
      if (typeof value === 'object' && value !== null && 'nav_items' in value) {
        rawConfig = value;
        console.log(`✅ Found config in field: ${key}`);
        break;
      }
      if (typeof value === 'string' && (value.startsWith('{') || value.startsWith('['))) {
        try {
          const parsed = JSON.parse(value);
          if (parsed && typeof parsed === 'object' && 'nav_items' in parsed) {
            rawConfig = parsed;
            console.log(`✅ Found config in string field: ${key}`);
            break;
          }
        } catch {
          // Not valid JSON, continue
        }
      }
    }
  }
  
  // If it's a string, parse it
  if (typeof rawConfig === 'string') {
    try {
      rawConfig = JSON.parse(rawConfig);
    } catch (e) {
      console.error('Failed to parse header JSON string:', e);
      throw new Error('Header config is invalid JSON string.');
    }
  }
  
  const config = rawConfig as HeaderConfig;

  if (!config || !config.nav_items || !Array.isArray(config.nav_items)) {
    console.error('❌ Header config structure invalid:', config);
    console.error('Available fields:', Object.keys(fields));
    throw new Error('Header config field is empty or invalid in CMS.');
  }

  console.log('✅ Header config parsed successfully:', {
    navItemsCount: config.nav_items.length,
    navItems: config.nav_items.map(item => ({ label: item.label, type: item.type })),
  });

  return config;
}

// ── Footer ────────────────────────────────────────────────────────────────────

export interface FooterLink {
  title: string;
  url: string;
  icon?: string;
  style?: { color?: string; hoverColor?: string; fontSize?: string; fontWeight?: string; className?: string };
}

export interface FooterColumn {
  title: string;
  titleStyle?: { color?: string; fontSize?: string; fontWeight?: string };
  links: FooterLink[];
}

export interface FooterSocial {
  title: string;
  url: string;
  icon?: string;
  style?: { color?: string; backgroundColor?: string; borderRadius?: string };
}

export interface FooterNewsletter {
  enabled: boolean;
  label?: string;
  placeholder?: string;
  buttonText?: string;
  buttonVariant?: string;
  icon?: string;
}

export interface FooterCopyright {
  text: string;
  by?: string;
  url?: string;
  style?: { color?: string; fontSize?: string };
}

export interface FooterConfig {
  brand: {
    name: string;
    logoUrl?: string;
    logoWidth?: number;
    href?: string;
    style?: { color?: string; fontSize?: string; fontWeight?: string; fontFamily?: string };
  };
  description?: string;
  descriptionStyle?: { color?: string; fontSize?: string };
  email?: string;
  emailLabel?: string;
  newsletter?: FooterNewsletter;
  columns?: FooterColumn[];
  socials?: FooterSocial[];
  copyright: FooterCopyright;
  style?: {
    backgroundColor?: string;
    textColor?: string;
    padding?: string;
    className?: string;
  };
}

/** Shared helper — same logic as fetchHeader, adapted for footer */
async function fetchCmsJson<T>(
  collectionSlug: string,
  rootKey: string,
): Promise<T> {
  const url = `${CMS_BASE_URL}/api/${collectionSlug}`;
  const response = await fetch(url, { method: 'GET', headers: buildHeaders() });

  if (!response.ok) {
    const errorText = await response.text().catch(() => response.statusText);
    throw new Error(`CMS API error ${response.status}: ${errorText}`);
  }

  const json = await response.json();
  const entries: CmsEntry[] = Array.isArray(json) ? json : (json.data ?? [json]);
  if (entries.length === 0) throw new Error(`No ${collectionSlug} config found in CMS.`);

  const fields = entries[0].fields;
  let raw = fields.json ?? fields.config ?? fields[collectionSlug] ?? fields.data ?? fields.content;

  if (!raw) {
    for (const [, value] of Object.entries(fields)) {
      if (typeof value === 'object' && value !== null && rootKey in value) { raw = value; break; }
      if (typeof value === 'string' && value.startsWith('{')) {
        try { const p = JSON.parse(value); if (p && rootKey in p) { raw = p; break; } } catch { /* skip */ }
      }
    }
  }

  if (typeof raw === 'string') raw = JSON.parse(raw);
  if (!raw) throw new Error(`${collectionSlug} config field is empty in CMS.`);
  return raw as T;
}

/**
 * Fetch the Footer collection config from the CMS.
 * Endpoint: GET /api/footer
 */
export async function fetchFooter(collectionSlug = 'footer'): Promise<FooterConfig> {
  return fetchCmsJson<FooterConfig>(collectionSlug, 'brand');
}
