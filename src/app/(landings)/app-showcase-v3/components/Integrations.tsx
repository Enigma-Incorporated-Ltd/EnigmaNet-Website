import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import envatoGray from '@/assets/img/landing/app-showcase-3/integrations/envato-gray.svg';
import envatoLight from '@/assets/img/landing/app-showcase-3/integrations/envato-color-light.svg';
import envatoDark from '@/assets/img/landing/app-showcase-3/integrations/envato-color-dark.svg';

import laravelGray from '@/assets/img/landing/app-showcase-3/integrations/laravel-gray.svg';
import laravelColor from '@/assets/img/landing/app-showcase-3/integrations/laravel-color.svg';

import magentoGray from '@/assets/img/landing/app-showcase-3/integrations/magento-gray.svg';
import magentoLight from '@/assets/img/landing/app-showcase-3/integrations/magento-color-light.svg';
import magentoDark from '@/assets/img/landing/app-showcase-3/integrations/magento-color-dark.svg';

import pingdomGray from '@/assets/img/landing/app-showcase-3/integrations/pingdom-gray.svg';
import pingdomLight from '@/assets/img/landing/app-showcase-3/integrations/pingdom-color-light.svg';
import pingdomDark from '@/assets/img/landing/app-showcase-3/integrations/pingdom-color-dark.svg';

import angularGray from '@/assets/img/landing/app-showcase-3/integrations/angular-gray.svg';
import angularLight from '@/assets/img/landing/app-showcase-3/integrations/angular-color-light.svg';
import angularDark from '@/assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg';

import wooGray from '@/assets/img/landing/app-showcase-3/integrations/woocommerce-gray.svg';
import wooLight from '@/assets/img/landing/app-showcase-3/integrations/woocommerce-color-light.svg';
import wooDark from '@/assets/img/landing/app-showcase-3/integrations/woocommerce-color-dark.svg';
import { Link } from 'react-router';

type IntegrationsType = {
  name: string;
  gray: string;
  light: string;
  dark?: string;
};

const integrations: IntegrationsType[] = [
  {
    name: 'Envato',
    gray: envatoGray,
    light: envatoLight,
    dark: envatoDark,
  },
  {
    name: 'Laravel',
    gray: laravelGray,
    light: laravelColor,
  },
  {
    name: 'Magento',
    gray: magentoGray,
    light: magentoLight,
    dark: magentoDark,
  },
  {
    name: 'Pingdom',
    gray: pingdomGray,
    light: pingdomLight,
    dark: pingdomDark,
  },
  {
    name: 'Angular',
    gray: angularGray,
    light: angularLight,
    dark: angularDark,
  },
  {
    name: 'WooCommerce',
    gray: wooGray,
    light: wooLight,
    dark: wooDark,
  },
];

const Integrations = () => {
  return (
    <section className="position-relative container zindex-2 py-5 mt-lg-3 mb-md-2">
      <h2 className="h4 text-center mb-2 mb-sm-3">Fully integrated with</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={12}
        slidesPerView={2}
        breakpoints={{
          500: { slidesPerView: 3, spaceBetween: 16 },
          650: { slidesPerView: 4, spaceBetween: 20 },
          900: { slidesPerView: 5, spaceBetween: 20 },
          1100: { slidesPerView: 6, spaceBetween: 24 },
        }}
        className="pb-5"
      >
        {integrations.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Link to="#" className="swap-image flex flex-col items-center">
              <img
                src={item.gray}
                alt={item.name}
                width={196}
                height={60}
                className="swap-from"
              />

              <div className="swap-to flex gap-2">
                {item.light && (
                  <img
                    src={item.light}
                    alt={item.name}
                    width={196}
                    height={60}
                    className="light-mode-img"
                  />
                )}
                {item.dark && (
                  <img
                    src={item.dark}
                    alt={item.name}
                    width={196}
                    height={60}
                    className="dark-mode-img"
                  />
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Integrations;
