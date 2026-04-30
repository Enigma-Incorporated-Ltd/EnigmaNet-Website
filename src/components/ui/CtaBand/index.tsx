import { Card, CardBody, Container } from 'react-bootstrap';
import PremiumButton from '@/components/ui/PremiumButton';
import contactBg from '@/assets/img/landing/digital-agency/contact-bg.png';
type ButtonConfig = {
  label: string;
  href: string;
  variant?: 'blue' | 'gold';
};
type CTAProps = {
  theme?: 'light' | 'dark';
  subHeadline?: string;
  headline?: string | React.ReactNode;
  headline2?: string;
  description?: string;
  showButtons?: boolean;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
};

const CTA = ({
  theme = 'light',
  subHeadline,
  headline,
  headline2,
  description,
  showButtons = false,
  primaryButton,
  secondaryButton,
}: CTAProps) => {
  const isDark = theme === 'dark';

  if (isDark) {
    return (
      <section className="container pt-3 pb-4 pb-md-5">
        <div
          className="position-relative rounded-4 overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #0d1117 0%, #0A0F19 50%, #060a10 100%)',
            border: '1px solid rgba(229, 174, 81, 0.18)',
            boxShadow:
              '0 0 0 1px rgba(229,174,81,0.06), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(229,174,81,0.04) inset',
          }}
        >
          <span
            className="position-absolute top-0 start-0 w-100"
            style={{
              height: '1px',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(229,174,81,0.6) 30%, rgba(229,174,81,0.9) 50%, rgba(229,174,81,0.6) 70%, transparent 100%)',
            }}
          />
          <span
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                'radial-gradient(ellipse at 15% 50%, rgba(229,174,81,0.08) 0%, transparent 55%), radial-gradient(ellipse at 85% 50%, rgba(21,123,201,0.08) 0%, transparent 55%)',
              pointerEvents: 'none',
            }}
          />
          <span
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E\")",
              backgroundSize: '180px',
              pointerEvents: 'none',
              opacity: 0.5,
            }}
          />

          <Card className="border-0 bg-transparent position-relative">
            <CardBody className="p-md-5 p-4 text-center py-5">
              {subHeadline && (
                <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                  <span
                    style={{
                      display: 'inline-block',
                      width: '28px',
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, #e5ae51)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      color: '#e5ae51',
                      textTransform: 'uppercase',
                      opacity: 0.85,
                    }}
                  >
                    {subHeadline}
                  </span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '28px',
                      height: '1px',
                      background: 'linear-gradient(90deg, #e5ae51, transparent)',
                    }}
                  />
                </div>
              )}

              <h3
                className="text-light mb-3"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  maxWidth: '70rem',
                }}
              >
                {headline}
                {headline2 && (
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #e5ae51 0%, #f5d080 50%, #c8862a 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {headline2}
                  </span>
                )}
              </h3>

              <p
                style={{
                  color: 'rgba(255,255,255,0.52)',
                  maxWidth: '560px',
                  margin: '0 auto',
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}
              >
                {description}
              </p>

              {showButtons && (primaryButton || secondaryButton) && (
                <>
                  <div
                    className="mx-auto my-4"
                    style={{
                      width: '48px',
                      height: '1px',
                      background:
                        'linear-gradient(90deg, transparent, rgba(229,174,81,0.4), transparent)',
                    }}
                  />
                  <div className="pb-md-2 d-flex flex-column flex-lg-row align-items-center  justify-content-center gap-4">
                    {primaryButton && (
                      <PremiumButton
                        label={primaryButton.label}
                        href={primaryButton.href}
                        variant={primaryButton.variant || 'blue'}
                        className="btn-lg shadow-lg btn-responsive "
                      />
                    )}

                    {secondaryButton && (
                      <PremiumButton
                        label={secondaryButton.label}
                        href={secondaryButton.href}
                        variant={secondaryButton.variant || 'gold'}
                        className="btn-lg shadow-lg btn-responsive"
                      />
                    )}
                  </div>
                </>
              )}
            </CardBody>
          </Card>

          <span
            className="position-absolute bottom-0 start-0 w-100"
            style={{
              height: '1px',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(229,174,81,0.2) 40%, rgba(229,174,81,0.4) 50%, rgba(229,174,81,0.2) 60%, transparent 100%)',
            }}
          />
        </div>
      </section>
    );
  }

  // ☀️ LIGHT MODE — Premium redesign
  return (
    <Container
      className="pt-3 pb-4 pb-md-5"
      style={{
        marginTop: '-156px',
        marginBottom: '150px',
        transform: 'translateY(156px)',
      }}
    >
      <div
        className="position-relative rounded-4 overflow-hidden"
        style={{
          boxShadow:
            '0 0 0 1px rgba(229,174,81,0.22), 0 24px 64px rgba(10,15,25,0.22), 0 4px 16px rgba(229,174,81,0.06)',
        }}
      >
        {/* Background image layer */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Light overlay — keeps it bright but rich */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(243,246,255,0.88) 40%, rgba(229,235,248,0.85) 100%)',
          }}
        />

        {/* Gold ambient glow — left */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'radial-gradient(ellipse at 10% 60%, rgba(229,174,81,0.12) 0%, transparent 50%), radial-gradient(ellipse at 90% 40%, rgba(21,123,201,0.08) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        {/* Noise grain */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
            backgroundSize: '180px',
            pointerEvents: 'none',
          }}
        />

        {/* Top gold rule */}
        <span
          className="position-absolute top-0 start-0 w-100"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(229,174,81,0.5) 30%, rgba(229,174,81,0.85) 50%, rgba(229,174,81,0.5) 70%, transparent 100%)',
            zIndex: 2,
          }}
        />

        {/* Left accent bar */}
        <span
          className="position-absolute top-0 start-0 h-100"
          style={{
            width: '3px',
            background:
              'linear-gradient(180deg, transparent 0%, rgba(229,174,81,0.7) 30%, rgba(229,174,81,0.9) 50%, rgba(229,174,81,0.7) 70%, transparent 100%)',
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div className="position-relative p-md-5 p-4 text-center py-5" style={{ zIndex: 1 }}>
          {/* Eyebrow */}
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <span
              style={{
                display: 'inline-block',
                width: '28px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #c8862a)',
              }}
            />
            <span
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: '#c8862a',
                textTransform: 'uppercase',
              }}
            >
              {subHeadline}
            </span>
            <span
              style={{
                display: 'inline-block',
                width: '28px',
                height: '1px',
                background: 'linear-gradient(90deg, #c8862a, transparent)',
              }}
            />
          </div>

          {/* Headline */}
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              color: '#0A0F19',
              marginBottom: '0.75rem',
              maxWidth: '70rem',
            }}
          >
            {headline}
            <span
              style={{
                background: 'linear-gradient(135deg, #c8862a 0%, #e5ae51 50%, #b8741a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {headline2}
            </span>
          </h3>

          {/* Body */}
          <p
            style={{
              color: 'rgba(10,15,25,0.55)',
              maxWidth: '560px',
              margin: '0 auto',
              fontSize: '0.95rem',
              fontWeight: 400,
              lineHeight: 1.75,
            }}
          >
            {description}
          </p>
          {showButtons && (primaryButton || secondaryButton) && (
            <>
              <div
                className="mx-auto my-4"
                style={{
                  width: '48px',
                  height: '1px',
                  background:
                    'linear-gradient(90deg, transparent, rgba(229,174,81,0.4), transparent)',
                }}
              />
              <div className="pb-md-2 d-flex flex-column flex-lg-row align-items-center  justify-content-center gap-4">
                {primaryButton && (
                  <PremiumButton
                    label={primaryButton.label}
                    href={primaryButton.href}
                    variant={primaryButton.variant || 'blue'}
                    className="btn-lg shadow-lg btn-responsive"
                  />
                )}

                {secondaryButton && (
                  <PremiumButton
                    label={secondaryButton.label}
                    href={secondaryButton.href}
                    variant={secondaryButton.variant || 'gold'}
                    className="btn-lg shadow-lg btn-responsive "
                  />
                )}
              </div>
            </>
          )}
        </div>

        {/* Bottom gold rule */}
        <span
          className="position-absolute bottom-0 start-0 w-100"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(229,174,81,0.3) 40%, rgba(229,174,81,0.55) 50%, rgba(229,174,81,0.3) 60%, transparent 100%)',
            zIndex: 2,
          }}
        />
      </div>
    </Container>
  );
};

export default CTA;
