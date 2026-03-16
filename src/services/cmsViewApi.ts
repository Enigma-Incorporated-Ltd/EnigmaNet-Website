// ─── CMS Viewer API Service ───────────────────────────────────────────────────
// Used exclusively by the /cms route (CMS Project Viewer page).
// Project ID is read from VITE_CMS_PROJECT_ID env var by default.
// ─────────────────────────────────────────────────────────────────────────────

const CMS_BASE_URL =
  (import.meta.env.VITE_CMS_BASE_URL as string | undefined);

const CMS_API_KEY =
  (import.meta.env.VITE_CMS_API_KEY as string | undefined);

const CMS_PROJECT_ID =
  (import.meta.env.VITE_CMS_PROJECT_ID as string | undefined) ?? '';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CmsMediaItem {
  url: string;
  alt?: string;
  title?: string;
}

export interface CmsEntry {
  uuid: string;
  locale?: string | null;
  published_at?: string | null;
  slug?: string | null;
  fields: Record<string, unknown>;
}

export interface BlogAuthor {
  name: string;
  avatar?: string | null;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  body: string;
  excerpt: string;
  image?: string | null;
  published_at: string;
  author?: BlogAuthor | null;
  likes: number;
  comments: number;
  shares: number;
}

export interface CmsCollectionMeta {
  slug: string;
  name?: string;
  type?: string;
}

export interface NavChildLink {
  label: string;
  href: string;
  badge?: string;
}

export interface NavSection {
  title?: string;
  links?: NavChildLink[];
}

export interface NavLink {
  label: string;
  href?: string;
  type?: 'link' | 'dropdown' | 'mega-columns' | 'mega-sections' | string;
  badge?: string;
  columns?: NavChildLink[][];
  sectioned_columns?: NavSection[][];
  links?: NavChildLink[];
}

export interface LogoConfig {
  text?: string;
  image?: string;
  alt?: string;
  href?: string;
}

export interface CtaButton {
  label: string;
  href: string;
}

export interface HeaderConfig {
  logo?: LogoConfig;
  nav_items?: NavLink[];
  cta_button?: CtaButton;
}

export interface FooterLink {
  label?: string;
  href?:  string;
  text?:  string;
  url?:   string;
  name?:  string;
  by?:    string;
  title?: string;
  icon?:  string;
}

export interface FooterColumn {
  title?: string;
  name?:  string;
  links?: FooterLink[];
  items?: FooterLink[];
  titleStyle?: Record<string, unknown>;
}

export interface FooterBrand {
  name?:    string;
  tagline?: string;
  href?:    string;
  style?:   Record<string, unknown>;
  logoWidth?: number;
}

