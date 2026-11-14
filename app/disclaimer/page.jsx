import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import DisclaimerPage from "./DisclaimerPage";

const PATH = "/disclaimer";
const TITLE = "Sobha Parq City Disclaimer | Hennur Project Information";
const DESCRIPTION =
  "Read the Sobha Parq City website disclaimer. Project details for the proposed Hennur Main Road township, including prices, plans, images and timelines, are indicative and should be verified.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City disclaimer",
    "sobhaparqcity.in disclaimer",
    "Sobha Parq City project information disclaimer",
    "Sobha Parq City Hennur disclaimer",
    "Sobha Parq City indicative prices and plans",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Disclaimer",
  title: TITLE,
  description: DESCRIPTION,
  withProject: false,
  dateModified: "2026-10-27",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <DisclaimerPage />
    </>
  );
}
