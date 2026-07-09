import './trust-strip.css';

interface TrustItem {
  id: string;
  title: string;
  desc: string;
}

const TRUST_DATA: TrustItem[] = [
  {
    id: 'delivery',
    title: 'Free fast delivery',
    desc: 'For eligible EDGE appliances.'
  },
  {
    id: 'warranty',
    title: '2-years warranty',
    desc: 'Standard hardware cover.'
  },
  {
    id: 'naas',
    title: '30-day NaaS option',
    desc: 'For eligible monthly plans.'
  },
  {
    id: 'touchless',
    title: 'Zero-touch',
    desc: 'Nexus-driven activation and policy deployment.'
  },
  {
    id: 'iso',
    title: 'ISO-aligned practices',
    desc: 'Use this phrase for now unless formal certifications are confirmed.'
  }
];

const TrustStrip = () => {
  return (
    <section className="trust-strip-section" data-name="True Strip">
      <div className="trust-strip__grid">
        {TRUST_DATA.map((item) => (
          <div className="trust-card" key={item.id} data-name={item.id === 'delivery' ? 'trust strip' : `trust strip${item.id}`}>
            <h3 className="trust-card__title">{item.title}</h3>
            <p className="trust-card__desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
