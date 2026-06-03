import loginBg from '@/assets/img/login-bg.png';
import '@/app/login/components/login.css';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router';
import LoginSignInPage from './components/LoginSignInPage';
import LoginWelcomePage from './components/LoginWelcomePage';
import SignInSuccessPage from './components/SignInSuccessPage';

const Login = () => {
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
    name: 'Login - Enigma Net',
    url: `${BASE_URL}/login`,
    description: 'Sign in to Enigma Net for secure access to your Enigma Work infrastructure.',
  };

  return (
    <div
      className="login-layout login-layout--auth"
      ref={layoutRef}
      style={{ ['--login-bg-image' as string]: `url(${loginBg})` }}
      data-node-id="62:1833"
    >
      <div className="login-page__bg login-page__bg-image" aria-hidden="true" />
      <div className="login-page__bg login-page__bg-overlay" aria-hidden="true" />

      <PageMeta
        title="Login"
        description="Sign in to Enigma Net for secure access to your Enigma Work infrastructure."
        url={`${BASE_URL}/login`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark
      />

      <Routes>
        <Route index element={<LoginWelcomePage />} />
        <Route path="sign-in" element={<LoginSignInPage />} />
        <Route path="success" element={<SignInSuccessPage />} />
      </Routes>
    </div>
  );
};

export default Login;
