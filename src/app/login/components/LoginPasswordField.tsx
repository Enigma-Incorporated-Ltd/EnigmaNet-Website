import { EyeClosedIcon, EyeOpenIcon } from './LoginIcons';

type LoginPasswordFieldProps = {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  showPassword: boolean;
  onToggleVisibility: () => void;
  autoComplete?: string;
  nodeId?: string;
};

/** Figma: field dark mode (37:4990) */
const LoginPasswordField = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  showPassword,
  onToggleVisibility,
  autoComplete = 'new-password',
  nodeId = '37:4990',
}: LoginPasswordFieldProps) => {
  return (
    <div
      className="login-field login-field--dark login-gradient-stroke"
      data-node-id={nodeId}
      data-name="field dark mode"
    >
      <input
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={name}
        className="login-field__input"
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={event => onChange(event.target.value)}
        required
      />
      <button
        type="button"
        className="login-field__toggle"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        onClick={onToggleVisibility}
      >
        {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </button>
    </div>
  );
};

export default LoginPasswordField;
