import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './legal.css';

export interface LegalItem {
  id: number;
  slug: string;
  title: string;
  description: string;
}

export const legalData: LegalItem[] = [
  {
    id: 1,
    slug: 'standard-terms',
    title: 'Standard Terms',
    description: `ENIGMA INCORPORATED LIMITED incorporated and registered in England and Wales with company number 12515127 whose registered office is at c/o Park Vale, 50 Sloane Avenue, London SW3 3DD, United Kingdom ("Enigma")

1.DEFINITIONS AND INTERPRETATION

1.1) In these standard terms ("Standard Terms") including the Policies and any Schedules hereto, except to the extent that the context otherwise requires, the following terms shall have the meanings set forth below:`,
  },
  {
    id: 2,
    slug: 'fair-use',
    title: 'Fair Use Policy',
    description: `This fair use policy (the "Fair Use Policy") outlines the terms and acceptable use standards for Enigma's connectivity and communication services, including but not limited to internet, telephony, and VOIP services.

By using Enigma's services, you agree to comply with this Fair Use Policy. It is designed to ensure the integrity, security, and lawful use of our network and services. This Fair Use Policy may be updated from time to time and applies in addition to Enigma's Standard Terms.`,
  },
  {
    id: 3,
    slug: 'end-user',
    title: 'End User Policy',
    description: `This end user policy (the "End User Policy") governs your use of Enigma's services and platforms, including related hardware, software, websites, and portals.

By accessing or using Enigma's services, you acknowledge and agree to the terms of this End User Policy. It is intended to protect the rights of all users, ensure responsible usage, and support the secure and reliable operation of our systems. This End User Policy may be updated from time to time and applies in addition to Enigma's Standard Terms.

Any reference to Enigma services or product shall also include Third-Party Licences or any affiliated connections or networks, as appropriate. Any capitalised terms not otherwise defined herein, shall have the meanings ascribed to them in the Standard Terms.`,
  },
  {
    id: 4,
    slug: 'privacy',
    title: 'Privacy Policy',
    description: `This privacy policy (the "Privacy Policy") governs the rules which apply to Enigma's data protection, collection, handling/transfer and usage practices.

By accessing or using Enigma's services, you acknowledge and agree to the terms of this Privacy Policy. It is intended to protect the rights of all users, ensure responsible usage, and support the secure and reliable operation of our systems. This Privacy Policy may be updated from time to time and applies in addition to Enigma's Standard Terms.

Any reference to Enigma services or product shall also include Third-Party Licences or any affiliated connections or networks, as appropriate. Any capitalised terms not otherwise defined herein, shall have the meanings ascribed to them in the Standard Terms.

Except where expressly stated otherwise, this Privacy Policy is subject to and governed by Enigma's Standard Terms. In the event this document is silent on any matter, the relevant provisions of the Standard Terms shall apply and shall govern that subject matter accordingly.

1) GENERAL

1.1) Our policy is broadly to:

1. Protect your privacy and the data you entrust us with;
2. Limit the amount of your private information we have access to, with such data required to operate our business or provide a service;
3. Not to buy or sell your private information;
4. Protect the privacy of visitors to our website and the privacy of customers, contacts and other individuals whose personal data we handle.`,
  },
  {
    id: 5,
    slug: 'dmca',
    title: 'DMCA Policy',
    description: `This policy is issued in accordance with the US Digital Millennium Copyright Act (the "DMCA Policy") governs the rules which apply to all of Enigma's websites and services operating in the United States.

By accessing or using Enigma's services, you acknowledge and agree to the terms of this DMCA Policy. It is intended to protect the rights of all users, ensure responsible usage, and support the secure and reliable operation of our systems. This DMCA Policy may be updated from time to time and applies in addition to Enigma's Standard Terms.

Any reference to Enigma services or product shall also include Third-Party Licences or any affiliated connections or networks, as appropriate. Any capitalised terms not otherwise defined herein, shall have the meanings ascribed to them in the Standard Terms.

Except where expressly stated otherwise, this DMCA Policy is subject to and governed by Enigma's Standard Terms. In the event this document is silent on any matter, the relevant provisions of the Standard Terms shall apply and shall govern that subject matter accordingly.`,
  },
  {
    id: 6,
    slug: 'software-license',
    title: 'Software License Agreement',
    description: `BEFORE DOWNLOADING, INSTALLING AND USING ENIGMA'S SOFTWARE (THE "SOFTWARE"), YOU SHOULD CAREFULLY READ THIS SOFTWARE LICENSE AGREEMENT ("SOFTWARE LICENSE AGREEMENT"). CLICKING "I AGREE" OR OTHERWISE DOWNLOADING, INSTALLING AND/OR USING THE SOFTWARE ESTABLISHES A BINDING AGREEMENT BETWEEN YOU AS THE PERSON LICENSING THE SOFTWARE, EITHER ON BEHALF OF YOURSELF OR ANY THIRD PARTY ENTITY ("YOU") AND ENIGMA. IF YOU DO NOT ACCEPT ALL OF THE TERMS OF THIS SOFTWARE LICENSE AGREEMENT, YOU HAVE NO RIGHT TO DOWNLOAD, INSTALL AND/OR USE THE SOFTWARE. THE RIGHT TO USE THE SOFTWARE IS ONLY ON THE CONDITION THAT YOU AGREE TO THE TERMS OF THIS SOFTWARE LICENSE AGREEMENT.

BY INSTALLING AND/OR BY USING THE SOFTWARE, YOU REPRESENT AND WARRANT THAT YOU HAVE THE LEGAL CAPACITY AND AUTHORITY TO ENTER INTO A BINDING AGREEMENT TO ADHERE TO THE TERMS AND CONDITIONS SET FORTH HEREIN, AND THAT THE SOFTWARE WILL BE USED ONLY IN ACCORDANCE WITH THESE TERMS AND CONDITIONS AND WITH ALL APPLICABLE LAWS. IF AN INDIVIDUAL IS REGISTERING OR USING THE SOFTWARE ON BEHALF OF AN ENTITY OR ORGANIZATION, THAT INDIVIDUAL WARRANTS, REPRESENTS, AND COVENANTS TO ENIGMA THAT SUCH INDIVIDUAL IS DULY AUTHORIZED TO AGREE TO THESE TERMS AND CONDITIONS ON BEHALF OF THE ORGANIZATION AND TO BIND THE ORGANIZATION TO THEM.`,
  },
  {
    id: 7,
    slug: 'cloud-storage',
    title: 'Addendum Cloud Storage',
    description:
      'Additional cloud storage terms and conditions apply to all cloud-hosted services provided by Enigma. Please contact us for the full addendum document.',
  },
];

const LegalPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const active = legalData.find(item => item.slug === slug) || legalData[0];

  const [contentVisible, setContentVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const contentRef = useRef(null);

  // Animate content swap on active change
  useEffect(() => {
    setContentVisible(false);
    const t = setTimeout(() => setContentVisible(true), 60);
    return () => clearTimeout(t);
  }, [active.slug]);

  // Sidebar entrance on mount
  useEffect(() => {
    const t = setTimeout(() => setSidebarVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSelect = (itemSlug: string) => {
    navigate(`/legal/${itemSlug}`);
  };


  return (
    <div className="legal-page">
      {/* Page header */}
      <div className="legal-header">
        {/* <span className="legal-header-eyebrow">Legal Documentation</span> */}
        <h1 className="legal-header-title mt-5 text-center">Policies &amp; Agreements</h1>
      
      </div>

      <div className="legal-shell">
        {/* ── Sidebar ── */}
        <nav className={`legal-sidebar ${sidebarVisible ? 'legal-sidebar--visible' : ''}`}>
          <p className="legal-sidebar-label">Documents</p>
          {legalData.map((item, i) => (
            <button
              key={item.id}
              className={`legal-sidebar-item ${active.slug === item.slug ? 'legal-sidebar-item--active' : ''}`}
              onClick={() => handleSelect(item.slug)}
              style={{ animationDelay: `${i * 55}ms` }}
            >
           
              <span className="legal-sidebar-text">{item.title}</span>
              {active.slug === item.slug && <span className="legal-sidebar-pip" />}
            </button>
          ))}
        </nav>

        {/* ── Content ── */}
        <main
          ref={contentRef}
          className={`legal-content ${contentVisible ? 'legal-content--visible' : ''}`}
        >
          {/* Breadcrumb */}
          <div className="legal-breadcrumb">
            <span>Legal</span>
            <span className="legal-breadcrumb-sep">›</span>
            <span className="legal-breadcrumb-active">{active.title}</span>
          </div>

          {/* Title block */}
          <div className="legal-content-header">
            <h2 className="legal-content-title">{active.title}</h2>
            <div className="legal-content-meta">
              <span className="legal-content-badge">Official Document</span>
              <span className="legal-content-updated">Enigma Incorporated Limited</span>
            </div>
          </div>

          {/* Divider */}
          <div className="legal-divider" />

          {/* Body */}
          <div className="legal-content-body">
            <p className="legal-content-text">{active.description}</p>
          </div>

          {/* Footer note */}
          <div className="legal-content-footer">
            <span className="legal-content-footer-icon">ℹ</span>
            This document is subject to Enigma's Standard Terms. For queries, contact{' '}
            <a href="mailto:info@enigmanet.co.uk" className="legal-footer-link">
              info@enigmanet.co.uk
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LegalPage;
