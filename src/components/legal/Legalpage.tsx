import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchLegalPages } from '@/services/legalApi';
import type { LegalItem } from '@/services/legalApi';
import './legal.css';
import { OverlayLoader } from '../loading/Loader';
import he from 'he';
import { toSentenceCase } from '@/utils';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Breadcrumb from '../ui/Breadcrumb';
import Header from '../ui/Header';
const normalizeContent = (html: string) => {
  if (!html) return '';

  const decoded = he.decode(html);

  return decoded
    .replace(/<span[^>]*>/gi, '')
    .replace(/<\/span>/gi, '')
    .replace(/white-space:\s*pre-wrap;?/gi, '')
    .replace(/\u00A0/g, ' ')
    .replace(/ {2,}/g, ' ')
    .replace(/©/g, '(c)');
};
const LegalPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [legalData, setLegalData] = useState<LegalItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [contentVisible, setContentVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  // ✅ Fetch legal pages
  useEffect(() => {
    fetchLegalPages()
      .then(data => setLegalData(data))
      .finally(() => setLoading(false));
  }, []);
  const ORDER = [
    'standard-terms',
    'fair-use-policy',
    'end-user-policy',
    'privacy-policy',
    'dmca-policy',
    'software-license-agreement',
    'addendum-cloud-storage',
  ];
  const sortedLegalData = [...legalData].sort((a, b) => {
    const indexA = ORDER.indexOf(a.slug);
    const indexB = ORDER.indexOf(b.slug);

    // If not found, push to end
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });
  // ✅ Find active page
  const active = sortedLegalData.find(item => item.slug === slug) || sortedLegalData[0];

  // ✅ Animate content change
  useEffect(() => {
    setContentVisible(false);
    const t = setTimeout(() => setContentVisible(true), 60);
    return () => clearTimeout(t);
  }, [active?.slug]);

  // ✅ Sidebar animation
  useEffect(() => {
    const t = setTimeout(() => setSidebarVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

const handleSelect = (itemSlug: string) => {
  navigate(`/company/trust-&-security/policies/${itemSlug}`);
};

const pageUrl = `${BASE_URL}/company/trust-&-security/policies/${active?.slug}`;

const structuredData = active
  ? {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: toSentenceCase(active.title),
      url: pageUrl,
      description: `Read ${toSentenceCase(active.title)} of Enigma Net.`,
      publisher: {
        '@type': 'Organization',
        name: 'Enigma Net',
        url: BASE_URL,
      },
    }
  : undefined;

const breadcrumbSchema = active
  ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Trust & Security Policies',
          item: `${BASE_URL}/company/trust-&-security/policies`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: toSentenceCase(active.title),
          item: pageUrl,
        },
      ],
    }
  : undefined;
  const finalStructuredData =
    active && structuredData && breadcrumbSchema ? [structuredData, breadcrumbSchema] : undefined;
  if (loading) {
    return <OverlayLoader visible message="Loading" />;
  }

  // ✅ Empty state
  if (!legalData.length) {
    return (
      <div className="legal-page">
        <p className="text-center mt-5">No legal documents found.</p>
      </div>
    );
  }

  return (
    <div className="legal-page container">
      <PageMeta
        title={toSentenceCase(active?.title || 'Legal')}
        description={`Read ${toSentenceCase(active?.title || '')} of Enigma Net.`}
        url={`${BASE_URL}/company/trust-&-security/policies/${active?.slug}`}
        image={`${BASE_URL}/logo.png`}
        keywords="Enigma Net, Legal, Policies, Agreements, Terms of Service"
        structuredData={finalStructuredData}
      />
      <Breadcrumb
        items={[
          { href: '/company', label: 'Company' },
          { label: 'Trust & Security ', href: '/company/trust-&-security' },
          { label: 'Policies ', href: '/company/trust-&-security/policies' },
        ]}
        style={{
          paddingTop: '6rem ',
        }}
      />{' '}
      <Header
        title="Policies & Agreements"
        style={{
          padding: '21px 0px ',
        }}
      />
      {/* Header */}
      <div className="legal-shell">
        {/* ── Sidebar ── */}
        <nav className={`legal-sidebar ${sidebarVisible ? 'legal-sidebar--visible' : ''}`}>
          <p className="legal-sidebar-label">Documents</p>

          {sortedLegalData.map((item, i) => (
            <button
              key={item.id}
              className={`legal-sidebar-item ${
                active?.slug === item.slug ? 'legal-sidebar-item--active' : ''
              }`}
              onClick={() => handleSelect(item.slug)}
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <span className="legal-sidebar-text">{toSentenceCase(item.title || '')}</span>
              {active?.slug === item.slug && <span className="legal-sidebar-pip" />}
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
            <span className="legal-breadcrumb-active">{toSentenceCase(active?.title)}</span>
          </div>

          {/* Title */}
          <div className="legal-content-header">
            <h2 className="legal-content-title">{toSentenceCase(active?.title)}</h2>

            <div className="legal-content-meta">
              <span className="legal-content-badge">Official Document</span>
              <span className="legal-content-updated">Enigma Incorporated Limited</span>
            </div>
          </div>

          <div className="legal-divider" />

          {/* ✅ HTML Content from CMS */}
          <div
            className="legal-content-body"
            dangerouslySetInnerHTML={{
              __html: normalizeContent(active?.content || ''),
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default LegalPage;
