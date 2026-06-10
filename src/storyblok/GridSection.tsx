import { blokEditable } from './blokEditable';
import PriceCard from './PriceCard';

interface GridCardIcon {
  _uid: string;
  component: 'grid-card';
  label: string;
  text: string;
  icon?: { filename: string; alt: string };
  icon_width: string;
  /** Full-bleed-style image in CMS — render inside the card, not as the card background */
  background_image?: { filename: string; alt?: string };
  /** Demo repo sometimes names this field `image` */
  image?: { filename: string; alt?: string };
}

interface PriceCardBlok {
  _uid: string;
  component: 'price-card';
}

type GridSectionCard = GridCardIcon | (PriceCardBlok & Record<string, unknown>);

interface HeadlineSegment {
  _uid: string;
  text: string;
  highlight: string;
}

interface ButtonBlok {
  _uid: string;
  label: string;
  link: { cached_url: string };
}

interface GridSectionBlok {
  _uid: string;
  component: string;
  headline: HeadlineSegment | HeadlineSegment[];
  lead: string;
  cards: GridSectionCard[];
  button?: ButtonBlok | ButtonBlok[];
  cols: string;
  background_color: string;
}

interface GridSectionProps {
  blok: GridSectionBlok;
}

const BG_MAP: Record<string, string> = {
  'primary-background': 'var(--primary-background)',
  'background-1': 'var(--background-1)',
  'background-2': 'var(--background-2)',
  'background-3': 'var(--background-3)',
  'background-4': 'var(--background-4)',
  'background-5': 'var(--background-5)',
  'background-6': 'var(--background-6)',
  'background-7': 'var(--background-7)',
  'background-8': 'var(--background-8)',
  'background-9': 'var(--background-9)',
  'background-10': 'var(--background-10)',
  'primary-dark': 'var(--primary-dark)',
  white: '#ffffff',
};

function renderHeadline(headline: HeadlineSegment | HeadlineSegment[] | undefined) {
  if (!headline) return null;
  const segments = Array.isArray(headline) ? headline : [headline];
  return segments.map((seg) =>
    seg.highlight && seg.highlight !== 'none' ? (
      <span key={seg._uid} style={{ color: 'var(--primary-highlight)' }}>
        {seg.text}
      </span>
    ) : (
      <span key={seg._uid}>{seg.text} </span>
    )
  );
}

export default function GridSection({ blok }: GridSectionProps) {
  const bg = BG_MAP[blok.background_color] ?? 'var(--primary-background)';

  const endCta = Array.isArray(blok.button) ? blok.button[0] : blok.button;

  return (
    <section {...blokEditable(blok)} style={{ background: bg, padding: '80px 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            {renderHeadline(blok.headline)}
          </h2>
          {blok.lead && (
            <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 32px' }}>
              {blok.lead}
            </p>
          )}
        </div>

        <div className="row g-4">
          {blok.cards?.map((card) => {
            const colSpan = Math.floor(12 / Math.min(parseInt(blok.cols) || 3, 4));
            const c = card as GridSectionCard;

            return (
              <div key={c._uid} className={`col-12 col-md-6 col-lg-${colSpan}`}>
                {c.component === 'price-card' ? (
                  <PriceCard blok={c as never} />
                ) : (
                  (() => {
                    const card = c as GridCardIcon;
                    const photoUrl =
                      card.background_image?.filename || card.image?.filename;
                    const photoAlt =
                      card.background_image?.alt || card.image?.alt || '';
                    const iconUrl = card.icon?.filename;

                    return (
                      <div
                        style={{
                          background: '#ffffff',
                          borderRadius: 'var(--rounded_2xl)',
                          padding: '32px',
                          height: '100%',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                          position: 'relative',
                          overflow: 'hidden',
                          border: '1px solid rgba(0,0,0,0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {iconUrl ? (
                          <img
                            src={card.icon!.filename}
                            alt={card.icon!.alt ?? ''}
                            width={parseInt(card.icon_width) || 64}
                            style={{ marginBottom: '20px', display: 'block', height: 'auto' }}
                          />
                        ) : photoUrl ? (
                          <div
                            style={{
                              marginBottom: '20px',
                              borderRadius: 'var(--rounded_lg)',
                              overflow: 'hidden',
                              height: '140px',
                              width: '100%',
                              flexShrink: 0,
                              background: 'var(--primary-background)',
                            }}
                          >
                            <img
                              src={photoUrl}
                              alt={photoAlt}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                              }}
                            />
                          </div>
                        ) : null}

                        <h4
                          style={{
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            marginBottom: '10px',
                            color: 'var(--primary-dark)',
                            fontFamily: 'var(--font-family-display)',
                          }}
                        >
                          {card.label}
                        </h4>
                        <p
                          style={{
                            color: '#666',
                            fontSize: '0.95rem',
                            lineHeight: 1.65,
                            margin: 0,
                            flex: 1,
                          }}
                        >
                          {card.text}
                        </p>
                      </div>
                    );
                  })()
                )}
              </div>
            );
          })}
        </div>

        {endCta?.label && (
          <div className="text-center mt-5">
            <a
              href={endCta.link?.cached_url ? `/${endCta.link.cached_url}` : '#'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '14px 36px',
                borderRadius: 'var(--rounded_full)',
                background: 'var(--primary-dark)',
                color: '#fff',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              {endCta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
