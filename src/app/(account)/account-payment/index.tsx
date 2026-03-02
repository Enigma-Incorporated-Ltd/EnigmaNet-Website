import amex from '@/assets/img/account/amex.svg';
import bitcoin from '@/assets/img/account/bitcoin.svg';
import mastercard from '@/assets/img/account/mastercard.svg';
import visa from '@/assets/img/account/visa.svg';
import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Card, Col, Row } from 'react-bootstrap';
import Footer from '../sidebar-footer/Footer';
import Sidebar from '../sidebar-footer/Sidebar';
import PageMeta from '@/components/PageMeta';

type PaymentMethod = {
  id: number;
  type: string;
  image: string;
  maskedNumber?: string;
  expiration?: string;
  badge?: string;
  walletId?: string;
};
const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    type: 'Mastercard',
    image: mastercard,
    maskedNumber: '**** **** **** 4298',
    expiration: '09/26',
    badge: 'Primary',
  },
  {
    id: 2,
    type: 'Visa',
    image: visa,
    maskedNumber: '**** **** **** 9276',
    expiration: '11/25',
  },
  {
    id: 3,
    type: 'Amex',
    image: amex,
    maskedNumber: '**** **** **** 3854',
    expiration: '03/26',
  },
  {
    id: 4,
    type: 'Bitcoin',
    image: bitcoin,
    walletId: '•••••••••• UNky',
  },
];

const Index = () => {
  return (
    <>
      <PageMeta title='Account - Payment Details' />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="container pt-5">
        <Row>
          <Sidebar />
          <Col md={8} className="offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
            <div className="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
              <h1 className="h2 pt-xl-1 mb-3 pb-2 pb-lg-3">Payment Details</h1>
              <h2 className="h5 text-primary mb-4">Your saved payment methods</h2>

              {paymentMethods.map(method => (
                <Card
                  key={method.id}
                  className="d-sm-flex flex-sm-row align-items-sm-center justify-content-between border-0 shadow-sm p-3 p-md-4 mb-4"
                >
                  <div className="d-flex align-items-center pe-sm-3">
                    <img src={method.image} width={84} alt={method.type} />
                    <div className="ps-3 ps-sm-4">
                      <h6 className="mb-2">
                        {method.maskedNumber || method.type}{' '}
                        {method.badge && (
                          <span className="badge bg-success ms-1">{method.badge}</span>
                        )}
                      </h6>
                      {method.expiration && (
                        <div className="fs-sm">Expiration {method.expiration}</div>
                      )}
                      {method.walletId && <div className="fs-sm">{method.walletId}</div>}
                    </div>
                  </div>

                  <div className="d-flex justify-content-end pt-3 pt-sm-0">
                    <button type="button" className="btn btn-outline-secondary px-3 px-xl-4 me-3">
                      <IconifyIcon icon="bx:edit" className="fs-xl me-lg-1 me-xl-2" />
                      <span className="d-none d-lg-inline">Edit</span>
                    </button>
                    <button type="button" className="btn btn-outline-danger px-3 px-xl-4">
                      <IconifyIcon icon="bx:trash-alt" className="fs-xl me-lg-1 me-xl-2" />
                      <span className="d-none d-lg-inline">Delete</span>
                    </button>
                  </div>
                </Card>
              ))}
              <div className="py-2">
                <button type="button" className="btn btn-primary ps-4">
                  <IconifyIcon icon="bx:plus" className="fs-xl me-2" />
                  Add new payment method
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Index;
