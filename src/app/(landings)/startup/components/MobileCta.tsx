import { Container, Row, Col } from 'react-bootstrap';
import phone1 from '@/assets/img/landing/startup/mobile-app/01.png';
import phone2 from '@/assets/img/landing/startup/mobile-app/02.png';
import phone3 from '@/assets/img/landing/startup/mobile-app/03.png';
import phone4 from '@/assets/img/landing/startup/mobile-app/04.png';
import { Link } from 'react-router';
import Parallax from '@/components/Parallax';

const MobileCta = () => {
  const phones = [phone1, phone2, phone3, phone4];
  const depths = [0.1, 0.3, -0.1, 0.2];

  return (
    <section className="bg-secondary overflow-hidden py-2 py-sm-3 py-md-4 py-lg-5">
      <Container className="py-5 pb-lg-4">
        <Row>
          <Col md={7} xl={7} className="offset-xl-1 order-md-2">
            <Parallax>
              <div className="parallax" style={{ maxWidth: '746px' }}>
                {phones.map((phone, index) => (
                  <div key={index} className="parallax-layer" data-depth={depths[index]}>
                    <img src={phone} alt={`Phone ${index + 1}`} />
                  </div>
                ))}
              </div>
            </Parallax>
          </Col>

          <Col md={5} xl={4} className="order-md-1 text-center text-md-start pt-lg-3">
            <h2 className="display-5 mb-4">Easy way to find e-scooters</h2>
            <p className="fs-xl pb-2 mb-4 mb-xl-5">
              Electric scooters can be found by locating them on the App available for smartphones
              and smart watches.
            </p>
            <h3 className="pb-3 mb-lg-4">Coming soon on</h3>

            <div className="d-flex justify-content-center justify-content-md-start">
              <Link to="#" className="position-relative me-4" aria-label="App Store">
                <div className="bg-white rounded-3 shadow position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none"></div>
                <div
                  className="rounded-3 position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                ></div>
                <svg
                  className="position-relative zindex-2 text-dark"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M48.5788 40.5996C48.5424 36.6562 51.8905 34.7377 52.0436 34.6484C50.1475 31.9529 47.2085 31.5847 46.1757 31.5553C43.7073 31.302 41.3129 32.9954 40.0555 32.9954C38.773 32.9954 36.8367 31.5798 34.7498 31.6214C32.0643 31.6617 29.552 33.1777 28.1741 35.5318C25.3305 40.3317 27.4513 47.3853 30.1757 51.2651C31.5385 53.1653 33.131 55.2869 35.2154 55.2122C37.2546 55.1303 38.0163 53.9447 40.4772 53.9447C42.9155 53.9447 43.6308 55.2122 45.7566 55.1645C47.9451 55.1303 49.323 53.2558 50.6381 51.3385C52.213 49.1607 52.8455 47.0158 52.8706 46.9057C52.8191 46.8886 48.6202 45.3261 48.5788 40.5996Z" />
                  <path d="M44.5631 29.003C45.6599 27.6657 46.4104 25.8463 46.202 24C44.6146 24.0685 42.6293 25.0706 41.4861 26.3785C40.4747 27.5311 39.5711 29.4202 39.8046 31.1968C41.5878 31.3265 43.4187 30.3195 44.5631 29.003Z" />
                </svg>
              </Link>

              <Link to="#" className="position-relative" aria-label="Google Play">
                <div className="bg-white rounded-3 shadow position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none"></div>
                <div
                  className="rounded-3 position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                ></div>
                <svg
                  className="position-relative zindex-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="none"
                >
                  <path
                    d="M26.464 24.486c-.368.376-.581.962-.581 1.721v27.058c0 .759.213 1.344.581 1.721l.091.083 15.53-15.157v-.358l-15.53-15.157-.091.089z"
                    fill="url(#A)"
                  />
                  <path
                    d="M47.255 44.966l-5.171-5.055v-.358l5.177-5.055.116.066 6.131 3.406c1.75.967 1.75 2.557 0 3.53l-6.131 3.4-.122.066z"
                    fill="url(#B)"
                  />
                  <path
                    d="M47.377 44.9l-5.293-5.168-15.621 15.253c.581.596 1.529.668 2.607.072L47.377 44.9z"
                    fill="url(#C)"
                  />
                  <path
                    d="M47.377 34.565L29.07 24.408c-1.078-.59-2.026-.518-2.607.078l15.621 15.247 5.293-5.168z"
                    fill="url(#D)"
                  />
                  <defs>
                    <linearGradient
                      id="A"
                      x1="40.706"
                      y1="53.547"
                      x2="20.178"
                      y2="32.521"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#00a0ff" />
                      <stop offset=".007" stopColor="#00a1ff" />
                      <stop offset=".26" stopColor="#00beff" />
                      <stop offset=".512" stopColor="#00d2ff" />
                      <stop offset=".76" stopColor="#00dfff" />
                      <stop offset="1" stopColor="#00e3ff" />
                    </linearGradient>
                    <linearGradient
                      id="B"
                      x1="55.787"
                      y1="39.731"
                      x2="25.464"
                      y2="39.731"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ffe000" />
                      <stop offset=".409" stopColor="#ffbd00" />
                      <stop offset=".775" stopColor="orange" />
                      <stop offset="1" stopColor="#ff9c00" />
                    </linearGradient>
                    <linearGradient
                      id="C"
                      x1="44.499"
                      y1="36.923"
                      x2="16.662"
                      y2="8.411"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ff3a44" />
                      <stop offset="1" stopColor="#c31162" />
                    </linearGradient>
                    <linearGradient
                      id="D"
                      x1="22.531"
                      y1="63.987"
                      x2="34.962"
                      y2="51.256"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#32a071" />
                      <stop offset=".069" stopColor="#2da771" />
                      <stop offset=".476" stopColor="#15cf74" />
                      <stop offset=".801" stopColor="#06e775" />
                      <stop offset="1" stopColor="#00f076" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MobileCta;
