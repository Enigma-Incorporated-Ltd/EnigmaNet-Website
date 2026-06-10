import ContentListSection from '@/components/ui/Use-Case/ContentListSection';

const features = [
  {
    title: 'SaaS Platforms',
    description:
      'Stable low-latency connectivity for cloud-based platforms where performance directly impacts user experience and retention.',
  },
  {
    title: 'Edge Services',
    description:
      'Optimised networking across distributed edge environments requiring resilient real-time communication and routing.',
  },
  {
    title: 'Cloud Infrastructure',
    description:
      'Enhanced traffic performance and session stability across hybrid and multi-cloud deployments.',
  },
  {
    title: 'Hosting Providers',
    description:
      'Improved reliability and service differentiation for managed hosting and infrastructure environments.',
  },
];
const features2 = [
  {
    title: 'Higher-value broadband service ties.',
  },
  {
    title: 'Improved customer retention.',
  },
  {
    title: 'Reduced dependency on MPLS infrastructure.',
  },
  {
    title: 'SLA-backed perfomance.',
  },
  {
    title: 'Faster provisioning across distributed depmloyments.',
  },
];
const FeatureSection = () => {
  return (
    <div>
      <ContentListSection
        title="Applicable Across Modern Platform Environments"
        features={features}
      />
      <ContentListSection
        title="Carrier-Grade Broadband Across Commodity Infrastructure"
        description="Enigma enables alt-nets and regional ISPs to combine multiple network accesses into a resilient high-performance transport layer with SLA-grade monitoring and automated provisioning.
Partners can replace expensive MPLS deployments with bonded DIA and Enigma overlays while maintaining premium service quality and operational visibility."
        features={features2}
      />
    </div>
  );
};

export default FeatureSection;
