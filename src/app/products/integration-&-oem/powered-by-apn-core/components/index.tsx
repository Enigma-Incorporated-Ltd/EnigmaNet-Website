import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import { operations } from '@/assets/img';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/channel-partner/Core capabilities - block 3.svg';
import CardSlider from '@/components/ui/CardSlider';
import CTA from '@/components/ui/CtaBand';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import HeroImage from '@/components/ui/HeroImage';
import Br from '@/components/ui/NewLine';
import MatricCardSlider from '@/components/ui/MatricCardSlider';
import ReusableTable from '@/components/ui/Table';

const Core = [
  {
    id: 1,
    icon: block1,
    title: ' Binary integration',
    description: `Deploy APN Core as a Linux user-space executable on compatible devices, gateways or CPE environments. `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Container deployment',
    description: `Package APN capabilities into containerised environments for edge, platform or cloud-native deployment models.`,
  },
  {
    id: 3,
    icon: block3,
    title: 'Virtual appliance ',
    description:
      'Run APN Core as part of a virtual router, cloud hub, VNF or managed infrastructure service.',
  },
];
const data3 = [
  {
    id: 1,
    icon: block1,
    title: 'Standard networks limit premium services',
    description: `Connectivity performance is often shaped by latency, loss, jitter, congestion and unstable access links.   `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Resilience is difficult to engineer',
    description: `Bonding, failover, traffic duplication and session continuity require deep transport-layer engineering. `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Security in motion is often separate ',
    description:
      'Data may be protected at rest or inside an application, but still depend on standard network transport underneath.  ',
  },
  {
    id: 4,
    icon: block1,
    title: ' Building it internally slows product roadmaps',
    description:
      'Developing acceleration, routing intelligence, diagnostics, provisioning and licence handling can take years.  ',
  },
];
const data4 = [
  {
    id: 1,
    icon: block1,
    title: ' Traffic acceleration',
    description: `Improves throughput across high-latency or lossy links by optimising how traffic moves across the network.  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'Multi-link bonding',
    description:
      'Combines multiple paths such as fibre, 5G, LTE, broadband or satellite into a more resilient transport model. ',
  },
  {
    id: 3,
    icon: block1,
    title: ' RAIN resilience',
    description:
      'Duplicates traffic across alternate paths to reduce effective packet loss and improve continuity for critical traffic.  ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Sub-second failover',
    description:
      'Keeps services running when one link drops by moving traffic across available backup paths. ',
  },
  {
    id: 5,
    icon: block2,
    title: ' Security and obfuscation ',
    description: `Supports encrypted transport, per-packet key diversity, traffic profiles and address/protocol hopping.   `,
  },
  {
    id: 6,
    icon: block1,
    title: ' IPv6-ready deployment',
    description: `Supports IPv4, IPv6 and dual-stack environments for modern telco, cloud and edge deployments. `,
  },
];
const data5 = [
  {
    id: 1,
    title: 'CPE / OEM Integration',
    description: `
     Embed APN Core into routers, gateways or modem lines and expose partner-branded accelerated connectivity features. 
     <br /><br />
     <div class="gold-divider"></div>
      <strong>Example use:</strong> "Accelerated Mode" integrated directly into an OEM router interface.
  `,
  },

  {
    id: 2,
    title: 'ISP / Telco value-added service  ',
    description: `
   Use APN Core to create assured connectivity services across broadband, fibre, LTE, 5G or satellite access. 
     <br /><br />
     <div class="gold-divider"></div>
      <strong>Example use:</strong> Premium business connectivity, voice-first branch, or resilient surveillance overlay.
  `,
  },
  {
    id: 3,
    title: 'Security / SD-WAN platform integration ',
    description: `
    Add transport resilience and path optimisation beneath existing security enforcement or SASE/ZTNA services. 
     <br /><br />
     <div class="gold-divider"></div>
      <strong>Example use:</strong> APN handles transport performance while the partner platform handles security policy.
  `,
  },
  {
    id: 4,
    title: 'Cloud / Edge platform deployment ',
    description: `
    Offer APN-enabled VNFs, virtual routers or marketplace services for customers connecting sites, users and workloads. 
     <br /><br />
     <div class="gold-divider"></div>
      <strong>Example use:</strong> APN-enabled virtual hub for cloud-to-site connectivity.
  `,
  },
];
const data6 = [
  {
    id: 1,
    title: 'Licence lifecycle  ',
    description: `
     Request, apply, store and verify licences from within the partner’s own GUI or management system. `,
  },

  {
    id: 2,
    title: 'Provisioning  ',
    description: `Configure provision server details, credentials and WAN interface selection. `,
  },
  {
    id: 3,
    title: 'Tunnel status ',
    description: `Expose tunnel up/down state, latency, jitter, quality, routing and loss indicators. `,
  },
  {
    id: 4,
    title: 'Resilience state  ',
    description: `Show bonding, RAIN, failover and active path behaviour clearly. `,
  },
  {
    id: 5,
    title: 'Diagnostics ',
    description: `Surface key diagnostic outputs for support, NOC and field engineering teams.`,
  },

  {
    id: 6,
    title: 'Inventory ',
    description: `Associate device identity, MAC/serial, customer record, configuration state and provisioning status.`,
  },
];

const data7 = [
  {
    id: 1,
    metric: '80 Mb/s',
    title: 'Throughput restoration',
    description:
      'On a 100 Mb/s link with 0.5% loss and 300 ms RTT, APN Core has demonstrated throughput uplift from around 6 Mb/s raw TCP to around 80 Mb/s. ',
  },
  {
    id: 2,
    metric: '10×–64×',
    title: 'Faster than raw TCP',
    description:
      'APN Core can deliver 10× to 64× faster performance than raw TCP across high-latency, lossy links. ',
  },
  {
    id: 3,
    metric: '8-4 Mb/s',
    title: 'Voice continuity ',
    description:
      'Demonstrated support for 180 concurrent G.711 calls at MOS 4 when available bandwidth was reduced from 8 Mb/s to 4 Mb/s. ',
  },
  {
    id: 4,
    metric: '<0.1%',
    title: 'Low effective packet loss ',
    description:
      'RAIN and resilience capabilities can hold effective loss below 0.1% for protected traffic. ',
  },
];
const data2 = [
  {
    id: 1,
    icon: block1,
    title: 'Network & CPE vendors ',
    description: `Add accelerated overlay capability to existing routers, modems or appliances  `,
  },

  {
    id: 2,
    icon: block3,
    title: 'ISPs & telcos  ',
    description: 'Create premium assured broadband, fibre, LTE, 5G or satellite services ',
  },
  {
    id: 3,
    icon: block1,
    title: 'Security & SD-WAN vendors  ',
    description: 'Add resilience, traffic steering and obfuscation into secure access platforms ',
  },
  {
    id: 4,
    icon: block3,
    title: 'Industrial / IoT gateway vendors ',
    description: 'Support deterministic telemetry, SCADA and control traffic over mixed links  ',
  },
  {
    id: 5,
    icon: block1,
    title: 'Cloud & edge platforms  ',
    description: 'Offer APN-enabled virtual routers, VNFs or CNFs inside their own environments ',
  },
];
const columns = [
  { key: 'product', label: 'Before APN Core ' },
  { key: 'audience', label: 'After Powered by APN Core ' },
];

const comparisonData = [
  {
    product: 'Secure data platform depends on standard transport ',
    audience: 'Data is protected and accelerated in motion ',
  },
  {
    product: 'Replication performance varies by network quality ',
    audience: 'More predictable movement across real-world links ',
  },
  {
    product: 'Connectivity issues sit outside the product value proposition ',
    audience: 'Transport performance becomes part of the partner offer ',
  },
  {
    product: 'Partner relies on third-party network behaviour  ',
    audience: 'Partner can offer a stronger, differentiated service layer ',
  },
];
const column1 = [
  { key: 'product', label: 'Product ' },
  { key: 'audience', label: 'Relationship ' },
];

const comparisonData1 = [
  {
    product: 'Enigma Connect  ',
    audience: 'Self-serve client experience built on APN Core  ',
  },
  {
    product: 'Enigma EDGE ',
    audience: 'Managed edge appliance family running APN Core ',
  },
  {
    product: 'ESC – Secure Networking ',
    audience: 'Cloud/VM service model using APN Core capabilities  ',
  },
  {
    product: 'AND/+ Integration Platform  ',
    audience: 'Formal OEM and carrier integration wrapper ',
  },
  {
    product: 'N0DE / Q-Fi ',
    audience: 'Consumer and specialist sub-brand experiences using the same core engine ',
  },
];
const ApnCoreDetails = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Integration & OEM', href: '/products/integration-&-oem' },
          { label: 'Powered by APN Core' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Embed Enigma’s APN Core <Br isDesktop />
            into your own platform
          </>
        }
        description={
          <>
            <div
              className={`fw-semibold ${theme === 'dark' ? 'text-light-blue' : 'text-primary'} mb-3  fs-4`}
            >
              Add accelerated, resilient and secure data movement to your existing product,
              appliance or service using Enigma’s Linux-based APN Core integration layer.
            </div>
            Powered by APN Core gives OEMs, telcos, platform providers and infrastructure partners
            access to the core engine behind Enigma Net’s connectivity products delivered as a Linux
            binary, container or virtual appliance integration model.
            <br />
            <br />
            It allows partners to strengthen their own offer while keeping their own brand, customer
            experience and commercial model.
          </>
        }
        buttons={[
          {
            label: 'Talk to Sales ',
            href: '/get-in-touch',
            variant: 'blue',
          },
        ]}
        features={[
          'Accelerate traffic',
          ' Improve resilience ',
          'Secure data in motion ',
          'Embed without rebuilding',
        ]}
      />
      <HeroImage img={operations} />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>The APN Core engine, built into your own product</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Powered by APN Core is Enigma’s integration programme for partners who want to embed APN
            capabilities directly into their own hardware, software, cloud or edge environments.
            <br />
            <br />
            Instead of adopting a finished Enigma appliance or client, partners integrate the APN
            Core runtime into their own product stack.
            <br />
            <br />
            This allows them to add high-performance, resilient and secure connectivity as part of
            their own branded offer.
          </>
        }
        data={Core}
        cardShow={3}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Designed for partners building connectivity <Br isDesktop />
                  into their own offer
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Powered by APN Core is built for infrastructure, networking and platform partners who
            already have a customer-facing product but want to add performance, resilience and
            secure data movement at the transport layer.
          </>
        }
        data={data2}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Building transport performance in-house takes years</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Many technology partners already solve important customer problems across security,
            infrastructure, edge, storage or application delivery. But their products still depend
            on the quality of the networks underneath them. That creates a gap.
          </>
        }
        data={data3}
        transitionLine={
          <>
            Powered by APN Core gives partners a way to add these capabilities faster — without
            losing control of their own product.
          </>
        }
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Acceleration, resilience and secure data movement at the core</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core sits inside the partner environment as an embedded transport layer. It works
            with Linux networking, TUN/TAP interfaces, routing policies and provisioning workflows
            to move traffic more predictably across real-world networks.
          </>
        }
        data={data4}
      />

      <CaseStudyHighlight
        image={operations}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="A lightweight runtime that fits into existing Linux-based environments. "
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core is designed to integrate into Linux-based appliances, CPEs, gateways, virtual
            machines and edge platforms.
            <br />
            <br />
            At runtime, APN Core behaves like another routed interface within the existing
            networking environment. The Linux kernel forwarding plane remains in control, while APN
            Core applies acceleration, routing, resilience and policy logic.
          </>
        }
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Flexible deployment models for OEM, telco, cloud and edge partners</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={data5}
      />

      <MatricCardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Built for real-world partner operations</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Powered by APN Core is more than a runtime binary. Successful partner integration also
            requires a management layer that can handle licence activation, provisioning, tunnel
            health, device identity and diagnostics
          </>
        }
        data={data6}
      />

      <MatricCardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Performance gains partners can build into their own offer</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core is designed for environments where standard network behaviour limits customer
            experience, application performance or service reliability.
          </>
        }
        data={data7}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Example: strengthening a secure data platform</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            A secure data platform may already protect customer data at rest, control access and
            support regulated workflows. <br /> <br />
            But data still has to move between sites, users, cloud environments and edge locations.
            By integrating APN Core underneath the platform, the partner can add protected and
            accelerated data movement in flight strengthening the overall customer proposition
            without rebuilding the product.
          </>
        }
      />
      <ReusableTable
        columns={columns}
        data={comparisonData}
        footerText="Enigma Net helps partners strengthen what they already offer adding performance, resilience and secure data movement to the customer environments they support. "
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>The same APN Core engine, packaged for different markets</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            APN Core is the shared engine behind Enigma Net’s wider product family. Powered by APN
            Core gives partners access to that core capability as an integration programme.
          </>
        }
      />
      <ReusableTable
        columns={column1}
        data={comparisonData1}
        footerText="The engine is shared. The packaging, policy and commercial model change depending on the customer and market.  "
        isbold
      />
      <CaseStudyHighlight
        data={[
          'Binary or container deployment validated ',
          'Linux dependencies confirmed ',
          'UN/TAP interface created successfully ',
          'Licence request, apply and verify workflow tested ',
          'Provision server reachable before and after tunnel activation ',
          'Routing and failover behaviour validated ',
          'Tunnel health and diagnostics exposed ',
          'SNMP/NMS or partner monitoring integration confirmed ',
          'Cloud endpoint mapping tested where required',
          'Reboot, restart and update behaviour checked ',
        ]}
        title={
          <>
            <HeaderTitle
              key={theme}
              title="Designed for structured technical onboarding"
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Each Powered by APN Core engagement follows a structured integration process to ensure
            the partner environment is ready for deployment, support and scale.
          </>
        }
        showButtons={true}
        primaryButton={{
          label: 'Request the technical integration checklist ',
          href: '#',
          variant: 'blue',
        }}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={<>Ready to build APN Core into</>}
        headline2="  your own platform?   "
        description="Powered by APN Core is built for partners who want to add acceleration, resilience and secure data movement to their own products without starting from scratch. 
         Speak to Enigma Net about OEM, telco, platform or embedded integration options. "
        primaryButton={{
          label: 'Book a technical demo ',
          href: '/get-in-touch',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default ApnCoreDetails;
