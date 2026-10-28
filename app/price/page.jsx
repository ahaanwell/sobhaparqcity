import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PricePage from "./PricePage";

const PATH = "/price";
const TITLE = "Sobha Parqcity Price | From ₹1.1 Cr*, Hennur Bangalore";
const DESCRIPTION =
  "Check proposed Sobha Parqcity prices on Hennur Main Road, Bangalore: 1 BHK from ₹1.1 Cr*, with 2, 3 and 4 BHK options. Review indicative rates and verify the latest cost sheet.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parqcity starting price",
    "Sobha Parqcity price per sq ft",
    "Sobha Parqcity booking amount",
    "Sobha Parqcity EMI",
    "Sobha Parqcity launch offer",
    "Sobha Parqcity 2 BHK price",
    "Sobha Parqcity 3 BHK price",
    "Sobha Parqcity 4 BHK price",
    "Sobha Parqcity price Hennur Bangalore",
    "Hennur Main Road apartment prices",
  ],
  images: [{ ...IMAGES.costSheet, alt: "Sobha Parqcity indicative price and cost sheet, Hennur Main Road, Bangalore" }],
});

const FAQS = [
  ["What is the starting price of Sobha Parqcity?", "The supplied indicative starting price is ₹1.1 crore for a 1 BHK apartment of 750 sq. ft. Confirm the current price, unit availability and applicable charges with the developer."],
  ["What are the proposed prices for other Sobha Parqcity apartments?", "The supplied starting prices are ₹2.38 crore for 2 BHK, ₹2.97 crore for 3 BHK and ₹4.40 crore for 4 BHK apartments. These figures are indicative and should be confirmed using a current official cost sheet."],
  ["What apartment sizes are listed for Sobha Parqcity?", "The supplied sizes range from 750 sq. ft. for 1 BHK to 2,600 sq. ft. for 4 BHK. Verify the approved floor plans and area definitions for the specific apartment."],
  ["What additional charges may apply to the base price?", "The final cost may include applicable taxes, stamp duty, registration, parking, floor-rise charges, maintenance deposits and other items. Ask for an itemised, current cost sheet."],
  ["What is the booking amount and payment schedule?", "The latest booking amount and payment schedule should be confirmed directly with the developer. Review all payment milestones and terms in writing before paying."],
  ["When is possession planned for Sobha Parqcity?", "Possession is currently stated as planned for 2031. Verify the binding completion and possession dates in the project's official documents and agreement for sale."],
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
