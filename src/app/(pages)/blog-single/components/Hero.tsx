
import converImg from '@/assets/img/blog/single/cover-image.jpg';
import Jarallax from '@/components/Jarallax';

const Hero = () => {
  return (
    <div
      className="jarallax mb-lg-5 mb-4"
      data-jarallax
      data-speed="0.35"
      style={{ height: '36.45vw', minHeight: '300px' }}
    >
      <Jarallax speed={0.35}>
        <div className="jarallax-img" style={{ backgroundImage: `url(${converImg})` }}></div>
      </Jarallax>
    </div>
  );
};

export default Hero;
