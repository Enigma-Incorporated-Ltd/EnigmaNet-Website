import { useState } from 'react';

import './legal.css';
import { useNavigate, useParams } from 'react-router-dom';
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
    description: `ENIGMA INCORPORATED LIMITED incorporated and registered in England and Wales with company number 12515127 whose registered office is at c/o Park Vale, 50 Sloane Avenue, London SW3 3DD, United Kingdom (“Enigma”)

1.DEFINITIONS AND INTERPRETATION

1.1) In these standard terms (“Standard Terms”) including the Policies and any Schedules hereto, except to the extent that the context otherwise requires, the following terms shall have the meanings set forth below:`,
  },
  {
    id: 2,
    slug: 'fair-use',
    title: 'Fair Use Policy',
    description: `This fair use policy (the “Fair Use Policy”) outlines the terms and acceptable use standards for Enigma’s connectivity and communication services, including but not limited to internet, telephony, and VOIP services.

By using Enigma’s services, you agree to comply with this Fair Use Policy. It is designed to ensure the integrity, security, and lawful use of our network and services. This Fair Use Policy may be updated from time to time and applies in addition to Enigma’s Standard Terms.`,
  },
  {
    id: 3,
    slug: 'end-user',
    title: 'End User Policy',
    description: `This end user policy (the “End User Policy”) governs your use of Enigma’s services and platforms, including related hardware, software, websites, and portals.

By accessing or using Enigma’s services, you acknowledge and agree to the terms of this End User Policy. It is intended to protect the rights of all users, ensure responsible usage, and support the secure and reliable operation of our systems. This End User Policy may be updated from time to time and applies in addition to Enigma’s Standard Terms.

Any reference to Enigma services or product shall also include Third-Party Licences or any affiliated connections or networks, as appropriate. Any capitalised terms not otherwise defined herein, shall have the meanings ascribed to them in the Standard Terms.`,
  },
  {
    id: 4,
    slug: 'privacy',
    title: 'Privacy Policy',
    description: `This privacy policy (the “Privacy Policy”) governs the rules which apply to Enigma’s data protection, collection, handling/transfer and usage practices.

By accessing or using Enigma’s services, you acknowledge and agree to the terms of this Privacy Policy. It is intended to protect the rights of all users, ensure responsible usage, and support the secure and reliable operation of our systems. This Privacy Policy may be updated from time to time and applies in addition to Enigma’s Standard Terms.

Any reference to Enigma services or product shall also include Third-Party Licences or any affiliated connections or networks, as appropriate. Any capitalised terms not otherwise defined herein, shall have the meanings ascribed to them in the Standard Terms.

Except where expressly stated otherwise, this Privacy Policy is subject to and governed by Enigma’s Standard Terms. In the event this document is silent on any matter, the relevant provisions of the Standard Terms shall apply and shall govern that subject matter accordingly.

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
    description: `This policy is issued in accordance with the US Digital Millennium Copyright Act (the “DMCA Policy”) governs the rules which apply to all of Enigma’s websites and services operating in the United States.

By accessing or using Enigma’s services, you acknowledge and agree to the terms of this DMCA Policy. It is intended to protect the rights of all users, ensure responsible usage, and support the secure and reliable operation of our systems. This DMCA Policy may be updated from time to time and applies in addition to Enigma’s Standard Terms.

Any reference to Enigma services or product shall also include Third-Party Licences or any affiliated connections or networks, as appropriate. Any capitalised terms not otherwise defined herein, shall have the meanings ascribed to them in the Standard Terms.

Except where expressly stated otherwise, this DMCA Policy is subject to and governed by Enigma’s Standard Terms. In the event this document is silent on any matter, the relevant provisions of the Standard Terms shall apply and shall govern that subject matter accordingly.`,
  },
  {
    id: 6,
    slug: 'software-license',
    title: 'Software License Agreement',
    description: `BEFORE DOWNLOADING, INSTALLING AND USING ENIGMA’S SOFTWARE (THE “SOFTWARE”), YOU SHOULD CAREFULLY READ THIS SOFTWARE LICENSE AGREEMENT (“SOFTWARE LICENSE AGREEMENT”). CLICKING “I AGREE” OR OTHERWISE DOWNLOADING, INSTALLING AND/OR USING THE SOFTWARE ESTABLISHES A BINDING AGREEMENT BETWEEN YOU AS THE PERSON LICENSING THE SOFTWARE, EITHER ON BEHALF OF YOURSELF OR ANY THIRD PARTY ENTITY (“YOU”) AND ENIGMA. IF YOU DO NOT ACCEPT ALL OF THE TERMS OF THIS SOFTWARE LICENSE AGREEMENT, YOU HAVE NO RIGHT TO DOWNLOAD, INSTALL AND/OR USE THE SOFTWARE. THE RIGHT TO USE THE SOFTWARE IS ONLY ON THE CONDITION THAT YOU AGREE TO THE TERMS OF THIS SOFTWARE LICENSE AGREEMENT.

BY INSTALLING AND/OR BY USING THE SOFTWARE, YOU REPRESENT AND WARRANT THAT YOU HAVE THE LEGAL CAPACITY AND AUTHORITY TO ENTER INTO A BINDING AGREEMENT TO ADHERE TO THE TERMS AND CONDITIONS SET FORTH HEREIN, AND THAT THE SOFTWARE WILL BE USED ONLY IN ACCORDANCE WITH THESE TERMS AND CONDITIONS AND WITH ALL APPLICABLE LAWS. IF AN INDIVIDUAL IS REGISTERING OR USING THE SOFTWARE ON BEHALF OF AN ENTITY OR ORGANIZATION, THAT INDIVIDUAL WARRANTS, REPRESENTS, AND COVENANTS TO ENIGMA THAT SUCH INDIVIDUAL IS DULY AUTHORIZED TO AGREE TO THESE TERMS AND CONDITIONS ON BEHALF OF THE ORGANIZATION AND TO BIND THE ORGANIZATION TO THEM.`,
  },
  {
    id: 7,
    slug: 'cloud-storage',
    title: 'Addendum Cloud Storage',
    description: 'Additional cloud storage terms...',
  },
];
const LegalPage = () => {

const { slug } = useParams();
const navigate = useNavigate();

 const active = legalData.find(item => item.slug === slug) || legalData[0];
  return (
    <div className="legal-page container">
      <div className="row  legal-container">
        {/* Sidebar */}
        <div className="col-lg-3 col-md-4 sidebar">
          {legalData.map(item => (
            <div
              key={item.id}
              className={`sidebar-item ${active.slug === item.slug ? 'active' : ''}`}
              onClick={() => navigate(`/legal/${item.slug}`)}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="col-lg-9 col-md-8 content">
          <h2 className="content-title">{active.title}</h2>
          <p className="content-text">{active.description}</p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
