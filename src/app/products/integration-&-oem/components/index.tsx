import { HeroSyncSphere } from '@/assets/img/products';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CardSlider from '@/components/ui/CardSlider';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroSection from '@/components/ui/HeroSection';
import PolicyLinks from '@/components/ui/Link';
import Br from '@/components/ui/NewLine';
import { useTheme } from '@/utils/useTheme';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
import BulletPoint from '@/components/ui/BulletPoint';
import FooterStatement from '@/components/ui/FooterStatement';
import ReusableTable from '@/components/ui/Table';
import MatricCardSlider from '@/components/ui/MatricCardSlider';
import FeatureComparison from '@/components/ui/FeatureComparison';
import Faqs from '@/components/ui/faq';
import CTA from '@/components/ui/CtaBand';
const policyLinks = [
  { label: 'Binary Integration', href: '#binary-integration' },
  {
    label: 'Container Deployment',
    href: '#container-deployment',
  },
  {
    label: 'Virtual Appliance',
    href: '#virtual-appliance',
  },
];
const Core = [
  {
    id: 1,
    description: `Partners need stronger performance over imperfect networks  `,
  },
  {
    id: 2,
    description: `Customers expect resilience across fibre, 5G, satellite and cloud  `,
  },
  {
    id: 3,
    description: 'Building transport acceleration in-house is complex  ',
  },
  {
    id: 4,
    description: `Security and obfuscation are difficult to add later  
 `,
  },
  {
    id: 5,
    description:
      'Partners need integration without losing control of their own UI, stack or commercial model    ',
  },
];
const partnerCard = [
  {
    id: 1,
    icon: block1,
    title: 'Network & CPE vendors  ',
    description: `Add an accelerated overlay to existing router, modem or appliance lines.    `,
  },
  {
    id: 2,
    icon: block2,
    title: 'ISPs & telcos  ',
    description: `Layer APN Core over broadband, fibre, LTE, 5G or satellite to support premium assured services.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Security & SD-WAN vendors ',
    description:
      'Add resilience, traffic protection and obfuscation inside SASE, ZTNA or secure networking products.   ',
  },
  {
    id: 4,
    icon: block1,
    title: ' Industrial & IoT gateway vendors  ',
    description:
      'Support more deterministic paths for telemetry, control systems and mixed-link environments.   ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Cloud & edge platform providers  ',
    description:
      'Deploy APN-enabled VNFs or CNFs inside cloud, edge, NFV or marketplace environments.     ',
  },
];
const Capability = [
  {
    id: 1,
    icon: block1,
    title: 'Linux binary  ',
    description: `Runs on Linux-based operating systems with standard virtual interface support.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Containerised network function  ',
    description: `Deployable into Docker, Kubernetes and container orchestration environments.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Virtual machine image  ',
    description: 'Available for cloud and on-premise virtualisation environments.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'On-premise appliance option   ',
    description:
      'Can be installed on bare-metal Linux or virtualised in data centres, carrier POPs and customer environments.    ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Cloud marketplace ready   ',
    description:
      'Supports cloud and edge deployment models suitable for partner marketplaces and managed service environments.   ',
  },
];
const Capability1 = [
  {
    id: 1,
    icon: block1,
    title: 'TCP Acceleration  ',
    description: `Supports 10–64× throughput improvement on lossy or high-latency links.  
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'Multi-link bonding  ',
    description: `Bonds up to 8 circuits across fibre, 5G, satellite and other access types, with sub-second failover.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'RAIN resilience  ',
    description:
      'Duplicates traffic across paths to help hold effective packet loss below 0.1%.    ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Intelligent Traffic Management  ',
    description:
      'Uses byte-level QoS so real-time and priority traffic is not blocked by bulk transfers.   ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Encryption   ',
    description:
      'Supports secure transport with per-packet key diversity and AES-256 encryption.   ',
  },
  {
    id: 6,
    icon: block3,
    title: 'Obfuscation   ',
    description:
      'Supports traffic profiles, protocol hopping and IP hopping across IPv4 and IPv6 environments.  ',
  },
  {
    id: 7,
    icon: block1,
    title: 'IPv6 ready   ',
    description: 'Supports tunnels over IPv6, dual-stack environments and prefix delegation.   ',
  },
  {
    id: 8,
    icon: block2,
    title: 'Combi-groups     ',
    description:
      'Supports multi-core bonding for links with different latency and capacity characteristics.   ',
  },
];
const tooling = [
  {
    id: 1,
    icon: block1,
    title: 'Live tunnel statistics  ',
    description: `Visibility into jitter, RTT, route tables, quality scores and acceleration statistics. 
`,
  },
  {
    id: 2,
    icon: block2,
    title: 'SNMP integration  ',
    description: `Agent and MIB support for existing NMS and NOC tooling.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Diagnostics tooling  ',
    description:
      'CLI and operational statistics to support testing, troubleshooting and partner support.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Embedded system support  ',
    description: 'Auto-restart wrapper for environments without heavy service managers.  ',
  },
  {
    id: 5,
    icon: block2,
    title: 'Remote management     ',
    description: 'Config push, reboot and operating system upgrade support where licensed.  ',
  },
 
];
const column1 = [
  { key: 'delivery', label: 'Delivery model   ' },
  { key: 'form', label: 'Form factor ' },
  { key: 'bestFor', label: 'Best for ' },
  { key: 'environment', label: 'Typical environment ' },
  { key: 'partner', label: 'Partner control ' },
];

