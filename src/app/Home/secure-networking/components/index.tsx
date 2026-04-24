import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import features1 from '@/assets/svgs/secure-networking/Pain card - Single links create avoidable points of failure.svg';
import features2 from '@/assets/svgs/secure-networking/Pain card - Performance changes across shared and long-distance paths.svg';
import features3 from '@/assets/svgs/secure-networking/Pain point - Security and access control become fragmented across environments.svg';
import block1 from '@/assets/svgs/secure-networking/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/secure-networking/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/secure-networking/Core capabilities - block 3.svg';
import block4 from '@/assets/svgs/secure-networking/Core capabilities - block 4.svg';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import CardSlider from '@/components/ui/CardSlider';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import CTA from '@/components/ui/CtaBand';
import PainCard from '@/components/ui/PainCard';
import heroImg from '@/assets/img/heroSlider/enigma secure networking infographic.png';
import HeroImage from '@/components/ui/HeroImage';
const features = [
  {
    id: 1,
    icon: features1,
    title: 'Single links create avoidable points of failure ',
  },
  {
    id: 2,
    icon: features2,
    title: 'Performance changes across shared and long-distance paths  ',
  },
  {
    id: 3,
    icon: features3,
    title: 'Security and access control become fragmented across environments ',
  },
];
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Multi-link bonding',
    description: ` Combine fibre, broadband, 5G and satellite into a single logical path so traffic can use the best available route at any moment. `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Predictive failover',
    description: `Detect degradation early and move traffic before users experience service interruption. `,
  },
  {
    id: 3,
    icon: block3,
    title: ' Zero-trust encrypted overlay',
    description: ` Protect traffic in transit with encrypted tunnels and identity-aware access controls across the overlay. `,
  },
  {
    id: 3,
    icon: block4,
    title: 'Real-time traffic contro',
    description: ` Prioritise critical applications and maintain more stable service behaviour across mixed network conditions. `,
  },
];

const fits = [
  'Fewer user-visible disruptions during link issues ',
  'More resilient access to payments, SaaS and business-critical services ',
  'Better visibility into performance across sites ',
  'Stronger continuity without replacing existing circuits ',
];
const outcomes = [
  'More resilient site and user connectivity ',
  ' Better continuity for critical applications  ',
  ' Stronger security across the transport layer ',
  'Greater control over network behaviour ',
];
const NetworkPage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Secure Networking' }]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Secure networking over the <br /> internet you already have
          </>
        }
        description={
          <div className="fs-5">
            A private, resilient overlay across existing links that improves traffic control,
            failover and security across sites, users and cloud services.
          </div>
        }
        // image={heroImg}
        buttons={[
          {
            label: 'Talk to a specialist',
            href: '/',
            variant: 'blue',
          },
          {
            label: 'Request a assessment ',
            href: '/',
            variant: 'gold',
          },
        ]}
        features={[' Multi-link bonding', 'Predictive failover', '  Zero-trust encrypted overlay']}
      />
      <HeroImage img={heroImg} />
      <PainCard
        data={features}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Most organisations still rely on internet <br />
                  access that behaves like best effort.{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            {' '}
            Critical services often run across broadband, fibre, cellular or cloud-connected paths
            that were never designed to deliver predictable failover, consistent performance or
            unified security control. When a link degrades, users feel it. When policies vary by
            site or user, risk grows.
          </>
        }
      />

      <CardSlider
        data={Core}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>A private, resilient transport layer across <br /> the connectivity you already use. </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Secure Networking sits across existing internet and WAN connections to create a
            more controlled path for business traffic. Instead of relying on single circuits and
            best-effort routing, organisations gain a secure overlay that can bond links, shift
            traffic away from degradation and apply consistent policy across the environment.
            <br />
            <br />
            The focus is not on replacing connectivity. It is on making existing connectivity behave
            more like a dependable private network for critical services.
          </>
        }
      />

      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Proven where connectivity disruption affects operations."
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Distributed branch and retail environment. Enigma overlaid broadband and 5G across
            multiple sites to reduce disruption, protect critical traffic and improve visibility
            into live network conditions.
          </>
        }
        data={fits}
        quote={<> " Reserved for approved customer quote "</>}
      />
      <CaseStudyHighlight
        title={
          <>
            <HeaderTitle
              key={theme}
              title="What this means in practice"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={outcomes}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={<>
        Turn existing connectivity into a private, <br/></>}
        headline2=" resilient network layer."
        // description="Get a free network performance assessment "
        primaryButton={{
          label: 'Talk to a specialist ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
        secondaryButton={{
          label: 'Request a assessment ',
          href: '/',
          variant: 'blue',
        }}
      />
    </div>
  );
};

export default NetworkPage;
