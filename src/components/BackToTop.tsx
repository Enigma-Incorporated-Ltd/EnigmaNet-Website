import { useEffect, useState } from 'react';
import IconifyIcon from './IconifyIcon';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <a href="#top" className="btn-scroll-top show">
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
          <IconifyIcon icon="bx:chevron-up" className="btn-scroll-top-icon" />
        </a>
      )}
    </>
  );
};

export default BackToTop;
