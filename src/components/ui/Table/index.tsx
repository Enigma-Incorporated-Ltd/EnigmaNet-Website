import React from 'react';
import { useTheme } from '@/utils/useTheme';
import PremiumButton from '../PremiumButton';

interface Column {
  key: string;
  label: string;
}
type ButtonConfig = {
  label: string;
  href: string;
  variant?: 'blue' | 'gold';
  disableSentenceCase?: boolean;
};
interface ReusableTableProps {
  columns: Column[];
  data: Record<string, any>[];
  minWidth?: string;
  footerText?: string | React.ReactNode;
  showButtons?: boolean;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
  isbold?: boolean;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

const ReusableTable: React.FC<ReusableTableProps> = ({
  columns,
  data,
  minWidth = '900px',
  footerText,
  isbold,
  title,
  description,
  showButtons,
  primaryButton,
  secondaryButton,
}) => {
  const { theme } = useTheme();

  const thStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '20px 24px',
    fontSize: '18px',
    fontWeight: 700,
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    width: `${100 / columns.length}%`,
  };

  const tdStyle: React.CSSProperties = {
    padding: '20px 24px',
    fontSize: '16px',
    textAlign: 'center',
    lineHeight: '1.8',
    verticalAlign: 'middle',
    wordBreak: 'break-word',
  };

  return (
    <div className="container py-4">
      {title && (
        <h2
          className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2 pb-3"
          style={{ maxWidth: '70rem' }}
        >
          {title}
        </h2>
      )}
      {description && (
        <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-4">
          <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
            <span>{description}</span>
          </li>
        </ul>
      )}
      <div
        style={{
          overflowX: 'auto',
          border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e5e5e5',
          borderRadius: '5px',
          boxShadow: '0 1.875rem 7.5rem -.625rem rgba(124,125,152,.2)',
        }}
      >
        <table
          style={{
            width: '100%',
            margin: '0 auto',
            borderCollapse: 'collapse',
            tableLayout: 'fixed', // Equal column widths
            minWidth,
          }}
        >
          <thead>
            <tr>
              {columns.map(column => (
                <th
                  key={column.key}
                  style={{
                    ...thStyle,
                    border: '1px solid #d1d5db',
                    color: theme === 'dark' ? '#fff' : '#111',
                    background: theme === 'dark' ? 'rgba(255,255,255,0.03)' : '#f8fafc',
                  }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td
                    key={column.key}
                    style={{
                      ...tdStyle,
                      border: '1px solid #d1d5db',
                      color: theme === 'dark' ? '#fff' : '#111',
                      ...(colIndex === 0 && {
                        fontWeight: isbold ? 'bold' : 'normal',

                        fontSize: '18px',
                      }),
                    }}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footerText && (
        <div
          className="position-relative text-center mt-5 pt-4 text-muted fst-italic fs-3 d-flex flex-wrap justify-content-center mx-auto fw-semibold zindex-5"
          style={{ maxWidth: '55rem' }}
        >
          {footerText}
        </div>
      )}

      {/* CTA buttons */}
      {showButtons && (primaryButton || secondaryButton) && (
        <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-5">
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
    </div>
  );
};

export default ReusableTable;
