import { leadershipLanding } from '@/assets/img/company';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTA from '@/components/ui/CtaBand';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroImage from '@/components/ui/HeroImage';
import HeroSection from '@/components/ui/HeroSection';
import SearchBar from '@/components/ui/SearchBar';
import { useTheme } from '@/utils/useTheme';
const categories = [
  'All',
  'Enigma Net platform',
  'Secure networking',
  'Data and file storage',
  'Large File Transfer and Managed File Transfer',
  'APN Core and performance',
  'OEM & Integration',
  'Pricing',
  'Security and compliance',
  'Support',
];

const faqs = [
  {
    id: 1,
    question: 'What does Enigma Net do?',
    answer: `Enigma Net provides secure infrastructure, accelerated data movement, cloud storage and   
            networking solutions for organisations managing distributed environments, large data sets and   
            performance-sensitive workloads.  `,
    category: 'Enigma Net platform',
  },
  {
    id: 2,
    question: 'What is Enigma Nexus?',
    answer: `Enigma Nexus is the universal interface that brings Enigma services together, giving users   
             access to modules such as SyncSphere and operational views across the wider platform.  `,
    category: 'Enigma Net platform',
  },
  {
    id: 3,
    question: 'What is SyncSphere?',
    answer: `SyncSphere is the file and data management layer inside Enigma Nexus. It supports Hot   
            Storage browsing, high-speed transfer through LFT and MFT, and multi-cloud integration.`,
    category: 'Enigma Net platform',
  },
  {
    id: 4,
    question: 'What is APN Core?',
    answer: `APN Core is Enigma Net’s accelerated private network engine. It improves how data moves   
            across difficult network conditions using acceleration, bonding, resilience and secure transport   
           capabilities.  `,
    category: 'Enigma Net platform',
  },
  {
    id: 5,
    question: 'What is ESC Secure Networking?',
    answer: `ESC Secure Networking is Enigma Net’s secure networking service layer, designed to help   
           organisations connect users, devices, sites and cloud environments through an accelerated and   
           protected transport layer.  `,
    category: 'Secure networking',
  },
  {
    id: 6,
    question: 'Does Enigma Net replace existing networks?',
    answer: `Enigma Net is designed to work alongside existing infrastructure. It improves the transport   
            layer rather than forcing customers to replace every access link or network provider.  `,
    category: 'Secure networking',
  },
  {
    id: 7,
    question: 'What types of connectivity can Enigma Net work with?',
    answer: `Enigma Net can support mixed connectivity environments including broadband, fibre, LTE, 5G,   
satellite and cloud-based network paths.  `,
    category: 'Secure networking',
  },
  {
    id: 8,
    question: 'How does Enigma Net support resilience?  ',
    answer: `Enigma Net uses capabilities such as dynamic bonding, failover and RAIN resilience to help   
reduce the impact of degraded or failed links.`,
    category: 'Secure networking',
  },
  {
    id: 9,
    question: 'What is Enigma Hot Storage?',
    answer: `Enigma Hot Storage is Enigma Net’s performance cloud object storage layer for media, backups,   
           logs, working assets and large data sets.  `,
    category: 'Data and file storage',
  },
  {
    id: 10,
    question: 'Is Hot Storage S3-compatible?',
    answer: `Yes. Hot Storage is exposed through S3-compatible APIs and can present buckets as project   
workspaces.  `,
    category: 'Data and file storage',
  },
  {
    id: 11,
    question: 'Does Hot Storage include egress fees?',
    answer: `Hot Storage is positioned with flat monthly pricing and no egress or API fees.  `,
    category: 'Data and file storage',
  },
  {
    id: 12,
    question: 'What is Large File Transfer?  ',
    answer: `Large File Transfer, or LFT, is the ad hoc high-speed file transfer engine inside SyncSphere. It   
           lets users send large files using secure shareable links.  `,
    category: 'Data and file storage',
  },
  {
    id: 13,
    question: 'What is Managed File Transfer?  ',
    answer: `Managed File Transfer, or MFT, is the scheduled and policy-driven transfer engine inside   
           SyncSphere. It automates recurring file movement between storage environments.`,
    category: 'Data and file storage',
  },
  {
    id: 14,
    question: 'What is Multi Cloud Integration? ',
    answer: `Multi Cloud Integration is a SyncSphere capability that connects storage sources such as   
            OneDrive, Google Drive, NAS, S3-compatible storage and Hot Storage into one file management   
            view. `,
    category: 'Data and file storage',
  },
  {
    id: 15,
    question: 'What is the difference between LFT and MFT?',
    answer: `LFT is for ad hoc, user-led file movement through shareable links. MFT is for recurring,   
           scheduled and policy-driven file movement that needs to run automatically.  `,
    category: 'Large File Transfer and Managed File Transfer',
  },
  {
    id: 16,
    question: 'When should I use LFT?  ',
    answer: `Use LFT when a person needs to send or receive large files on demand, especially through   
          upload or download links for internal or external users.  `,
    category: 'Large File Transfer and Managed File Transfer',
  },
  {
    id: 17,
    question: 'When should I use MFT?',
    answer: `Use MFT when files need to move repeatedly on a schedule, as part of a workflow, backup   
process, compliance requirement or automated data pipeline.  
`,
    category: 'Large File Transfer and Managed File Transfer',
  },
  {
    id: 18,
    question: 'Do recipients need software to use LFT?',
    answer: `No. LFT recipients can upload or download files through a browser-based portal without   
installing software.  `,
    category: 'Large File Transfer and Managed File Transfer',
  },
  {
    id: 19,
    question: 'Can MFT jobs be triggered manually?',
    answer: `Yes. MFT jobs can be triggered manually outside their normal schedule where required. `,
    category: 'Large File Transfer and Managed File Transfer',
  },
  {
    id: 20,
    question: 'How does APN Core improve transfer performance?',
    answer: `APN Core improves transfer behaviour across difficult network conditions using acceleration,   
            bonding, traffic management and resilience capabilities.  `,
    category: 'APN Core and performance',
  },
  {
    id: 21,
    question: 'Does Enigma Net use UDP for file transfer?',
    answer: `LFT and MFT stay on TCP port 443, helping reduce firewall friction compared with custom UDP-based transfer protocols.  `,
    category: 'APN Core and performance',
  },
  {
    id: 22,
    question: 'What does TCP/443 mean for customers?',
    answer: `TCP/443 is commonly used for HTTPS traffic, which can make deployment simpler because   
        many environments already allow this traffic type.  `,
    category: 'APN Core and performance',
  },
  {
    id: 23,
    question: 'What are RAIN and bonding?',
    answer: `Bonding combines multiple network paths. RAIN resilience can duplicate protected traffic   
across diverse paths to reduce the impact of loss or link degradation.  `,
    category: 'APN Core and performance',
  },
  {
    id: 24,
    question: 'Can APN Core work across high-latency or lossy links?',
    answer: `Yes. APN Core is designed for difficult network conditions where latency, loss, jitter or   
congestion can affect performance.  `,
    category: 'APN Core and performance',
  },
  {
    id: 25,
    question: 'What is Powered by APN Core?',
    answer: `Powered by APN Core is Enigma Net’s OEM and platform integration programme. It allows   
partners to embed APN Core into their own products, platforms or services.`,
    category: 'OEM & Integration',
  },
  {
    id: 26,
    question: 'Is OEM & Integration a self-serve product?',
    answer: `No. OEM & Integration is sales-led because each partner environment, commercial model and   
deployment requirement is different.`,
    category: 'OEM & Integration',
  },
  {
    id: 27,
    question: 'What delivery models are supported?',
    answer: `APN Core can be delivered through binary integration, container deployment or virtual   
appliance models.`,
    category: 'OEM & Integration',
  },
  {
    id: 28,
    question: 'Can partners keep their own branding and UI?',
    answer: `Yes. Partners retain control of their own branding, user interface, orchestration, routing model   
and customer relationship.`,
    category: 'OEM & Integration',
  },
  {
    id: 29,
    question: 'Who is OEM & Integration for?',
    answer: `It is designed for network vendors, CPE vendors, ISPs, telcos, security vendors, SD-WAN/SASE   
providers, IoT gateway vendors, cloud providers and edge platform operators.`,
    category: 'OEM & Integration',
  },
  {
    id: 30,
    question: 'Where can I find Enigma Net pricing?  ',
    answer: `Pricing depends on the product, deployment model, storage requirements, transfer volume and   
support needs. Customers should contact Enigma Net for the most accurate pricing.`,
    category: 'Pricing',
  },
  {
    id: 31,
    question: 'Is Hot Storage priced separately from file transfer?',
    answer: `Hot Storage pricing relates to storage capacity. LFT and MFT transfer usage may be priced   
separately depending on the workflow and transfer model.`,
    category: 'Pricing',
  },
  {
    id: 32,
    question: 'How is LFT priced?',
    answer: `LFT pricing depends on the transfer workflow, storage destination, transfer volume and   
whether premium APN-accelerated transfer is being used.`,
    category: 'Pricing',
  },
  {
    id: 33,
    question: 'How is MFT priced?',
    answer: `Managed File Transfer pricing is tailored to the workflow. Pricing depends on transfer volume,   
storage destination, scheduling requirements, compliance needs and the level of APN-accelerated automation required.  `,
    category: 'Pricing',
  },
  {
    id: 34,
    question: 'Is Multi Cloud Integration priced separately?',
    answer: `Multi Cloud Integration is currently positioned as a SyncSphere capability rather than a   
separately priced standalone product. Storage, transfer and automation usage may be priced   
separately where applicable.`,
    category: 'Pricing',
  },
  {
    id: 35,
    question: 'How does Enigma Net protect data in motion?',
    answer: `Enigma Net supports encrypted transport and secure data movement across its platform   
capabilities.`,
    category: 'Security and compliance',
  },
  {
    id: 36,
    question: 'Does Enigma Net support audit visibility?',
    answer: `Yes. Products such as LFT, MFT and Sentinel support activity logs, operational visibility and   
exportable records where applicable.  `,
    category: 'Security and compliance',
  },
  {
    id: 37,
    question: 'Does LFT support controlled sharing?',
    answer: `Yes. LFT can support expiry dates, optional passwords, link visibility, link revocation and activity   
logging.`,
    category: 'Security and compliance',
  },
  {
    id: 38,
    question: 'Does MFT support integrity checks?',
    answer: `Yes. MFT supports integrity-focused workflows including SHA-256 hashing and end-to-end   
checks.`,
    category: 'Security and compliance',
  },
  {
    id: 39,
    question: 'What is Enigma Net’s compliance status?',
    answer: `Enigma Net is working towards ISO 27001. SOC 2 is planned after ISO 27001. Do not present   
either as achieved certification unless formally confirmed.  `,
    category: 'Security and compliance',
  },
  {
    id: 40,
    question: 'How do I contact Enigma Net support?',
    answer: `Customers should use the approved Enigma Net support route provided during onboarding or   
contact the Enigma Net team through the website.  `,
    category: 'Support',
  },
  {
    id: 41,
    question: 'Is premium support available? ',
    answer: `Premium support may be available depending on the product, service tier or commercial   
agreement.`,
    category: 'Support',
  },
  {
    id: 42,
    question: 'Can Enigma Net help with implementation?',
    answer: `Yes. Enigma Net can support technical scoping, deployment planning and integration   
requirements depending on the product and engagement model.  `,
    category: 'Support',
  },
  {
    id: 43,
    question:'Do all products require sales engagement?',
    answer:`Some products and capabilities are sales-led, especially OEM & Integration, enterprise   
deployments, storage architecture, MFT workflows and technical onboarding.  `,
    category: 'Support',
  }
];
const FaqPage = () => {
  const { theme } = useTheme();
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Resources', href: '/company/resources' },
          { label: 'FAQ', href: '/company/resources/faq' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={<>Frequently asked questions</>}
        description="Find quick answers about Enigma Net products, secure networking, data and file storage, APN   
acceleration, deployment options, pricing, security and support.  "
        buttons={[
          {
            label: 'Contact support',
            href: '/get-in-touch',
            variant: 'blue',
            disableSentenceCase: true,
          },
          {
            label: 'Talk to Enigma',
            href: '/get-in-touch',
            variant: 'gold',
            disableSentenceCase: true,
          },
          {
            label: 'Explore products',
            href: '/products',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        features={['Products', 'Pricing', 'Deployment ', 'Security', 'Support']}
      />
      <HeroImage img={leadershipLanding} />
      <SearchBar
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Search by topic</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <div className="mb-4">
            Use search or browse by category to find the answer most relevant to your question.
          </div>
        }
        categories={categories}
        faqs={faqs}
      />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Still have questions?"
        description="If you cannot find the answer you need, speak to Enigma Net. The team can help route your   
question to the right product, technical or commercial contact."
        primaryButton={{
          label: 'Contact support',
          href: '/get-in-touch',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default FaqPage
