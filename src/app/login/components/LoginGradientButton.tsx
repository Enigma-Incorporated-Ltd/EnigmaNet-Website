import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router';

type Variant = 'primary' | 'secondary';

type CommonProps = {
  variant: Variant;
  children: ReactNode;
  className?: string;
  nodeId?: string;
  innerNodeId?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
  };

type LinkButtonProps = CommonProps &
  LinkProps & {
    to: string;
  };

export type LoginGradientButtonProps = ButtonProps | LinkButtonProps;

function buttonClasses(variant: Variant, className?: string) {
  return [
    'login-auth-btn',
    variant === 'primary' ? 'login-auth-btn--primary' : 'login-auth-btn--secondary',
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

/** Sign In / Create Account buttons — matches login welcome page (.login-auth-btn). */
export default function LoginGradientButton(props: LoginGradientButtonProps) {
  const { variant, children, className, nodeId, innerNodeId, to, ...rest } = props;
  const classes = buttonClasses(variant, className);

  if (to) {
    const { type: _type, ...linkRest } = rest as Omit<LinkProps, 'to'>;
    return (
      <Link className={classes} data-node-id={nodeId ?? innerNodeId} {...linkRest} to={to}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} data-node-id={nodeId ?? innerNodeId} {...buttonRest}>
      {children}
    </button>
  );
}

/** Figma 77:3683 wrapper for Secondary button alignment. */
export function LoginSecondaryButtonShell({
  children,
  className,
  nodeId = '77:3683',
}: {
  children: ReactNode;
  className?: string;
  nodeId?: string;
}) {
  return (
    <div className={['login-figma-btn-shell', className].filter(Boolean).join(' ')} data-node-id={nodeId}>
      {children}
    </div>
  );
}
