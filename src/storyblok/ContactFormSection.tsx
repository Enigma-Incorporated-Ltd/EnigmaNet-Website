import { storyblokEditable } from '@storyblok/react';
import { useState } from 'react';

interface HeadlineSegment {
  _uid: string;
  text: string;
}

interface ContactFormBlok {
  _uid: string;
  component: string;
  headline: HeadlineSegment;
  name: string;
  position: string;
  quote: string;
  image: { filename: string; alt: string };
  button: { label: string };
}

interface ContactFormSectionProps {
  blok: ContactFormBlok;
}

export default function ContactFormSection({ blok }: ContactFormSectionProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    border: '1.5px solid #e0e0e0',
    borderRadius: '10px',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border 0.15s',
    background: '#fafafa',
  };

  return (
    <section {...storyblokEditable(blok)} style={{ background: '#ffffff', padding: '80px 0' }}>
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left: image + quote */}
          <div className="col-lg-5">
            {blok.image?.filename && (
              <div style={{ position: 'relative' }}>
                <img
                  src={blok.image.filename}
                  alt={blok.image.alt || ''}
                  style={{
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                  }}
                />
                {blok.quote && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-24px',
                      left: '20px',
                      right: '20px',
                      background: '#1a1a1a',
                      color: '#fff',
                      borderRadius: '16px',
                      padding: '20px 24px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    }}
                  >
                    <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: '#ddd' }}>
                      {blok.quote}
                    </p>
                    {blok.name && (
                      <p style={{ margin: '10px 0 0', fontWeight: 700, fontSize: '0.85rem', color: '#80efac' }}>
                        — {blok.name}
                        {blok.position && (
                          <span style={{ fontWeight: 400, color: '#aaa' }}>, {blok.position}</span>
                        )}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: form */}
          <div className="col-lg-6 offset-lg-1" style={{ paddingTop: blok.quote ? '48px' : '0' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '32px' }}>
              {blok.headline?.text}
            </h2>

            {submitted ? (
              <div
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #80efac',
                  borderRadius: '16px',
                  padding: '32px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>✓</div>
                <h4 style={{ fontWeight: 700 }}>Message sent!</h4>
                <p style={{ color: '#666', margin: 0 }}>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handle} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                />
                <textarea
                  placeholder="Your message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '14px 32px',
                    borderRadius: '50px',
                    border: 'none',
                    background: '#1a1a1a',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    transition: 'background 0.15s',
                  }}
                >
                  {blok.button?.label ?? 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
