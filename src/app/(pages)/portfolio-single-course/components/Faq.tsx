import { Link } from 'react-router';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  Col,
  Row,
} from 'react-bootstrap';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 'q1',
    question:
      'YouTube is full of free tutorials, videos and courses. Why should I take courses here?',
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
  },
  {
    id: 'q2',
    question: "What if I don't have any professional background?",
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
  },
  {
    id: 'q3',
    question: 'How is this different from other courses on the market?',
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
  },
  {
    id: 'q4',
    question: "How much time does it take to do my homework per week? What if I don't like it?",
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
  },
  {
    id: 'q5',
    question: 'Is there any kind of certificate of completion?',
    answer:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
  },
];

const Faq = () => {
  return (
    <section className="container pb-5 mb-md-3 mb-lg-4 mb-xl-5">
      <Row className="pb-3">
        <Col md={5} className="mb-4 mb-md-0">
          <Card className="bg-dark h-100 p-lg-5">
            <CardBody className="p-lg-2">
              <h2 className="h1 text-light">Still Have Any Questions?</h2>
              <p className="fs-xl text-light opacity-70 mb-0">Check out the FAQs.</p>
            </CardBody>
            <CardFooter className="border-0 w-100 pt-0 p-4 p-lg-2">
              <div className="h2 d-flex align-items-center text-light mb-4">
                $28.99<del className="fs-xl fw-normal opacity-70 ms-2">49.99</del>
              </div>
              <Link to="#" className="btn btn-primary btn-lg shadow-primary">
                Join the course
              </Link>
            </CardFooter>
          </Card>
        </Col>

        <Col md={7}>
          <Accordion defaultActiveKey="q1" alwaysOpen>
            {faqData.map(item => (
              <AccordionItem
                eventKey={item.id}
                key={item.id}
                className="border-0 rounded-3 shadow-sm mb-3"
              >
                <AccordionHeader>{item.question}</AccordionHeader>
                <AccordionBody className="fs-sm pt-0">
                  <p>{item.answer}</p>
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
      </Row>
    </section>
  );
};

export default Faq;
