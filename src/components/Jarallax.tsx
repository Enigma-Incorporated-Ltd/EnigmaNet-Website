import React, { useEffect } from 'react';
import 'jarallax/dist/jarallax.css';

type JarallaxProps = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
};

const Jarallax = ({ children, speed = 0.4, className }: JarallaxProps) => {
  useEffect(() => {
    (async () => {
      const { jarallax } = await import('jarallax');

      jarallax(document.querySelectorAll('.jarallax'), { speed });

      return () => {
        jarallax(document.querySelectorAll('.jarallax'), 'destroy');
      };
    })();
  }, [speed]);

  return (
    <div className={`jarallax ${className || ''}`} data-jarallax data-speed={speed}>
      {children}
    </div>
  );
};

export default Jarallax;
