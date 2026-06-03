import { storyblokEditable } from '@storyblok/react';

interface Testimonial {
  _uid: string;
  author: string;
  role?: string;
  text: string;
  avatar?: { filename: string; alt: string };
}

interface HeadlineSegment {
  _uid: string;
  text: string;
  highlight: string;
}

interface TestimonialsSectionBlok {
  _uid: string;
  component: string;
  headline: HeadlineSegment | HeadlineSegment[];
  lead: string;
  testimonials: Testimonial[];
}

interface TestimonialsSectionProps {
  blok: TestimonialsSectionBlok;
}

function headlineText(h: HeadlineSegment | HeadlineSegment[] | undefined) {
  if (!h) return '';
  return Array.isArray(h) ? h.map((s) => s.text).join('') : h.text;
}

export default function TestimonialsSection({ blok }: TestimonialsSectionProps) {
  const items = blok.testimonials?.filter((t) => t.text || t.author) ?? [];

  return (
    <section
      {...storyblokEditable(blok)}
      style={{ background: '#f5f5f7', padding: '80px 0' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            {headlineText(blok.headline)}
          </h2>
          {blok.lead && (
            <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
              {blok.lead}
            </p>
          )}
        </div>

        {items.length > 0 ? (
          <div className="row g-4">
            {items.map((t) => (
              <div key={t._uid} className="col-12 col-md-6 col-lg-4">
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '32px',
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  }}
                >
                  <p style={{ color: '#444', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>
                    "{t.text}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {t.avatar?.filename && (
                      <img
                        src={t.avatar.filename}
                        alt={t.avatar.alt || t.author}
                        style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                    )}
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem' }}>{t.author}</p>
                      {t.role && <p style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>{t.role}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row g-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-12 col-md-4">
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '32px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  }}
                >
                  <div style={{ height: '80px', background: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }} />
                  <div style={{ height: '20px', background: '#f0f0f0', borderRadius: '4px', width: '60%' }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
