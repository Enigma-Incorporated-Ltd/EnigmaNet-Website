import './virtual-editions.css';
import virtualEditionsImg from '@/assets/img/products/virtual-editions.png';

interface VECardItem {
  id: string;
  title: string;
  desc: string;
}

const VE_DATA: VECardItem[] = [
  {
    id: 'aws',
    title: 'AWS Marketplace:',
    desc: 'PAYG from $0.35-$1.10/hr'
  },
  {
    id: 'azure',
    title: 'Azure Marketplace:',
    desc: 'PAYG and BYOL options'
  },
  {
    id: 'included',
    title: 'Included:',
    desc: 'ITM QoS, bonding features, policy configuration and usage-billed deployment options.'
  }
];

const VirtualEditions = () => {
  return (
    <section className="virtual-editions-section" data-name="virtual editions">
      {/* Title */}
      <h2 className="ve__title">Virtual Editions</h2>

      <div className="ve__container" data-node-id="222:3023">
        {/* Left Column: Image */}
        <div className="ve__image-column" data-name="image 1">
          <img src={virtualEditionsImg} alt="Virtual Editions Graphic" />
        </div>

        {/* Right Column: 3 Cards */}
        <div className="ve__cards-column" data-node-id="222:3025">
          {VE_DATA.map((card) => (
            <div className="ve-card" key={card.id} data-name="EDGE card VE">
              <h3 className="ve-card__title">{card.title}</h3>
              <p className="ve-card__desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Row */}
      <div className="ve__action-row">
        <button className="btn-ve-action" data-name="secondary help btn/seconadary btn default">
          View virtual options
        </button>
      </div>
    </section>
  );
};

export default VirtualEditions;
