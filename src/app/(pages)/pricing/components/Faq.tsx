import {
  Accordion,
  Button,
  Container,
  Row,
  Col,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from 'react-bootstrap';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    id: 'q1',
    question: 'What if I exceed my Free or paid plan limits?',
    answer: `
      <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
      <p class="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
    `,
  },
  {
    id: 'q2',
    question: 'How do I know which plan is right for me?',
    answer: `
      <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
      <p class="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
    `,
  },
  {
    id: 'q3',
    question: 'Are there any long-term commitments or cancellation fees?',
    answer: `
      <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
      <p class="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
    `,
  },
  {
    id: 'q4',
    question: 'How do I cancel my monthly subscription?',
    answer: `
      <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
      <p class="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
    `,
  },
  {
    id: 'q5',
    question: 'What happens if I upgrade or downgrade a plan mid-period?',
    answer: `
      <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
      <p class="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
    `,
  },
  {
    id: 'q6',
    question: 'What kind of support do I get?',
    answer: `
      <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
      <p class="mb-0">Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
    `,
  },
];

const Faq = () => {
  return (
    <section className="bg-secondary py-5">
      <Container className="my-2 py-md-2 py-lg-5">
        <Row>
          <Col xl={4} md={5} className="text-center text-md-start pb-2 pb-md-0 mb-4 mb-md-0">
            <h2 className="pb-3 mb-1 mb-lg-2">
              Any questions? <br className="d-none d-md-inline" />
              Check out the FAQs
            </h2>
            <p className="fs-lg pb-3 mb-2 mb-lg-3">
              Still have unanswered questions and need to get in touch?
            </p>
            <Button href="/contacts-v2" variant="primary">
              Contact support
            </Button>
          </Col>
          <Col md={7} xl={{ span: 7, offset: 1 }}>
            <Accordion defaultActiveKey="q1">
              {faqData.map(item => (
                <AccordionItem
                  eventKey={item.id}
                  key={item.id}
                  className="border-0 rounded-3 shadow-sm mb-3"
                >
                  <AccordionHeader>{item.question}</AccordionHeader>
                  <AccordionBody
                    className="fs-sm pt-0"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
