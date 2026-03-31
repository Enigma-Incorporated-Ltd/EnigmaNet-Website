import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
} from 'react-bootstrap';
 import "./faq.css"
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
          No. Enigma Net sits on top of your existing internet connections — fibre, 5G, satellite,
          whatever you have. There are no infrastructure changes, no rip-and-replace, and no
          dependency on a specific provider.
        </p>
      </>
    ),
  },
  {
    question: 'How is this different from SD-WAN?',
    answer: (
      <>
        <p>
          Traditional SD-WAN solutions classify traffic and hope the network path behaves. Enigma
          Net actively controls traffic at the byte level — shaping, duplicating, and rerouting in
          real time without needing cooperation from the underlying network. The result is
          predictable performance even on congested or lossy links.
        </p>
      </>
    ),
  },
  {
    question: 'What kind of performance improvement should I expect?',
    answer: (
      <>
        <p>
          It depends on your environment, but large-file transfers over high-latency links have been
          measured at up to 39–64× faster than standard TCP. Predictive failover operates within 20
          milliseconds, and link bonding delivers five-9s reliability using ordinary internet
          connections.
        </p>
      </>
    ),
  },
  {
    question: 'Is Enigma Net secure?',
    answer: (
      <>
        <p>
          Security is built into the architecture, not bolted on. All traffic is encrypted
          end-to-end with AES-256, keys are rotated continuously, and the platform operates on a
          zero-trust model — no user data is logged, and traffic is obfuscated to resist deep-packet
          inspection.
        </p>
      </>
    ),
  },
  {
    question: 'Can MSPs and channel partners resell Enigma Net?',
    answer: (
      <>
        <p>
          Yes. Our partner programme is designed for MSPs and channel partners to package,
          provision, and resell Enigma Net solutions as a managed offering — with margin and
          provisioning support built in.
        </p>
      </>
    ),
  },
  {
    question: 'What about compliance — NIS2, zero-trust mandates?',
    answer: (
      <>
        <p>
          Enigma Net aligns with NIS2 requirements for end-to-end encryption on public networks and
          zero-trust architecture mandates. The platform provides encrypted, resilient networking
          with audit-ready controls — helping you meet compliance requirements without additional
          tooling.
        </p>
       
      </>
    ),
  },
];

const Faqs = () => {
  const [activeKey, setActiveKey] = useState<string | null>('0');

  return (
    <Container className="py-5  mb-lg-2">
      <div
        className="py-2 container-sm  py-md-4 py-lg-5"
        style={{
          maxWidth: '992px',
        }}
      >
        {' '}
        <h2 className="h2 text-center text-warning mb-4">Frequently Asked Questions</h2>
        <h1 className="text-center h1 text-muted mb-5">
          What you need to know before getting started
        </h1>
        <Accordion activeKey={activeKey} onSelect={k => setActiveKey(k as string)}>
          {faqs.map((faq, idx) => (
            <AccordionItem
              eventKey={idx.toString()}
              key={idx}
              className="faq-item border-0 mb-3 overflow-hidden"
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
