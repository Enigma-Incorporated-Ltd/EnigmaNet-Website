import './recent-activity.css';

interface RecentActivityViewProps {
  setActiveNav: (nav: string) => void;
}

export default function RecentActivityView({ setActiveNav }: RecentActivityViewProps) {
  return (
    <div className="portal-activities-container">
      {/* Back btn and header */}
      <div className="portal-activities-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '56px' }}>
        <button
          type="button"
          onClick={() => setActiveNav('dashboard')}
          className="portal-back-btn"
          aria-label="Back to dashboard"
          style={{
            background: 'transparent',
            border: 'none',
            padding: 0,
            paddingTop: '3px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--portal-text)',
            transition: 'transform 0.2s ease',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.41379 8.485L9.48479 15.556L8.07079 16.97L0.292786 9.192C0.105315 9.00447 0 8.75016 0 8.485C0 8.21984 0.105315 7.96553 0.292786 7.778L8.07079 0L9.48479 1.414L2.41379 8.485Z"
              fill="url(#paint0_linear_720_449)"
            />
            <defs>
              <linearGradient id="paint0_linear_720_449" x1="-0.00811359" y1="8.485" x2="9.48479" y2="8.485" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2ADEFF"/>
                <stop offset="1" stopColor="#002398"/>
              </linearGradient>
            </defs>
          </svg>
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 className="portal-activities-title" style={{ margin: 0 }}>Recent Activity</h1>
          <p className="portal-activities-subtitle" style={{ margin: 0 }}>
            Stay up to date with the latest activity across your Enigma services.
          </p>
        </div>
      </div>

      {/* Activities Card Log */}
      <div className="portal-summary-card portal-activities-card" style={{ width: '100%', maxWidth: '880px' }}>
        <div className="portal-summary-card__header">
          <h2 className="portal-summary-card__title">Recent Activity</h2>
        </div>
        <div className="portal-summary-card__body">
          <div className="portal-activity-row">
            <div className="portal-activity-row__details">
              <span className="portal-activity-row__name">GPU Cluster created</span>
              <span className="portal-activity-row__time">2 min ago</span>
            </div>
            <span className="portal-badge portal-badge--pending">Pending</span>
          </div>
          <div className="portal-activity-row">
            <div className="portal-activity-row__details">
              <span className="portal-activity-row__name">GPU Cluster created</span>
              <span className="portal-activity-row__time">2 min ago</span>
            </div>
            <span className="portal-badge portal-badge--warning">Warning</span>
          </div>
          <div className="portal-activity-row">
            <div className="portal-activity-row__details">
              <span className="portal-activity-row__name">GPU Cluster created</span>
              <span className="portal-activity-row__time">2 min ago</span>
            </div>
            <span className="portal-badge portal-badge--pending">Pending</span>
          </div>
          <div className="portal-activity-row">
            <div className="portal-activity-row__details">
              <span className="portal-activity-row__name">GPU Cluster created</span>
              <span className="portal-activity-row__time">2 min ago</span>
            </div>
            <span className="portal-badge portal-badge--progress">In Progress</span>
          </div>
          <div className="portal-activity-row">
            <div className="portal-activity-row__details">
              <span className="portal-activity-row__name">GPU Cluster created</span>
              <span className="portal-activity-row__time">2 min ago</span>
            </div>
            <span className="portal-badge portal-badge--operational">Success</span>
          </div>
          <div className="portal-activity-row">
            <div className="portal-activity-row__details">
              <span className="portal-activity-row__name">GPU Cluster created</span>
              <span className="portal-activity-row__time">2 min ago</span>
            </div>
            <span className="portal-badge portal-badge--operational">Success</span>
          </div>
          <div className="portal-activity-row">
            <div className="portal-activity-row__details">
              <span className="portal-activity-row__name">GPU Cluster created</span>
              <span className="portal-activity-row__time">2 min ago</span>
            </div>
            <span className="portal-badge portal-badge--operational">Success</span>
          </div>
        </div>
      </div>
    </div>
  );
}
