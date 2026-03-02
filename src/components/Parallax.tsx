import { type ReactNode, useEffect } from 'react';

const Parallax = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;

      document.querySelectorAll<HTMLElement>('.parallax-layer').forEach(layer => {
        const depth = parseFloat(layer.dataset.depth || '0');
        const moveX = x * depth * 100;
        const moveY = y * depth * 100;
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <>{children}</>;
};

export default Parallax;
