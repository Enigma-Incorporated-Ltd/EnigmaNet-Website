import './style.css';
interface StatCardProps {
  value?: string;
  label?: string | React.ReactNode;
}

const UseCaseStatCard = ({ value, label }: StatCardProps) => (
  <div className="stat-card">
    {value && <div className="stat-card-value">{value}</div>}
    {label && <div className="stat-card-label">{label}</div>}
  </div>
);

export default UseCaseStatCard;
