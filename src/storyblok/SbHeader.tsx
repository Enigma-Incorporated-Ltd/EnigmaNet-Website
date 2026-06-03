import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteConfig } from './useSiteConfig';

export default function SbHeader() {
  const config = useSiteConfig();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = config?.header_light;
  const headerBg = isLight ? '#ffffff' : 'var(--primary-dark)';
  const textColor = isLight ? 'var(--primary-dark)' : '#ffffff';
  const activeColor = isLight ? 'var(--primary-dark)' : '#ffffff';
  const inactiveColor = isLight ? '#666' : 'rgba(255,255,255,0.7)';

  const slugToPath = (slug: string) => {
    if (!slug || slug === 'home') return '/';
    return `/${slug.replace(/\/$/, '')}`;
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: headerBg,
        borderBottom: isLight ? '1px solid rgba(0,0,0,0.06)' : 'none',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'var(--font-family-display)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          {config?.header_logo?.filename ? (
            <img
              src={config.header_logo.filename}
              alt={config.header_logo.alt || 'Logo'}
              style={{ height: '32px', width: 'auto' }}
            />
          ) : (
            <span style={{ fontWeight: 800, fontSize: '1.15rem', color: textColor }}>
              Brand New Day
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav
          className="d-none d-lg-flex"
          style={{ alignItems: 'center', gap: '4px', flex: 1, justifyContent: 'center' }}
        >
          {config?.header_nav?.map((item) => {
            const href = slugToPath(item.link?.cached_url ?? '');
            const active = location.pathname === href;
            return (
              <Link
                key={item._uid}
                to={href}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--rounded_full)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  color: active ? activeColor : inactiveColor,
                  background: active ? (isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.12)') : 'transparent',
                  transition: 'all 0.15s',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button(s) */}
        <div className="d-none d-lg-flex" style={{ gap: '10px', alignItems: 'center', flexShrink: 0 }}>
          {config?.header_buttons?.map((btn, i) => (
            <Link
              key={btn._uid}
              to={slugToPath(btn.link?.cached_url ?? '')}
              style={{
                padding: '9px 22px',
                borderRadius: 'var(--rounded_full)',
                background: i === 0 ? 'var(--highlight-1)' : 'transparent',
                color: i === 0 ? 'var(--primary-dark)' : textColor,
                border: i === 0 ? 'none' : `1.5px solid ${isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)'}`,
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="d-lg-none"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: textColor,
                borderRadius: '2px',
                transition: 'all 0.2s',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: headerBg,
            borderBottom: `1px solid ${isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)'}`,
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
          }}
        >
          {config?.header_nav?.map((item) => {
            const href = slugToPath(item.link?.cached_url ?? '');
            return (
              <Link
                key={item._uid}
                to={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '10px 14px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  color: textColor,
                  borderRadius: 'var(--rounded_md)',
                  fontSize: '1rem',
                }}
              >
                {item.label}
              </Link>
            );
          })}
          {config?.header_buttons?.map((btn, i) => (
            <Link
              key={btn._uid}
              to={slugToPath(btn.link?.cached_url ?? '')}
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: '8px',
                padding: '12px 20px',
                borderRadius: 'var(--rounded_full)',
                background: i === 0 ? 'var(--highlight-1)' : 'transparent',
                color: i === 0 ? 'var(--primary-dark)' : textColor,
                border: i === 0 ? 'none' : `1.5px solid ${textColor}`,
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
