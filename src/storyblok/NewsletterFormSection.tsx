import { storyblokEditable } from '@storyblok/react';
import { useState, type FormEvent } from 'react';
import StoryblokButton from './StoryblokButton';
import type { StoryblokButtonBlok } from './StoryblokButton';

interface HeadlineSegment {
  _uid: string;
  text: string;
  highlight: string;
}

type HeadlineField = HeadlineSegment | HeadlineSegment[] | undefined;

interface NewsletterBlok {
  _uid: string;
  component: string;
  headline: HeadlineField;
  button?: StoryblokButtonBlok | StoryblokButtonBlok[];
  buttons?: StoryblokButtonBlok[];
  /** Optional CMS placeholder; demo default enjoy@storyblok.com */
  email_placeholder?: string;
  input_placeholder?: string;
}

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
          color: useHighlight ? `var(--${token})` : '#ffffff',
        }}
      >
        {seg.text}{' '}
      </span>
    );
  });
}

function firstButton(blok: NewsletterBlok): StoryblokButtonBlok | undefined {
  if (blok.buttons?.[0]) return blok.buttons[0];
  const b = blok.button;
  if (!b) return undefined;
  const arr = Array.isArray(b) ? b : [b];
  return arr[0];
}

export default function NewsletterFormSection({ blok }: { blok: NewsletterBlok }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const cta = firstButton(blok);
  const placeholder =
    blok.email_placeholder ||
    blok.input_placeholder ||
    'enjoy@storyblok.com';

  return (
    <section {...storyblokEditable(blok)} style={{ background: '#ffffff', padding: '48px 0' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'var(--rounded_xl)',
            background: 'var(--primary-dark)',
            padding: 'clamp(2rem, 5vw, 6rem)',
            color: '#fff',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 'min(280px, 45vw)',
              height: 'min(280px, 45vw)',
              background: 'var(--highlight-1)',
              borderRadius: '50% 40% 60% 50%',
              opacity: 0.35,
              transform: 'translate(25%, 25%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
            aria-hidden
          />

          <div className="position-relative text-center" style={{ zIndex: 1 }}>
            {blok.headline && (
              <h2
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  fontWeight: 900,
                  lineHeight: 1.2,
                  marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
                  maxWidth: '36rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {renderHeadline(blok.headline)}
              </h2>
            )}

            {submitted ? (
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)' }}>
                Thank you! We&apos;ll be in touch.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-stretch align-items-md-center mx-auto"
                  style={{ maxWidth: '640px' }}
                >
                  <label htmlFor={`nl-email-${blok._uid}`} className="visually-hidden">
                    Your email
                  </label>
                  <input
                    id={`nl-email-${blok._uid}`}
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '16px 22px',
                      borderRadius: 'var(--rounded_md)',
                      border: 'none',
                      fontSize: '1rem',
                      outline: 'none',
                      color: 'var(--primary-dark)',
                    }}
                  />
                  {cta?.label?.trim() ? (
                    <StoryblokButton blok={cta} nativeType="submit" />
                  ) : (
                    <button
                      type="submit"
                      style={{
                        padding: '16px 28px',
                        borderRadius: 'var(--rounded_md)',
                        border: 'none',
                        background: 'var(--highlight-1)',
                        color: 'var(--primary-dark)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-family-display)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Subscribe
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
