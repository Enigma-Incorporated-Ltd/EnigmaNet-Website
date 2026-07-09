import './section2-headline.css';

const Section2Headline = () => {
  return (
    <section className="section2-headline-container" data-name="section 2 headline">
      {/* Title block */}
      <h2 className="sec2-headline__title">
        Enterprise-grade performance. Branch-simple deployment.
      </h2>

      {/* Description block */}
      <p className="sec2-headline__description">
        Intelligent Traffic Management included. Bond diverse links, reduce jitter, 
        support resilient failover and keep applications responsive across branch, 
        cloud and hybrid environments.
      </p>

      {/* Buttons block (aligned right on desktop) */}
      <div className="sec2-headline__actions">
        <a 
          href="/products/connectivity-products/enigma-edge" 
          className="btn-large-custom-sec2 btn-primary-large-sec2"
        >
          Configure your site
        </a>
        <a 
          href="/products" 
          className="btn-large-custom-sec2 btn-secondary-large-sec2"
        >
          Compare tiers
        </a>
      </div>

      {/* Centered subtext */}
      <p className="sec2-headline__subtext">
        FREE FAST DELIVERY • 2-YEAR WARRANTY • 30-DAY NAAS OPTION • ZERO-TOUCH PROVISIONING
      </p>
    </section>
  );
};

export default Section2Headline;
