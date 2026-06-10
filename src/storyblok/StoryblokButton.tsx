import { blokEditable } from './blokEditable';
import type { CSSProperties } from 'react';
interface Multilink {
  cached_url?: string;
  url?: string;
  linktype?: string;
  email?: string;
}

export interface StoryblokButtonBlok {
  _uid: string;
  component?: string;
  label: string;
  style?: string;
  size?: string;
  text_color?: string;
  background_color?: string;
  link?: Multilink;
}

function hrefFromLink(link?: Multilink): string {
  if (!link) return '#';
  if (link.linktype === 'email' && link.email) return `mailto:${link.email}`;
  if ((link.linktype === 'url' || link.linktype === 'asset') && link.url) return link.url;
  if (link.cached_url) return `/${String(link.cached_url).replace(/^\//, '')}`;
  if (link.url) return link.url;
  return '#';
}

function paddingForSize(size?: string) {
  switch (size) {
    case 'small':
      return '10px 22px';
    case 'large':
      return '16px 36px';
    default:
      return '12px 28px';
  }
}

function buttonStyles(
  blok: StoryblokButtonBlok,
  pill: boolean,
): CSSProperties {
  const bgToken = blok.background_color || 'primary-dark';
  let fgToken = blok.text_color || 'white';
  if (
    blok.style !== 'ghost' &&
    bgToken === 'primary-dark' &&
    fgToken === 'primary-dark'
  ) {
    fgToken = 'white';
  }
  const bg = `var(--${bgToken})`;
  const fg =
    fgToken === 'white'
      ? '#ffffff'
      : fgToken.startsWith('#')
        ? fgToken
        : `var(--${fgToken})`;
  const isGhost = blok.style === 'ghost';
  const pad = pill ? '14px 32px' : paddingForSize(blok.size);

  return {
    display: 'inline-flex',
    width: 'auto',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: pill ? 700 : 600,
    letterSpacing: '0.02em',
    textDecoration: 'none',
    borderRadius: pill ? 'var(--rounded_full)' : 'var(--rounded_md)',
    padding: pad,
    border: isGhost ? `2px solid ${bg}` : '2px solid transparent',
    background: isGhost ? 'transparent' : bg,
    color: fg,
    transition: 'transform 0.2s, background 0.2s, color 0.2s',
    fontFamily: 'var(--font-family-display)',
    fontSize: '0.95rem',
    cursor: 'pointer',
  };
}

export default function StoryblokButton({
  blok,
  pill = false,
  nativeType = 'link',
}: {
  blok: StoryblokButtonBlok;
  pill?: boolean;
  /** Use `submit` inside forms (renders &lt;button&gt; instead of &lt;a&gt;) */
  nativeType?: 'link' | 'submit';
}) {
  const href = hrefFromLink(blok.link);
  const styles = buttonStyles(blok, pill);

  if (nativeType === 'submit') {
    return (
      <button type="submit" {...blokEditable(blok)} style={styles}>
        {blok.label}
      </button>
    );
  }

  return (
    <a {...blokEditable(blok)} href={href} style={styles}>
      {blok.label}
    </a>
  );
}
