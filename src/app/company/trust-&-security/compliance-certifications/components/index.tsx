import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const ComplianceCertificationsPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Trust & Security', href: '/company/trust-&-security' },
          { label: 'Compliance & Certifications', href: '/company/trust-&-security/compliance-certifications' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Compliance & Certifications"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default ComplianceCertificationsPage;
