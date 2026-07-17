import { useTheme } from '@/utils/useTheme';
import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
} from 'react-bootstrap';
import './faq.css';
type FaqsProps = {
  question: string | React.ReactNode;
  answer: string | React.ReactNode;
};

type FaqType = {
  faqs: FaqsProps[];
  sectionTitle: string | React.ReactNode;
  title: string | React.ReactNode;
};
const Faqs = ({ faqs, sectionTitle, title }: FaqType) => {
  const [activeKey, setActiveKey] = useState<string | null>('0');
  const { theme } = useTheme();
  return (
    <Container className="pt-5  mb-lg-2">
      <div
        className="py-2 container-sm  py-md-4 py-lg-5"
        style={{
          maxWidth: '992px',
        }}
      >
        {sectionTitle && (
          <h2 className="h2 text-center text-uppercase text-warning mb-4">{sectionTitle}</h2>
        )}
        {title && <h1 className="text-center h1  mb-5">{title}</h1>}

        <Accordion activeKey={activeKey} onSelect={k => setActiveKey(k as string)}>
          {faqs.map((faq, idx) => (
            <AccordionItem
              eventKey={idx.toString()}
              key={idx}
              className="faq-item border-0 mb-3 overflow-hidden"
              style={{
                borderRadius: '10px',
                background: theme === 'dark' ? '' : 'rgb(242 242 242 / 67%)',
                boxShadow:
                  theme === 'dark'
                    ? ''
                    : 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
              }}
            >
              <AccordionHeader className="fs-lg">{faq.question}</AccordionHeader>
              <AccordionBody className="fs-md pt-0 pb-3 border-0 shadow">
                {faq.answer}
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Faqs;
