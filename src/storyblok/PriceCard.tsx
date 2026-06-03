import { renderRichText, storyblokEditable } from '@storyblok/react';

interface PriceCardButton {
  label?: string;
  link?: { cached_url?: string };
  background_color?: string;
  text_color?: string;
}

interface PriceCardBlok {
  _uid: string;
  component: 'price-card';
  price: string;
  headline?: string;
  text_1?: unknown;
  text_2?: unknown;
  most_popular?: boolean;
  button?: PriceCardButton | PriceCardButton[];
}

function pickButton(btn: PriceCardBlok['button']): PriceCardButton | undefined {
  if (!btn) return undefined;
  return Array.isArray(btn) ? btn[0] : btn;
}

export default function PriceCard({ blok }: { blok: PriceCardBlok }) {
  const cta = pickButton(blok.button);
  const badge = blok.most_popular ? 'Most popular' : null;

  const text1Html = blok.text_1 ? renderRichText(blok.text_1 as never) : '';
  const text2Html = blok.text_2 ? renderRichText(blok.text_2 as never) : '';

  const btnBg = cta?.background_color
    ? `var(--${cta.background_color})`
    : blok.most_popular ? 'var(--primary-dark)' : 'var(--primary-dark)';

  const btnText = cta?.text_color
    ? `var(--${cta.text_color})`
    : '#ffffff';

  return (
    <div
      {...storyblokEditable(blok)}
      style={{
        background: '#ffffff',
        borderRadius: 'var(--rounded_3xl)',
        padding: '32px',
        height: '100%',
        boxShadow: blok.most_popular
          ? '0 20px 60px rgba(98,81,184,0.18)'
          : '0 4px 24px rgba(0,0,0,0.06)',
        border: blok.most_popular
          ? '2px solid var(--primary-highlight)'
          : '1px solid rgba(0,0,0,0.05)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'var(--font-family-body)',
      }}
    >
      {badge && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--highlight-1)',
            color: 'var(--primary-dark)',
            fontWeight: 800,
            fontSize: '0.7rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '6px 14px',
            borderRadius: 'var(--rounded_full)',
          }}
        >
          {badge}
        </div>
      )}

      {blok.headline && (
        <p style={{ fontWeight: 800, fontSize: '1.1rem', margin: '0 0 12px', color: 'var(--primary-dark)', fontFamily: 'var(--font-family-display)' }}>
          {blok.headline}
        </p>
      )}

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '20px' }}>
        <h3 style={{
          fontSize: '2.6rem',
          fontWeight: 900,
          margin: 0,
          letterSpacing: '-0.03em',
          color: 'var(--primary-dark)',
          fontFamily: 'var(--font-family-display)',
        }}>
          ${blok.price}
        </h3>
        <span style={{ color: '#888', fontSize: '0.85rem' }}>/mo</span>
      </div>

      {text1Html && (
        <div
          className="sb-prose"
          style={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '16px' }}
          dangerouslySetInnerHTML={{ __html: text1Html }}
        />
      )}

      {text2Html && (
        <div
          className="sb-prose"
          style={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '28px' }}
          dangerouslySetInnerHTML={{ __html: text2Html }}
        />
      )}

      {cta?.label && (
        <a
          href={cta.link?.cached_url ? `/${cta.link.cached_url}` : '#'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 24px',
            borderRadius: 'var(--rounded_full)',
            textDecoration: 'none',
            fontWeight: 800,
            background: btnBg,
            color: btnText,
            width: '100%',
            fontSize: '0.95rem',
            fontFamily: 'var(--font-family-display)',
          }}
        >
          {cta.label}
        </a>
      )}
    </div>
  );
}
