interface NewsCard {
  id: string;
  category: string;
  headline: string;
  href?: string;
}
const newsCards: NewsCard[] = [
  {
    id: 'n1',
    category: 'Company news',
    headline: 'Jane Osborne-Buglear appointed CEO',
    href: '#',
  },
  {
    id: 'n2',
    category: 'Insights',
    headline: 'Why network performance is now a business-critical function',
    href: '#',
  },
  {
    id: 'n3',
    category: 'Events',
    headline: 'Enigma Net at upcoming industry events',
    href: '#',
  },
];

export function LatestUpdates() {
  return (
    <div
      style={{
        padding: '5rem 0',
      }}
    >
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col">
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: 3,
                color: '#2adeff',

                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Newsroom
            </p>
            <h2
              style={{
                color: '#e8f0ff',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 700,
                margin: 0,
              }}
            >
              Latest leadership updates
            </h2>
          </div>
          <div className="col-auto d-none d-md-block">
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                border: '1px solid rgba(56, 139, 253, 0.35)',
                color: '#88bbee',
                fontSize: '0.78rem',
                padding: '10px 20px',
                borderRadius: 8,
                textDecoration: 'none',

                letterSpacing: 0.5,
              }}
            >
              Visit newsroom →
            </a>
          </div>
        </div>
        <div className="row g-4">
          {newsCards.map(card => (
            <div key={card.id} className="col-12 col-md-4">
              <a
                href={card.href ?? '#'}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div
                  style={{
                    background: 'rgba(56,139,253,0.04)',
                    border: '1px solid rgba(56,139,253,0.35)',
                    borderRadius: 14,
                    padding: '1.5rem',
                    height: '100%',
                    transition: 'all .2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(56,139,253,0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(56,139,253,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(56,139,253,0.35)';
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: 2,
                      color: '#388bfd',

                      textTransform: 'uppercase',
                    }}
                  >
                    {card.category}
                  </span>
                  <p
                    style={{
                      color: '#e8f0ff',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      lineHeight: 1.45,
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {card.headline}
                  </p>
                  <span
                    style={{
                      color: '#2adeff',
                      fontSize: '0.75rem',

                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    Read more <span style={{ fontSize: 14 }}>→</span>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
