import IconifyIcon from '@/components/IconifyIcon';
import { useTheme } from '@/utils/useTheme';
import PremiumButton from '../PremiumButton';
type ButtonConfig = {
  label: string;
  href: string;
  variant?: 'blue' | 'gold';
  disableSentenceCase?: boolean;
};
interface BulletPointProps {
  sectionTitle?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  data?: string[];
  isBullet?: boolean;
  bulletTitle?: string;
  bulletDescription?: string | React.ReactNode;
  showButtons?: boolean;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
}

const BulletPoint = ({
  sectionTitle,
  title,
  description,
  data,
  isBullet = false,
  bulletTitle,
  bulletDescription,
  showButtons = false,
  primaryButton,
  secondaryButton
}: BulletPointProps) => {
  const { theme } = useTheme();

  return (
    <section className="container py-4 py-lg-5">
      {/* Section Title */}
      {sectionTitle && (
        <h5
          className={`h3 text-center text-uppercase mb-3 text-${
            theme === 'dark' ? 'light-blue' : 'warning'
          }`}
        >
          {sectionTitle}
        </h5>
      )}

      {/* Title */}
      {title && (
        <h2 className="h1 text-center mx-auto mb-3" style={{ maxWidth: '70rem' }}>
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="text-center fs-lg mx-auto mb-5" style={{ maxWidth: '55rem' }}>
          {description}
        </p>
      )}

      {/* bulletTitle */}
      {bulletTitle && (
        <h2 className="h3 text-left mx-auto mb-3" style={{ maxWidth: '60rem' }}>
          {bulletTitle}
        </h2>
      )}
      {bulletDescription && (
        <p className="text-left  mx-auto fs-lg font-bold mb-3" style={{ maxWidth: '60rem' }}>
          {bulletDescription}
        </p>
      )}
      {/* List */}
      {data && data.length > 0 && (
        <ul
          className={`${isBullet ? 'ps-4 list-disc' : 'list-unstyled'} mx-auto`}
          style={{ maxWidth: '60rem' }}
        >
          {data.map((item, index) => (
            <li
              key={index}
              className={`${isBullet ? 'mb-3' : 'd-flex align-items-start mb-3'}  fs-lg`}
            >
              {!isBullet && (
                <IconifyIcon
                  icon="bx:check-circle"
                  className="text-light-blue me-3 mt-1 fs-5 flex-shrink-0"
                />
              )}

              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {/* CTA buttons */}
      {showButtons && (primaryButton || secondaryButton) && (
        <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
          {primaryButton && (
            <PremiumButton
              label={primaryButton.label}
              href={primaryButton.href}
              variant={primaryButton.variant ?? 'blue'}
              disableSentenceCase={primaryButton.disableSentenceCase}
              className="btn-lg"
            />
          )}
          {secondaryButton && (
            <PremiumButton
              label={secondaryButton.label}
              href={secondaryButton.href}
              variant={secondaryButton.variant ?? 'gold'}
              disableSentenceCase={secondaryButton.disableSentenceCase}
              className="btn-lg"
            />
          )}
        </div>
      )}
    </section>
  );
};

export default BulletPoint;
