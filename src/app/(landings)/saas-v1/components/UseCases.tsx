import case01 from '@/assets/img/landing/saas-1/use-cases/01.png';
import case02 from '@/assets/img/landing/saas-1/use-cases/02.png';
import case03 from '@/assets/img/landing/saas-1/use-cases/03.png';
import case04 from '@/assets/img/landing/saas-1/use-cases/04.png';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';

type useCaseType = {
  key: string;
  title: string;
  icon: string;
  heading: string;
  desc: string;
  img: string;
  width: number;
};

const useCases: useCaseType[] = [
  {
    key: 'project-management',
    title: 'Project Management',
    icon: 'bx:star',
    heading: 'Project management',
    desc: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
    img: case01,
    width: 595,
  },
  {
    key: 'remote-work',
    title: 'Remote Work',
    icon: 'bx:briefcase-alt-2',
    heading: 'Remote work',
    desc: 'Ut ornare quisque blandit condimentum nec viverra habitant non. Consequat id leo bibendum enim, fringilla pulvinar volutpat fames. Ut fames ut sed lobortis nulla. In dui enim et pharetra gravida diam semper lectus tellus. Faucibus mi convallis.',
    img: case02,
    width: 502,
  },
  {
    key: 'product-release',
    title: 'Product Release',
    icon: 'bx:rocket',
    heading: 'Product release',
    desc: 'Fames netus pretium massa lobortis sit metus et. Sit risus odio fermentum hac fames enim, ac, in. Neque lacus, consequat hendrerit potenti in tristique dictum. Tortor nec lorem et venenatis facilisis risus viverra nunc, eu. Eget suscipit vel amet.',
    img: case03,
    width: 525,
  },
  {
    key: 'campaign-planning',
    title: 'Campaign Planning',
    icon: 'bx:bar-chart-alt-2',
    heading: 'Campaign planning',
    desc: 'Diam bibendum scelerisque vel mauris magna. Iaculis interdum tincidunt eget nibh purus. Aliquet at sit morbi nisi volutpat fermentum scelerisque. Enim tincidunt eros sodales integer sapien. Eu ullamcorper egestas odio nunc faucibus. Sapien eu nunc sed facilisi luctus ac.',
    img: case04,
    width: 545,
  },
];

const UseCases = () => {
  const [activeKey, setActiveKey] = useState('project-management');

  return (
    <section className="container pt-5 pb-2 mt-3 mt-sm-4 mt-xl-5">
      <h2 className="h1 text-center pb-3 pb-lg-4">One Tool — Endless Use Cases</h2>

      <Tabs
        activeKey={activeKey}
        onSelect={k => setActiveKey(k || 'project-management')}
        id="use-cases-tabs"
        className="justify-content-lg-center mb-3 mb-lg-4"
      >
        {useCases.map(uc => (
          <Tab
            key={uc.key}
            eventKey={uc.key}
            title={
              <span className="text-nowrap">
                <IconifyIcon icon={`${uc.icon}`} className="fs-lg opacity-60 me-2" />
                {uc.title}
              </span>
            }
          >
            <div className="bg-secondary rounded-3 py-4">
              <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
                <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                  <h3 className="mb-lg-4">{uc.heading}</h3>
                  <p>{uc.desc}</p>
                </Col>
                <Col lg={6} md={7} className="mt-md-4">
                  <img
                    src={uc.img}
                    width={uc.width}
                    alt={uc.title}
                    className="d-block my-lg-2 mx-auto me-md-0"
                  />
                </Col>
              </Row>
            </div>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
};

export default UseCases;
