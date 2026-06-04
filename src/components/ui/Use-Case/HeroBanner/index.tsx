import UseCaseButton from '@/components/ui/Use-Case/UseCaseButton';
import type { CSSProperties } from 'react';
import './style.css';
type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: { label: string; variant: 'blue' | 'white'; href: string }[];
  heroImage?: string;
  sectionBackground?: string;
  imgBackground?: CSSProperties;
  usecase?: string;
  rightCol?: React.ReactNode;
  leftCol?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  subtitleColor?: string;
};
const HeroBanner = ({
  title,
  description,
  buttons,
  heroImage,
  sectionBackground,
  imgBackground,
  subtitle,
  usecase,
  children,
  className = 'py-5',
  rightCol = 'col-lg-5',
  leftCol = 'col-lg-7',
  subtitleColor = '#0091FF',
}: Props) => {
  return (
    <section
      className={`${className}`}
      style={{
        background: sectionBackground
          ? sectionBackground
          : 'radial-gradient(283.6% 74.28% at 0% 0%, rgba(0, 86, 245, 0.20) 0%, rgba(13, 27, 41, 0.20) 100%), #0D1B29',
      }}
    >
      <div className="container px-3 usecase-title">
        <div className="row align-items-center g-5">
          {/* Left Content */}

          <div className={`${leftCol}`}>
            {usecase && (
              <span
                className="px-3 py-2 d-inline-block mb-4"
                style={{
                  borderRadius: '12px',
                  background: 'rgba(20, 123, 201, 0.40)',
                  color: '#1F9EFF',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                {usecase}
              </span>
            )}

            <h1
              className="fw-semibold text-white mb-3"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                lineHeight: '1.1',
              }}
            >
              {title}
            </h1>

            <h3
              className="mb-4"
              style={{
                color: subtitleColor,
                fontWeight: 500,
                fontSize: 'clamp(1.4rem, 2vw, 2.2rem)',
              }}
            >
              {subtitle}
            </h3>

            <p
              className="mb-5"
              style={{
                color: '#FFF',
                fontSize: '18px',
                lineHeight: '1.8',
                maxWidth: '920px',
              }}
            >
              {description}
            </p>

            <div className="d-flex flex-column justify-content-lg-start justify-content-md-center flex-sm-row gap-3 w-100 w-lg-auto">
              {buttons?.map((button, index) => (
                <UseCaseButton
                  key={index}
                  text={button.label}
                  variant={button.variant}
                  href={button.href}
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          {heroImage && (
            <div className={`${rightCol} text-center`} style={imgBackground ? imgBackground : {}}>
              <img src={heroImage} alt={title} width={650} height={550} className="img-fluid" />
            </div>
          )}
        </div>
      </div>
      {children}
    </section>
  );
};

export default HeroBanner;