const comparisonData1 = [
  {
    delivery: 'Binary Integration  ',
    form: 'Single user-space executable  ',
    bestFor: 'CPE, routers, gateways, embedded platforms    ',
    environment: 'Linux-based products and appliances ',
    partner: 'Partner controls UI, branding, routing and orchestration   ',
  },
  {
    delivery: 'Container  Deployment ',
    form: 'Docker / OCI container image   ',
    bestFor: 'Cloud-native, NFV, edge and marketplace platforms ',
    environment: 'Kubernetes, Docker, AWS, Azure, Proxmox   ',
    partner: 'Partner controls orchestration and service platform  ',
  },
  {
    delivery: 'Virtual Appliance  ',
    form: 'Pre-built VM image    ',
    bestFor: 'Cloud hubs, data centres, carrier POPs and hybrid networks   ',
    environment: '',
    partner: ' ',
  },
];
const data6 = [
  {
    id: 1,
    title: '13× uplift in difficult conditions   ',
    description: `
     On a 100 Mb/s link with 0.5% loss and 300 ms RTT, raw TCP achieves approximately 6 Mb/s   
compared with approximately 80 Mb/s using APN Core.   `,
  },

  {
    id: 2,
    title: 'Voice resilience under constrained bandwidth    ',
    description: `Supports 180 concurrent G.711 VoIP calls at MOS 4, even after halving available bandwidth.   `,
  },
  {
    id: 3,
    title: 'High-speed link support  ',
    description: `32-bit TCP acceleration sequencing helps avoid throughput ceilings on high-speed links.
`,
  },
 
];
const faqs = [
  {
    question: 'Is OEM & Integration a finished appliance or a partner programme?  ',
    answer: (
      <>
        <p className="mb-0">
          OEM & Integration is a partner integration programme. It allows partners to embed APN Core
          into their own products, platforms or services.
        </p>
      </>
    ),
  },
  {
    question: 'Can partners keep their own branding and UI?  ',
    answer: (
      <>
        <p>
          Yes. Partners retain control of their own branding, user interface, orchestration and
          customer management.
        </p>
      </>
    ),
  },
  {
    question: 'What deployment models are supported?  ',
    answer: (
      <>
        <p>
          APN Core can be integrated as a Linux binary, containerised network function or virtual
          appliance.
        </p>
      </>
    ),
  },
  {
    question: 'Does integration require kernel modification?  ',
    answer: (
      <>
        <p>
          The binary model is designed to run in user space and present APN Core as another routed
          interface to the operating system.
        </p>
      </>
    ),
  },
  {
    question: 'Who is this for?  ',
    answer: (
      <>
        <p>
          It is designed for network vendors, CPE vendors, ISPs, telcos, security vendors,
          SD-WAN/SASE providers, IoT gateway vendors, cloud providers and edge platform operators.
        </p>
      </>
    ),
  },
  {
    question: 'Is this self-serve?  ',
    answer: (
      <>
        <p>
          No. OEM & Integration is sales-led because each partner environment, commercial model and
          deployment requirement is different.
        </p>
      </>
    ),
  },
];
const IntegrationList = () => {
  const location = useLocation();
  const { theme } = useTheme();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      // Wait until the page is rendered
      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' }, { label: 'OEM & Integration' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeroSection
        title={<>Embed APN Core into your own products and platforms</>}
        description={
          <>
            Powered by APN Core gives OEMs, platform providers and network partners a way to
            integrate Enigma Net’s acceleration, resilience, security and obfuscation technology
            into their own infrastructure, branding, UI and orchestration.
          </>
        }
        image={HeroSyncSphere}
        buttons={[
          {
            label: 'Talk to Sales ',
            href: '/get-in-touch',
            variant: 'blue',
          },
        ]}
        features={[
          'Binary integration',
          'Container deployment ',
          'Virtual appliance ',
          'Partner-controlled branding  ',
        ]}
      />
      <PolicyLinks links={policyLinks} title="Explore delivery models" openInNewTab={false} />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Building performance, resilience and <Br isDesktop /> secure transport in-house
                  takes time
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Network, security, cloud and edge providers are under pressure to deliver faster, more
            reliable and more secure services across mixed infrastructure.
            <br />
            <br />
            Building acceleration, bonding, failover, encryption, traffic obfuscation and
            operational visibility from scratch can take years of engineering effort.
            <br />
            <br />
            OEM & Integration gives partners a faster route to embed APN Core capability into their
            own products and services while keeping control of their customer experience.
          </>
        }
        data={Core}
        cardShow={4}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Add APN Core capability without rebuilding your product.</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Powered by APN Core allows partners to embed Enigma Net’s core acceleration, resilience
            and secure transport logic into their own products, platforms and services.
            <br />
            <br />
            Instead of selling a finished Enigma appliance or client, Enigma provides the core
            engine as a Linux binary, containerised deployment or virtual appliance option.
            <br />
            <br />
            Partners keep control of their own branding, interface, orchestration, forwarding plane
            and customer management while gaining access to APN Core capabilities.
          </>
        }
      />
      <FooterStatement
        text={
          <>
            <HeaderTitle
              className="text-center h2"
              key={theme}
              title={
                <>
                  Drop in APN Core. Keep your own product. Add acceleration, resilience and security
                  that would take years to build in-house.
                </>
              }
              variant={theme === 'dark' ? 'blue' : 'gold'}
            />
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for partners extending network and platform capability</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={partnerCard}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Three ways to integrate APN Core</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Powered by APN Core gives partners three customer-ready delivery models: Binary
            Integration, Container Deployment and Virtual Appliance deployment.
            <br />
            <br />
            Each model gives access to the same APN Core engine for acceleration, resilience,
            encryption, obfuscation and intelligent traffic management, while allowing partners to
            retain control of their own product, platform, branding and orchestration.
          </>
        }
      />
      <section id="binary-integration">
        <BulletPoint
          sectionTitle="Binary Integration  "
          title={
            <>
              <HeaderTitle
                key={theme}
                title={
                  <>
                    Embed APN Core directly into Linux-based products, routers, gateways and
                    appliances
                  </>
                }
                variant={theme === 'dark' ? 'gold' : 'blue'}
              />
            </>
          }
          description={
            <>
              Binary Integration delivers APN Core as a single user-space executable that runs on
              Linux-based operating systems.
              <br />
              <br />
              It uses a TUN/TAP virtual interface as the tunnel endpoint, so APN Core appears to the
              host operating system as another routed interface. No kernel modifications are
              required. This model is designed for partners that want to embed APN Core directly
              into their own products while keeping their existing forwarding plane, routing stack,
              branding, UI and orchestration intact.
            </>
          }
          bulletTitle="Best for  "
          data={[
            'Network and CPE vendors  ',
            'Router and modem manufacturers  ',
            'Embedded Linux platforms  ',
            'Industrial and IoT gateway vendors ',
            'Specialist appliance vendors  ',
            'Partners wanting APN Core inside their own hardware or software stack  ',
          ]}
        />
        <BulletPoint
          isBullet={true}
          bulletTitle="Customer-facing technical notes"
          data={[
            'Runs as a single user-space executable  ',
            'Uses TUN/TAP as the tunnel endpoint  ',
            'No kernel modification required  ',
            'Can be statically or dynamically linked   ',
            'Cross-compiles against OEM or silicon vendor toolchains  ',
            'Requires Linux kernel support for TUN/TAP  ',
            'Supports standard crypto libraries including OpenSSL  ',
            'Works on commodity Linux distributions or custom embedded distributions  ',
            'Supports per-device licensing tied to hardware identity  ',
            'Supports SKU-based feature differentiation  ',
            'Supports SNMP integration for existing NMS and NOC tooling  ',
            'Supports auto-restart behaviour for embedded systems  ',
            'Provides live tunnel statistics, including jitter, RTT and quality scores  ',
          ]}
        />
        <BulletPoint
          bulletTitle="Partner control  "
          bulletDescription={<>Partners retain full control of: </>}
          data={[
            'UI and branding  ',
            'Product orchestration  ',
            'Forwarding plane  ',
            'Routing stack  ',
            'Operational tooling  ',
            'Customer management  ',
            'Commercial packaging  ',
          ]}
        />
        <FooterStatement
          text={
            <>
              <HeaderTitle
                className="text-center h2"
                key={theme}
                title={
                  <>
                    Drop APN Core into a partner product without rebuilding the product architecture
                    or giving up control of the customer experience.
                  </>
                }
                variant={theme === 'dark' ? 'blue' : 'gold'}
              />
            </>
          }
        />
      </section>
      <section id="container-deployment">
        <BulletPoint
          sectionTitle="Container Deployment"
          title={
            <>
              <HeaderTitle
                key={theme}
                title={
                  <>
                    Deploy APN Core as a Docker / OCI container or <Br isDesktop /> cloud-native
                    network function
                  </>
                }
                variant={theme === 'dark' ? 'gold' : 'blue'}
              />
            </>
          }
          description={
            <>
              Container Deployment packages APN Core as a Docker / OCI container image containing
              the APN engine.
              <br />
              <br />
              This model is designed for partners operating cloud-native platforms, NFV
              environments, edge compute infrastructure or marketplace services.
              <br />
              <br />
              APN Core can be deployed as a Cloud-Native Network Function within Kubernetes or other
              container orchestration environments.
            </>
          }
          bulletTitle="Best for  "
          data={[
            'Cloud-native platforms  ',
            'NFV environments  ',
            'Edge compute providers   ',
            'Kubernetes and Docker-based infrastructure   ',
            'Marketplace offerings  ',
            'Managed service providers  ',
            'Partners building APN Core into a wider service platform  ',
          ]}
        />
        <BulletPoint
          isBullet={true}
          bulletTitle="Customer-facing technical notes"
          data={[
            'Delivered as Docker / OCI container images   ',
            'Supports deployment as a Cloud-Native Network Function  ',
            'Suitable for NFV, edge compute and marketplace environments  ',
            'Deployment targets include Kubernetes, Docker, AWS, Azure and Proxmox   ',
            'Uses the same APN engine and configuration approach as other deployment profiles  ',
            'Fits orchestration-led and service-platform operating models  ',
          ]}
        />

        <FooterStatement
          text={
            <>
              <HeaderTitle
                className="text-center h2"
                key={theme}
                title={
                  <>
                    Run APN Core as part of a modern containerised infrastructure model, making it
                    suitable for edge, NFV, marketplace and cloud-native service delivery.
                  </>
                }
                variant={theme === 'dark' ? 'blue' : 'gold'}
              />
            </>
          }
        />
      </section>
      <section id="virtual-appliance">
        <BulletPoint
          sectionTitle="Virtual Appliance  "
          title={
            <>
              <HeaderTitle
                key={theme}
                title={
                  <>
                    Deploy APN Core as a pre-built VM image for cloud, data centre or on-premise
                    environments.
                  </>
                }
                variant={theme === 'dark' ? 'gold' : 'blue'}
              />
            </>
          }
          description={
            <>
              Virtual Appliance deployment delivers APN Core as a pre-built virtual machine image
              for AWS EC2, Azure and on-premise hypervisors. It uses the same APN engine and
              configuration approach as the SaaS core, while giving partners and customers clearer
              control over hosting, deployment and operational boundaries.
              <br />
              <br />
              This model is suited to public cloud hubs, enterprise data centres, carrier points of
              presence, managed service environments and hybrid networks.
            </>
          }
          bulletTitle="Best for  "
          data={[
            'Public cloud hubs  ',
            'Private cloud environments  ',
            'On-premise data centres  ',
            'Carrier and MSP points of presence ',
            'Enterprise hub-and-spoke networks  ',
            'Large IoT or B2B SaaS platforms  ',
            'Organisations with data sovereignty or compliance requirements   ',
          ]}
        />
        <BulletPoint
          isBullet={true}
          bulletTitle="Customer-facing technical notes"
          data={[
            'Available as pre-built VM images for AWS EC2, Azure and on-premise hypervisors   ',
            'Uses the same APN engine and configuration as the SaaS core  ',
            'Supports policy-based routing for multiple elastic public IPs   ',
            'Supports on-premise deployment on bare-metal Linux or virtualised data centre environments  ',
            'Suitable for deployment in data centres and carrier POPs   ',
            'Supports hub-and-spoke and full-mesh overlay topologies   ',
            'Uses UDP 65500 as the tunnel port to simplify firewall rules  ',
          ]}
        />

        <FooterStatement
          text={
            <>
              <HeaderTitle
                className="text-c  enter h2"
                key={theme}
                title={
                  <>
                    Deploy APN Core inside cloud, data centre, carrier or hybrid environments while
                    maintaining clear operational control and integration with existing
                    infrastructure.
                  </>
                }
                variant={theme === 'dark' ? 'blue' : 'gold'}
              />
            </>
          }
        />
      </section>
      <ReusableTable
        columns={column1}
        data={comparisonData1}
        title="Delivery model comparison  "
        isbold
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Designed for existing infrastructure and operating models</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={Capability}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>APN Core capabilities available through every delivery model</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Whether deployed as a binary, container or virtual appliance, APN Core provides the same
            foundation for accelerated, resilient and secure data movement across challenging
            network conditions.
          </>
        }
        data={Capability1}
      />
      <MatricCardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Performance designed for difficult network conditions</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core is designed to improve throughput, resilience and service quality where
            standard network conditions would normally reduce performance.
          </>
        }
        data={data6}
      />
      <FeatureComparison
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Partners keep control of the customer experience</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            OEM & Integration is designed so partners can add APN Core capability without giving up
            control of their own product, operating model or customer relationship.
          </>
        }
        benitsTitle="Partner retains control of:  "
        limitationsTitle="Enigma provides:  "
        benefits={[
          'UI and branding   ',
          'Customer orchestration  ',
          'Forwarding plane and routing stack  ',
          'Operational tooling  ',
          'Customer management   ',
          'Commercial packaging  ',
        ]}
        limitations={[
          'Binary, container or virtual appliance image  ',
          'Licence control and activation  ',
          'Diagnostics tooling  ',
          'Integration support  ',
          'Certification support   ',
          'Partner enablement  ',
        ]}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Operational visibility for partner environments</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core integration can include tooling that helps partners understand tunnel
            behaviour, performance and service condition.
          </>
        }
        data={tooling}
      />
      <BulletPoint
        data={[
          'Talk to sales  ',
          'Define the integration model  ',
          'Review technical requirements  ',
          'Validate deployment approach  ',
          'Complete integration and certification  ',
          'Launch through partner product, platform or marketplace  ',
        ]}
        bulletTitle="Process steps:"
        description={
          <>
            OEM & Integration is designed for partners with specific technical, commercial and
            deployment requirements.
            <br />
            <br />
            The engagement starts with a technical and commercial discussion to understand the
            target environment, integration model, operating boundaries and customer use case.
          </>
        }
        title={
          <>
            <HeaderTitle
              key={theme}
              title="A sales-led integration process  "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        showButtons
        primaryButton={{
          label: 'Talk to sales  ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
      />

      <Faqs faqs={faqs} sectionTitle="FAQs" title="Common questions" />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={<>Embed APN Core into your own product, <br/></>}
        headline2="platform or service.  "
        primaryButton={{
          label: 'Book a demo',
          href: '/get-in-touch',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default IntegrationList;
