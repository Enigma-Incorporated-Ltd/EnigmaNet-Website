import { storyblokEditable } from '@storyblok/react';
import StoryblokButton from './StoryblokButton';
import type { StoryblokButtonBlok } from './StoryblokButton';

interface Multilink {
  cached_url?: string;
  url?: string;
  linktype?: string;
}

interface HeadlineSegment {
  _uid: string;
  text: string;
  highlight: string;
}

type HeadlineField = HeadlineSegment | HeadlineSegment[] | undefined;

interface HeroBlok {
  _uid: string;
  component: string;
  eyebrow?: string;
  headline: HeadlineField;
  text?: string;
  image?: { filename: string; alt?: string };
  /** Primary row of CTAs */
  buttons?: StoryblokButtonBlok[];
  /** Storyblok sometimes nests a single `button` block */
  button?: StoryblokButtonBlok | StoryblokButtonBlok[];
  /** Rare: top-level label + link used as first CTA */
  label?: string;
  link?: Multilink;
  layout?: string;
  background_color?: string;
  /** Right column wash on split layout (demo: darker purple band) */
  secondary_background_color?: string;
  text_alignment?: string;
  preserve_image_aspect_ratio?: boolean;
  image_decoration?: boolean;
}

function bgFromToken(token: string | undefined): string {
  if (!token) return 'var(--background-5)';
  const map: Record<string, string> = {
    'background-5': 'var(--background-5)',
    'background-1': 'var(--background-1)',
    'background-2': 'var(--background-2)',
    'background-3': 'var(--background-3)',
    'background-4': 'var(--background-4)',
    'background-6': 'var(--background-6)',
    'background-7': 'var(--background-7)',
    'background-8': 'var(--background-8)',
    'background-9': 'var(--background-9)',
    'background-10': 'var(--background-10)',
    'primary-background': 'var(--primary-background)',
    'primary-dark': 'var(--primary-dark)',
    'primary-highlight': 'var(--primary-highlight)',
    white: '#ffffff',
  };
  return map[token] ?? `var(--${token})`;
}

function normalizeHeroButtons(blok: HeroBlok): StoryblokButtonBlok[] {
  const list = Array.isArray(blok.buttons) ? blok.buttons : [];
  if (list.length > 0) return list;
  const nested = blok.button;
  if (nested) return Array.isArray(nested) ? nested : [nested];
  if (blok.label && blok.link) {
    return [
      {
        _uid: `${blok._uid}-hero-cta`,
        label: blok.label,
        link: blok.link as StoryblokButtonBlok['link'],
        style: 'default',
        background_color: 'primary-dark',
        text_color: 'white',
      },
    ];
  }
  return [];
}

function renderHeadline(headline: HeadlineField, isDarkBg: boolean) {
  if (!headline) return null;
  const segments = Array.isArray(headline) ? headline : [headline];
  return segments.map((seg) => {
    const token = seg.highlight?.trim();
    const useHighlight = Boolean(token && token !== 'none');
    return (
      <span
        key={seg._uid}
        style={{
          color: useHighlight
            ? `var(--${token})`
            : isDarkBg
              ? '#ffffff'
              : 'var(--primary-dark)',
        }}
      >
        {seg.text}{' '}
      </span>
    );
  });
}

export default function HeroSection({ blok }: { blok: HeroBlok }) {
  const bg = bgFromToken(blok.background_color);
  const isSplit = blok.layout === 'split';
  const isDarkBg = blok.background_color === 'primary-dark';
  const secondary = blok.secondary_background_color;
  const rightWash = secondary ? bgFromToken(secondary) : null;
  const centered = blok.text_alignment === 'center';
  const buttons = normalizeHeroButtons(blok);

  return (
    <section
      {...storyblokEditable(blok)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: bg,
        paddingTop: isSplit ? '5rem' : '4rem',
        paddingBottom: isSplit ? '4rem' : '5rem',
      }}
    >
      {isSplit && rightWash && (
        <div
          className="d-none d-lg-block"
          aria-hidden
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50%',
            height: '100%',
            background: rightWash,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div
          className={`row align-items-center gy-5 ${isSplit ? '' : 'justify-content-center'} ${centered && !isSplit ? 'text-center' : ''}`}
        >
          <div
            className={isSplit ? 'col-lg-6' : 'col-lg-8'}
            style={centered && !isSplit ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}
          >
            <div
              style={
                centered && !isSplit
                  ? { maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }
                  : { maxWidth: '48rem' }
              }
            >
              {blok.eyebrow && (
                <p
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    color: 'var(--primary-highlight)',
                    marginBottom: '16px',
                  }}
                >
                  {blok.eyebrow}
                </p>
              )}

              {blok.headline && (
                <h1
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginBottom: '24px',
                  }}
                >
                  {renderHeadline(blok.headline, isDarkBg)}
                </h1>
              )}

              {blok.text && (
                <p
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: '1.125rem',
                    color: isDarkBg ? 'rgba(255,255,255,0.85)' : '#555',
                    lineHeight: 1.75,
                    maxWidth: '540px',
                    marginBottom: '40px',
                    ...(centered && !isSplit ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
                  }}
                >
                  {blok.text}
                </p>
              )}

              {buttons.some((b) => b.label?.trim()) && (
                <div
                  className={`d-flex flex-column flex-sm-row flex-wrap gap-3 ${centered && !isSplit ? 'justify-content-center' : ''}`}
                >
                  {buttons
                    .filter((b) => b.label?.trim())
                    .map((btn) => (
                      <StoryblokButton key={btn._uid} blok={btn} pill />
                    ))}
                </div>
              )}
            </div>
          </div>

          {isSplit && blok.image?.filename && (
            <div className="col-lg-6 text-center text-lg-end">
              <img
                src={blok.image.filename}
                alt={blok.image.alt ?? ''}
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  height: blok.preserve_image_aspect_ratio ? 'auto' : 'min(520px, 55vh)',
                  objectFit: blok.preserve_image_aspect_ratio ? 'contain' : 'cover',
                  borderRadius: 'var(--rounded_lg)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.14)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
