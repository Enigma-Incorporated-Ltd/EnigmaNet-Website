import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.css';
import '@/assets/scss/theme.scss';

import AppRoutes from './routes';
import CookieBanner from './components/cookies/CookieBanner';

const App = () => {
  return (
    <>
      <AppRoutes />
      <CookieBanner />
    </>
  );
}

export default App