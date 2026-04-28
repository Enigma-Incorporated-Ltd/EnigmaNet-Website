import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
} from 'react-bootstrap';
 import "./faq.css"
import { useTheme } from '@/utils/useTheme';
type FaqType = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqType[] = [
  {
    question: 'Do I need to change my ISP or existing infrastructure?',
    answer: (
      <>
        <p className="mb-0">
          No. Enigma Net sits on top of your existing internet connections, fibre, 5G, satellite,
          whatever you have. No rip-and-replace, no dependency on a specific provider.
        </p>
      </>
    ),
  },
  {
    question: 'How is this different from SD-WAN?',
    answer: (
      <>
        <p>
          While SD-WAN routes traffic across multiple links, Enigma Net actively accelerates and
          stabilises it. Deterministic performance, not just connectivity.
        </p>
      </>
    ),
  },
  {
    question: 'What kind of performance improvement should I expect?',
    answer: (
      <>
        <p>
          Up to 39–64× faster large-file transfers. Predictive failover in 20ms. Five-9s reliability
          using standard internet links.
        </p>
      </>
    ),
  },
  {
    question: 'Is Enigma Net secure?',
    answer: (
      <>
        <p>
          All traffic through encrypted tunnels. Identity-based access control. No logs. Zero-trust
          architecture throughout.
        </p>
      </>
    ),
  },
  {
    question: 'Can MSPs and channel partners resell Enigma Net?',
    answer: (
      <>
        <p>
          Absolutely. MSPs can package, provision and resell as a differentiated managed offering
          with new revenue streams.
        </p>
      </>
    ),
  },
  {
    question: 'What about compliance, NIS2, zero-trust mandates?',
    answer: (
      <>
        <p>
          Enigma Net is built on zero-trust encrypted networking with multi-path resilience. Aligned
          to NIS2 requirements and zero-trust architecture mandates for critical infrastructure.
        </p>
      </>
    ),
  },
];

const Faqs = () => {
  const [activeKey, setActiveKey] = useState<string | null>('0');
const {theme} = useTheme();
  return (
    <Container className="pt-5  mb-lg-2">
      <div
        className="py-2 container-sm  py-md-4 py-lg-5"
        style={{
          maxWidth: '992px',
        }}
      >
        {' '}
        <h2 className="h2 text-center text-uppercase text-warning mb-4">Frequently Asked Questions</h2>
        <h1 className="text-center h1  mb-5">What you need to know before getting started</h1>
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
