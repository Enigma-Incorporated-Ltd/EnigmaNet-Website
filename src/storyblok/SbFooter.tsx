import { Link } from 'react-router-dom';
import { useSiteConfig } from './useSiteConfig';

function renderRichTextPlain(doc: { content?: Array<{ content?: Array<{ text?: string }> }> } | null | undefined): string {
  if (!doc?.content) return '';
  return doc.content
    .flatMap((node) => node.content ?? [])
    .map((leaf) => leaf.text ?? '')
    .join('');
}

export default function SbFooter() {
  const config = useSiteConfig();

  const isLight = config?.footer_light;
  const footerBg = isLight ? 'var(--primary-background)' : 'var(--primary-dark)';
  const textPrimary = isLight ? 'var(--primary-dark)' : '#ffffff';
  const textSecondary = isLight ? '#555' : 'rgba(255,255,255,0.6)';
  const borderColor = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)';

  const slugToPath = (slug: string) => {
    if (!slug || slug === 'home') return '/';
    return `/${slug.replace(/\/$/, '')}`;
  };

  const footlineText = config?.footer_headline?.map((s) => s.text).join('') ?? '';
  const aboutText = renderRichTextPlain(
    config?.footer_about as { content?: Array<{ content?: Array<{ text?: string }> }> } | null
  );

  return (
    <footer
      style={{
        background: footerBg,
        color: textPrimary,
        padding: '80px 0 0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Decorative blob — matches the demo's footer green blob */}
      {config?.footer_decoration && (
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-60px',
            width: '320px',
            height: '320px',
            background: 'var(--highlight-1)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            opacity: 0.95,
            pointerEvents: 'none',
          }}
        />
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row gy-5">
          {/* Left: headline + about */}
          <div className="col-12 col-lg-5">
            {footlineText && (
              <h2
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  color: textPrimary,
                  maxWidth: '400px',
                }}
              >
                {footlineText}
              </h2>
            )}
            {aboutText && (
              <p
                style={{
                  color: textSecondary,
                  fontSize: '0.975rem',
                  lineHeight: 1.75,
                  maxWidth: '360px',
                }}
              >
                {aboutText}
              </p>
            )}
          </div>

          {/* Right: nav columns */}
          <div className="col-12 col-lg-7">
            <div className="row g-4">
              {(config?.footer_nav_2?.length ?? 0) > 0 && (
                <div className="col-6 col-md-4">
                  {config?.footer_nav_2_headline && (
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: textSecondary,
                        marginBottom: '18px',
                      }}
                    >
                      {config.footer_nav_2_headline}
                    </p>
                  )}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {config?.footer_nav_2?.map((item) => (
                      <li key={item._uid}>
                        <Link
                          to={slugToPath(item.link?.cached_url ?? '')}
                          style={{
                            textDecoration: 'none',
                            color: isLight ? '#333' : 'rgba(255,255,255,0.8)',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(config?.footer_nav_3?.length ?? 0) > 0 && (
                <div className="col-6 col-md-4">
                  {config?.footer_nav_3_headline && (
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: textSecondary,
                        marginBottom: '18px',
                      }}
                    >
                      {config.footer_nav_3_headline}
                    </p>
                  )}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {config?.footer_nav_3?.map((item) => (
                      <li key={item._uid}>
                        <Link
                          to={slugToPath(item.link?.cached_url ?? '')}
                          style={{
                            textDecoration: 'none',
                            color: isLight ? '#333' : 'rgba(255,255,255,0.8)',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: '56px',
            paddingTop: '20px',
            paddingBottom: '24px',
            borderTop: `1px solid ${borderColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '0.8rem',
              color: textSecondary,
              fontStyle: 'italic',
            }}
          >
            Made with love{' '}
            <span style={{ color: 'var(--highlight-1)', fontStyle: 'normal', fontWeight: 700 }}>
              Storyblok team!
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
