import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import BangalorePage from "./BangalorePage";

const PATH = "/bangalore";
const TITLE = "Bengaluru City Guide & 5 SOBHA Projects | Bangalore";
const DESCRIPTION =
  "Explore Bengaluru’s neighbourhoods, jobs, transport and lifestyle, then compare five SOBHA projects in Bangalore: OneWorld, Altair, Townpark, Neopolis and Ayana.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Bangalore city guide",
    "Bengaluru city guide",
    "Sobha projects in Bangalore",
    "SOBHA projects in Bengaluru",
    "top Sobha projects Bangalore",
    "Bangalore real estate",
    "Bengaluru residential projects",
    "Sobha OneWorld Bangalore",
    "Sobha Altair Bangalore",
    "Sobha Townpark Bangalore",
    "Sobha Neopolis Bangalore",
    "Sobha Ayana Bangalore",
    "Sobha Parqcity Hennur Main Road",
  ],
  images: [{ ...IMAGES.banner, alt: "Bengaluru city guide and SOBHA residential projects" }],
});

const TOP_PROJECTS = [
  "SOBHA OneWorld",
  "SOBHA Altair",
  "SOBHA Townpark",
  "SOBHA Neopolis",
  "SOBHA Ayana",
];

const FAQS = [
  [
    "What is Bengaluru known for?",
    "Bengaluru is Karnataka’s capital and a major centre for information technology, start-ups, research, education and other industries. Its neighbourhoods also offer a wide mix of cultural, recreational and residential environments.",
  ],
  [
    "Which areas of Bengaluru have the SOBHA projects in this guide?",
    "The featured projects are in Greater Whitefield, off Sarjapur Main Road, near Electronic City, and in the Panathur–Balagere area. Check each project’s exact address and route for your daily destinations.",
  ],
  [
    "Which five SOBHA projects are covered in this Bangalore guide?",
    "This guide compares SOBHA OneWorld, SOBHA Altair, SOBHA Townpark, SOBHA Neopolis and SOBHA Ayana. They are presented as a shortlist for research, not as a ranked endorsement.",
  ],
  [
    "What types of homes are included in these SOBHA projects?",
    "The current project listings include apartment residences in different bedroom configurations, from 1-bedroom homes to 4-bedroom homes. Available units, areas and configurations vary by project and phase.",
  ],
  [
    "Are the five SOBHA projects ranked from best to worst?",
    "No. The five projects are a comparison shortlist selected to represent different Bengaluru locations and home options. Suitability depends on your budget, commute, preferred layout and verified project documents.",
  ],
  [
    "What should I verify before buying a home in Bengaluru?",
    "Check the project’s current Karnataka RERA registration and phase, sanctioned plans, title and approvals, exact unit area, full cost sheet, payment terms and written possession commitments. Visit the site and test your commute before deciding.",
  ],
];

const schema = pageSchema({
  path: PATH,
  name: "Bangalore",
  title: TITLE,
  description: DESCRIPTION,
  faqs: FAQS,
  extra: [
    {
      "@type": "ItemList",
      name: "Featured SOBHA Residential Projects in Bengaluru",
      itemListElement: TOP_PROJECTS.map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
    },
    {
      "@type": "City",
      name: "Bengaluru",
      alternateName: "Bangalore",
      sameAs: "https://en.wikipedia.org/wiki/Bangalore",
      containedInPlace: { "@type": "State", name: "Karnataka" },
    },
  ],
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <BangalorePage faqs={FAQS} />
      <BlogSection/>
    </>
  );
}
