import { useState, useCallback } from 'react';
import { linkedInpost1, linkedInpost2, linkedInpost3, linkedInpost4 } from '@/assets/img';

const slides = [
  {
    id: 1,
    image: linkedInpost1,
    imageAlt: 'LinkedIn Post 1',
  },
  {
    id: 2,
    image: linkedInpost2,
    imageAlt: 'LinkedIn Post 2',
  },
  {
    id: 3,
    image: linkedInpost3,
    imageAlt: 'LinkedIn Post 3',
  },
  {
    id: 4,
    image: linkedInpost4,
    imageAlt: 'LinkedIn Post 4',
  },
];

export default function LinkedInCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length);
  }, []);

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const diff = touchStart - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }

    setTouchStart(null);
  };

  return (
    <section style={styles.page} className="bg-dark">
      <div
        className="container"
        style={{ maxWidth: '700px' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image */}
        <div style={styles.card}>
          <img src={slides[current].image} alt={slides[current].imageAlt} style={styles.image} />
        </div>

        {/* Navigation */}
        <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
          {/* Prev */}
          <button onClick={prev} style={styles.navBtn} aria-label="Previous slide" className="btn">
            ←
          </button>

          {/* Dots */}
          <div className="d-flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  ...styles.dot,
                  background: i === current ? '#00d4ff' : 'rgba(255,255,255,0.25)',
                  transform: i === current ? 'scale(1.35)' : 'scale(1)',
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button onClick={next} style={styles.navBtn} aria-label="Next slide" className="btn">
            →
          </button>
        </div>

        {/* Counter */}
        <p className="text-center mt-3 mb-0">
          {current + 1} / {slides.length}
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },

  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    maxWidth: '100%',
    maxHeight: '80vh',
    width: 'auto',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
    objectFit: 'contain',
  },

  navBtn: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '1.5px solid rgba(0,212,255,0.45)',
    background: 'transparent',
    color: '#00d4ff',
    fontSize: '1.1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    transition: 'background 0.2s',
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'background 0.25s, transform 0.25s',
  },
  slideLabel: {
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.3)',
    margin: 0,
  },
};
