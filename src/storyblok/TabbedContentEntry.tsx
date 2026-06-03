import { renderRichText, storyblokEditable } from '@storyblok/react';
import StoryblokButton from './StoryblokButton';
import type { StoryblokButtonBlok } from './StoryblokButton';

interface TabbedContentEntryBlok {
  _uid: string;
  component: string;
  headline: string;
  image?: { filename: string; alt?: string };
  description?: { type: string; content?: unknown[] };
  button?: StoryblokButtonBlok | StoryblokButtonBlok[];
}

function normalizeButtons(btn: TabbedContentEntryBlok['button']): StoryblokButtonBlok[] {
  if (!btn) return [];
  return Array.isArray(btn) ? btn : [btn];
}

export default function TabbedContentEntry({ blok }: { blok: TabbedContentEntryBlok }) {
  const buttons = normalizeButtons(blok.button);
  const descHtml = blok.description ? renderRichText(blok.description as never) : '';

  return (
    <section
      {...storyblokEditable(blok)}
      style={{
        borderRadius: 'var(--rounded_lg)',
        background: 'var(--primary-background)',
        color: 'var(--primary-dark)',
        padding: '1rem',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      <div className="row align-items-center g-4">
        {blok.image?.filename && (
          <div className="col-12 col-md-6 order-0 order-md-1 text-center text-md-end">
            <img
              src={blok.image.filename}
              alt={blok.image.alt ?? ''}
              style={{
                width: '100%',
                maxWidth: '520px',
                borderRadius: 'var(--rounded_lg)',
                objectFit: 'cover',
                maxHeight: '420px',
              }}
            />
          </div>
        )}

        <div className={`col-12 ${blok.image?.filename ? 'col-md-6 order-1 order-md-0' : ''}`}>
          {blok.headline && (
            <h3
              style={{
                fontFamily: 'var(--font-family-display)',
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 3vw, 1.85rem)',
                marginBottom: '1.25rem',
                color: 'var(--primary-dark)',
              }}
            >
              {blok.headline}
            </h3>
          )}

          {descHtml && (
            <div
              className="sb-prose"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#444',
              }}
              dangerouslySetInnerHTML={{ __html: descHtml }}
            />
          )}

          {buttons.length > 0 && (
            <div
              style={{
                marginTop: '1.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              {buttons.map((b) => (
                <StoryblokButton key={b._uid} blok={b} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
