import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

type FaqType = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqType[] = [
  {
    question: 'Is any of my personal information stored in the App?',
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
          scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
          egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
        </p>
        <p className="mb-0">
          Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
          posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
          aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
  },
  {
    question: 'What formats can I download my transaction history in?',
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
          scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
          egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
        </p>
        <p className="mb-0">
          Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
          posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
          aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
  },
  {
    question: 'Can I schedule future transfers?',
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
          scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
          egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
        </p>
        <p className="mb-0">
          Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
          posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
          aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
  },
  {
    question: 'When can I use Banking App services?',
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
          scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
          egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
        </p>
        <p className="mb-0">
          Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
          posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
          aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
  },
  {
    question: 'Can I create my own password that is easy for me to remember?',
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
          scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
          egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
        </p>
        <p className="mb-0">
          Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
          posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
          aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
  },
  {
    question: 'What happens if I forget or lose my password?',
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
          scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
          egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
        </p>
        <p className="mb-0">
          Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
          posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
          aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
  },
];

const Faqs = () => {
  const [activeKey, setActiveKey] = useState<string | null>('0');

  return (
    <Container className="py-5 mb-lg-2">
      <Row className="py-2 py-md-4 py-lg-5">
        <Col xl={4} md={5} className="text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
          <h2 className="pb-3 mb-1 mb-lg-3">
            Any questions? <br className="d-none d-md-inline" />
            Check out the FAQs
          </h2>
          <p className="fs-lg pb-3 mb-2 mb-lg-3">
            Still have unanswered questions and need to get in touch?
          </p>
          <Row className="row-cols-1 row-cols-sm-2 g-3 g-sm-4">
            <Col>
              <Card className="card-hover">
                <CardBody className="pb-3">
                  <span className="d-block fs-2 text-primary mb-2 py-1">
                    <IconifyIcon icon="bxs:phone-call" className="w-100" />
                  </span>
                  <p className="fs-sm mb-2">Still have questions?</p>
                  <Link to="#" className="btn btn-link stretched-link px-0">
                    Call us
                    <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="card-hover">
                <CardBody className="pb-3">
                  <span className="d-block fs-2 text-success mb-2 py-1">
                    <IconifyIcon icon="bx:message-rounded-dots" className="w-100" />
                  </span>
                  <p className="fs-sm mb-2">Still have questions?</p>
                  <Link to="#" className="btn btn-link text-success stretched-link px-0">
                    Chat with us
                    <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={7} className="offset-xl-1">
          <Accordion activeKey={activeKey} onSelect={k => setActiveKey(k as string)}>
            {faqs.map((faq, idx) => (
              <AccordionItem
                eventKey={idx.toString()}
                key={idx}
                className="border-0 rounded-3 shadow-sm mb-3"
              >
                <AccordionHeader>{faq.question}</AccordionHeader>
                <AccordionBody className="fs-sm pt-0">{faq.answer}</AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faqs;
