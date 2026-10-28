import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import DisclaimerPage from "./DisclaimerPage";

const PATH = "/disclaimer";
const TITLE = "Sobha Parqcity Disclaimer | Hennur Project Information";
const DESCRIPTION =
  "Read the Sobha Parqcity website disclaimer. Project details for the proposed Hennur Main Road township, including prices, plans, images and timelines, are indicative and should be verified.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parqcity disclaimer",
    "sobhaparqcity.in disclaimer",
    "Sobha Parqcity project information disclaimer",
    "Sobha Parqcity Hennur disclaimer",
    "Sobha Parqcity indicative prices and plans",
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
