import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import MasterPlanPage from "./MasterPlanPage";

const PATH = "/master-plan";
const TITLE = "Sobha Parq City Master Plan | 50-Acre Layout & Towers";
const DESCRIPTION =
  "Explore the Sobha Parq City master plan on Hennur Main Road, North Bangalore, including the proposed 50-acre layout, 12 residential towers, approximately 4,463 apartments, 80% open space and a 50,000 sq. ft. clubhouse. Verify project details and approvals with the developer.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City master plan",
    "Sobha Parq City site layout",
    "Sobha Parq City 50 acre master plan",
    "Sobha Parq City residential towers",
    "Sobha Parq City 12 towers",
    "Sobha Parq City 80% open space",
    "Sobha Parq City clubhouse area",
    "Sobha Parq City apartment master plan",
    "Sobha Parq City Hennur Main Road",
    "North Bangalore township layout",
  ],
  images: [{ ...IMAGES.masterPlan, alt: "Proposed master plan of Sobha Parq City on Hennur Main Road, Bangalore" }],
});

const FAQS = [
  [
    "What is the total land area of Sobha Parkcity?",
    "The proposed residential development covers approximately 50 acres.",
  ],
  [
    "How many towers are included in the master plan?",
    "The project information mentions 12 residential towers.",
  ],
  [
    "What is the open-space allocation?",
    "Approximately 80% open space is stated on the project website.",
  ],
  [
    "What is the clubhouse area?",
    "The proposed clubhouse measures approximately 50,000 sq. ft.",
  ],
  [
    "How many apartments are planned?",
    "The development is planned with approximately 4,463 apartments.",
  ],
  [
    "What is the proposed possession date?",
    "The master-plan page mentions July 2031, subject to official confirmation.",
  ],
];

const schema = pageSchema({ path: PATH, name: "Master Plan", title: TITLE, description: DESCRIPTION, image: IMAGES.masterPlan.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}
