import { useEffect, useRef, useState } from 'react';

import hero3 from '@/assets/img/heroSlider/Complete AI Infrastructure Designed around your Needs.png';
import hero1 from '@/assets/img/heroSlider/data-transmit-supper-fast-in-dark-tunnel-abstract.jpg';
import hero2 from '@/assets/img/heroSlider/motion-blur-of-train-moving-inside-tunnel-in-tokyo.jpg';

import './slider.css';
import PremiumButton from '../ui/PremiumButton';

const slides = [
  {
    id: 1,
    title: 'Deterministic infrastructure for data-intensive environments',
    subtitle:
      'Move large datasets faster and more predictably across distributed compute environment without replacing what you already have',
    img: hero1,
  
    gradientDesktop: 'linear-gradient(92deg, rgb(11 15 25) 30%, rgba(13, 27, 41, 0))',
    gradientTablet: 'linear-gradient(100deg, rgb(11 15 25) 40%, rgba(13, 27, 41, 0.2))',
    gradientMobile: 'linear-gradient(110deg, rgb(11 15 25) 40%, rgba(13, 27, 41, 0.4))',
    btn1: { label: 'Smarter Infrastructure', color: 'blue', href: '/smarter-infrastructure' },
    btn2: { label: 'Book a Call', color: 'gold', href: '/get-in-touch' },
  },
  {
    id: 2,
    title: 'Affordable, Accessible, Scalable Hosting for Compute, GPU and Storage',
    subtitle:
      'On-demand compute, GPU and storage infrastructure that efficiently scales with your workloads',
    img: hero2,
  
    gradientDesktop: 'linear-gradient(92deg, rgb(11 15 25) 30%, rgba(13, 27, 41, 0))',
    gradientTablet: 'linear-gradient(100deg, rgb(11 15 25) 40%, rgba(13, 27, 41, 0.2))',
    gradientMobile: 'linear-gradient(110deg, rgb(11 15 25) 40%, rgba(13, 27, 41, 0.4))',
    btn1: { label: 'Hosting/Secure Cloud', color: 'blue', href: '/hosting-secure-cloud' },
    btn2: { label: 'Book a Call', color: 'gold', href: '/get-in-touch' },
  },
  {
    id: 3,
    title: 'Complete AI Infrastructure Designed around your Needs',
    subtitle:
      'Data movement, compute and storage working as one controlled, high-performance system',
    img: hero3,
   
    // gradientDesktop: 'linear-gradient(92deg, rgb(11 15 25) 40%, rgba(13, 27, 41, 0))',
    // gradientTablet: 'linear-gradient(100deg, rgb(11 15 25) 50%, rgba(13, 27, 41, 0.2))',
    // gradientMobile: 'linear-gradient(110deg, rgb(11 15 25) 50%, rgba(13, 27, 41, 0.4))',
    btn1: { label: 'AI Infrastructure', color: 'blue', href: '/complete-ai-infrastructure' },
    btn2: { label: 'Book a Call', color: 'gold', href: '/get-in-touch' },
  },
];

const getInitialScreen = (): 'desktop' | 'tablet' | 'mobile' => {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width >= 1025) return 'desktop';
  if (width >= 768) return 'tablet';
  return 'mobile';
};

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [bgImage, setBgImage] = useState(slides[0].img);
  const [screenSize, setScreenSize] = useState<'desktop' | 'tablet' | 'mobile'>(getInitialScreen());

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slide = slides[current];

  // ✅ Get gradient dynamically (no state bug)
  const getGradient = (slide: (typeof slides)[0]) => {
    if (screenSize === 'desktop') return slide.gradientDesktop;
    if (screenSize === 'tablet') return slide.gradientTablet;
    return slide.gradientMobile;
  };

  // ✅ Resize listener
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1025) setScreenSize('desktop');
      else if (width >= 768) setScreenSize('tablet');
      else setScreenSize('mobile');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Slide change logic
  const goTo = (index: number, dir: 'left' | 'right' = 'right') => {
    if (animating) return;

    setDirection(dir);
    setAnimating(true);

    const img = new Image();
    img.src = slides[index].img;

    img.onload = () => {
      setBgImage(slides[index].img);
      setTimeout(() => setAnimating(false), 500);
    };
  };

  // ✅ Auto scroll (ONLY ONE interval)
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setCurrent(prev => {
  //       const nextIndex = (prev + 1) % slides.length;
  //       goTo(nextIndex, 'right');
  //       return nextIndex;
  //     });
  //   }, 5000);

  //   return () => {
  //     if (intervalRef.current) clearInterval(intervalRef.current);
  //   };
  // }, []);

  const handleDotClick = (i: number) => {
    if (i === current) return;
    const dir = i > current ? 'right' : 'left';
    setCurrent(i);
    goTo(i, dir);
    // Reset auto-interval on manual click
    // if (intervalRef.current) clearInterval(intervalRef.current);
    // intervalRef.current = setInterval(() => {
    //   setCurrent(prev => {
    //     const nextIndex = (prev + 1) % slides.length;
    //     goTo(nextIndex, 'right');
    //     return nextIndex;
    //   });
    // }, 5000);
  };

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-background">
        <img src={bgImage} alt="Hero background" className={`hero-bg-image `} />
        <div
          className={`hero-overlay hero-overlay-${screenSize}`}
          style={{
            background: getGradient(slide),
          }}
        />
      </div>

      {/* Content */}
      <div className="hero-content-wrapper">
        <div
          className={`slide-content ${
            animating ? (direction === 'right' ? 'slide-enter-right' : 'slide-enter-left') : ''
          }`}
          key={current}
        >
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-subtitle">{slide.subtitle}</p>

          <div className="hero-buttons">
            <PremiumButton
              label={slide.btn1.label}
              variant={slide.btn1.color as 'blue' | 'gold'}
              href={slide.btn1.href}
              className="btn-lg btn-responsive"
            />
            <PremiumButton
              label={slide.btn2.label}
              variant={slide.btn2.color as 'blue' | 'gold'}
              href={slide.btn2.href}
              className="btn-lg btn-responsive"
            />
          </div>

          {/* Dots */}
          <div className="slide-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
