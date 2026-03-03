import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  Container,
} from 'react-bootstrap';
import service01 from '@/assets/img/landing/digital-agency/services/01.png';
import service02 from '@/assets/img/landing/digital-agency/services/02.png';
import service03 from '@/assets/img/landing/digital-agency/services/03.png';
import setvice04 from '@/assets/img/landing/digital-agency/services/04.png';
import service05 from '@/assets/img/landing/digital-agency/services/05.png';


type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const servicesData: Service[] = [
  {
    id: '1',
    title: 'Digital Marketing',
    description:
      'Nisi, sed accumsan tincidunt pulvinar sapien. Neque, adipiscing posuere amet eget cursus mattis egestas nec quam. Tellus in lectus volutpat tellus bibendum. Etiam id phasellus in proin tristique. Semper habitasse volutpat et urna dui sed in pellentesque purus. Convallis viverra faucibus lacus nunc venenatis.',
    image: service01,
    alt: 'Digital Marketing',
  },
  {
    id: '2',
    title: 'Web Development',
    description:
      'Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.',
    image: service02,
    alt: 'Web Development',
  },
  {
    id: '3',
    title: 'Application Development',
    description:
      'Morbi tristique justo, ut ac facilisi vel. Faucibus tortor libero commodo maecenas commodo sed. Sapien, vitae senectus turpis enim habitasse ipsum justo. Sagittis vel tortor velit dapibus dictum facilisis dictumst aliquam. Et, tempus euismod non semper vitae egestas semper eget turpis. Eros, pellentesque sed ut faucibus ac egestas leo metus.',
    image: service03,
    alt: 'Application Development',
  },
  {
    id: '4',
    title: 'Strategy',
    description:
      'Non bibendum mauris velit at enim. Vel tellus nunc malesuada pellentesque feugiat nibh mauris blandit. Tempus, ut vulputate feugiat quis molestie sit eu blandit rhoncus. Iaculis eget magna sit eget eget massa. Diam nunc dolor tristique lectus imperdiet. Nunc, vitae etiam venenatis arcu turpis sollicitudin amet sit. Ac dapibus non erat sed. Auctor eleifend mattis scelerisque gravida felis nibh. Habitant nascetur turpis ullamcorper.',
    image: setvice04,
    alt: 'Strategy',
  },
  {
    id: '5',
    title: 'Digital Advertising',
    description:
      'Nulla odio diam, arcu dictum neque nec cursus. Vel, aliquam nisl ridiculus sed. Pulvinar lectus ac pellentesque sollicitudin tristique aliquet ullamcorper in eu. Tincidunt porta magna faucibus neque, nunc gravida sagittis. Ut tellus sed odio laoreet. Molestie sit viverra maecenas nisl felis consequat.',
    image: service05,
    alt: 'Digital Advertising',
  },
];

const Services = () => {
  return (
    <section className="mb-5 pb-2 pb-md-4 pb-lg-5">
      <Container>
        <Card className="border-0 bg-secondary p-md-5 px-sm-2 pt-4 pb-3">
          <CardBody className="mx-auto" style={{ maxWidth: '860px' }}>
            <h2 className="h1 mb-4 text-center">Our Competencies</h2>
            <p className="mb-4 pb-3 fs-lg text-center text-muted">
              We fully understand your business. If you need to update something, we are more than
              happy to help you with the services we are providing.
            </p>

            <Accordion defaultActiveKey="1">
              {servicesData.map(service => (
                <AccordionItem
                  eventKey={service.id}
                  key={service.id}
                  className="border-0 rounded-3 shadow-sm mb-3"
                >
                  <AccordionHeader className="fs-xl">{service.title}</AccordionHeader>
                  <AccordionBody>
                    <div className="d-flex flex-md-row flex-column align-items-md-center">
                      <img
                        src={service.image}
                        alt={service.alt}
                        width={200}
                        height={150}
                        className="me-md-4 mb-md-0 mb-3"
                      />
                      <div className="ps-md-3">
                        <p className="mb-0">{service.description}</p>
                      </div>
                    </div>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};

export default Services;
