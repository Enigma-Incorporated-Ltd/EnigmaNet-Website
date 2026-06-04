type BrProps = {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
};

const Br = ({ isMobile, isTablet, isDesktop }: BrProps) => {
  let className = 'd-none';

  // Mobile only
  if (isMobile && !isTablet && !isDesktop) {
    className = 'd-block d-md-none';
  }

  // Tablet only
  if (isTablet && !isMobile && !isDesktop) {
    className = 'd-none d-md-block d-lg-none';
  }

  // Desktop only
  if (isDesktop && !isMobile && !isTablet) {
    className = 'd-none d-lg-block';
  }

  // Tablet + Desktop
  if (isTablet && isDesktop) {
    className = 'd-none d-md-block';
  }

  // Mobile + Tablet
  if (isMobile && isTablet) {
    className = 'd-block d-lg-none';
  }

  // All devices
  if (isMobile && isTablet && isDesktop) {
    className = 'd-block';
  }

  return <br className={className} />;
};

export default Br;
