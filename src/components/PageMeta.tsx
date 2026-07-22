import { BASE_URL } from '@/utils';
import { Helmet } from 'react-helmet-async';

type PageMetaProps = {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
  noIndex?: boolean;
  ogType?: 'website' | 'article';
};

const PageMeta = ({
  title,
  description,
  url,
  noIndex = false,
  image,
  keywords,
  structuredData,
  ogType = 'website',
}: PageMetaProps) => {
  const siteName = 'Enigma Net';
  const fullTitle = `${title} | ${siteName}`;
  const defaultDescription = 'Enigma Net provides networking and digital solutions.';
  const metaDescription = description || defaultDescription;

  const canonicalUrl = url || BASE_URL;

  // Logic to ensure image is a full absolute URL
  const metaImage = image?.startsWith('http') ? image : `${BASE_URL}${image || '/logo.png'}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Enigma Net" />

      {/* Robots Control */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Structured Data (JSON-LD) */}
      {structuredData &&
        (Array.isArray(structuredData) ? structuredData : [structuredData]).map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
    </Helmet>
  );
};

export default PageMeta;
