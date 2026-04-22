import { useEffect, useRef, useState } from 'react';
import hero1 from '@/assets/img/heroSlider/data-transmit-supper-fast-in-dark-tunnel-abstract.jpg';
import hero2 from '@/assets/img/heroSlider/motion-blur-of-train-moving-inside-tunnel-in-tokyo.jpg';
import hero3 from '@/assets/img/heroSlider/1.png';
import './slider.css';
import PremiumButton from '../ui/PremiumButton';

const slides = [
  {
    id: 1,
    title: 'Deterministic infrastructure for data-intensive environments',
    subtitle:
      'Move large datasets faster and more predictably across distributed compute environment without replacing what you already have',
    img: hero1,
    margin: '0',
    gradient:
      'linear-gradient(164deg, rgb(11, 14, 24) 18%, rgb(8 11 20) 27%, rgb(9 10 13 / 85%) 41%, rgba(11, 14, 24, -15.6) 62%, rgb(199 201 206 / -36%) 9% 67%)',
    btn1: { label: 'Smarter Infrastructure', color: 'blue', href: '/smarter-infrastructure' },
    btn2: { label: 'Book A Call', color: 'gold', href: '/get-in-touch' },
  },
  {
    id: 2,
    title: `Affordable, Accessible, Scalable Hosting for Compute, GPU and Storage`,
    subtitle:
      'On-demand compute, GPU and storage infrastructure that efficiently scales with your workloads',
    img: hero2,
    margin: '0',
    gradient: 'linear-gradient(104deg, rgb(11 15 25) 50%, rgba(13, 27, 41, 0))',
    btn1: {
      label: 'Hosting/Secure Cloud',
      color: 'blue',
      href: '/hosting-secure-cloud',
    },
    btn2: { label: 'Book A Call', color: 'gold', href: '/get-in-touch' },
  },
  {
    id: 3,
    title: 'Complete AI Infrastructure Designed around your Needs',
    subtitle:
      'Data movement, compute and storage working as one controlled, high-performance system.',
    margin: 'img-leftmargin',
    gradient: 'linear-gradient(92deg, rgb(11 15 25) 40%, rgba(13, 27, 41, 0))',
    img: hero3,
    btn1: {
      label: 'Complete AI Infrastructure  ',
      color: 'blue',
      href: '/complete-ai-infrastructure',
    },
    btn2: { label: 'Book A Call', color: 'gold', href: '/get-in-touch' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [bgImage, setBgImage] = useState(slides[0].img);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [bgGradient, setBgGradient] = useState(slides[0].gradient);

  const goTo = (index: number, dir: 'left' | 'right' = 'right') => {
    if (animating) return;

    setDirection(dir);
    setAnimating(true);
    setCurrent(index);

    const img = new Image();
    img.src = slides[index].img;
    img.onload = () => {
      setBgImage(slides[index].img);
      setBgGradient(slides[index].gradient);
      setTimeout(() => setAnimating(false), 500);
    };
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const slide = slides[current];
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => {
        const nextIndex = (prev + 1) % slides.length;

        // preload image before switching (like your goTo logic)
        const img = new Image();
        img.src = slides[nextIndex].img;

        img.onload = () => {
          setDirection('right');
          setAnimating(true);
          setBgImage(slides[nextIndex].img);
          setBgGradient(slides[nextIndex].gradient);

          setTimeout(() => setAnimating(false), 500);
        };

        return nextIndex;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <section className="hero-section">
        <div className="hero-background">
          <img src={bgImage} alt="Hero background" className={`hero-bg-image ${slide.margin}`} />
          <div
            className="hero-overlay"
            style={{
              background: bgGradient,
              
            }}
          />
        </div>

        {/* Main content */}
        <div className="container px-4 px-md-5" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-12 col-md-7 col-lg-8">
              <div
                className={`slide-content ${
                  animating
                    ? direction === 'right'
                      ? 'slide-enter-right'
                      : 'slide-enter-left'
                    : ''
                }`}
                key={current}
              >
                {/* Nav arrows */}

                {/* Title */}
                <h1 className="hero-title">{slide.title}</h1>

                {/* Subtitle */}
                <p className="hero-subtitle">{slide.subtitle}</p>

                {/* Buttons */}
                <div className="d-flex  flex-wrap gap-3">
                  <PremiumButton
                    label={slide.btn1.label}
                    variant={slide.btn1.color as 'blue' | 'gold'}
                    href={slide.btn1.href}
                    className="btn-lg"
                  />

                  <PremiumButton
                    label={slide.btn2.label}
                    variant={slide.btn2.color as 'blue' | 'gold'}
                    href={slide.btn2.href}
                    className="btn-lg"
                  />
                </div>

                {/* Dots */}
                <div className="slide-dots">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      className={`dot ${i === current ? 'active' : ''}`}
                      onClick={() => goTo(i, i > current ? 'right' : 'left')}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
