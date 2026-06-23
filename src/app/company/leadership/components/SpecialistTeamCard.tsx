import { track } from '@/lib/track';
import type { SpecialistTeam } from '.';
import { Avatar, type Person } from './Avatar';

export function SpecialistTeamCard({
  team,
  onReadMember,
}: {
  team: SpecialistTeam;
  onReadMember: (p: Person) => void;
  }) {
  const handleRead = (member: Person) => {
    track(`${member.name} viewed`, {
      team_id: team.id,
      team_name: team.name,
      person_id: member.id,
      person_name: member.name,
    });

    onReadMember(member);
  };
  return (
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
      <div className="d-flex align-items-center gap-2 mb-2">
        <span style={{ fontSize: 22 }}>{team.icon}</span>
        <h6 style={{ color: '#e8f0ff', fontSize: '1rem', fontWeight: 700, margin: 0 }}>
          {team.name}
        </h6>
      </div>

      <p style={{ color: '#7a9cbf', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 0.75rem' }}>
        {team.description}
      </p>

      <ul style={{ paddingLeft: 0, listStyle: 'none', margin: '0 0 1rem' }}>
        {team.areas.map(a => (
          <li
            key={a}
            style={{
              color: '#7a9cbf',
              fontSize: '0.9rem',
              padding: '2px 0',
              display: 'flex',
              gap: 8,
            }}
          >
            <span style={{ color: '#388bfd' }}>·</span>
            {a}
          </li>
        ))}
      </ul>

      <hr style={{ borderColor: 'rgba(56,139,253,0.1)', margin: '1rem 0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {team.members.map(m => (
          <div key={m.id} className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <Avatar person={m} size={72} />
              <div>
                <p style={{ color: '#c8daf5', fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>
                  {m.name}
                </p>
                <p
                  style={{
                    color: '#4a7ab0',
                    fontSize: '0.8rem',
                    margin: 0,
                  }}
                >
                  {m.role}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRead(m)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#2adeff',
                fontSize: '0.9rem',
                padding: 0,
                cursor: 'pointer',

                letterSpacing: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                transition: 'gap .15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.gap = '8px';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.gap = '4px';
              }}
            >
              Bio <span>→</span>
            </button>
          </div>
        ))}
      </div>

      <p
        style={{
          color: '#3a5a80',
          fontSize: '0.9rem',
          lineHeight: 1.55,
          margin: '1rem 0 0',
          fontStyle: 'italic',
        }}
      >
        {team.teamDetail}
      </p>
    </div>
  );
}
