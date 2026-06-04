type StrengthLevel = 'weak' | 'good' | 'strong';

export type PasswordStrengthResult = {
  score: number;
  filledBars: number;
  level: StrengthLevel | null;
  label: string;
  isGood: boolean;
};

const STRENGTH_LABELS: Record<StrengthLevel, string> = {
  weak: 'Weak password',
  good: 'Password is good',
  strong: 'Strong password',
};

export function getPasswordStrength(password: string): PasswordStrengthResult {
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const score = [hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  if (password.length === 0) {
    return { score: 0, filledBars: 0, level: null, label: 'Password strength', isGood: false };
  }

  if (score <= 1) {
    return {
      score,
      filledBars: Math.max(score, 1),
      level: 'weak',
      label: STRENGTH_LABELS.weak,
      isGood: false,
    };
  }

  if (score === 2) {
    return {
      score,
      filledBars: 2,
      level: 'good',
      label: STRENGTH_LABELS.good,
      isGood: false,
    };
  }

  return {
    score,
    filledBars: 3,
    level: 'strong',
    label: STRENGTH_LABELS.good,
    isGood: true,
  };
}

type PasswordStrengthIndicatorProps = {
  strength: PasswordStrengthResult;
};

/** Figma: indicators for password (37:5076), bar variants 37:5012 / 37:5018 + weak / strong */
const PasswordStrengthIndicator = ({ strength }: PasswordStrengthIndicatorProps) => {
  const { filledBars, level, label } = strength;

  return (
    <div className="login-password-strength" data-node-id="37:5076" data-name="indicators for password">
      <p
        className={`login-password-strength__label${level ? ` login-password-strength__label--${level}` : ''}`}
        data-node-id="37:5059"
      >
        {label}
      </p>
      <div className="login-password-strength__bars" data-node-id="37:5045" aria-hidden="true">
        {[0, 1, 2].map(index => {
          const isFilled = index < filledBars;
          const barLevel = isFilled ? level : null;

          return (
            <span
              key={index}
              className={[
                'login-password-strength__bar',
                barLevel ? `login-password-strength__bar--${barLevel}` : 'login-password-strength__bar--inactive',
              ].join(' ')}
              data-name={barLevel ?? 'non password'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
