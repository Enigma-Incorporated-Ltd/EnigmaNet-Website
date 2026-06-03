import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import { useEffect, useRef } from 'react';
import RegisterPage from './components';

const Register = () => {
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layout = layoutRef.current;
    if (!layout) return;

    const header = layout.querySelector('header');
    if (!header) return;

    const updateNavOffset = () => {
      layout.style.setProperty('--login-nav-height', `${header.offsetHeight}px`);
    };

    updateNavOffset();

    const resizeObserver = new ResizeObserver(updateNavOffset);
    resizeObserver.observe(header);
    window.addEventListener('resize', updateNavOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateNavOffset);
    };
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Register - Enigma Net',
    url: `${BASE_URL}/register`,
    description: 'Create your Enigma Net account for secure access to Enigma Work infrastructure.',
  };

  return (
    <div className="login-layout" ref={layoutRef}>
      <PageMeta
        title="Register"
        description="Create your Enigma Net account for secure access to Enigma Work infrastructure."
        url={`${BASE_URL}/register`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark
      />
      <RegisterPage />
    </div>
  );
};

export default Register;
