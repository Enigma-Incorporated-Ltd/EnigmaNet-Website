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
    'login-figma-btn',
    variant === 'primary' ? 'login-figma-btn--primary' : 'login-figma-btn--secondary',
    variant === 'primary' ? 'login-primary-btn' : 'login-secondary-btn',
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

function ButtonLayers() {
  return (
    <span className="login-figma-btn__fx" aria-hidden="true">
      <span className="login-figma-btn__gradient" />
      <span className="login-figma-btn__glass" />
      <span className="login-figma-btn__rim" />
    </span>
  );
}

function ButtonLabel({ variant, children }: { variant: Variant; children: ReactNode }) {
  const labelClass =
    variant === 'primary' ? 'login-figma-btn__label login-primary-btn__label' : 'login-figma-btn__label login-secondary-btn__label';

  return <span className={labelClass}>{children}</span>;
}

/** Figma Primary Button (5:273) and Secondary button (77:3683 / 77:3679). */
export default function LoginGradientButton(props: LoginGradientButtonProps) {
  const { variant, children, className, nodeId, innerNodeId, to, ...rest } = props;
  const classes = buttonClasses(variant, className);

  const content = (
    <>
      <ButtonLayers />
      <ButtonLabel variant={variant}>{children}</ButtonLabel>
    </>
  );

  if (to) {
    const { type: _type, ...linkRest } = rest as LinkProps;
    return (
      <Link to={to} className={classes} data-node-id={nodeId ?? innerNodeId} {...linkRest}>
        {content}
      </Link>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} data-node-id={nodeId ?? innerNodeId} {...buttonRest}>
      {content}
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
