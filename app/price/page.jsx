import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PricePage from "./PricePage";

const PATH = "/price";
const TITLE = "Sobha Parq City Price – From ₹1.2 Cr*, Cost Sheet & EMI";
const DESCRIPTION =
  "Sobha Parq City, Sarjapur: prices expected from ₹1.2 Cr*. See what the cost sheet includes (GST, stamp duty, parking) and how payments work.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City starting price",
    "Sobha Parq City price per sq ft",
    "Sobha Parq City booking amount",
    "Sobha Parq City EMI",
    "Sobha Parq City launch offer",
    "Sobha Sarjapur price 2026",
    "flats under 1.5 crore Sarjapur Road",
  ],
  images: [{ ...IMAGES.costSheet, alt: "Sample cost sheet for Sobha Parq City, Sarjapur Road" }],
});

const FAQS = [
  ["What is the starting price of Sobha Parq City?", "Prices are expected to start at ₹1.2 Cr* (base price). Ask our team for the latest official price sheet."],
  ["What is the price per sq ft at Sobha Parq City?", "The developer has not yet published a per-sq-ft rate or unit sizes. Ask for the official cost sheet before comparing projects."],
  ["What extra charges are added to the base price?", "Expect GST, stamp duty and registration, parking, floor-rise (if any), maintenance deposit and other charges listed in the official cost sheet."],
  ["What is the booking amount and payment plan?", "The booking amount and payment schedule have not been announced yet. They are usually construction-linked; confirm the stages in writing before paying."],
  ["When will Sobha Parq City be ready?", "Handover is proposed for December 2032, so payments are likely to be spread over several years."],
];

const schema = pageSchema({ path: PATH, name: "Price", title: TITLE, description: DESCRIPTION, image: IMAGES.costSheet.url, faqs: FAQS });

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <PricePage />
      <BlogSection/>
    </>
  );
}
