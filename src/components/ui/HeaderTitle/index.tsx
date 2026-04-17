type HeaderProps = {
  title: string;
  style?: React.CSSProperties;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
  variant?: 'blue' | 'gold';
};

const HeaderTitle = ({ title, style, textAlign, className, variant = 'blue' }: HeaderProps) => {
 
  const gradients = {
    blue: 'linear-gradient(135deg, #3d5a9e 0%, #157bc9 55%, #2adeff 100%)',
    gold: 'linear-gradient(135deg, #caa75e 0%, #f5d27a 50%, #fff2b0 100%)',
  };

  return (
    <h1
      className={`${textAlign ? `text-${textAlign}` : ''} ${className || ''}`}
      style={{
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
        marginBottom: '0.4rem',
        ...style,
      }}
    >
      <span
        style={{
          background: gradients[variant],
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'inline-block',
        }}
      >
        {title}
      </span>
    </h1>
  );
};

export default HeaderTitle;
