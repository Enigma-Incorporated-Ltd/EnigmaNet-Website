import React from 'react';
import { useTheme } from '@/utils/useTheme';

const comparisonData = [
  {
    product: 'Connect',
    audience: 'Individuals and small teams',
    delivery: 'Software client + optional small router',
    salesModel: 'Self-serve online',
    bestFor: 'Remote workers, freelancers, power users',
  },
  {
    product: 'EDGE',
    audience: 'Businesses and sites',
    delivery: 'Hardware CPE',
    salesModel: 'Managed or co-managed',
    bestFor: 'Branches, campuses, industrial sites',
  },
  {
    product: 'ESC',
    audience: 'Enterprise / provider',
    delivery: 'VM, cloud or on-prem',
    salesModel: 'Enterprise design',
    bestFor: 'Multi-site, ISP, OEM and secure overlay deployments',
  },
];

const ComparisonTable = () => {
  const { theme } = useTheme();

  const thStyle: React.CSSProperties = {
    textAlign: 'left',
    padding: '20px 24px',
    fontSize: '18px',
    fontWeight: 700,
    whiteSpace: 'nowrap',
  };

  const tdStyle: React.CSSProperties = {
    padding: '20px 24px',
    fontSize: '16px',
    lineHeight: '1.8',
    verticalAlign: 'top',
  };

  return (
    <div className="container py-4">
      <div
        style={{
          overflowX: 'auto',
          border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e5e5e5',
          borderRadius: '16px',
          boxShadow: '0 1.875rem 7.5rem -.625rem rgba(124,125,152,.2)',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '900px',
          }}
        >
          <thead>
            <tr>
              {['Product', 'Audience', 'Delivery', 'Sales Model', 'Best For'].map(header => (
                <th
                  key={header}
                  style={{
                    ...thStyle,
                    border: '1px solid #d1d5db',
                    color: theme === 'dark' ? '#fff' : '#111',
                    background: theme === 'dark' ? 'rgba(255,255,255,0.03)' : '#f8fafc',
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {comparisonData.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    ...tdStyle,
                    border: '1px solid #d1d5db',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: theme === 'dark' ? '#fff' : '#111',
                  }}
                >
                  {item.product}
                </td>

                <td
                  style={{
                    ...tdStyle,
                    border: '1px solid #d1d5db',
                    color: theme === 'dark' ? '#fff' : '#111',
                  }}
                >
                  {item.audience}
                </td>

                <td
                  style={{
                    ...tdStyle,
                    border: '1px solid #d1d5db',
                    color: theme === 'dark' ? '#fff' : '#111',
                  }}
                >
                  {item.delivery}
                </td>

                <td
                  style={{
                    ...tdStyle,
                    border: '1px solid #d1d5db',
                    color: theme === 'dark' ? '#fff' : '#111',
                  }}
                >
                  {item.salesModel}
                </td>

                <td
                  style={{
                    ...tdStyle,
                    border: '1px solid #d1d5db',
                    color: theme === 'dark' ? '#fff' : '#111',
                  }}
                >
                  {item.bestFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="position-relative text-center mt-5 pt-4 text-muted fst-italic fs-3  d-flex flex-wrap text-center justify-content-center mx-auto fw-semibold zindex-5"
        style={{ maxWidth: '45rem' }}
      >
        Connect is where users start. EDGE and ESC are where larger environments scale.
      </div>
    </div>
  );
};

export default ComparisonTable;
