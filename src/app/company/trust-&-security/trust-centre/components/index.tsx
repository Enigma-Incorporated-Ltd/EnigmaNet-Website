import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import SecurityFirstDesign from '@/assets/svgs/company/trust-center/Security-first design.svg';
import Encryption from '@/assets/svgs/company/trust-center/Encryption.svg';
import ZeroTrustPrinciples from '@/assets/svgs/company/trust-center/Zero-trust principles.svg';
import KeyManagement from '@/assets/svgs/company/trust-center/Key management.svg';
import TrafficProtection from '@/assets/svgs/company/trust-center/Traffic protection.svg';
import Auditability from '@/assets/svgs/company/trust-center/Auditability.svg';
import PrivacyPolicy from '@/assets/svgs/company/trust-center/Privacy Policy.svg';
import EndUserPolicy from '@/assets/svgs/company/trust-center/End User Policy.svg';
import FairUsePolicy from '@/assets/svgs/company/trust-center/Fair Use Policy.svg';
import ThirdPartyServices from '@/assets/svgs/company/trust-center/Third-party services.svg';
import Monitoring from '@/assets/svgs/company/trust-center/Monitoring.svg';
import IncidentHandling from '@/assets/svgs/company/trust-center/Incident handling.svg';
import SupportRoutes from '@/assets/svgs/company/trust-center/Support routes.svg';
import OperationalReporting from '@/assets/svgs/company/trust-center/Operational reporting -.svg';
import CardSlider from '@/components/ui/CardSlider';
import CTA from '@/components/ui/CtaBand';
import { AICPA, ISO, TrustCenter } from '@/assets/img/company';
import Br from '@/components/ui/NewLine';
import CardGrid from '@/components/ui/card';
import PolicyLinks from '@/components/ui/Link';
const Core = [
  {
    id: 1,
    icon: SecurityFirstDesign,
    title: 'Security-first design  ',
    description: `Security considerations are built into Enigma Net products and services from the start.  `,
  },
  {
    id: 2,
    icon: Encryption,
    title: 'Encryption  ',
    description: `Data in transit is protected using strong encryption, including TLS 1.3 where applicable.  `,
  },
  {
    id: 3,
    icon: ZeroTrustPrinciples,
    title: 'Zero-trust principles  ',
    description:
      'Identity-aware access, segmentation and least-privilege principles help reduce unnecessary exposure.  ',
  },
  {
    id: 4,
    icon: TrafficProtection,
    title: 'Traffic protection  ',
    description: `Traffic protection features help support secure movement across mixed network environments.   `,
  },
  {
    id: 5,
    icon: KeyManagement,
    title: 'Key management    ',
    description: `Credential and key handling is designed around secure storage, controlled access and regular   
rotation.  `,
  },
  {
    id: 6,
    icon: Auditability,
    title: 'Auditability  ',
    description:
      'Security-relevant events and administrative activity are logged to support accountability and review.  ',
  },
];
const Privacy = [
  {
    id: 1,
    icon: PrivacyPolicy,
    title: 'Privacy Policy  ',
    description: `Explains how Enigma Net handles personal data and privacy commitments.   `,
  },
  {
    id: 2,
    icon: EndUserPolicy,
    title: 'End User Policy    ',
    description: `Sets out user responsibilities when accessing Enigma Net systems and services.  `,
  },
  {
    id: 3,
    icon: FairUsePolicy,
    title: 'Fair Use Policy  ',
    description:
      'Defines acceptable usage parameters and restrictions designed to protect service quality.  ',
  },
  {
    id: 4,
    icon: ThirdPartyServices,
    title: 'Third-party services  ',
    description: `Where third-party services are used, the relevant provider terms may also apply.  `,
  },
];
const Operational = [
  {
    id: 1,
    icon: Monitoring,
    title: 'Monitoring',
    description: `Service and infrastructure monitoring supports visibility across availability, response time and   
service health.  `,
  },
  {
    id: 2,
    icon: IncidentHandling,
    title: 'Incident handling  ',
    description: `Defined incident workflows help track issues from detection through to resolution.  `,
  },
  {
    id: 3,
    icon: SupportRoutes,
    title: 'Support routes  ',
    description:
      'Customers can raise service requests, incidents, bugs, change requests and feature requests through defined support routes.  ',
  },
  {
    id: 4,
    icon: OperationalReporting,
    title: 'Operational reporting  ',
    description: `Where applicable, customers may receive reporting on uptime, incidents, maintenance activity   
or service health.  `,
  },
];
const policyLinks = [
  { label: 'Standard Terms', href: '/company/trust-&-security/policies/standard-terms' },
  {
    label: 'Privacy Policy',
    href: '/company/trust-&-security/policies/privacy-policy',
  },
  {
    label: 'End User Policy',
    href: '/company/trust-&-security/policies/end-user-policy',
  },
  {
    label: 'Fair Use Policy',
    href: '/company/trust-&-security/policies/fair-use-policy',
  },
  {
    label: 'Software Licence Agreement',
    href: '/company/trust-&-security/policies/software-license-agreement',
  },
  {
    label: 'Cloud Storage Addendum',
    href: '/company/trust-&-security/policies/addendum-cloud-storage',
  },
  { label: 'DMCA Policy', href: '/company/trust-&-security/policies/dmca-policy' },
];
const TrustCentrePage = () => {
  const { theme } = useTheme();
 
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Trust & Security', href: '/company/trust-&-security' },
          { label: 'Trust Centre', href: 'company/trust-&-security/trust-centre' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={<>Security, resilience and transparency built into the infrastructure layer</>}
        description={
          <>
            Enigma Net helps organisations move data through secure, encrypted and resilient
            infrastructure.
            <br />
            <br />
            The Trust Centre brings together information about our security posture, privacy
            commitments, compliance roadmap, operational transparency and customer-facing policies.
          </>
        }
        image={TrustCenter}
        buttons={[
          {
            label: 'Contact us ',
            href: '/get-in-touch',
            variant: 'blue',
          },
        ]}
        eyebrow="Trust & Security"
      />

      <CardSlider
        sectionTitle="Security posture  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Designed to protect data movement, <Br isDesktop /> access and service integrity
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net is designed around secure transport, controlled access and resilient service
            delivery. Our platform uses security-first design principles to help protect data in
            transit, manage access and support trusted operation across distributed environments.
          </>
        }
        data={Core}
      />

      <CardSlider
        sectionTitle="Compliance roadmap"
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Working towards recognised security
                  <Br isDesktop /> and assurance standards{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net is currently working towards ISO 27001 as part of its commitment to
            information security, governance and operational maturity.
            <br />
            <br />
            Following the ISO 27001 programme, Enigma Net plans to progress towards SOC 2 to support
            future customer, partner and enterprise assurance requirements.
          </>
        }
      />
      <CardGrid
        customClass=" cusotm-height"
        isBg={false}
        data={[
          {
            id: 1,
            image: ISO,
            title: 'ISO 27001  ',
            subtitle: 'Status: In progress  ',
            description: `Working towards ISO 27001.  `,
          },
          {
            id: 2,
            image: AICPA,
            title: 'SOC 2  ',
            subtitle: 'Status: Planned  ',
            description: `Planned after ISO 27001.  `,
          },
        ]}
      />
      <CardSlider
        sectionTitle="Privacy  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Clear commitments around personal data <Br isDesktop /> and service information
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net handles personal and service-related information in line with applicable
            privacy and data protection laws.
            <br />
            <br />
            Customer-facing privacy and legal documents explain how information is collected, used,
            protected and governed.
          </>
        }
        data={Privacy}
      />
      <CardSlider
        sectionTitle="Operational transparency    "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Visibility across service health, incidents and support.</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net supports structured monitoring, incident handling and customer support
            workflows.
            <br />
            <br />
            This helps customers understand service behaviour, raise requests and receive support
            through defined routes.
          </>
        }
        data={Operational}
      />
      <CardSlider
        sectionTitle="Policies  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Customer-facing documents that <Br isDesktop />
                  govern use of Enigma Net services
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net publishes customer-facing documents covering service use, privacy, acceptable
            use, software licensing and related terms.
          </>
        }
      />
      <PolicyLinks links={policyLinks} />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Need trust, policy or    "
        headline2="security information?"
        description="Speak to Enigma Net about security posture, compliance progress, privacy commitments or   
customer-facing policy information.   "
        primaryButton={{
          label: 'Contact us',
          href: '/get-in-touch',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default TrustCentrePage;
