import { storyblokEditable } from '@storyblok/react';

interface HeadlineSegment {
  _uid: string;
  text: string;
}

interface ProductsSectionBlok {
  _uid: string;
  component: string;
  headline: HeadlineSegment | HeadlineSegment[];
  lead: string;
}

interface ProductsSectionProps {
  blok: ProductsSectionBlok;
}

function headlineText(h: HeadlineSegment | HeadlineSegment[] | undefined) {
  if (!h) return '';
  return Array.isArray(h) ? h.map((s) => s.text).join('') : h.text;
}

export default function ProductsSection({ blok }: ProductsSectionProps) {
  return (
    <section {...storyblokEditable(blok)} style={{ background: '#f5f5f7', padding: '80px 0' }}>
      <div className="container text-center">
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
          {headlineText(blok.headline)}
        </h2>
        {blok.lead && (
          <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 40px' }}>
            {blok.lead}
          </p>
        )}
        <div
          style={{
            display: 'inline-block',
            padding: '20px 32px',
            background: '#fff',
            borderRadius: '16px',
            color: '#999',
            fontSize: '0.95rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          Products will appear here once configured in Storyblok.
        </div>
      </div>
    </section>
  );
}
