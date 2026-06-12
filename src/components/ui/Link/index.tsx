import React from 'react';
import { useTheme } from '@/utils/useTheme';

interface PolicyLink {
  label: string;
  href: string;
}

interface PolicyLinksProps {
  links: PolicyLink[];
  title?: string;
}

const PolicyLinks: React.FC<PolicyLinksProps> = ({ links, title = 'Policy Links' }) => {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto" style={{ maxWidth: '900px' }}>
      <h5 style={{ marginBottom: '16px', paddingLeft: 'inherit', fontSize: '20px' }}>{title}</h5>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
        className="row"
      >
        {links.map((link, index) => (
          <li
            key={index}
            className="col-md-6 col-12 mb-3"
            style={{
              display: 'flex',
              background: 'none',
            }}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '14px 18px',
                borderRadius: '14px',
                textDecoration: 'none',
                color: theme === 'dark' ? '#fff' : '#212529',
                border:
                  theme === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.14)'
                    : '1px solid rgba(56,139,253,0.35)',
                background: 'transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background =
                  theme === 'dark' ? 'none' : 'rgba(56,139,253,0.08)';
                e.currentTarget.style.color = theme === 'dark' ? '#2adeff' : '#3d5a9e';
              
                e.currentTarget.style.transform = 'translateY(-4px)';

                const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement;

                if (arrow) {
                  arrow.style.transform = 'translateX(6px)';
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#212529';
               
                const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement;

                if (arrow) {
                  arrow.style.transform = 'translateX(0)';
                }
              }}
            >
              <span>{link.label}</span>

              <span
                className="arrow"
                style={{
                  fontSize: '18px',
                  transition: 'transform 0.3s ease',
                }}
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PolicyLinks;
