import { Helmet } from "react-helmet";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Gabinet Psychoterapii i Rozwoju Olga Filaszkiewicz",
    "url": "https://www.olgafilaszkiewicz.pl",
    "logo": "https://www.olgafilaszkiewicz.pl/lovable-uploads/profile-placeholder.jpg",
    "description": "Profesjonalne wsparcie psychologiczne i psychoterapeutyczne w nurcie humanistycznym. Konsultacje psychologiczne, psychoterapia indywidualna, konsultacje rodzicielskie oraz grupy terapeutyczno-rozwojowe.",
    "priceRange": "$$",
    "telephone": "+48459115349",
    "email": "info@lepszerelacje.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Świętojańska 66/2",
      "addressLocality": "Gdynia",
      "postalCode": "81-393",
      "addressCountry": "PL"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "54.5189",
        "longitude": "18.5305"
      },
      "geoRadius": "50000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.5189",
      "longitude": "18.5305"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48459115349",
      "contactType": "customer service",
      "email": "info@lepszerelacje.pl",
      "availableLanguage": ["Polish"]
    },
    "founder": {
      "@type": "Person",
      "name": "Olga Filaszkiewicz",
      "jobTitle": "Psychoterapeutka • Psycholog • Psychopedagog",
      "description": "Psychoterapeutka w nurcie humanistycznym z wieloletnim doświadczeniem w pracy terapeutycznej i akademickiej"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi psychoterapeutyczne",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Psychoterapia indywidualna",
            "description": "Profesjonalna psychoterapia w nurcie humanistyczno-doświadczeniowym"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Konsultacje psychologiczne",
            "description": "Wsparcie psychologiczne w trudnych sytuacjach życiowych"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Konsultacje rodzicielskie",
            "description": "Wsparcie w budowaniu autentycznych relacji z dziećmi, certyfikat Family-lab i Rodzicielstwa Bliskości",
            "offers": {
              "@type": "Offer",
              "price": "300",
              "priceCurrency": "PLN"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grupy terapeutyczno-rozwojowe",
            "description": "Rozwój osobisty w bezpiecznej grupie"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trening asertywności",
            "description": "Rozwijanie umiejętności asertywnej komunikacji"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warsztaty i wykłady",
            "description": "Programy dostosowane do potrzeb grupy, prowadzone w różnych formach"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://www.olgafilaszkiewicz.pl"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
