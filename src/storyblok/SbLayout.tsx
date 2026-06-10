import type { ReactNode } from 'react';
import SbHeader from './SbHeader';
import SbFooter from './SbFooter';
import { useCssVars } from './useCssVars';
import './storyblok-theme.css';

interface SbLayoutProps {
  children: ReactNode;
}

export default function SbLayout({ children }: SbLayoutProps) {
  // Injects live CSS variables from Storyblok site-config into :root
  useCssVars();

  return (
    <>
      <SbHeader />
      <div className="sb-page" style={{ paddingTop: '72px' }}>
        {children}
      </div>
      <SbFooter />
    </>
  );
}
