import AppleLoginPage from '@/app/login-apple/components';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import { useEffect, useRef } from 'react';

const RegisterApple = () => {
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
    name: 'Apple Registration - Enigma Net',
    url: `${BASE_URL}/register/apple`,
    description: 'Create your Enigma Net account with your Apple account.',
  };

  return (
    <div className="login-layout" ref={layoutRef}>
      <PageMeta
        title="Apple Registration"
        description="Create your Enigma Net account with your Apple account."
        url={`${BASE_URL}/register/apple`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" isNavDark />
      <AppleLoginPage mode="register" />
    </div>
  );
};

export default RegisterApple;
