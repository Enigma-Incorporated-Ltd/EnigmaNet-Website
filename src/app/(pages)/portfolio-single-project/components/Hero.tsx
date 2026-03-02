import hero from '@/assets/img/portfolio/single/hero.jpg';
import Jarallax from '@/components/Jarallax';

const Hero = () => {
  return (
    <section className="jarallax" data-jarallax data-speed="0.4">
      <Jarallax speed={0.4}>
        <div className="jarallax-img" style={{ backgroundImage: `url(${hero})` }}></div>
      </Jarallax>
      <div className="d-none d-xxl-block" style={{ height: '800px' }}></div>
      <div className="d-none d-lg-block d-xxl-none" style={{ height: '600px' }}></div>
      <div className="d-none d-md-block d-lg-none" style={{ height: '450px' }}></div>
      <div className="d-md-none" style={{ height: '400px' }}></div>
    </section>
  );
};

export default Hero;
