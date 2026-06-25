import enigmaLogo from '@/assets/img/EnigmaNet-logo.png';
import enigmaLogoDark from '@/assets/img/EnigmaNet-dark.png';
import { useTheme } from '@/utils/useTheme';
import { Link } from 'react-router';

/** Figma 79:1127 — theme-matched logo PNGs */
const ProfileHeaderLogo = () => {
  const { theme } = useTheme();
  const src = theme === 'dark' ? enigmaLogoDark : enigmaLogo;

  return (
    <Link to="/" className="profile-header__logo" aria-label="enigmanet home">
      <img src={src} alt="enigmanet" />
    </Link>
  );
};

export default ProfileHeaderLogo;
