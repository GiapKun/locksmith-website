"use client";

import React from "react";

const StructuredData = () => {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://suakhoathanhhoa.com",
    logo: "https://suakhoathanhhoa.com/images/logo.png",
    name: "Sửa Khóa Thanh Hóa",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84933270890",
      contactType: "Customer Service",
      availableLanguage: ["Vietnamese"],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sửa Khóa Thanh Hóa",
    url: "https://suakhoathanhhoa.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://suakhoathanhhoa.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Locksmith", // chuyên ngành sửa khóa
    name: "Sửa Khóa Thanh Hóa",
    image: "https://suakhoathanhhoa.com/images/logo.png",
    telephone: "+84933270890",
    email: "suakhoathanhhoa@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "56 Đình Hương, Trương Thi",
      addressLocality: "Thanh Hóa",
      addressRegion: "Thanh Hóa",
      postalCode: "40000",
      addressCountry: "VN",
    },
    url: "https://suakhoathanhhoa.com",
    openingHours: [
      "Mo-Su 00:00-23:59", // hoạt động 24/7
    ],
    priceRange: "₫₫",
    servesCuisine: "Dịch vụ tận nơi",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
    </>
  );
};

export default StructuredData;
