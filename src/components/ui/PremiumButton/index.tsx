import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { toSentenceCase } from '@/utils/sentenceCase';

type Variant = 'blue' | 'gold';

type CustomButtonProps = {
  label: string | React.ReactNode;
  loadingLabel?: string;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  fontSize?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

const PremiumButton: React.FC<CustomButtonProps> = ({
  label,
  loadingLabel = 'Loading...',
  variant = 'blue',
  href,
  onClick,
  className = '',
  style,
  type = 'button',
  fontSize ,
  fullWidth = false,
  isLoading = false,
  disabled = false,
}) => {
  const isDisabled = isLoading || disabled;

  const baseClass = `custom-btn text-center  ${
    variant === 'blue' ? 'blue-filled' : 'gold-filled'
  } ${fullWidth ? 'w-100' : ''} ${isDisabled ? 'btn-disabled' : ''} ${className}`;

  const commonStyle: React.CSSProperties = {
    fontSize,
    fontWeight: 800,
    pointerEvents: isDisabled ? 'none' : 'auto',
    opacity: isDisabled ? 0.8 : 1,
    ...style,
  };

 const content = (
   <div className="d-flex align-items-center justify-content-center">
     {isLoading && <span className="btn-spinner" />}
     <span>
       {isLoading
         ? loadingLabel
         : typeof label === 'string'
         ? toSentenceCase(label)
         : label}
     </span>
   </div>
 );

  if (href) {
    return (
      <Link to={href} className={baseClass} style={{ textDecoration: 'none', ...commonStyle }}>
        { content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClass}
      style={commonStyle}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};

export default PremiumButton;
