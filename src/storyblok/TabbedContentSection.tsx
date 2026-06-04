import { storyblokEditable } from '@storyblok/react';
import { useState } from 'react';
import TabbedContentEntry from './TabbedContentEntry';
import type { StoryblokButtonBlok } from './StoryblokButton';

interface HeadlineSegment {
  _uid: string;
  text: string;
  highlight: string;
}

/** Storyblok stores headline as blocks (headline-segment), usually an array */
type HeadlineField = HeadlineSegment | HeadlineSegment[] | undefined;

interface TabbedEntryBlok {
  _uid: string;
  component?: string;
  headline: string;
  image?: { filename: string; alt?: string };
  description?: { type: string; content?: unknown[] };
  button?: StoryblokButtonBlok | StoryblokButtonBlok[];
}

interface TabbedContentBlok {
  _uid: string;
  component: string;
  headline: HeadlineField;
  lead: string;
  entries: TabbedEntryBlok[];
}

function renderHeadline(headline: HeadlineField) {
  if (!headline) return null;
  const segments = Array.isArray(headline) ? headline : [headline];
  return segments.map((seg) => {
    const token = seg.highlight?.trim();
    const useHighlight = token && token !== 'none';
    return (
      <span
        key={seg._uid}
        style={{
          color: useHighlight ? `var(--${token})` : 'var(--primary-dark)',
        }}
      >
        {seg.text}
        {' '}
      </span>
    );
  });
}

export default function TabbedContentSection({ blok }: { blok: TabbedContentBlok }) {
  const [active, setActive] = useState(0);
  const activeEntry = blok.entries?.[active];

  return (
    <section
      {...storyblokEditable(blok)}
      style={{ background: '#ffffff', padding: '80px 0', fontFamily: 'var(--font-family-body)' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          {blok.headline && (
            <h2
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                lineHeight: 1.15,
              }}
            >
              {renderHeadline(blok.headline)}
            </h2>
          )}
          {blok.lead && (
            <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
              {blok.lead}
            </p>
          )}
        </div>

        {/* Tab bar — matches demo: bordered flex row on large screens */}
        {blok.entries && blok.entries.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              margin: '0 0 2rem',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              border: '2px solid rgba(31,31,31,0.12)',
              borderRadius: 'var(--rounded_lg)',
            }}
            className="tabbed-content-tabs"
          >
            {blok.entries.map((entry, i) => (
              <li key={entry._uid} style={{ flex: 1, width: '100%' }}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  style={{
                    width: '100%',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: 'var(--rounded_md)',
                    padding: '12px 22px',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-family-display)',
                    background: active === i ? 'var(--primary-dark)' : 'transparent',
                    color: active === i ? '#ffffff' : 'var(--primary-dark)',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  {entry.headline}
                </button>
              </li>
            ))}
          </ul>
        )}

        {activeEntry && <TabbedContentEntry blok={activeEntry} />}

        <style>{`
          @media (min-width: 992px) {
            .tabbed-content-tabs {
              flex-direction: row !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
