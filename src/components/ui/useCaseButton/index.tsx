import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

type ButtonVariant = 'blue' | 'white';

type Props = {
  text: string;
  variant?: ButtonVariant;
  minWidth?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
};

const UseCaseButton: React.FC<Props> = ({
  text,
  variant = 'blue',
  minWidth = '190px',
  onClick,
  href,
  className = '',
}) => {
  const isBlue = variant === 'blue';

  const commonStyle: React.CSSProperties = {
    borderRadius: '100px',
    minWidth,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    fontFeatureSettings: "'liga' off, 'clig' off",
    background: isBlue ? 'linear-gradient(90deg, #263777 0%, #00A3DA 100%)' : '#FFF',
    color: isBlue ? '#FFF' : '#0D1B29',
    border: isBlue ? 'none' : '1px solid #FFF',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const classes = `
    border-0
    px-5
    py-3
    ${isBlue ? 'useCase-btn-primary' : 'useCase-btn-secondary'}
    ${className}
  `;

  if (href) {
    return (
      <Link to={href} className={classes} style={commonStyle}>
        {text}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} style={commonStyle}>
      {text}
    </button>
  );
};

export default UseCaseButton;
