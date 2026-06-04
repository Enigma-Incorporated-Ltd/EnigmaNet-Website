import GoogleLoginPage from '@/app/login-google/components';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import { useEffect, useRef } from 'react';

const RegisterGoogle = () => {
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
    name: 'Google Registration - Enigma Net',
    url: `${BASE_URL}/register/google`,
    description: 'Create your Enigma Net account with your Google account.',
  };

  return (
    <div className="login-layout" ref={layoutRef}>
      <PageMeta
        title="Google Registration"
        description="Create your Enigma Net account with your Google account."
        url={`${BASE_URL}/register/google`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" isNavDark />
      <GoogleLoginPage mode="register" />
    </div>
  );
};

export default RegisterGoogle;
