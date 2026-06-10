import loginBg from '@/assets/img/login-bg.png';
import lightLoginBg from '@/assets/img/lightmode_background.png-1.png';
import '@/app/login/components/login.css';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import { useEffect, useRef } from 'react';
import { useTheme } from '@/utils/useTheme';
import { Route, Routes } from 'react-router';
import ForgotPasswordRequestPage from './components/ForgotPasswordRequestPage';
import ForgotPasswordSentPage from './components/ForgotPasswordSentPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import ResetPasswordSuccessPage from './components/ResetPasswordSuccessPage';

const ForgotPasswordLayout = () => {
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
    name: 'Forgot Password - Enigma Net',
    url: `${BASE_URL}/forgot-password`,
    description: 'Reset your Enigma Net account password.',
  };

  return (
    <div
      className={`login-layout login-layout--auth ${theme === 'light' ? 'login-layout--light' : ''}`}
      ref={layoutRef}
      style={{ ['--login-bg-image' as string]: `url(${loginBgImage})` }}
      data-node-id="62:1833"
    >
      <div className="login-page__bg login-page__bg-image" aria-hidden="true" />
      <div className="login-page__bg login-page__bg-overlay" aria-hidden="true" />

      <PageMeta
        title="Forgot Password"
        description="Reset your Enigma Net account password."
        url={`${BASE_URL}/forgot-password`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" isNavDark />

      <Routes>
        <Route index element={<ForgotPasswordRequestPage />} />
        <Route path="sent" element={<ForgotPasswordSentPage />} />
        <Route path="reset" element={<ResetPasswordPage />} />
        <Route path="confirm-new-password" element={<ResetPasswordPage />} />
        <Route path="success" element={<ResetPasswordSuccessPage />} />
      </Routes>
    </div>
  );
};

export default ForgotPasswordLayout;
