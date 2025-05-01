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
    "@type": "Locksmith",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.8007,
      longitude: 105.7767,
    },
    url: "https://suakhoathanhhoa.com",
    openingHours: ["Mo-Su 00:00-23:59"],
    priceRange: "₫₫",
    description:
      "Dịch vụ sửa khóa tận nơi tại Thanh Hóa, có mặt 15 phút, hỗ trợ 24/7.",
    areaServed: {
      "@type": "Place",
      name: "Thanh Hóa",
    },
    sameAs: [
      "https://facebook.com/suakhoathanhhoa",
      "https://zalo.me/0933270890",
    ],
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
