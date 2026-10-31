import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import FloorPlanPage from "./FloorPlanPage";

const PATH = "/floor-plan";
const TITLE = "Sobha Parqcity Floor Plans & Sizes | 1–4 BHK, Hennur";
const DESCRIPTION =
  "Explore Sobha Parqcity’s proposed 1, 2, 3 and 4 BHK floor plans on Hennur Main Road, North Bangalore. Compare listed apartment sizes from 750 to 2,600 sq. ft., tower details and planning information; request official drawings and verify areas with the developer.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parqcity floor plans",
    "Sobha Parqcity floor plan and apartment sizes",
    "Sobha Parqcity 1 BHK floor plan",
    "Sobha Parqcity 2 BHK floor plan",
    "Sobha Parqcity 3 BHK floor plan",
    "Sobha Parqcity 4 BHK floor plan",
    "Sobha Parqcity 2 BHK size",
    "Sobha Parqcity 3 BHK size",
    "Sobha Parqcity 4 BHK size",
    "Sobha Parqcity apartment layout Hennur",
    "Sobha Parqcity tower-wise floor plan",
  ],
  images: [{ ...IMAGES.banner, alt: "Sobha Parqcity proposed apartment floor plans, Hennur Main Road, Bangalore" }],
});

const FAQS = [
  [
    "What apartment configurations are available?",
    "The supplied apartment information includes 1, 2, 3, and 4 BHK configurations.",
  ],
  [
    "What is the size of the 2 BHK apartment?",
    "The listed 2 BHK apartment has approximately 1,400 sq. ft. of super built-up area.",
  ],
  [
    "How many residential towers are planned?",
    "The project information mentions 12 residential towers.",
  ],
  [
    "How many apartments are planned?",
    "Approximately 4,463 or more apartments are planned across the development.",
  ],
  [
    "What is the average number of apartments per tower?",
    "The calculated average is approximately 367 apartments per tower, although actual tower-wise distribution may differ.",
  ],
  [
    "Where can buyers obtain detailed floor plans?",
    "Buyers should request official apartment drawings, carpet area statements, tower schedules, and configuration-wise availability from the developer.",
  ],
];

const schema = pageSchema({
  path: PATH,
  name: "Floor Plan",
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGES.banner.url,
  faqs: FAQS,
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}
