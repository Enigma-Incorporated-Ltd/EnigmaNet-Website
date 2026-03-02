import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Row,
} from 'react-bootstrap';
import pattern1 from '@/assets/img/landing/online-courses/pattern-1.svg';
import pattern2 from '@/assets/img/landing/online-courses/pattern-2.svg';
import pattern3 from '@/assets/img/landing/online-courses/pattern-3.svg';


type FaqItem = {
  id: string;
  question: string;
  answer: string | React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    id: 'q1',
    question: "What if I don't have any professional background?",
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit.
        </p>
        <p>
          Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
          posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate.
        </p>
      </>
    ),
  },
  {
    id: 'q2',
    question: 'How is this different from other courses on the market?',
    answer: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in facilisis nibh.
          Vestibulum ac porttitor sapien. Curabitur laoreet malesuada gravida.
        </p>
        <p>
          Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac
          mi aliquet varius.
        </p>
      </>
    ),
  },
  {
    id: 'q3',
    question: "How much time does it take to do my homework per week? What if I don't like it?",
    answer: (
      <p>
        Suspendisse viverra volutpat eros. Curabitur in scelerisque lacus, quis fringilla sem. Nunc
        rutrum vel magna et ullamcorper. Sed consectetur augue vitae ligula consectetur, eu dapibus
        justo molestie.
      </p>
    ),
  },
  {
    id: 'q4',
    question: 'Is there any kind of certificate of completion?',
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit.
        </p>
        <p>
          Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing
          massa integer.
        </p>
      </>
    ),
  },
  {
    id: 'q5',
    question:
      'YouTube is full of free tutorials, videos and courses. Why should I take any courses here?',
    answer: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in facilisis nibh.
          Vestibulum ac porttitor sapien. Curabitur laoreet malesuada gravida.
        </p>
        <p>
          Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac
          mi aliquet varius.
        </p>
      </>
    ),
  },
  {
    id: 'q6',
    question: 'What happens if I forget or lose my password?',
    answer: (
      <p>
        Suspendisse viverra volutpat eros. Curabitur in scelerisque lacus, quis fringilla sem. Nunc
        rutrum vel magna et ullamcorper. Sed consectetur augue vitae ligula consectetur, eu dapibus
        justo molestie.
      </p>
    ),
  },
];

const Faqs = () => {
  return (
    <section className="container pt-1 pt-lg-3">
      <div className="position-relative bg-primary rounded-3 overflow-hidden px-3 px-sm-4 px-md-0 py-5">
        <div
          className="rellax position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block"
          data-rellax-percentage="0.5"
          data-rellax-speed="1.75"
        >
          <img
            src={pattern1}
            className="position-absolute top-0 start-100 translate-middle ms-n4"
            alt="Pattern"
          />
          <img
            src={pattern2}
            className="position-absolute top-50 start-0 mt-n5 ms-n5"
            alt="Pattern"
          />
          <img
            src={pattern3}
            className="position-absolute top-100 start-100 translate-middle ms-n5 mt-n5"
            alt="Pattern"
          />
        </div>
        <Row className="justify-content-center position-relative zindex-2 py-lg-4">
          <Col xl={8} lg={9} md={10} className="py-2">
            <h2 className="h1 text-light text-center mt-n2 mt-lg-0 mb-4 mb-lg-5">
              Frequently Asked Questions
            </h2>

            <Accordion defaultActiveKey="q1">
              {faqs.map(faq => (
                <AccordionItem
                  eventKey={faq.id}
                  key={faq.id}
                  className="mb-3 border-0 rounded-3 shadow-sm"
                >
                  <AccordionHeader>{faq.question}</AccordionHeader>
                  <AccordionBody className="fs-sm">{faq.answer}</AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Faqs;