export interface FooterConfig {
  brand?:       FooterBrand;
  columns?:     FooterColumn[];
  socials?:     FooterLink[];
  copyright?:   string | { by?: string; url?: string; text?: string };
  email?:       string;
  emailLabel?:  string;
  description?: string | null;
  newsletter?: {
    enabled?: boolean;
    label?: string;
    buttonText?: string;
    placeholder?: string;
  };
  style?: {
    className?: string;
    textColor?: string;
    backgroundColor?: string;
  };
  [key: string]: unknown;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildHeaders(projectId: string): HeadersInit {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${CMS_API_KEY}`,
    'Project-Id': projectId,
  };
}

function htmlToExcerpt(html: string, maxLen = 160): string {
  const plain = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return plain.length > maxLen ? plain.slice(0, maxLen) + '…' : plain;
}

function formatDate(value?: string | null): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

function pickBody(fields: Record<string, unknown>): string {
  return (
    (fields['long-text'] as string) ||
    (fields['content']   as string) ||
    (fields['body']      as string) ||
    (fields['html']      as string) ||
    ''
  );
}

function pickImage(fields: Record<string, unknown>): string | null {
  const media = fields.media as CmsMediaItem[] | undefined;
  if (Array.isArray(media) && media[0]?.url) return media[0].url;
  return (
    (fields.image     as string) ||
    (fields.cover     as string) ||
    (fields.thumbnail as string) ||
    null
  );
}

function pickAuthor(fields: Record<string, unknown>): BlogAuthor | null {
  const authorField = fields.author || fields.created_by || fields.user;
  if (!authorField) return null;

  if (typeof authorField === 'string') return { name: authorField };

  const af = authorField as Record<string, unknown>;
  if (af.name) {
    return {
      name: af.name as string,
      avatar: (af.avatar || af.image || null) as string | null,
    };
  }

  if (af.first_name || af.last_name) {
    const name = `${af.first_name || ''} ${af.last_name || ''}`.trim();
    return { name, avatar: (af.avatar || null) as string | null };
  }

  return null;
}

function normaliseEntry(entry: CmsEntry): BlogPost {
  const { fields } = entry;
  const title = (fields.title || fields.name || 'Untitled') as string;
  const body  = pickBody(fields);
  const image = pickImage(fields);
  const author = pickAuthor(fields);

  const slug =
    (entry.slug as string) ||
    (fields.slug as string) ||
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const excerpt = htmlToExcerpt(body || (fields.excerpt as string) || '');

  return {
    id:           entry.uuid,
    title,
    slug,
    body,
    excerpt,
    image,
    published_at: formatDate((entry.published_at || fields.published_at) as string),
    author,
    likes:    Number(fields.likes    ?? 0),
    comments: Number(fields.comments ?? 0),
    shares:   Number(fields.shares   ?? 0),
  };
}

async function parseEntriesResponse(response: Response): Promise<CmsEntry[]> {
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`CMS error ${response.status}: ${text}`);
  }
  const json = await response.json();
  if (Array.isArray(json)) return json as CmsEntry[];
  if (Array.isArray(json?.data)) return json.data as CmsEntry[];
  throw new Error('Unexpected CMS response shape');
}

// ── Public API ─────────────────────────────────────────────────────────────────

export async function fetchBlogs(
  collectionSlug = 'blogs',
  projectId = CMS_PROJECT_ID,
): Promise<BlogPost[]> {
  const url = `${CMS_BASE_URL}/api/${collectionSlug}`;
  const response = await fetch(url, { method: 'GET', headers: buildHeaders(projectId) });
  const entries = await parseEntriesResponse(response);
  return entries.map(normaliseEntry);
}

export async function fetchCollectionsIndex(
  projectId = CMS_PROJECT_ID,
): Promise<CmsCollectionMeta[]> {
  const url = `${CMS_BASE_URL}/api/collections`;
  const response = await fetch(url, { method: 'GET', headers: buildHeaders(projectId) });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`CMS error ${response.status}: ${text}`);
  }

  const json = await response.json();

  if (Array.isArray(json)) {
    return json.map((c: Record<string, unknown>) => ({
      slug: (c.slug ?? c.id ?? c.name) as string,
      name: (c.name ?? c.slug ?? c.id) as string,
      type: c.type as string | undefined,
    }));
  }

  if (json && typeof json === 'object') {
    return Object.keys(json).map((key) => {
      const value = (json as Record<string, unknown>)[key] as Record<string, unknown> | undefined;
      return {
        slug: key,
        name: (value?.name ?? key) as string,
        type: value?.type as string | undefined,
      };
    });
  }

  throw new Error('Unexpected collections index shape');
}

export async function fetchBlogById(
  uuid: string,
  collectionSlug = 'blogs',
  projectId = CMS_PROJECT_ID,
): Promise<BlogPost> {
  const url = `${CMS_BASE_URL}/api/${collectionSlug}/${uuid}`;
  const response = await fetch(url, { method: 'GET', headers: buildHeaders(projectId) });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`CMS error ${response.status}: ${text}`);
  }

  const json = await response.json();
  const entry: CmsEntry = Array.isArray(json) ? json[0] : (json.data ?? json);
  return normaliseEntry(entry);
}

export async function fetchBlogBySlug(
  slug: string,
  collectionSlug = 'blogs',
  projectId = CMS_PROJECT_ID,
): Promise<BlogPost> {
  const directUrl = `${CMS_BASE_URL}/api/${collectionSlug}/${slug}`;

  try {
    const direct = await fetch(directUrl, { method: 'GET', headers: buildHeaders(projectId) });
    if (direct.ok) {
      const json = await direct.json();
      const entry: CmsEntry = Array.isArray(json) ? json[0] : (json.data ?? json);
      return normaliseEntry(entry);
    }
  } catch {
    // ignore and fall back
  }

  const posts = await fetchBlogs(collectionSlug, projectId);
  const match = posts.find((p) => p.slug === slug);
  if (!match) throw new Error(`Blog with slug "${slug}" not found`);
  return match;
}

export async function fetchRawCollection(
  collectionSlug: string,
  projectId = CMS_PROJECT_ID,
): Promise<unknown> {
  const url = `${CMS_BASE_URL}/api/${collectionSlug}`;
  const response = await fetch(url, { method: 'GET', headers: buildHeaders(projectId) });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`CMS error ${response.status}: ${text}`);
  }
  return response.json();
}

function ensureRootKey<T>(value: unknown, rootKey: string): T {
  let obj: unknown = value;
  if (typeof obj === 'string') obj = JSON.parse(obj);
  if (typeof obj !== 'object' || obj === null) throw new Error('Config is not an object');
  if (!(rootKey in (obj as object))) throw new Error(`Missing root key "${rootKey}"`);
  return obj as T;
}

async function fetchCmsJson<T>(
  collectionSlug: string,
  rootKey: string,
  projectId = CMS_PROJECT_ID,
): Promise<T> {
  const url = `${CMS_BASE_URL}/api/${collectionSlug}`;
  const response = await fetch(url, { method: 'GET', headers: buildHeaders(projectId) });
  const entries = await parseEntriesResponse(response);
  if (!entries.length) throw new Error(`No entries in collection "${collectionSlug}"`);

  const fields = entries[0].fields || {};
  const preferredKeys = ['json', 'config', collectionSlug, 'data', 'content'];

  for (const key of preferredKeys) {
    if (fields[key]) return ensureRootKey<T>(fields[key], rootKey);
  }

  for (const value of Object.values(fields)) {
    try { return ensureRootKey<T>(value, rootKey); } catch { /* continue */ }
  }

  throw new Error(`No JSON config with root key "${rootKey}" found in "${collectionSlug}"`);
}

export async function fetchHeader(
  collectionSlug = 'header',
  projectId = CMS_PROJECT_ID,
): Promise<HeaderConfig> {
  const config = await fetchCmsJson<HeaderConfig>(collectionSlug, 'logo', projectId);
  return { logo: config.logo, nav_items: config.nav_items, cta_button: config.cta_button };
}

export async function fetchFooter(
  collectionSlug = 'footer',
  projectId = CMS_PROJECT_ID,
): Promise<FooterConfig> {
  return fetchCmsJson<FooterConfig>(collectionSlug, 'brand', projectId);
}
