import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from '@/contexts/AuthContext';
import { GOOGLE_CLIENT_ID } from '@/config/authConfig';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ScrollToTop from './ScrollToTop';
import { PostHogPageView } from '@/contexts/PostHogProvider';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const authTree = (
    <AuthProvider>
      <BrowserRouter>
        <PostHogPageView />
        <ScrollToTop />
        {children}
      </BrowserRouter>
    </AuthProvider>
  );

  return (
    <HelmetProvider>
      <CookiesProvider>
        {GOOGLE_CLIENT_ID ? (
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>{authTree}</GoogleOAuthProvider>
        ) : (
          authTree
        )}
      </CookiesProvider>
    </HelmetProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
