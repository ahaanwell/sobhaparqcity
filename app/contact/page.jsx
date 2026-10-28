import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import ContactPage from "./ContactPage";

const PATH = "/contact";
const TITLE = "Contact Sobha Parqcity | Price, Brochure & Site Visit";
const DESCRIPTION =
  "Contact us about Sobha Parqcity on Hennur Main Road, North Bangalore. Call or WhatsApp +91 83174 52005 for current prices, floor plans, the brochure or a site visit.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parqcity contact",
    "Sobha Parqcity contact number",
    "Sobha Parqcity site visit",
    "Sobha Parqcity enquiry",
    "Sobha Parqcity brochure",
    "Sobha Parqcity Hennur Bangalore",
    "Sobha Parqcity price and brochure enquiry",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Contact",
  title: TITLE,
  description: DESCRIPTION,
  type: "ContactPage",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <ContactPage />
    </>
  );
}
