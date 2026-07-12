import { founders } from '.';
import { Avatar, type Person } from './Avatar';

export function LeadershipStatement({}: { onRead: (p: Person) => void }) {
  const jane = founders.find(f => f.id === 'jane-osborne-buglear')!;
  return (
    <div className="container" style={{ padding: '5rem 0' }}>
      <div className="text-center mb-5">
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
          Leadership Statement
        </p>
        <h2
          style={{
            color: '#e8f0ff',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            margin: 0,
          }}
        >
          Leadership statement
        </h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div
            style={{
              background: 'rgba(56,139,253,0.04)',
              border: '1px solid rgba(56,139,253,0.35)',
              borderRadius: 14,
              padding: '1.5rem',
              height: '100%',
              // background: 'transparent', // no background initially
              transition: 'all .2s ease',
              // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
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
            <div className="row align-items-center g-4">
              <div className="col-auto">
                <Avatar person={jane} size={72} />
              </div>
              <div className="col">
                <blockquote style={{ margin: 0 }}>
                  <p
                    style={{
                      color: '#c8daf5',
                      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      margin: '0 0 1.25rem',
                    }}
                  >
                    "When teams, sites and systems are distributed, network performance becomes a
                    business issue — not just an IT one."
                  </p>
                  <footer>
                    <p
                      style={{
                        color: '#e8f0ff',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        margin: '0 0 2px',
                      }}
                    >
                      {jane.name}
                    </p>
                    <p
                      style={{
                        color: '#388bfd',
                        fontSize: '0.75rem',

                        margin: 0,
                      }}
                    >
                      {jane.role}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
