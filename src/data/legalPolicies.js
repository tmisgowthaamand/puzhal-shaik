import { CONTACT_DETAILS } from './profileData';

export const PRIVACY_POLICY = {
  id: 'privacy-policy',
  title: 'Privacy Policy',
  lastUpdated: 'November 23, 2026',
  summary:
    'This Privacy Policy explains how information is collected, used, and safeguarded when you visit the official informational website of Advocate Shaik Mohamed Ali.',
  sections: [
    {
      id: 'pp-overview',
      heading: '1. Overview & Scope',
      paragraphs: [
        'This website is the official informational profile of Advocate Shaik Mohamed Ali (MBA, LL.B.), Advocate and State Secretary of the Indian Union Muslim League (IUML), based in Chennai, Tamil Nadu, India.',
        'We respect your privacy and are committed to protecting any personal information you voluntarily share while accessing our website or reaching out for public service, literary, or professional inquiries in accordance with applicable Indian laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act).',
      ],
    },
    {
      id: 'pp-collection',
      heading: '2. Information We Collect',
      paragraphs: [
        'This website is primarily static and informational. We do not require user registration, and we do not use intrusive behavioral tracking or third-party advertising cookies.',
        'Information may be collected only in the following limited ways:',
      ],
      bullets: [
        'Contact & Inquiry Details: If you submit an inquiry via the contact form or write to our email address, we receive your name, email address, phone number (if provided), and message content.',
        'Technical Server Logs: Standard web hosting infrastructure may automatically record non-identifying technical metadata such as browser type, device viewport, referring URL, and access timestamps for security and uptime maintenance.',
      ],
    },
    {
      id: 'pp-usage',
      heading: '3. How We Use Information',
      paragraphs: [
        'Any information you voluntarily provide is used strictly for legitimate communication and public-service purposes:',
      ],
      bullets: [
        'Responding to public welfare representations, legal awareness requests, literary inquiries, or appointment requests.',
        'Maintaining accurate correspondence records at the Office & Chambers of Advocate Shaik Mohamed Ali.',
        'Ensuring website security, preventing spam, and improving mobile and desktop accessibility.',
      ],
    },
    {
      id: 'pp-confidentiality',
      heading: '4. Legal Confidentiality Notice',
      paragraphs: [
        'Submitting a message through this website or sending an email does not create an Advocate–Client relationship. Please do not transmit confidential case documents, sensitive evidence, or privileged legal records through the general website contact form prior to a formal consultation and engagement.',
      ],
    },
    {
      id: 'pp-sharing',
      heading: '5. Data Sharing & Retention',
      paragraphs: [
        'We do not sell, rent, trade, or monetize personal data to any third party. Information is shared only when required by applicable law, court order, or statutory authority in India, or with trusted office staff solely to respond to your inquiry.',
        'Correspondence is retained only for as long as necessary to address your request or fulfil statutory record-keeping obligations.',
      ],
    },
    {
      id: 'pp-rights',
      heading: '6. Your Rights & Choices',
      paragraphs: [
        'Under applicable data protection principles, you may request access to, correction of, or deletion of personal contact details you have submitted to us by writing to our official contact address below.',
      ],
    },
    {
      id: 'pp-contact',
      heading: '7. Contact Details for Privacy Inquiries',
      paragraphs: [
        'For any questions, grievances, or data requests regarding this Privacy Policy, please contact:',
      ],
      contactBox: CONTACT_DETAILS,
    },
  ],
};

export const TERMS_AND_CONDITIONS = {
  id: 'terms-and-conditions',
  title: 'Terms & Conditions',
  lastUpdated: 'November 23, 2026',
  summary:
    'These Terms & Conditions govern your use of the official website of Advocate Shaik Mohamed Ali, including Bar Council of India compliance disclosures and intellectual property terms.',
  sections: [
    {
      id: 'tc-acceptance',
      heading: '1. Acceptance of Terms',
      paragraphs: [
        'By accessing or browsing this website, you agree to be bound by these Terms & Conditions and all applicable laws of India. If you do not agree with any part of these terms, please discontinue using this website.',
      ],
    },
    {
      id: 'tc-bci',
      heading: '2. Bar Council of India Compliance & No Solicitation',
      paragraphs: [
        'In compliance with the rules of the Bar Council of India (BCI), advocates in India are not permitted to solicit work or advertise legal services. This website is strictly an informational resource presenting the public life, literary work, social service initiatives, and biographical profile of Advocate Shaik Mohamed Ali.',
        'Nothing on this website should be construed as an advertisement, personal invitation, solicitation, or inducement of any sort for legal representation. Any communication initiated by a visitor is solely at the visitor’s own volition.',
      ],
    },
    {
      id: 'tc-no-advice',
      heading: '3. No Legal Advice or Advocate–Client Relationship',
      paragraphs: [
        'All articles, speeches, publications, and summaries on this website—including information on constitutional rights, social justice, and legal awareness—are provided for general public education only and do not constitute formal legal advice.',
        'Viewing this website or sending an inquiry through its contact channels does not establish an Advocate–Client relationship.',
      ],
    },
    {
      id: 'tc-ip',
      heading: '4. Intellectual Property & Publications',
      paragraphs: [
        'All biographical texts, photographs, design elements, and references to literary works—including "Manathodu Urayaadu" (மனதோடு உரையாடு)—featured on this website remain the intellectual property of Advocate Shaik Mohamed Ali or their respective copyright holders.',
        'You may view and share links to this website for non-commercial, educational, or public-awareness purposes with proper attribution. Reproduction or commercial redistribution without prior written permission is prohibited.',
      ],
    },
    {
      id: 'tc-conduct',
      heading: '5. Acceptable Use',
      paragraphs: [
        'Visitors agree not to misuse the contact form or website infrastructure for automated spam, defamatory content, unauthorized scraping, or any unlawful activity under the Information Technology Act, 2000.',
      ],
    },
    {
      id: 'tc-jurisdiction',
      heading: '6. Governing Law & Jurisdiction',
      paragraphs: [
        'These Terms & Conditions are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India.',
      ],
    },
    {
      id: 'tc-contact',
      heading: '7. Contact Details & Official Chambers',
      paragraphs: [
        'For any questions regarding these Terms & Conditions, permissions, or official correspondence, please contact:',
      ],
      contactBox: CONTACT_DETAILS,
    },
  ],
};
