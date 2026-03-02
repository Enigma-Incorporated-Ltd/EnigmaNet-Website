import coverImg from '@/assets/img/about/cover.jpg';
import Jarallax from '@/components/Jarallax';

const Hero = () => {
  return (
    <>
      <Jarallax speed={0.35}>
        <div className="jarallax d-none d-md-block" data-jarallax data-speed="0.35">
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary-translucent"></span>
          <div className="jarallax-img" style={{ backgroundImage: `url(${coverImg})` }}></div>
          <div className="d-none d-xxl-block" style={{ height: '700px' }}></div>
          <div className="d-none d-md-block d-xxl-none" style={{ height: '550px' }}></div>
        </div>
      </Jarallax>
    </>
  );
};

export default Hero;
