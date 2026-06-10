import { blokEditable } from './blokEditable';
interface LogoAsset {
  id: number;
  filename: string;
  alt: string;
}

interface LogoSectionBlok {
  _uid: string;
  component: string;
  lead: string;
  logos: LogoAsset[];
}

interface LogoSectionProps {
  blok: LogoSectionBlok;
}

export default function LogoSection({ blok }: LogoSectionProps) {
  return (
    <section
      {...blokEditable(blok)}
      style={{ background: '#ffffff', padding: '48px 0' }}
    >
      <div className="container">
        {blok.lead && (
          <p
            style={{
              textAlign: 'center',
              color: '#999',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            {blok.lead}
          </p>
        )}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          {blok.logos?.map((logo) => (
            <img
              key={logo.id}
              src={logo.filename}
              alt={logo.alt || ''}
              style={{
                height: '28px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(100%) opacity(0.5)',
                transition: 'filter 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLImageElement).style.filter = 'grayscale(0%) opacity(1)')}
              onMouseLeave={(e) => ((e.target as HTMLImageElement).style.filter = 'grayscale(100%) opacity(0.5)')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
