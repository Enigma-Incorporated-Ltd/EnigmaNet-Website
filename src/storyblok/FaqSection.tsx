import { renderRichText, storyblokEditable } from '@storyblok/react';
import { useState } from 'react';

interface FaqItem {
  _uid: string;
  question: string;
  answer: string;
}

interface RichDocAnswer {
  type: string;
  content?: unknown[];
}

interface FaqEntryBlok {
  _uid: string;
  component: 'faq-entry';
  question: string;
  answer: RichDocAnswer;
}

interface HeadlineSegment {
  _uid: string;
  text: string;
  highlight: string;
}

interface FaqSectionBlok {
  _uid: string;
  component: string;
  headline: HeadlineSegment | HeadlineSegment[];
  lead?: string;
  items: FaqItem[];
  faq_entries?: FaqEntryBlok[];
}

interface FaqSectionProps {
  blok: FaqSectionBlok;
}

function headlineText(h: HeadlineSegment | HeadlineSegment[] | undefined) {
  if (!h) return '';
  return Array.isArray(h) ? h.map((s) => s.text).join('') : h.text;
}

export default function FaqSection({ blok }: FaqSectionProps) {
  const [open, setOpen] = useState<string | null>(null);

  const items = (blok.faq_entries?.length
    ? blok.faq_entries.map((e) => ({ _uid: e._uid, question: e.question, answer: e.answer }))
    : (blok.items ?? []).filter((i) => i.question)) as Array<{
    _uid: string;
    question: string;
    answer: string | RichDocAnswer;
  }>;

  return (
    <section {...storyblokEditable(blok)} style={{ background: '#ffffff', padding: '80px 0', fontFamily: 'var(--font-family-body)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontFamily: 'var(--font-family-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, marginBottom: '16px', color: 'var(--primary-dark)', letterSpacing: '-0.02em' }}>
            {headlineText(blok.headline)}
          </h2>
          {blok.lead && (
            <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
              {blok.lead}
            </p>
          )}
        </div>

        <div style={{ maxWidth: '740px', margin: '0 auto' }}>
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item._uid}
                style={{
                  borderBottom: '1px solid rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpen(open === item._uid ? null : item._uid)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '22px 0',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--primary-dark)', fontFamily: 'var(--font-family-display)' }}>
                    {item.question}
                  </span>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: 'var(--rounded_full)',
                      background: open === item._uid ? 'var(--primary-dark)' : 'rgba(0,0,0,0.06)',
                      color: open === item._uid ? '#ffffff' : 'var(--primary-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      lineHeight: 1,
                      transform: open === item._uid ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.2s, background 0.2s',
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                {open === item._uid && (
                  <div style={{ color: '#555', lineHeight: 1.75, paddingBottom: '22px', margin: 0, fontSize: '0.975rem' }}>
                    {typeof item.answer === 'string' ? (
                      <p style={{ margin: 0 }}>{item.answer}</p>
                    ) : (
                      <div
                        style={{ margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: renderRichText(item.answer as never) }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#999', padding: '40px 0' }}>
              FAQ items will appear here once added in Storyblok.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
