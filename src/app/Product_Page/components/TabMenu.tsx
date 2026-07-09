import { useState } from 'react';
import './tab-menu.css';

type TabId = 'connect' | 'edge' | 'addons';

const TabMenu = () => {
  // Figma default state has the "EDGE" tab open initially
  const [activeTab, setActiveTab] = useState<TabId | null>('edge');

  const toggleTab = (tab: TabId) => {
    setActiveTab((prev) => (prev === tab ? null : tab));
  };

  // SVG Chevron that points down and rotates when active
  const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className={`tab-card__icon ${isOpen ? 'rotated' : ''}`}>
      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L8 7L15 1"
          stroke="#2adeff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <section className="tab-menu-section">
      {/* Headline Group */}
      <div className="tab-menu__headline">
        <h2 className="tab-menu__title">Better connectivity starts here.</h2>
        <p className="tab-menu__subtitle">
          Explore Enigma Net plans, appliances and add-ons designed to improve stability, 
          security and performance across the connections you already use.
        </p>
      </div>

      {/* Tabs Container */}
      <div className="tab-menu__container">
        
        {/* Tab 1: Shop Connect */}
        <div className={`tab-card-wrapper ${activeTab === 'connect' ? 'open' : ''}`}>
          <button 
            className="tab-card__button" 
            onClick={() => toggleTab('connect')}
            aria-expanded={activeTab === 'connect'}
          >
            <span className="tab-card__button-text">Shop Connect</span>
            <ChevronIcon isOpen={activeTab === 'connect'} />
          </button>
          {activeTab === 'connect' && (
            <div className="tab-card__content">
              <p className="tab-card__content-text">
                Individuals, remote workers, gamers, families, mobile users
              </p>
            </div>
          )}
        </div>

        {/* Tab 2: Configure EDGE */}
        <div className={`tab-card-wrapper ${activeTab === 'edge' ? 'open' : ''}`}>
          <button 
            className="tab-card__button" 
            onClick={() => toggleTab('edge')}
            aria-expanded={activeTab === 'edge'}
          >
            <span className="tab-card__button-text">Configure EDGE</span>
            <ChevronIcon isOpen={activeTab === 'edge'} />
          </button>
          {activeTab === 'edge' && (
            <div className="tab-card__content">
              <p className="tab-card__content-text">
                SME’s, branches, multi-site businesses, managed edge
              </p>
            </div>
          )}
        </div>

        {/* Tab 3: View add-ons */}
        <div className={`tab-card-wrapper ${activeTab === 'addons' ? 'open' : ''}`}>
          <button 
            className="tab-card__button" 
            onClick={() => toggleTab('addons')}
            aria-expanded={activeTab === 'addons'}
          >
            <span className="tab-card__button-text">View add-ons</span>
            <ChevronIcon isOpen={activeTab === 'addons'} />
          </button>
          {activeTab === 'addons' && (
            <div className="tab-card__content">
              <p className="tab-card__content-text">
                Security, IP, support and site-to-site services
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default TabMenu;
