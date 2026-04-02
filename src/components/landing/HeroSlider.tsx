import { useEffect, useRef, useState } from 'react';
import hero1 from '@/assets/img/heroSlider/data-transmit-supper-fast-in-dark-tunnel-abstract.jpg';
import hero2 from '@/assets/img/heroSlider/motion-blur-of-train-moving-inside-tunnel-in-tokyo.jpg';
import hero3 from '@/assets/img/heroSlider/server-room-data-center-networking-database-co.jpg';
import './slider.css';
import CustomButton from '../ui/CustomButton';

const slides = [
  {
    id: 1,
    title: 'More reliable, secure connectivity across sites, clouds and internet links.',
    subtitle: 'More reliable, secure connectivity across sites, clouds and internet links.',
    img: hero1,
    gradient:
      'linear-gradient(164deg, rgb(11, 14, 24) 18%, rgb(8 11 20) 27%, rgb(9 10 13 / 85%) 41%, rgba(11, 14, 24, -15.6) 62%, rgb(199 201 206 / -36%) 9% 67%)',
    btn1: { label: 'OUR PRODUCTS', color: '#00D4E8', href: '/products' },
    btn2: { label: 'BOOK DEMO', color: '#E8A020', href: '/contact' },
  },
  {
    id: 2,
    title: `Reliable connectivity and data movement for mission-critical environments.`,
    subtitle: 'Reliable connectivity and data movement for mission-critical environments.',
    btn1: { label: 'OUR SOLUTION', color: '#00D4E8', href: '/products' },
    img: hero2,
    gradient: 'linear-gradient(104deg, rgb(11 15 25) 50%, rgba(13, 27, 41, 0))',
    btn2: { label: 'CONTACT US', color: '#E8A020', href: '/contact' },
  },
  {
    id: 3,
    title: 'Deterministic networking for data‑intensive infrastructure',
    subtitle:
      'Move large datasets faster and more predictably across distributed compute environments — without replacing what you already have',
    btn1: { label: 'OUR PRODUCTS', color: '#00D4E8', href: '/products' },
    gradient: 'linear-gradient(92deg, rgb(11 15 25) 40%, rgba(13, 27, 41, 0))',
    img: hero3,
    btn2: { label: 'CONTACT US', color: '#E8A020', href: '/contact' },
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
  // const prev = () => {
  //   // Clear auto-slide interval when user interacts
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //     intervalRef.current = null;
  //   }
  //   const idx = (current - 1 + slides.length) % slides.length;
  //   goTo(idx, 'left');
  // };

  // const next = () => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //     intervalRef.current = null;
  //   }
  //   const idx = (current + 1) % slides.length;
  //   goTo(idx, 'right');
  // };

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
          <img src={bgImage} alt="Hero background" className="hero-bg-image" />
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
            <div className="col-12 col-md-7 col-lg-6">
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
                {/* <div className="nav-arrows">
                  <button className="arrow-btn" onClick={prev} aria-label="Previous slide">
                    <svg viewBox="0 0 24 24">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button className="arrow-btn" onClick={next} aria-label="Next slide">
                    <svg viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div> */}

                {/* Title */}
                <h1 className="hero-title">{slide.title}</h1>

                {/* Subtitle */}
                <p className="hero-subtitle">{slide.subtitle}</p>

                {/* Buttons */}
                <div className="d-flex  flex-wrap gap-3">
                  {/* <Link
                    className="hero-btn btn-cyan"
                    style={{ background: slide.btn1.color }}
                    to={slide.btn1.href}
                  >
                    {slide.btn1.label}
                  </Link> */}
                  <CustomButton
                    label={slide.btn1.label}
                    style={{
                      background: slide.btn1.color,
                      fontWeight: 600,
                    }}
                    href={slide.btn1.href}
                    bgColor="light-blue"
                    className="btn-lg"
                  />
                  <CustomButton
                    label={slide.btn2.label}
                    style={{ background: slide.btn2.color, fontWeight: 600 }}
                    href={slide.btn2.href}
                    bgColor="warning"
                    className="btn-lg"
                  />
                  {/* <Link
                    className="hero-btn btn-amber"
                    style={{ background: slide.btn2.color }}
                    to={slide.btn2.href}
                  >
                    {slide.btn2.label}
                  </Link> */}
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
