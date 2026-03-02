import btcIcon from '@/assets/img/landing/app-showcase-2/crypto/btc.png';
import btcGraph from '@/assets/img/landing/app-showcase-2/crypto/graphs/btc.svg';
import tetherIcon from '@/assets/img/landing/app-showcase-2/crypto/usdt.png';
import tetherGraph from '@/assets/img/landing/app-showcase-2/crypto/graphs/usdt.svg';
import ethIcon from '@/assets/img/landing/app-showcase-2/crypto/eth.png';
import ethGraph from '@/assets/img/landing/app-showcase-2/crypto/graphs/eth.svg';
import dotIcon from '@/assets/img/landing/app-showcase-2/crypto/dot.png';
import dotGraph from '@/assets/img/landing/app-showcase-2/crypto/graphs/dot.svg';
import { Col, Container, Row } from 'react-bootstrap';

type CryptoData = {
  name: string;
  symbol: string;
  icon: string;
  graph: string;
  price: string;
  change: string;
  changeType: 'success' | 'danger';
  marketCap: string;
};

const cryptoData: CryptoData[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: btcIcon,
    graph: btcGraph,
    price: '$38,940.63',
    change: '+1.70%',
    changeType: 'success',
    marketCap: '$736,124,602,670.97',
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    icon: tetherIcon,
    graph: tetherGraph,
    price: '$15.09',
    change: '-0.27%',
    changeType: 'danger',
    marketCap: '$14,735,584,883.68',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: ethIcon,
    graph: ethGraph,
    price: '$2,829.07',
    change: '+1.27%',
    changeType: 'success',
    marketCap: '$337,863,906,048.53',
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    icon: dotIcon,
    graph: dotGraph,
    price: '$13.28',
    change: '-1.35%',
    changeType: 'danger',
    marketCap: '$26,143,724,006.81',
  },
];

const Cost = () => {
  return (
    <section className="bg-dark position-relative pt-5 pb-4 py-md-5" data-bs-theme="dark">
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary"></div>
      <Container className="position-relative zindex-3 py-lg-4 pt-md-2 py-xl-5 mb-lg-4">
        <Row className="justify-content-center text-center pb-4 mb-2">
          <Col xl={6} className="pt-2">
            <h2 className="h1 mb-4">Buy crypto at true cost</h2>
            <p className="text-body fs-lg mb-0">
              Egestas ullamcorper posuere tortor eget netus elementum dui eu cras eros accumsan,
              ullamcorper tortor gula dui in netus
            </p>
          </Col>
        </Row>

        <div className="d-sm-flex flex-wrap d-lg-table w-100">
          {cryptoData.map((coin, index) => (
            <div
              key={index}
              className={`d-lg-table-row w-sm-50 w-lg-100 ${
                index % 2 === 0 ? 'pe-sm-3 pe-lg-0' : 'ps-sm-3 ps-lg-0'
              } mb-3 mb-lg-0`}
            >
              <div className="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
                <div className="d-flex align-items-center">
                  <img src={coin.icon} width={32} alt={coin.name} />
                  <div className="ps-3">
                    <h3 className="h4 mb-0">
                      {coin.name}
                      <span className="d-inline-block opacity-60 ps-2 ms-1">{coin.symbol}</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">
                {coin.price}
              </div>

              <div
                className={`d-lg-table-cell align-middle fs-lg text-${coin.changeType} border-bottom py-3 py-lg-4`}
              >
                {coin.change}
              </div>

              <div className="d-lg-table-cell align-middle fs-lg text-white border-bottom py-3 py-lg-4">
                {coin.marketCap}
              </div>

              <div className="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
                <img src={coin.graph} width={108} alt={`${coin.symbol} graph`} />
              </div>

              <div className="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary fs-sm w-100 w-lg-auto"
                >
                  Trade
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Cost;
