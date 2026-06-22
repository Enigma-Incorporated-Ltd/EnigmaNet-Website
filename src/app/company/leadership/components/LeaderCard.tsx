import { useState } from 'react';
import type { Person } from './Avatar';

export function LeaderCard({ person, onRead }: { person: Person; onRead: (p: Person) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(56, 139, 253, 0.06)' : 'rgba(14, 28, 54, 0.6)',
        border: `1px solid ${hovered ? 'rgba(56, 139, 253, 0.35)' : 'rgba(56, 139, 253, 0.12)'}`,
        borderRadius: 16,
        overflow: 'hidden', // ← clips image to card corners
        transition: 'all .2s ease',
        cursor: 'default',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── IMAGE BLOCK (no padding, full bleed) ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          background: 'linear-gradient(to bottom, #0a1628 0%, #0a1628 100%)',
          // height: 400,
          paddingTop: '100%', // square-ish portrait
          flexShrink: 0,
        }}
      >
        {' '}
        {person.avatar ? (
          <img
            src={person.avatar}
            alt={person.name}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              // border: '1px solid rgba(56, 139, 253, 0.25)',
              // boxShadow: '0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.04)',
              background: 'linear-gradient(135deg, rgb(15, 46, 74) 0%, rgb(6 15 33) 100%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(2rem, 8vw, 6rem)', // responsive
                fontWeight: 700,
                color: '#88bbee',
                letterSpacing: '0.05em',
                lineHeight: 1,
                textTransform: 'uppercase',
                userSelect: 'none',
              }}
            >
              {(person.name || '')
                .trim()
                .split(/\s+/)
                .map(word => word.charAt(0))
                .join('')
                .slice(0, 2)}
            </div>
          </div>
        )}
        {/* bottom gradient fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 45%, rgba(6,14,34,0.88) 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* badge — bottom-left, overlapping gradient */}
        {person.badge && (
          <span
            style={{
              position: 'absolute',
              bottom: 14,
              left: 14,
              zIndex: 2,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1.6,
              color: '#2adeff',
              background: 'rgba(6,14,34,0.72)',
              border: '1px solid #2adeff',
              padding: '3px 9px',
              borderRadius: 4,

              lineHeight: 1.4,
            }}
          >
            {person.badge}
          </span>
        )}
      </div>

      {/* ── BODY (padded) ── */}
      <div
        style={{
          padding: '1rem 1.1rem 1.1rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          background: 'rgb(6 15 33)',
        }}
      >
        <div>
          <h6
            style={{
              color: '#e8f0ff',
              fontSize: '1rem',
              fontWeight: 700,
              margin: '0 0 2px',
              lineHeight: 1.2,
            }}
          >
            {person.name}
          </h6>
          <p
            style={{
              color: '#2adeff',
              fontSize: '0.9rem',
              margin: '0 0 6px',
            }}
          >
            {person.role}
          </p>
          {/* gold divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: 'linear-gradient(90deg, #A96A00 0%, #F1BA5F 100%)',
              borderRadius: 2,
              marginBottom: 12,
            }}
          />
        </div>
        <p
          style={{
            color: '#7a9cbf',
            fontSize: '0.78rem',
            lineHeight: 1.6,
            margin: '0.5rem 0 0.75rem',
            flexGrow: 1,
          }}
        >
          {person.tagline}
        </p>
        <div className="d-flex flex-wrap gap-1 mb-3">
          {person.tags?.map(t => (
            <span
              key={t}
              style={{
                background: 'rgba(42, 222, 255, 0.07)',
                border: '1px solid rgba(42, 222, 255, 0.2)',
                color: '#7ad6e8',
                fontSize: '0.7rem',
                padding: '3px 10px',
                borderRadius: 20,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={() => onRead(person)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#2adeff',
            fontSize: '1rem',
            padding: 0,
            cursor: 'pointer',

            letterSpacing: 0.5,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'gap .15s',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.gap = '10px';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.gap = '6px';
          }}
        >
          Read bio <span style={{ fontSize: 14 }}>→</span>
        </button>
      </div>
    </div>
  );
}
