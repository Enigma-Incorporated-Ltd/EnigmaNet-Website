import loginBg from '@/assets/img/login-bg.png';
import lightLoginBg from '@/assets/img/lightmode_background.png-1.png';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import { useEffect, useRef } from 'react';
import { useTheme } from '@/utils/useTheme';
import GoogleLoginPage from './components';

const LoginGoogle = () => {
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

  const { theme } = useTheme();
  const loginBgImage = theme === 'light' ? lightLoginBg : loginBg;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Google Login - Enigma Net',
    url: `${BASE_URL}/login/google`,
    description: 'Sign in to Enigma Net with your Google account.',
  };

  return (
    <div
      className={`login-layout login-layout--auth ${theme === 'light' ? 'login-layout--light' : ''}`}
      ref={layoutRef}
      style={{ ['--login-bg-image' as string]: `url(${loginBgImage})` }}
    >
      <div className="login-page__bg login-page__bg-image" aria-hidden="true" />
      <div className="login-page__bg login-page__bg-overlay" aria-hidden="true" />

      <PageMeta
        title="Google Login"
        description="Sign in to Enigma Net with your Google account."
        url={`${BASE_URL}/login/google`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" isNavDark />
      <GoogleLoginPage mode="login" />
    </div>
  );
};

export default LoginGoogle;
