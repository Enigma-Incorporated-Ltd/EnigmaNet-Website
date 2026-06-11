import './style.css';
const Eyebrow = ({ label, theme }: { label: string; theme: 'dark' | 'light' }) => {
  const color = theme === 'dark' ? '#e5ae51' : '#00C2FF';
  const textColor = theme === 'dark' ? '#e5ae51' : '#00A3D9';

  return (
    <>
      {' '}
      <p
        style={{
          fontSize: '16px',
          fontWeight: 800,
          letterSpacing: '0.18em',

          lineHeight: 1,
          textTransform: 'uppercase' as const,
          color: textColor,
          marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: 'fit-content',
          animation: 'slideIn 0.35s ease both',
        }}
      >
        {/* Leading line */}
        <span
          style={{
            width: '20px',
            height: '2px',
            borderRadius: '2px',
            background: color,
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
        {/* Pulsing dot */}
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: color,
            display: 'inline-block',
            flexShrink: 0,
            animation: 'pulseDot 2.4s ease-in-out infinite',
          }}
        />
        {label}
      </p>
    </>
  );
};

export default Eyebrow;
