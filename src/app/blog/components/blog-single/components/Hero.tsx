interface HeroProps {
  image: string;
  title: string;
}

const Hero = ({ image, title }: HeroProps) => {
  return (
    <div
      className="mb-lg-5 mb-4"
      style={{
        height: '36.45vw',
        minHeight: '300px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      role="img"
      aria-label={title}
    />
  );
};

export default Hero;
