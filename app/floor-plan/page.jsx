import BlogSection from "@/components/BlogsSection";
import { DEFAULT_IMAGE_ALT, IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import FloorPlanPage from "./FloorPlanPage";

const PATH = "/floor-plan";
const TITLE = "Sobha Parqcity Floor Plans | 1, 2, 3 & 4 BHK, Hennur";
const DESCRIPTION =
  "Explore proposed Sobha Parqcity 1, 2, 3 and 4 BHK floor plans on Hennur Main Road, Bangalore, with stated sizes from 750 to 2,600 sq. ft. Verify final plans with the developer.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parqcity floor plans",
    "Sobha Parqcity floor plan PDF",
    "Sobha Parqcity 1 BHK floor plan",
    "Sobha Parqcity 2 BHK floor plan",
    "Sobha Parqcity 3 BHK floor plan",
    "Sobha Parqcity 4 BHK floor plan",
    "Sobha Parqcity apartment sizes",
    "Sobha Parqcity Hennur floor plans",
  ],
  images: [{ ...IMAGES.banner, alt: "Sobha Parqcity proposed apartment floor plans, Hennur Main Road, Bangalore" }],
});

const FAQS = [
  ["What apartment configurations are planned at Sobha Parqcity?", "The proposed apartment configurations are 1, 2, 3 and 4 BHK. Confirm the final available configurations with the developer."],
  ["What are the stated Sobha Parqcity apartment sizes?", "The supplied size range is 750 to 2,600 sq. ft. Check the latest approved floor plans and confirm the area measurement used for each apartment."],
  ["Are the Sobha Parqcity floor plans final?", "Treat the plans and sizes as proposed information until confirmed in the developer's current approved plans and project documents."],
  ["How can I request the latest Sobha Parqcity floor plans?", "Use our contact page to request the latest floor plan material available from the developer."],
];

const schema = pageSchema({ path: PATH, name: "Floor Plan", title: TITLE, description: DESCRIPTION, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}
