import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, type = "website", image, schema }) => {
  const defaultTitle = "Leading Steel Building Contractor & PEB Contractor in Kerala | TwinLine Group";
  const defaultDescription = "TwinLine Group is Kerala's leading pre-engineered steel building (PEB) manufacturer & sports infrastructure contractor. Expert in steel structures, roofing, warehouse & factory construction.";
  const defaultKeywords = "Steel Building Contractor, PEB Contractor, Roofing Solutions, Steel Structure, Structural Building Contractor, Warehouse Building, Factory Building Contractor, Kerala, India";
  const defaultUrl = "https://www.twinlinegroup.com/";
  const defaultImage = "https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg";

  const seoTitle = title ? `${title} | TwinLine Group` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoUrl = url || defaultUrl;
  const seoImage = image || defaultImage;

  // Organization & Local Business Schema (rendered on every page as default)
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "TwinLine Group",
        "url": defaultUrl,
        "logo": "https://static.wixstatic.com/media/6eacb8_6c031563f034436ba10301f5aeab54af~mv2.png",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-77360-67063",
            "contactType": "sales",
            "email": "sales@twinlinegroup.com"
          }
        ],
        "sameAs": [
          "https://instagram.com/twinlinegroup",
          "https://facebook.com/twinlinegroup",
          "https://linkedin.com/company/twinlinegroup"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "TwinLine Group",
        "image": defaultImage,
        "url": defaultUrl,
        "telephone": "+91-77360-67063",
        "email": "sales@twinlinegroup.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5/336, Ground Floor, ABS Complex, Edapatta (PO), Eapilkad",
          "addressLocality": "Malappuram",
          "addressRegion": "Kerala",
          "postalCode": "679326",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.0510,
          "longitude": 76.0711
        }
      }
    ]
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="TwinLine Group" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
