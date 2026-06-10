import './style.css';
interface StatCardProps {
  value?: string;
  label?: string | React.ReactNode;
  width?: string;
  fontSize?: string
  className?: string
}

const UseCaseStatCard = ({
  value,
  label,
  width = 'auto',
  fontSize = '11px',
  className,
}: StatCardProps) => (
  <div className={`stat-card ${className}`} style={{ width: width }}>
    {value && <div className="stat-card-value">{value}</div>}
    {label && (
      <div className="stat-card-label" style={{ fontSize: fontSize }}>
        {label}
      </div>
    )}
  </div>
);

export default UseCaseStatCard;
