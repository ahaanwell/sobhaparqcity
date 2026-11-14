import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PricePage from "./PricePage";

const PATH = "/price";
const TITLE = "Sobha Parq City Price List | 1, 2, 3 & 4 BHK Prices";
const DESCRIPTION =
  "Explore the Sobha Parq City price list on Hennur Main Road, North Bangalore, with indicative prices and sizes for 1, 2, 3 and 4 BHK apartments, approximate rates per sq. ft. and pricing considerations. Confirm current prices with the developer.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City price list",
    "Sobha Parq City apartment price",
    "Sobha Parq City price per square foot",
    "Sobha Parq City 1 BHK price",
    "Sobha Parq City 2 BHK price",
    "Sobha Parq City 3 BHK price",
    "Sobha Parq City 4 BHK price",
    "Sobha Parq City apartment sizes",
    "Sobha Parq City price Hennur Main Road",
    "North Bangalore apartment prices",
  ],
  images: [{ ...IMAGES.costSheet, alt: "Sobha Parq City indicative price and cost sheet, Hennur Main Road, Bangalore" }],
});

const FAQS = [
  [
    "What is the starting price of Sobha Parq City?",
    "The indicative starting price is ₹1.1 Cr onwards for the listed 1 BHK configuration. Prices for larger configurations start at ₹2.38 Cr for 2 BHK, ₹2.97 Cr for 3 BHK, and ₹4.40 Cr for 4 BHK.",
  ],
  [
    "What is the price of a 2 BHK apartment in Sobha Parq City?",
    "The listed 2 BHK apartment has an area of 1,400 sq. ft., with an indicative starting price of ₹2.38 Cr onwards.",
  ],
  [
    "What is the price of a 3 BHK apartment?",
    "The 3 BHK configuration ranges from 1,750 to 1,950 sq. ft., with an indicative starting price of ₹2.97 Cr onwards.",
  ],
  [
    "What is the price of a 4 BHK apartment?",
    "The listed 4 BHK apartment measures approximately 2,600 sq. ft., with an indicative starting price of ₹4.40 Cr onwards.",
  ],
  [
    "Does the Sobha Parq City Price include registration and taxes?",
    "The supplied starting prices do not confirm whether registration, stamp duty, taxes, or other additional charges are included. Buyers should obtain an updated cost sheet from the developer.",
  ],
  [
    "How can buyers confirm the latest apartment prices?",
    "Prospective buyers should contact the developer or authorised sales representative for the latest availability, apartment-specific quotation, payment schedule, and complete cost breakdown.",
  ],
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
