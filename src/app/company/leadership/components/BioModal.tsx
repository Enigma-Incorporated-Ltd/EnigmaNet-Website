import type { Person } from './Avatar';
import { SectionLabel } from './SectionLabel';

export function BioModal({ person, onClose }: { person: Person | null; onClose: () => void }) {
  if (!person) return null;
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(4, 12, 28, 0.85)',
          backdropFilter: 'blur(6px)',
          zIndex: 1050,
          animation: 'fadeIn .2s ease',
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(540px, 100vw)',
          background: 'linear-gradient(160deg, #07172e 0%, #060f1f 60%, #04090f 100%)',
          borderLeft: '1px solid rgba(42, 222, 255, 0.15)',
          zIndex: 1051,
          overflowY: 'auto',
          animation: 'slideIn .25s cubic-bezier(.16,1,.3,1)',
          boxShadow: '-20px 0 60px rgba(0,0,0,.6)',
        }}
      >
        {/* ── HERO IMAGE HEADER ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 620, // ← tall enough to show the full portrait
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          <img
            src={person.avatar}
            alt={person.name}
            style={{
              width: '100%',
              height: '100%', // ← fills the container, no minHeight
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />
          {/* gradient fade to modal bg */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 45%, rgba(6,14,34,0.88) 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* badge */}
          {person.badge && (
            <span
              style={{
                position: 'absolute',
                bottom: 16,
                left: 20,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 1.6,
                color: '#2adeff',
                background: 'rgba(6,14,34,0.72)',
                border: '1px solid #2adeff',
                padding: '3px 9px',
                borderRadius: 4,
              }}
            >
              {person.badge}
            </span>
          )}
          {/* close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'rgba(6,14,34,0.72)',
              border: '1px solid rgba(42,222,255,0.25)',
              borderRadius: 8,
              color: '#2adeff',
              width: 36,
              height: 36,
              cursor: 'pointer',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all .15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(42,222,255,0.15)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(6,14,34,0.72)';
            }}
          >
            ×
          </button>
        </div>

        {/* ── BODY ── */}
        <div style={{ padding: '0 2rem 2.5rem' }}>
          <div style={{ marginBottom: '1.25rem', marginTop: '1.25rem' }}>
            <h4
              style={{
                color: '#e8f0ff',
                fontSize: '1.45rem',
                fontWeight: 700,
                margin: '0 0 4px',
                lineHeight: 1.2,
              }}
            >
              {person.name}
            </h4>
            <p
              style={{
                color: '#2adeff',
                fontSize: '0.78rem',
                margin: '0 0 10px',

                letterSpacing: 0.5,
              }}
            >
              {person.role}
            </p>
            <div
              style={{
                width: 80,
                height: 3,
                background: 'linear-gradient(90deg, #A96A00 0%, #F1BA5F 100%)',
                borderRadius: 2,
              }}
            />
          </div>

          <hr style={{ borderColor: 'rgba(42,222,255,0.1)', margin: '0 0 1.5rem' }} />

          <section className="mb-4">
            <SectionLabel>Biography</SectionLabel>
            <p style={{ color: '#a8c0e0', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
              {person.bio}
            </p>
          </section>

          {person.experience && (
            <section className="mb-4">
              <SectionLabel>Career Highlights</SectionLabel>
              <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                {person.experience.map((e, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#a8c0e0',
                      fontSize: '0.9rem',
                      padding: '6px 0',
                      // borderBottom: '1px solid rgba(42,222,255,0.07)',
                      display: 'flex',
                      gap: 10,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: '#2adeff', marginTop: 2 }}>›</span>
                    {e}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {person.qualifications && (
            <section className="mb-4">
              <SectionLabel>Qualifications</SectionLabel>
              <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                {person.qualifications.map((q, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#a8c0e0',
                      fontSize: '0.9rem',
                      padding: '6px 0',
                      // borderBottom: '1px solid rgba(42,222,255,0.07)',
                      display: 'flex',
                      gap: 10,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: '#2adeff', marginTop: 2 }}>›</span>
                    {q}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {person.expertise && (
            <section className="mb-4">
              <SectionLabel>Areas of Expertise</SectionLabel>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {person.expertise.map(ex => (
                  <span
                    key={ex}
                    style={{
                      background: 'rgba(42, 222, 255, 0.07)',
                      border: '1px solid rgba(42, 222, 255, 0.2)',
                      color: '#7ad6e8',
                      fontSize: '0.9rem',
                      padding: '4px 12px',
                      borderRadius: 20,
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </section>
          )}
          {person.tags && person.tags.length > 0 && (
            <section className="mb-4">
              <SectionLabel>Leadership Focus</SectionLabel>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {person.tags.map(ex => (
                  <span
                    key={ex}
                    style={{
                      background: 'rgba(42, 222, 255, 0.07)',
                      border: '1px solid rgba(42, 222, 255, 0.2)',
                      color: '#7ad6e8',
                      fontSize: '0.9rem',
                      padding: '4px 12px',
                      borderRadius: 20,
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </section>
          )}
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(42, 222, 255, 0.07)',
                border: '1px solid rgba(42, 222, 255, 0.25)',
                color: '#2adeff',
                fontSize: '0.8rem',
                padding: '10px 20px',
                borderRadius: 8,
                textDecoration: 'none',

                letterSpacing: 0.5,
                transition: 'all .15s',
                marginTop: 8,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(42,222,255,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(42,222,255,0.07)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              View LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </>
  );
}
