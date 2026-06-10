import UseCaseCard from '@/components/ui/Use-Case/UseCaseCard';

const PerformanceMetrics = () => {
  const metrics = [
    {
      label: 'LATENCY-OPTIMISED <br /> CROSS-CONNECTS',
      description: `MMR-to-rack and rack-to-rack services with P95 latency and jitter caps. <br/>
<span style="color: #2ADEFF;font-weight: 600;">+£100–£250 MRR</span>`,
    },
    {
      label: `RESILIENT METRO INTERCONNECTS`,
      description: `DC-to-DC regional connectivity with failover below 500ms.<br/>
<span style="color: #2ADEFF; font-weight: 600;">
+£200–£500 MRR</span>`,
    },
    {
      label: `TCP ACCELERATION<br />
FOR REPLICATION`,
      description: `Higher throughput for storage, backup and analytics traffic under packet loss.<br/>
<span style="color: #2ADEFF;font-weight: 600;">
+£50–£150 MRR</span>`,
    },
    {
      label: `MANAGED OVERLAY <br/> FOR TENANTS`,
      description: `Operator-managed overlay node with SLA reporting and premium enterprise support
<span style="color: #2ADEFF;font-weight: 600;">
+15–25% Premium</span>`,
    },
  ];

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '80px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <UseCaseCard metrics={metrics} />
      </div>
    </section>
  );
};

export default PerformanceMetrics;
