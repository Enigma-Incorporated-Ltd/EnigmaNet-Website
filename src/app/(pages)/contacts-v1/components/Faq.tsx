import type { JSX } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Row,
} from 'react-bootstrap';

interface FaqItem {
  id: string;
  question: string;
  answer: JSX.Element;
  defaultOpen?: boolean;
}

const faqData: FaqItem[] = [
  {
    id: 'q-1',
    question: "What if I don't have any professional background?",
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
          scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
          egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
        </p>
        <p>
          Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
          posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
          aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
    defaultOpen: true,
  },
  {
    id: 'q-2',
    question: 'How is this different from other courses on the market?',
    answer: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in facilisis nibh.
          Vestibulum ac porttitor sapien. Curabitur laoreet malesuada gravida. Phasellus vehicula
          vestibulum consequat. Curabitur feugiat eget sem vitae laoreet. Fusce porttitor finibus
          tellus, quis condimentum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Vivamus vehicula malesuada magna at viverra. Fusce non est
          eget libero convallis fringilla suspendisse.
        </p>
        <p>
          Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac
          mi aliquet varius. Proin nec est nibh. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
  },
  {
    id: 'q-3',
    question: "How much time does it take to do my homework per week? What if I don't like it?",
    answer: (
      <>
        <p>
          Suspendisse viverra volutpat eros. Curabitur in scelerisque lacus, quis fringilla sem.
          Nunc rutrum vel magna et ullamcorper. Sed consectetur augue vitae ligula consectetur, eu
          dapibus justo molestie. Phasellus sit amet metus magna. Sed tincidunt tempus felis vitae
          commodo. Etiam lobortis justo in elit pretium, sit amet aliquet tellus euismod. Curabitur
          in purus sed turpis aliquet pretium. Nunc ut magna tempus, iaculis sem id, vulputate
          ipsum. Etiam fermentum malesuada quam, in tempus purus pulvinar at. Vestibulum auctor
          congue pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Nulla facilisi. Nunc dolor velit, interdum finibus bibendum vel,
          mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. In hac
          habitasse platea dictumst. Nullam porta risus vitae lectus pellentesque interdum. Proin ac
          leo fermentum, volutpat odio ut, lacinia erat. Suspendisse potenti. Praesent vitae
          faucibus lectus. Sed tincidunt at ex id maximus. Morbi tristique ullamcorper velit, non
          cursus libero eleifend quis. Aliquam aliquam odio dui.
        </p>
      </>
    ),
  },
  {
    id: 'q-4',
    question: 'Is there any kind of certificate of completion?',
    answer: (
      <>
        <p>
          Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu,
          viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu
          velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem
          scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis
          egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
        </p>
        <p>
          Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
          posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
          aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
  },
  {
    id: 'q-5',
    question:
      'YouTube is full of free tutorials, videos and courses. Why should I take any courses here?',
    answer: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in facilisis nibh.
          Vestibulum ac porttitor sapien. Curabitur laoreet malesuada gravida. Phasellus vehicula
          vestibulum consequat. Curabitur feugiat eget sem vitae laoreet. Fusce porttitor finibus
          tellus, quis condimentum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Vivamus vehicula malesuada magna at viverra. Fusce non est
          eget libero convallis fringilla suspendisse.
        </p>
        <p>
          Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac
          mi aliquet varius. Proin nec est nibh. Dignissim amet adipiscing massa integer.
        </p>
      </>
    ),
  },
  {
    id: 'q-6',
    question: 'What happens if I forget or lose my password?',
    answer: (
      <>
        <p>
          Suspendisse viverra volutpat eros. Curabitur in scelerisque lacus, quis fringilla sem.
          Nunc rutrum vel magna et ullamcorper. Sed consectetur augue vitae ligula consectetur, eu
          dapibus justo molestie. Phasellus sit amet metus magna. Sed tincidunt tempus felis vitae
          commodo. Etiam lobortis justo in elit pretium, sit amet aliquet tellus euismod. Curabitur
          in purus sed turpis aliquet pretium. Nunc ut magna tempus, iaculis sem id, vulputate
          ipsum. Etiam fermentum malesuada quam, in tempus purus pulvinar at. Vestibulum auctor
          congue pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Nulla facilisi. Nunc dolor velit, interdum finibus bibendum vel,
          mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. In hac
          habitasse platea dictumst. Nullam porta risus vitae lectus pellentesque interdum. Proin ac
          leo fermentum, volutpat odio ut, lacinia erat. Suspendisse potenti. Praesent vitae
          faucibus lectus. Sed tincidunt at ex id maximus. Morbi tristique ullamcorper velit, non
          cursus libero eleifend quis. Aliquam aliquam odio dui.
        </p>
      </>
    ),
  },
];

const Faq = () => {
  return (
    <section className="container">
      <div className="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-md-0">
        <h2 className="text-center pt-md-1 pt-lg-3 pt-xl-4 pb-4 mt-xl-1 mb-2">
          Frequently Asked Questions
        </h2>
        <Row className="justify-content-center pb-lg-4 pb-xl-5">
          <Col xl={8} lg={9} md={10} className="pb-md-2">
            <Accordion defaultActiveKey="q-1" alwaysOpen>
              {faqData.map(({ id, question, answer }) => (
                <AccordionItem key={id} eventKey={id} className="border-0 rounded-3 shadow-sm mb-3">
                  <AccordionHeader>{question}</AccordionHeader>
                  <AccordionBody className="fs-sm pt-0">{answer}</AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Faq;
