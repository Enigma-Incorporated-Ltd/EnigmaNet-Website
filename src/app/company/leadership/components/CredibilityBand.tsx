import {
  CarrierIcon,
  NetworkIcon,
  PatentIcon,
  DeploymentIcon,
} from '@/assets/svgs/company/leadership';
const credibilityTiles = [
  {
    id: 'carrier',
    icon: <CarrierIcon />,
    title: 'Carrier & enterprise experience',
    body: 'Deep experience across large-scale infrastructure, internet, network and enterprise environments.',
  },
  {
    id: 'security',
    icon: <NetworkIcon />,
    title: 'Network & security engineering',
    body: 'Expertise across secure connectivity, infrastructure operations, deployment and cybersecurity.',
  },
  {
    id: 'patent',
    icon: <PatentIcon />,
    title: 'Patented technology foundation',
    body: 'Technology leadership supported by company IP, R&D and specialist engineering knowledge.',
  },
  {
    id: 'deploy',
    icon: <DeploymentIcon />,
    title: 'Real-world deployments',
    body: 'Deployment experience across customer environments, technical workloads and operational use cases.',
  },
];

export function CredibilityBand() {
  return (
    <div
      style={{
        // background: 'rgba(6, 15, 31, 0.95)',
        borderTop: '1px solid rgba(56,139,253,0.12)',
        borderBottom: '1px solid rgba(56,139,253,0.12)',
        padding: '4rem 0',
        margin: '5rem 0 0',
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p
            style={{
              fontSize: '01rem',
              fontWeight: 700,
              letterSpacing: 3,
              color: '#2adeff',

              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Engineering Credibility
          </p>
          <h2
            style={{
              color: '#e8f0ff',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            Engineering credibility. Real-world impact.
          </h2>
        </div>
        <div className="row g-4">
          {credibilityTiles.map(tile => (
            <div key={tile.id} className="col-12 col-sm-6 col-lg-3">
              <div
                style={{
                  borderRadius: 14,
                  padding: '1.5rem',
                  height: '100%',
                  transition: 'all .2s ease',
                  background: 'rgba(56,139,253,0.04)',
                  border: '1px solid rgba(56,139,253,0.35)',
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
                <div style={{ fontSize: 28, marginBottom: 12 }}>{tile.icon}</div>
                <h6
                  style={{
                    color: '#e8f0ff',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    margin: '0 0 10px',
                    lineHeight: 1.3,
                  }}
                >
                  {tile.title}
                </h6>

                <p
                  style={{
                    color: '#7a9cbf',
                    fontSize: '0.78rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {tile.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
