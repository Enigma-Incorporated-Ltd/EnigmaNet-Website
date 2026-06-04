import './style.css'
interface MetricCardProps {
  icon: React.ComponentType;
  value?: string | React.ReactNode;
  label: string | React.ReactNode;
    index?: number;
    fontWeight?: number;
}

const FeatureCard = ({ icon: Icon, value, label, index , fontWeight = 600 }: MetricCardProps) => {
  return (
    <div className="metric-card">
      <Icon />

    {value && (  <p className={index === 2 ? 'pt-md-3 pt-lg-0' : ''} style={{ color: '#000' }}>
        {value}
      </p>)}

      <span
        className="text-center"
        style={{
          color: '#000',
          fontWeight: fontWeight,
          fontSize: '16px',
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default FeatureCard;
