export interface Person {
  avatar: any;
  id: string;
  name: string;
  role: string;
  badge?: string;
  tagline: string;
  tags?: string[] | undefined;
  bio: string | React.ReactNode;
  experience?: string[];
  qualifications?: string[];
  expertise?: string[];
  linkedin?: string;
  image?: string;
  avatarColor?: string;
}
export function Avatar({ person, size = 80 }: { person: Person; size?: number }) {
  const initials = person.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2);

  const borderRadius = size > 60 ? 12 : 8;

  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        borderRadius,
        overflow: 'hidden',

        flexShrink: 0,
        position: 'relative',
        border: '1px solid rgba(56, 139, 253, 0.25)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.04)',
        background: `linear-gradient(
          135deg,
          ${person.avatarColor ?? '#1a3a5c'} 0%,
          #0a1628 100%
        )`,
      }}
    >
      {person.avatar ? (
        <img
          src={person.avatar}
          alt={person.name}
          loading="lazy"
          style={{
            position: 'absolute',
            bottom: -18,
            // width: '100%',
            // height: '100%',
            // display: 'block',
            objectFit: 'cover',
            // objectPosition: 'center',
            // imageRendering: 'auto',
            // WebkitFontSmoothing: 'antialiased',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: size > 60 ? 22 : 13,
            fontWeight: 700,
            color: '#88bbee',
            letterSpacing: 1,
          }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}
