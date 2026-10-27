import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import MasterPlanPage from "./MasterPlanPage";

const PATH = "/master-plan";
const TITLE = "Sobha Parq City Site Layout – 25-Acre Master Plan Explained";
const DESCRIPTION =
  "How the ~25-acre Sobha Parq City site in Sarjapur may be laid out: towers, roads, open areas and clubhouse for ~1,400 homes, and what to check.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City site layout",
    "Sobha Parq City tower plan",
    "Sobha Parq City number of towers",
    "Sobha Parq City acres",
    "Sobha Parq City open area percentage",
    "Sobha Parq City clubhouse location",
    "Sobha Sarjapur 25 acre project",
    "large township Sarjapur Road",
  ],
  images: [{ ...IMAGES.masterPlan, alt: "Site layout of the 25-acre Sobha Parq City project, Sarjapur Road" }],
});

const FAQS = [
  ["How many acres is Sobha Parq City?", "The project is planned on approximately 25 acres in Sarjapur, Bangalore."],
  ["How many towers and homes are in Sobha Parq City?", "Around 1,400 apartments (tentative) are planned. The number of towers and floors will be confirmed in the approved master plan."],
  ["How much open space does Sobha Parq City have?", "The share of open and landscaped area has not been published yet. Check it in the approved layout and RERA documents."],
  ["What should I look for in the Sobha Parq City master plan?", "Look at tower positions and spacing, entry and exit gates, internal roads, the clubhouse location and how far your tower is from busy amenity zones."],
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
