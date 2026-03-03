import Loader from './Loader';
import BackToTop from './BackToTop';
import type { ReactNode } from 'react';

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Loader />
      {children}
      <BackToTop />
    </>
  );
};

export default AppWrapper;
