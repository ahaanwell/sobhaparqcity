import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import ContactPage from "./ContactPage";

const PATH = "/contact";
const TITLE = "Contact Sobha Parq City | Price, Brochure & Site Visit";
const DESCRIPTION =
  "Contact us about Sobha Parq City on Hennur Main Road, North Bangalore. Call or WhatsApp +91 83174 52005 for current prices, floor plans, the brochure or a site visit.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City contact",
    "Sobha Parq City contact number",
    "Sobha Parq City site visit",
    "Sobha Parq City enquiry",
    "Sobha Parq City brochure",
    "Sobha Parq City Hennur Bangalore",
    "Sobha Parq City price and brochure enquiry",
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
