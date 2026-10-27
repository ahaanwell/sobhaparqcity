import { HOME_DESCRIPTION, HOME_TITLE, SITE_URL, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AmenitiesSection from "@/components/AmenitiesSection";
import BlogSection from "@/components/BlogsSection";
import EMICalculator from "@/components/Emicalculator";
import FaqSection from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import PriceListSection from "@/components/PriceListSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import SpecificationsSection from "@/components/SpecificationsSection";
import ProjectStatusRERASection from "@/components/ProjectStatusRERASection";
import InvestmentSection from "@/components/InvestmentSection";
import ReviewsSection from "@/components/ReviewsSection";
import BuilderProfileSection from "@/components/BuilderProfileSection";
const KEYWORDS = [
  "Sobha Parq City",
  "Sobha Parq City Hennur Main Road",
  "Sobha Parq City new launch",
  "Sobha Parq City pre launch",
  "Sobha Parq City price",
  "Sobha Parq City brochure download",
  "Sobha Parq City RERA",
  "Sobha Parq City possession date",
  "Sobha new project Hennur Bangalore",
  "Sobha upcoming project Bangalore 2026",
  "luxury apartments Hennur Bangalore",
  "new launch apartments Hennur Main Road",
];

export const metadata = buildMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  keywords: KEYWORDS,
});

