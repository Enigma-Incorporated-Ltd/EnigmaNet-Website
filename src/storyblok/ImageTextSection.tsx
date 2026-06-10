import { blokEditable } from './blokEditable';
import { renderRichText } from '@storyblok/react';
import StoryblokButton from './StoryblokButton';
import type { StoryblokButtonBlok } from './StoryblokButton';

interface HeadlineSegment {
  _uid: string;
  text: string;
  highlight: string;
}

type HeadlineField = HeadlineSegment | HeadlineSegment[] | undefined;

interface ImageTextBlok {
  _uid: string;
  component: string;
  eyebrow?: string;
  headline: HeadlineField;
  text?: { type: string; content: unknown[] };
  image?: { filename: string; alt?: string };
  buttons?: StoryblokButtonBlok[];
  button?: StoryblokButtonBlok | StoryblokButtonBlok[];
  background_color?: string;
  reverse_desktop_layout?: boolean;
  reverse_mobile_layout?: boolean;
  preserve_image_aspect_ratio?: boolean;
  [key: string]: import('@storyblok/react').SbBlokKeyDataTypes;
}

const BG_MAP: Record<string, string> = {
  white: '#ffffff',
  'primary-background': 'var(--primary-background)',
  'background-5': 'var(--background-5)',
  'background-1': 'var(--background-1)',
  'background-2': 'var(--background-2)',
  'background-3': 'var(--background-3)',
  'background-4': 'var(--background-4)',
  'primary-dark': 'var(--primary-dark)',
};

function renderHeadline(headline: HeadlineField) {
  if (!headline) return null;
  const segments = Array.isArray(headline) ? headline : [headline];
  return segments.map((seg) => {
    const token = seg.highlight?.trim();
    const useHighlight = Boolean(token && token !== 'none');
    return (
      <span
        key={seg._uid}
        style={{
          color: useHighlight ? `var(--${token})` : 'var(--primary-dark)',
        }}
      >
        {seg.text}{' '}
      </span>
    );
  });
}

function normalizeButtons(
  b: ImageTextBlok['buttons'],
  single: ImageTextBlok['button'],
): StoryblokButtonBlok[] {
  if (b?.length) return b;
  if (single) return Array.isArray(single) ? single : [single];
  return [];
}

export default function ImageTextSection({ blok }: { blok: ImageTextBlok }) {
  const bg = BG_MAP[blok.background_color ?? ''] ?? 'var(--primary-background)';
  const buttons = normalizeButtons(blok.buttons, blok.button);
  const textHtml = blok.text ? renderRichText(blok.text as never) : '';

  /** Demo: reverse_desktop_layout true → image left, text right. False → text left, image right on large screens. */
  const swapDesktop = !blok.reverse_desktop_layout;
  const swapMobile = blok.reverse_mobile_layout;

  const imageOrderMobile = swapMobile ? 'order-1' : 'order-0';
  const textOrderMobile = swapMobile ? 'order-0' : 'order-1';
  const imageOrderLg = swapDesktop ? 'order-lg-2' : 'order-lg-0';
  const textOrderLg = swapDesktop ? 'order-lg-1' : 'order-lg-0';

  const imageColClass = `col-12 col-lg-6 ${imageOrderMobile} ${imageOrderLg}`;
  const textColClass = `col-12 col-lg-6 ${textOrderMobile} ${textOrderLg}`;

  return (
    <section
      {...blokEditable(blok)}
      style={{ background: bg, padding: '80px 0', fontFamily: 'var(--font-family-body)' }}
    >
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className={imageColClass}>
            {blok.image?.filename && (
              <img
                src={blok.image.filename}
                alt={blok.image.alt ?? ''}
                style={{
                  width: '100%',
                  maxHeight: '520px',
                  objectFit: blok.preserve_image_aspect_ratio ? 'contain' : 'cover',
                  borderRadius: 'var(--rounded_xl)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                }}
              />
            )}
          </div>

          <div className={textColClass}>
            {blok.eyebrow && (
              <p
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  color: 'var(--primary-highlight)',
                  marginBottom: '12px',
                }}
              >
                {blok.eyebrow}
              </p>
            )}

            {blok.headline && (
              <h2
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.65rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: textHtml ? '20px' : '24px',
                }}
              >
                {renderHeadline(blok.headline)}
              </h2>
            )}

            {textHtml && (
              <div
                className="sb-prose"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: '#444',
                  marginBottom: '28px',
                }}
                dangerouslySetInnerHTML={{ __html: textHtml }}
              />
            )}

            {buttons.filter((btn) => btn.label?.trim()).length > 0 && (
              <div className="d-flex flex-column flex-sm-row flex-wrap gap-3 align-items-start">
                {buttons
                  .filter((btn) => btn.label?.trim())
                  .map((btn) => (
                    <StoryblokButton key={btn._uid} blok={btn} pill />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
