import BlogSection from "@/components/BlogsSection";
import { DEFAULT_IMAGE_ALT, IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import FloorPlanPage from "./FloorPlanPage";

// Floor plans (configurations, sizes, room layout, Vastu, etc.) may change, so the
// metadata names no configurations and points to the latest official plans.
const PATH = "/floor-plan";
const TITLE = "Sobha Parq City Floor Plan – Get the Latest Official Plans";
const DESCRIPTION =
  "Looking for the Sobha Parq City, Sarjapur floor plan? Plans are still being finalised by the developer. Request the latest official version from our team.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City floor plan",
    "Sobha Parq City floor plan PDF",
    "Sobha Parq City latest floor plan",
    "Sobha Parq City unit plan download",
  ],
  images: [{ ...IMAGES.banner, alt: DEFAULT_IMAGE_ALT }],
});

const FAQS = [
  ["Are the Sobha Parq City floor plans final?", "No. The floor plans are proposed and may change. Always refer to the latest plans released by the developer and registered with RERA."],
  ["How can I get the latest Sobha Parq City floor plans?", "Request them through our contact page and we will share the most recent version released by the developer."],
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