// Mirrors all questions and answers shown in components/FaqSection.jsx.
const FAQS = [
  {
    "@type": "Question",
    name: "What is Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sobha Parq City is a proposed residential township by Sobha Group on Hennur Main Road in North Bangalore. The development is planned across approximately 50 acres, with 12 residential towers and around 1,300 apartments.",
    },
  },
  {
    "@type": "Question",
    name: "Where is Sobha Parq City located?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sobha Parq City is proposed to be located on Hennur Main Road in North Bangalore, Karnataka. Buyers should confirm the exact project address, entrance and access routes through the latest official project documentation.",
    },
  },
  {
    "@type": "Question",
    name: "What is the current status of Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sobha Parq City is currently described as a pre-launch residential project. Prospective buyers should verify the latest launch updates, applicable approvals and development schedule before making a purchase decision.",
    },
  },
  {
    "@type": "Question",
    name: "What is the starting price of Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The supplied starting price for a 2 BHK apartment at Sobha Parq City is ₹2.38 crore onwards. The stated starting prices for other configurations are ₹2.97 crore for 3 BHK, ₹3.80 crore for 3.5 BHK and ₹4.40 crore for 4 BHK apartments. Buyers should confirm the latest official price list, additional charges and payment terms before booking.",
    },
  },
  {
    "@type": "Question",
    name: "What apartment configurations are available at Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The proposed apartment configurations at Sobha Parq City include 2 BHK, 3 BHK, 3.5 BHK and 4 BHK homes. Final availability, approved layouts and unit-specific details should be confirmed through the latest official project documents.",
    },
  },
  {
    "@type": "Question",
    name: "What are the apartment sizes at Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The supplied apartment sizes are 1,400 sq. ft. for 2 BHK, 1,750–1,950 sq. ft. for 3 BHK, 2,250–2,400 sq. ft. for 3.5 BHK and 2,600 sq. ft. for 4 BHK apartments. Buyers should verify the applicable area measurement and approved floor plans before selecting a unit.",
    },
  },
  {
    "@type": "Question",
    name: "How many acres is Sobha Parq City spread across?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sobha Parq City is proposed to cover approximately 50 acres. The final approved master plan should be reviewed to understand the planned layout and distribution of the residential development.",
    },
  },
  {
    "@type": "Question",
    name: "How many towers are planned at Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The proposed development includes 12 residential towers. The supplied project details state tower configurations ranging from G+36 to G+42 floors, subject to confirmation through approved building plans.",
    },
  },
  {
    "@type": "Question",
    name: "How many residential units are planned at Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Approximately 1,300 apartments are planned across the proposed township. The final unit count and distribution across apartment configurations should be verified through official project documents.",
    },
  },
  {
    "@type": "Question",
    name: "What is the RERA status of Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The supplied project information lists the RERA status as Applied. This does not confirm that registration has been granted. Buyers should verify the current registration status and official registration number through the Karnataka RERA authority before booking.",
    },
  },
  {
    "@type": "Question",
    name: "What is the possession date of Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The currently stated possession timeline is 2032. Buyers should confirm the officially documented completion and possession dates, along with the applicable contractual terms, before making financial commitments.",
    },
  },
  {
    "@type": "Question",
    name: "What types of homes are planned at Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sobha Parq City is planned to offer 2, 3, 3.5 and 4 BHK apartments. The supplied project details do not establish any additional residential property types, so buyers should refer to the latest official documents for confirmation of the proposed inventory.",
    },
  },
  {
    "@type": "Question",
    name: "What amenities are available at Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A verified official amenities list has not been provided in the available project information. Buyers should request the latest project brochure or official documentation to confirm the proposed recreational facilities, community spaces and other amenities.",
    },
  },
  {
    "@type": "Question",
    name: "What are the main specifications of Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sobha Parq City is proposed across approximately 50 acres, with 12 residential towers and around 1,300 apartments. The stated tower configurations range from G+36 to G+42 floors. Apartment options include 2, 3, 3.5 and 4 BHK configurations, with stated sizes ranging from 1,400 to 2,600 sq. ft. The project is described as pre-launch, with RERA status listed as applied and possession planned for 2032.",
    },
  },
  {
    "@type": "Question",
    name: "Is Sobha Parq City a good investment?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sobha Parq City may be worth evaluating for buyers interested in a long-term residential property in North Bangalore. Its investment suitability will depend on the final purchase price, verified approvals, location requirements, prevailing market conditions and the buyer's financial objectives. Property appreciation and rental returns are not guaranteed.",
    },
  },
  {
    "@type": "Question",
    name: "Is Sobha Parq City suitable for families?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The proposed range of 2, 3, 3.5 and 4 BHK apartments provides different options for families with varying space requirements. Suitability will depend on the final layouts, confirmed amenities, budget, household needs and the practical convenience of the location.",
    },
  },
  {
    "@type": "Question",
    name: "Who is the builder of Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sobha Group is identified as the developer of Sobha Parq City in the supplied project information. Buyers can review the developer's official profile and relevant completed residential developments while separately verifying the approvals, specifications and commitments associated with this project.",
    },
  },
  {
    "@type": "Question",
    name: "Are Sobha Parq City floor plans available?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The supplied information includes apartment configurations and stated size ranges but does not establish whether final approved floor plans have been released. Buyers should request the latest official floor plans to review room dimensions, layouts and applicable area measurements.",
    },
  },
  {
    "@type": "Question",
    name: "What should buyers verify before booking Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Buyers should verify the current RERA registration status, applicable approvals, approved floor plans, final pricing, payment schedule, construction specifications and possession commitments. They should also review the purchase agreement, clarify additional charges and confirm the details of their selected apartment before making a financial commitment.",
    },
  },
  {
    "@type": "Question",
    name: "Where can buyers get the latest information about Sobha Parq City?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Prospective buyers should consult the developer's official project documentation and relevant regulatory records for updated information about pricing, apartment availability, approvals, registration and possession. Any details that remain unconfirmed should be clarified through reliable documentation before proceeding with a booking.",
    },
  },
];

const FAQ_SCHEMA = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS,
};

const homeSchema = pageSchema({
  path: "/",
  name: "Home",
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  extra: [
    FAQ_SCHEMA,
    {
      "@type": "ItemList",
      name: "Top Sobha Projects in Bangalore",
      itemListElement: ["Sobha One World", "Sobha Liora", "Sobha Hennur", "Sobha Neopolis", "Sobha Madison Heights"].map(
        (name, i) => ({ "@type": "ListItem", position: i + 1, name })
      ),
    },
  ],
});

export default function Home() {
  return (
    <>
    <JsonLd data={homeSchema} />
    <HeroSection/>
    <ProjectHighlights/>
    <PriceListSection/>
    <EMICalculator/>
    <FloorPlanSection/>
    <MasterPlanSection/>
    <AmenitiesSection/>
    <GallerySection/>
    <LocationSection/>
    <SpecificationsSection/>
    <ProjectStatusRERASection/>
    <InvestmentSection/>
    <ReviewsSection/>
    <BuilderProfileSection/>
    <FaqSection/>
    <BlogSection/>
    </>
  );
}
