import { Link } from 'react-router-dom';
import './index.css';
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'light-blue'
  | 'dark';

type CustomButtonProps = {
  label: string;
  bgColor?: ButtonColor;
  textColor?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  fontSize?: string;
};

const CustomButton = ({
  label,
  bgColor = 'warning',
  textColor = 'black',
  href,
  onClick,
  className = '',
  style,
  type = 'button',
  fontSize = '18px',
}: CustomButtonProps) => {
  const commonClass = `btn btn-${bgColor} custom-btn shadow-${bgColor} rounded-pill px-5 ${className}`;

  const commonStyle: React.CSSProperties = {
    fontWeight: 800,
    letterSpacing: '3px',
    color: textColor,
    fontSize,
    ...style,
  };

  if (href) {
    return (
      <Link to={href} className={commonClass} style={commonStyle}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={commonClass} style={commonStyle}>
      {label}
    </button>
  );
};

export default CustomButton;

/*
========================
Example Usage
========================

 1. Simple Button (onClick)
<CustomButton
  label="Click Me"
  bgColor="primary"
  onClick={() => alert('Button clicked!')}
   customStyles={{
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px 40px',
    borderRadius: '50px',
  }}
  
/>

 2. Navigation Button (Link)
<CustomButton
  label="Go to Dashboard"
  bgColor="success"
  href="/dashboard"
/>
*/
