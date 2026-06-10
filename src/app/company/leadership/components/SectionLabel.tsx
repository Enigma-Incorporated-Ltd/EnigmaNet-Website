export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: 2,
        color: '#388bfd',

        textTransform: 'uppercase',
        margin: '0 0 10px',
      }}
    >
      {children}
    </p>
  );
}
