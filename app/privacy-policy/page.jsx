import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

const PATH = "/privacy-policy";
const TITLE = "Sobha Parq City Privacy Policy | Enquiry Data & Your Rights";
const DESCRIPTION =
  "Learn how www.sobhaparqcity.in handles personal details submitted with enquiries about the proposed Sobha Parq City project on Hennur Main Road, including sharing, retention and your privacy choices.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City privacy policy",
    "sobhaparqcity.in privacy",
    "Sobha Parq City data protection",
    "Sobha Parq City enquiry data",
    "Hennur project website privacy policy",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Privacy Policy",
  title: TITLE,
  description: DESCRIPTION,
  withProject: false,
  dateModified: "2026-10-27",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <PrivacyPolicyPage />
    </>
  );
}
