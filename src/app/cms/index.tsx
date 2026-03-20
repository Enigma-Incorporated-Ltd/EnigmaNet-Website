// ─── CMS Project Viewer ───────────────────────────────────────────────────────
// Accessible at: /cms
// No dependency on the main site layout – uses its own header/footer from CMS.
// Project ID is read automatically from VITE_CMS_PROJECT_ID in .env
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useState } from 'react';
import {
  type BlogPost,
  type CmsCollectionMeta,
  type FooterConfig,
  type HeaderConfig,
  fetchBlogs,
  fetchCollectionsIndex,
  fetchFooter,
  fetchHeader,
  fetchRawCollection,
} from '@/services/cmsViewApi';

import './cms.css';

// ── tiny state wrapper ────────────────────────────────────────────────────────
type LS<T> = { loading: boolean; error: string | null; data: T | null };
const init = <T,>(): LS<T> => ({ loading: false, error: null, data: null });

// ── helpers ───────────────────────────────────────────────────────────────────
function looksLikeHtml(value: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

function extractRenderableHtml(value: unknown): string | null {
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
    for (const key of ['html', 'content', 'body', 'long-text', 'markup', 'template']) {
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

// ── Component ─────────────────────────────────────────────────────────────────
const CmsViewer: React.FC = () => {
  const [header,               setHeader]               = useState<LS<HeaderConfig>>(init());
  const [blogs,                setBlogs]                = useState<LS<BlogPost[]>>(init());
  const [footer,               setFooter]               = useState<LS<FooterConfig>>(init());
  const [active,               setActive]               = useState<BlogPost | null>(null);
  const [collections,          setCollections]          = useState<LS<CmsCollectionMeta[]>>(init());
  const [activeCollection,     setActiveCollection]     = useState<string | null>(null);
  const [activeCollectionData, setActiveCollectionData] = useState<LS<unknown>>(init());

  useEffect(() => {
    setHeader     ({ loading: true, error: null, data: null });
    setBlogs      ({ loading: true, error: null, data: null });
    setFooter     ({ loading: true, error: null, data: null });
    setCollections({ loading: true, error: null, data: null });

    const load = <T,>(
      fn: () => Promise<T>,
      set: React.Dispatch<React.SetStateAction<LS<T>>>,
    ) =>
      fn()
        .then(data => set({ loading: false, error: null, data }))
        .catch((e: unknown) =>
          set({ loading: false, error: e instanceof Error ? e.message : 'Error', data: null }),
        );

    // projectId defaults to VITE_CMS_PROJECT_ID inside cmsViewApi
    load(() => fetchHeader(),          setHeader);
    load(() => fetchBlogs(),           setBlogs);
    load(() => fetchFooter(),          setFooter);
    load(() => fetchCollectionsIndex(), setCollections);
  }, []);
console.log(footer);
  useEffect(() => {
    if (!activeCollection) return;
    setActiveCollectionData({ loading: true, error: null, data: null });
    fetchRawCollection(activeCollection)
      .then(data => setActiveCollectionData({ loading: false, error: null, data }))
      .catch((e: unknown) =>
        setActiveCollectionData({
          loading: false,
          error: e instanceof Error ? e.message : 'Failed to load collection',
          data: null,
        }),
      );
  }, [activeCollection]);

  const h    = header.data;
  const f    = footer.data;
  const posts = blogs.data ?? [];
  const selectedSlug = activeCollection?.toLowerCase() ?? null;
  const selectedHtml = extractRenderableHtml(activeCollectionData.data);
  const showBlogs   = selectedSlug === 'blogs';
  const showGeneric = Boolean(
    activeCollection && !showBlogs && selectedSlug !== 'header' && selectedSlug !== 'footer',
  );

  const renderSimpleLink = (link: { href?: string; label?: string; badge?: string }, key: React.Key) => (
    <a key={key} href={link.href ?? '#'} className="mega-link">
      <span>{link.label}</span>
      {link.badge && <span className="nav-badge">{link.badge}</span>}
    </a>
  );

  return (
    <div className="cms-root">
      <div className="site">

        {/* ══ HEADER ══ */}
        {h && (
          <header className="site-header">
            <div className="header-inner">
              <a href={h.logo?.href ?? '/'} className="site-logo">
                {h.logo?.image
                  ? <img src={h.logo.image} alt={h.logo.alt ?? 'Logo'} />
                  : <span>{h.logo?.text ?? (header.loading ? '…' : 'Site')}</span>}
              </a>

              <nav className="site-nav">
                {h.nav_items?.map((item, idx) => {
                  const t = item.type ?? (
                    item.columns || item.sectioned_columns ? 'mega-columns' :
                    item.links ? 'dropdown' : 'link'
                  );

                  if (t === 'link' && !item.columns && !item.sectioned_columns && !item.links) {
                    return (
                      <a key={item.label + (item.href ?? idx)} href={item.href ?? '#'} className="nav-link">
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <div className="nav-item" key={item.label + idx}>
                      <button className="nav-trigger" type="button">
                        <span>{item.label}</span>
                        <span className="nav-caret">▾</span>
                      </button>

                      <div className="nav-panel">
                        {t === 'mega-columns' && item.columns && (
                          <div className="mega-grid">
                            {item.columns.map((col, ci) => (
                              <div className="mega-col" key={ci}>
                                {col.map((link, li) => renderSimpleLink(link, `${ci}-${li}`))}
                              </div>
                            ))}
                          </div>
                        )}

                        {t === 'mega-sections' && item.sectioned_columns && (
                          <div className="mega-grid">
                            {item.sectioned_columns.map((col, ci) => (
                              <div className="mega-col" key={ci}>
                                {col.map((section, si) => (
                                  <div key={si} className="mega-section">
                                    {section.title && <div className="mega-heading">{section.title}</div>}
                                    {section.links?.map((link, li) => renderSimpleLink(link, `${ci}-${si}-${li}`))}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {t === 'dropdown' && item.links && (
                          <div className="dropdown-list">
                            {item.links.map((link, li) => renderSimpleLink(link, li))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </nav>

              {h.cta_button && (
                <a href={h.cta_button.href} className="site-cta">
                  {h.cta_button.label}
                </a>
              )}
            </div>
          </header>
        )}

        {/* ══ MAIN ══ */}
        <main className="site-main">

          {/* Collections index */}
          <section className="collections">
            <h2 className="section-title">Collections</h2>
            {collections.loading && <p className="muted">Loading collections…</p>}
            {collections.error   && <p className="api-error">{collections.error}</p>}
            {collections.data && (
              <div className="collection-chips">
                {collections.data.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    className={c.slug === activeCollection ? 'chip chip-active' : 'chip'}
                    onClick={() => setActiveCollection(prev => prev === c.slug ? null : c.slug)}
                  >
                    <span className="chip-label">{c.name ?? c.slug}</span>
                    {c.type && <span className="chip-type">{c.type}</span>}
                  </button>
                ))}
              </div>
            )}

          </section>

          {/* Blogs */}
          {showBlogs && active ? (
            <div className="post-view">
              <button className="back-btn" onClick={() => setActive(null)}>← Back to posts</button>
              {active.image && <img src={active.image} alt={active.title} className="post-hero" />}
              <div className="post-content">
                <h1>{active.title}</h1>
                <p className="post-meta">
                  {active.published_at}
                  {active.author?.name && <> · <span>{active.author.name}</span></>}
                </p>
                {active.body
                  ? <div className="post-body" dangerouslySetInnerHTML={{ __html: active.body }} />
                  : <p className="muted">No content available.</p>}
              </div>
            </div>
          ) : showBlogs ? (
            <div className="blog-section">
              <h2 className="section-title">Blog Posts</h2>
              {blogs.loading && (
                <div className="loading-grid">
                  {[1, 2, 3].map(i => <div key={i} className="skeleton-card" />)}
                </div>
              )}
              {blogs.error && <p className="api-error">{blogs.error}</p>}
              {!blogs.loading && posts.length === 0 && !blogs.error && (
                <p className="muted">No posts found for this project.</p>
              )}
              <div className="blog-grid">
                {posts.map(post => (
                  <article
                    key={post.id}
                    className="blog-card"
                    onClick={() => setActive(post)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && setActive(post)}
                  >
                    {post.image && (
                      <div className="card-img-wrap">
                        <img src={post.image} alt={post.title} className="card-img" />
                      </div>
                    )}
                    <div className="card-body">
                      <h3 className="card-title">{post.title}</h3>
                      <p className="card-meta">
                        {post.published_at}
                        {post.author?.name && <> · {post.author.name}</>}
                      </p>
                      <p className="card-excerpt">{post.excerpt}</p>
                      <span className="card-read">Read more →</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : showGeneric ? (
            <section className="generic-section">
              <h2 className="section-title">{activeCollection}</h2>
              {activeCollectionData.loading && <p className="muted">Loading collection…</p>}
              {activeCollectionData.error   && <p className="api-error">{activeCollectionData.error}</p>}
              {selectedHtml && (
                <div className="generic-html" dangerouslySetInnerHTML={{ __html: selectedHtml }} />
              )}
            </section>
          ) : null}
        </main>

        {/* ══ FOOTER ══ */}
        {f && (
          <footer
            className="site-footer"
            style={{
              backgroundColor: (f as Record<string, unknown> & { style?: { backgroundColor?: string } }).style?.backgroundColor,
              color:           (f as Record<string, unknown> & { style?: { textColor?: string } }).style?.textColor,
            }}
          >
            <div className="footer-inner">
              <div className="footer-brand">
                {f.brand?.name && (
                  <strong className="footer-name" style={f.brand.style as React.CSSProperties}>
                    {f.brand.name}
                  </strong>
                )}
                {f.brand?.tagline && <p className="footer-tagline">{f.brand.tagline}</p>}
                {f.description && typeof f.description === 'string' && (
                  <p className="footer-tagline">{f.description}</p>
                )}
                {f.email && (
                  <p className="footer-email">
                    <span>{f.emailLabel ?? 'Email'}:</span>{' '}
                    <a href={`mailto:${f.email}`}>{f.email}</a>
                  </p>
                )}
                {f.socials && f.socials.length > 0 && (
                  <div className="footer-socials">
                    {f.socials.map((s, i) => {
                      const label = s.label ?? s.text ?? s.title ?? s.name ?? s.by ?? '';
                      const href  = s.href  ?? s.url  ?? '#';
                      return (
                        <a key={label + i} href={href} className="social-link">{label}</a>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="footer-cols">
                {f.columns?.map((col, ci) => {
                  const colTitle = col.title ?? col.name ?? '';
                  const links    = col.links ?? col.items ?? [];
                  return (
                    <div key={colTitle + ci} className="footer-col">
                      {colTitle && (
                        <h4 className="footer-col-title" style={col.titleStyle as React.CSSProperties}>
                          {colTitle}
                        </h4>
                      )}
                      <ul>
                        {links.map((link, li) => {
                          const label = link.label ?? link.text ?? link.title ?? link.name ?? link.by ?? '';
                          const href  = link.href  ?? link.url  ?? '#';
                          return <li key={label + li}><a href={href}>{label}</a></li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {(f as { newsletter?: { enabled?: boolean; label?: string; placeholder?: string; buttonText?: string } }).newsletter?.enabled && (
              <div className="footer-inner footer-newsletter-wrap">
                <form className="footer-newsletter" onSubmit={e => e.preventDefault()}>
                  {(f as { newsletter?: { label?: string } }).newsletter?.label && (
                    <p className="newsletter-label">
                      {(f as { newsletter?: { label?: string } }).newsletter!.label}
                    </p>
                  )}
                  <div className="newsletter-row">
                    <input
                      type="email"
                      className="newsletter-input"
                      placeholder={
                        (f as { newsletter?: { placeholder?: string } }).newsletter?.placeholder ?? 'Your email'
                      }
                    />
                    <button type="submit" className="newsletter-btn">
                      {(f as { newsletter?: { buttonText?: string } }).newsletter?.buttonText ?? 'Subscribe'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="footer-copy">
              {typeof f.copyright === 'string' || f.copyright === undefined ? (
                f.copyright ?? `© ${new Date().getFullYear()} All rights reserved.`
              ) : (
                <>
                  {(f.copyright as { text?: string; url?: string; by?: string }).text}{' '}
                  {(f.copyright as { url?: string; by?: string }).url ? (
                    <a href={(f.copyright as { url?: string }).url}>
                      {(f.copyright as { by?: string }).by ?? 'Link'}
                    </a>
                  ) : (
                    (f.copyright as { by?: string }).by
                  )}
                </>
              )}
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default CmsViewer;
