import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import MasterPlanPage from "./MasterPlanPage";

const PATH = "/master-plan";
const TITLE = "Sobha Parqcity Master Plan | 50-Acre Hennur Township";
const DESCRIPTION =
  "Explore the proposed Sobha Parqcity master plan for its Hennur Main Road township: approximately 50 acres, 12 blocks, 24 wings, 4,463 apartments and a floor structure of 3 basements + ground + 42 floors. Verify the final approved layout with the developer.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parqcity site layout",
    "Sobha Parqcity tower plan",
    "Sobha Parqcity 24 wings",
    "Sobha Parqcity 12 blocks",
    "Sobha Parqcity acres",
    "Sobha Parqcity 50 acre master plan",
    "Sobha Parqcity Hennur master plan",
    "Sobha Parqcity floor structure",
    "Sobha Parqcity 4463 apartments",
    "Hennur Main Road township layout",
  ],
  images: [{ ...IMAGES.masterPlan, alt: "Proposed master plan of Sobha Parqcity on Hennur Main Road, Bangalore" }],
});

const FAQS = [
  ["Where is the Sobha Parqcity master plan for?", "It relates to the proposed Sobha Parqcity township on Hennur Main Road in North Bangalore. Confirm the project boundary and address using current official documents."],
  ["How large is the proposed Sobha Parqcity development?", "The supplied project information describes a site of approximately 50 acres. Verify the final area and land use in the approved master plan."],
  ["How many blocks, wings and apartments are planned?", "The project is described as having 12 blocks, 24 wings and around 4,463 apartments. These are proposed figures and should be confirmed against approved project disclosures."],
  ["What floor structure is planned at Sobha Parqcity?", "The supplied floor structure is 3 basements + ground + 42 floors. Check the latest sanctioned plans for confirmation."],
  ["Is the Sobha Parqcity master plan final?", "A verified final approved master plan has not been confirmed in the project information available here. Request the latest plan and check it against applicable approvals before relying on it."],
  ["What should buyers review in a master plan?", "Review tower locations and spacing, project access, internal roads, pedestrian routes, open areas, amenity locations and the relationship of the selected apartment to shared spaces. Confirm these details in the approved plan."],
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
