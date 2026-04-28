type HeaderProps = {
  title: string;
  style?: React.CSSProperties;
  textAlign?: 'left' | 'center' | 'right';
};
const Header = (props: HeaderProps) => {
  return (
    <h1
      className={props.textAlign ? `text-${props.textAlign}` : ''}
      style={{
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        marginBottom: '0.4rem',
        ...props.style,
      }}
    >
      <span
        style={{
          background: 'linear-gradient(135deg, #3d5a9e 0%, #157bc9 55%, #2adeff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'inline-block', // required for background-clip to work on span
        }}
      >
        {props.title}
      </span>
    </h1>
  );
};

export default Header;
