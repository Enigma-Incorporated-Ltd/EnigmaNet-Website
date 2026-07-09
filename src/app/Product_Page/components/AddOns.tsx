import { FiWifi, FiZap, FiHeadphones, FiSliders, FiMap, FiShield } from 'react-icons/fi';
import './add-ons.css';
import addonsFeatureImg from '@/assets/img/products/addons-feature.png';

interface AddonItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ADDONS_DATA: AddonItem[] = [
  {
    id: 'lte',
    title: 'LTE/5G module',
    desc: 'Add mobile failover or active mobile WAN',
    icon: <FiWifi />
  },
  {
    id: 'psu',
    title: 'Dual PSU',
    desc: 'Improve appliance resilience',
    icon: <FiZap />
  },
  {
    id: 'support',
    title: 'Premium support',
    desc: 'Enhanced SLA and faster response',
    icon: <FiHeadphones />
  },
  {
    id: 'services',
    title: 'Professional services',
    desc: 'Design, deployment and turn-up support',
    icon: <FiSliders />
  },
  {
    id: 'survey',
    title: 'Site survey',
    desc: 'Recommended for more complex environments',
    icon: <FiMap />
  },
  {
    id: 'managed',
    title: 'Managed policies',
    desc: 'Ongoing configuration and optimisation',
    icon: <FiShield />
  }
];

const AddOns = () => {
  return (
    <section className="addons-section" data-name="Add-ons">
      {/* Title */}
      <h2 className="addons__title">Add-ons and Services</h2>

      <div className="addons__container">
        
        {/* Left Column: 6 Cards */}
        <div className="addons__cards-column" data-name="Cards EDGE">
          {ADDONS_DATA.map((addon) => (
            <div className="addon-card" key={addon.id} data-name="EDGE card VE">
              <div className="addon-card__icon-container">
                {addon.icon}
              </div>
              <div className="addon-card__content">
                <h3 className="addon-card__header">{addon.title}</h3>
                <p className="addon-card__desc">{addon.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Featured Image */}
        <div className="addons__image-column" data-name="image 2">
          <img src={addonsFeatureImg} alt="Add-ons and Services" />
        </div>

      </div>
    </section>
  );
};

export default AddOns;
