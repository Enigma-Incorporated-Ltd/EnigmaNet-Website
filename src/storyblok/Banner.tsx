import { blokEditable } from './blokEditable';
import StoryblokButton from './StoryblokButton';
import type { StoryblokButtonBlok } from './StoryblokButton';

interface HeadlineSegment {
  _uid: string;
  text: string;
  highlight: string;
}

interface ImageField {
  filename?: string;
  alt?: string;
}

export interface BannerBlokContent {
  _uid: string;
  component?: string;
  background_color?: string;
  headline?: HeadlineSegment | HeadlineSegment[];
  lead?: string;
  buttons?: StoryblokButtonBlok[];
  text_alignment?: string;
  background_image?: ImageField;
  /** Some spaces use `image` for the hero asset */
  image?: ImageField;
  background_image_cover?: boolean | string | number;
  background_image_alignment?: string;
  background_image_width?: string;
  background_video?: { filename?: string; alt?: string };
  video?: { filename?: string; alt?: string };
  [key: string]: import('@storyblok/react').SbBlokKeyDataTypes;
}

function bgFromToken(token: string | undefined): string {
  if (!token) return 'var(--primary-dark)';
  const map: Record<string, string> = {
    'primary-dark': 'var(--primary-dark)',
    'primary-background': 'var(--primary-background)',
    'primary-highlight': 'var(--primary-highlight)',
    'background-5': 'var(--background-5)',
    'background-1': 'var(--background-1)',
    white: '#ffffff',
  };
  return map[token] ?? `var(--${token})`;
}

/** Storyblok checkboxes are often omitted (→ full bleed) or sent as 1/0 */
function isCoverMode(cover: unknown): boolean {
  if (cover === false || cover === 0 || cover === '0' || cover === 'false') return false;
  if (cover === true || cover === 1 || cover === '1' || cover === 'true') return true;
  return true;
}

function pickImage(blok: BannerBlokContent): { filename: string; alt: string } | null {
  const a = blok.background_image?.filename ? blok.background_image : null;
  const b = blok.image?.filename ? blok.image : null;
  const img = a ?? b;
  if (!img?.filename) return null;
  return { filename: img.filename, alt: img.alt ?? '' };
}

function pickVideo(blok: BannerBlokContent): { filename: string; alt: string } | null {
  const v = blok.background_video?.filename ? blok.background_video : blok.video?.filename ? blok.video : null;
  if (!v?.filename) return null;
  return { filename: v.filename, alt: v.alt ?? '' };
}

function renderHeadline(
  headline: BannerBlokContent['headline'],
  lightText: boolean,
) {
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
            : lightText
              ? '#ffffff'
              : 'var(--primary-dark)',
        }}
      >
        {seg.text}{' '}
      </span>
    );
  });
}

export default function Banner({ blok }: { blok: BannerBlokContent }) {
  const bg = bgFromToken(blok.background_color);
  const video = pickVideo(blok);
  const image = pickImage(blok);
  const hasVideo = Boolean(video);
  const hasImage = Boolean(image);
  const coverMode = isCoverMode(blok.background_image_cover);
  const overlay = hasVideo || Boolean(hasImage && coverMode);
  const lightText = overlay;
  const centered = blok.text_alignment === 'center';
  const buttons = blok.buttons?.filter((b) => b.label?.trim()) ?? [];

  const imgAlign = blok.background_image_alignment || 'left';
  const imgWidth = blok.background_image_width || '100';
  const widthCap = imgWidth === '50' ? '50%' : imgWidth === '75' ? '75%' : '100%';

  const justifyMap: Record<string, 'flex-start' | 'center' | 'flex-end'> = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };
  const justifyContent = justifyMap[imgAlign] ?? 'flex-start';

  return (
    <section
      {...blokEditable(blok)}
      style={{
        position: 'relative',
        minHeight: 'min(600px, 85vh)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: bg,
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {/* Media sits in a dedicated layer so images are never clipped by wrong absolute math */}
      {(hasVideo || hasImage) && (
        <div
          aria-hidden={!hasVideo}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          {hasVideo && video && (
            <video
              src={video.filename}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          )}

          {!hasVideo && hasImage && image && coverMode && (
            <img
              src={image.filename}
              alt={image.alt}
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition:
                  imgAlign === 'right' ? 'right center' : imgAlign === 'center' ? 'center center' : 'left center',
                display: 'block',
              }}
            />
          )}

          {!hasVideo && hasImage && image && !coverMode && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent,
                padding: 'clamp(12px, 3vw, 32px)',
                boxSizing: 'border-box',
              }}
            >
              <img
                src={image.filename}
                alt={image.alt}
                decoding="async"
                style={{
                  maxWidth: `min(${widthCap}, 100%)`,
                  width: 'auto',
                  height: 'auto',
                  maxHeight: 'min(78vh, 560px)',
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0,
                }}
              />
            </div>
          )}
        </div>
      )}

      {overlay && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      )}

      <div
        className="container position-relative"
        style={{
          zIndex: 2,
          display: 'flex',
          justifyContent: centered ? 'center' : 'flex-start',
        }}
      >
        <div style={{ maxWidth: '48rem', textAlign: centered ? 'center' : 'left' }}>
          {blok.headline && (
            <h2
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: blok.lead ? '1.25rem' : '1.75rem',
              }}
            >
              {renderHeadline(blok.headline, lightText)}
            </h2>
          )}

          {blok.lead && (
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                lineHeight: 1.65,
                marginBottom: buttons.length ? '2rem' : 0,
                color: lightText ? 'rgba(255,255,255,0.92)' : '#555',
              }}
            >
              {blok.lead}
            </p>
          )}

          {buttons.length > 0 && (
            <div
              className={`d-flex flex-column flex-sm-row gap-3 ${centered ? 'justify-content-center' : ''}`}
            >
              {buttons.map((btn) => (
                <StoryblokButton key={btn._uid} blok={btn} pill />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
