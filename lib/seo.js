export const SITE_URL = "https://www.sobhaparqcity.in";
export const SITE_NAME = "Sobha Parq City";

export const HOME_TITLE = "Sobha Parq City | Hennur Bangalore | Price, Floor Plans & Brochure";
export const HOME_DESCRIPTION =
  "Explore Sobha Parq City on Hennur Main Road, Bangalore. Get details on 2, 3, 3.5 & 4 BHK apartments, prices, floor plans, brochure and possession date.";
export const DEFAULT_IMAGE_ALT = "Sobha Parq City";

// Real pixel sizes of the files in /public/images (some .webp files are PNG/JPEG inside).
export const IMAGES = {
  banner: { url: `${SITE_URL}/images/banners/sobhaparqcity.webp`, width: 1200, height: 676 },
  costSheet: { url: `${SITE_URL}/images/costing-details.webp`, width: 320, height: 174 },
  floorPlan2: { url: `${SITE_URL}/images/2bhk-floorplan.webp` },
  floorPlan3: { url: `${SITE_URL}/images/3bhk-floorplan.webp`, width: 320, height: 247 },
  floorPlan4: { url: `${SITE_URL}/images/4bhk-floorplan.webp` },
  masterPlan: { url: `${SITE_URL}/images/master-plan.webp`, width: 720, height: 480 },
  map: { url: `${SITE_URL}/images/map.webp`, width: 733, height: 346 },
  amenities: { url: `${SITE_URL}/images/banners/sobha-parq-city.webp`, width: 1200, height: 677 },
  bangalore: { url: `${SITE_URL}/images/bangalore.webp`, width: 600, height: 350 },
  logo: { url: `${SITE_URL}/images/logo.webp`, width: 204, height: 247 },
};

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROJECT_ID = `${SITE_URL}/#project`;

export const pageUrl = (path = "/") => `${SITE_URL}${path === "/" ? "/" : path}`;

/**
 * Full Next.js metadata for a page. `images` is a list of IMAGES entries with an `alt`.
 */
export function buildMetadata({ title, description, path, keywords = [], images = [], type = "website" }) {
  const url = pageUrl(path);
  // Social cards need ~1200px+ images, so smaller page images go after the large banner.
  const banner = { ...IMAGES.banner, alt: DEFAULT_IMAGE_ALT };
  const large = images.filter((img) => (img.width || 0) >= 1200);
  const small = images.filter((img) => (img.width || 0) < 1200);
  const ogImages = [...large, banner, ...small].filter(
    (img, i, all) => all.findIndex((o) => o.url === img.url) === i
  );

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: ogImages,
      locale: "en_IN",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImages[0].url],
    },
    category: "Real Estate",
  };
}

export const organizationNode = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: pageUrl("/"),
  logo: { "@type": "ImageObject", ...IMAGES.logo },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8317452005",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Kannada"],
  },
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: pageUrl("/"),
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

export const projectNode = {
  "@type": "ApartmentComplex",
  "@id": PROJECT_ID,
  name: "Sobha Parq City",
  description:
    "Sobha Parq City is a proposed township on Hennur Main Road in North Bangalore, planned across approximately 50 acres with 12 towers and around 1,300 apartments. Configurations include 2, 3, 3.5 and 4 BHK homes, with prices from ₹2.38 crore and possession planned for 2032. The RERA status is reported as applied; verify project details and approvals with official sources.",
  url: pageUrl("/"),
  image: [IMAGES.banner.url, IMAGES.masterPlan.url, IMAGES.amenities.url],
  numberOfAccommodationUnits: { "@type": "QuantitativeValue", value: 1300 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hennur Main Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  containedInPlace: { "@type": "City", name: "Bengaluru", sameAs: "https://en.wikipedia.org/wiki/Bangalore" },
};

export function breadcrumbNode(path, name) {
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") }];
  if (path !== "/") items.push({ "@type": "ListItem", position: 2, name, item: pageUrl(path) });
  return { "@type": "BreadcrumbList", "@id": `${pageUrl(path)}#breadcrumb`, itemListElement: items };
}

export function webPageNode({ path, name, description, image = IMAGES.banner.url, type = "WebPage", about = true, dateModified }) {
  const url = pageUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    primaryImageOfPage: { "@type": "ImageObject", url: image },
    ...(about ? { about: { "@id": PROJECT_ID } } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

export function faqNode(path, faqs) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl(path)}#faq`,
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/**
 * Standard JSON-LD graph for a page: WebPage + breadcrumb + project (+ FAQ and any extra nodes).
 */
export function pageSchema({ path, name, title, description, image, faqs, type, withProject = true, dateModified, extra = [] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({ path, name: title, description, image, type, about: withProject, dateModified }),
      breadcrumbNode(path, name),
      ...(withProject ? [projectNode] : []),
      ...(faqs?.length ? [faqNode(path, faqs)] : []),
      ...extra,
    ],
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
