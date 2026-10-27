import BlogSection from "@/components/BlogsSection";
import { DEFAULT_IMAGE_ALT, IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import BangalorePage from "./BangalorePage";

const PATH = "/bangalore";
const TITLE = "5 Sobha Projects in Bangalore | One World, Neopolis & More";
const DESCRIPTION =
  "Compare five Sobha projects in Bangalore: One World, Neopolis, Liora, Victoria Park and Sacred Grove by the Lake. Review locations, supplied project details, prices and timelines.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City Bangalore",
    "Sobha Parq City Hennur Main Road",
    "Sobha projects in Bangalore",
    "top Sobha projects Bangalore",
    "Sobha new launch Bangalore",
    "Sobha One World",
    "Sobha Neopolis",
    "Sobha Liora",
    "Sobha Victoria Park",
    "Sobha Sacred Grove by the Lake",
    "living in Bangalore",
    "apartments in Hennur Bangalore",
    "Sobha plots near Malur",
  ],
  images: [{ ...IMAGES.banner, alt: DEFAULT_IMAGE_ALT }],
});

const TOP_PROJECTS = [
  "Sobha One World",
  "Sobha Neopolis",
  "Sobha Liora",
  "Sobha Victoria Park",
  "Sobha Sacred Grove by the Lake",
];

const FAQS = [
  ["Where is Sobha Parq City located in Bangalore?", "Sobha Parq City is proposed on Hennur Main Road in North Bangalore. Buyers should confirm the exact project address and access routes through the latest official project documentation."],
  ["What are the proposed details of Sobha Parq City?", "The proposed township spans approximately 50 acres, with 12 residential towers and around 1,300 apartments. Planned configurations include 2, 3, 3.5 and 4 BHK homes."],
  ["Which five Sobha projects are covered in this Bangalore guide?", "This guide covers Sobha One World, Sobha Neopolis, Sobha Liora, Sobha Victoria Park and Sobha Sacred Grove by the Lake. The supplied details are informational and should be checked against current official project documents."],
  ["Which types of developments are included?", "The list includes apartment developments as well as Sobha Sacred Grove by the Lake, which is described in the supplied information as a plotted project. Compare the relevant approvals, documents, costs and purchase terms for each property type."],
  ["What is the starting price of Sobha Parq City?", "The currently supplied starting price is ₹2.38 crore onwards. Confirm the latest official price list, apartment availability and applicable charges with the developer."],
  ["Why do people choose Bengaluru for buying a home?", "Buyers are drawn by the city's large technology job market, mild climate, wide choice of schools and hospitals, a growing metro network and neighbourhoods to suit most budgets."],
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
      name: "Top Sobha Projects in Bangalore",
      itemListElement: TOP_PROJECTS.map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
    },
    {
      "@type": "City",
      name: "Bangalore",
      alternateName: "Bengaluru",
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
