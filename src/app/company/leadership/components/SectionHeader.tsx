export function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <div className="d-flex align-items-center gap-3">
        <span
          style={{
            fontSize: '1rem',
            color: '#2adeff',
            letterSpacing: 2,
          }}
        >
          {number}
        </span>
        <div style={{ height: 1, width: 32, background: 'rgba(56, 139, 253, 0.35)' }} />
        <h3
          style={{
            color: '#2adeff',
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: 0,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </h3>
      </div>
      {subtitle && (
        <p
          style={{
            color: '#4a7ab0',
            fontSize: '1rem',
            margin: '6px 0 0 68px',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
