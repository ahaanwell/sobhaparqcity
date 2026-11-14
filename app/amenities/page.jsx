import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AmenitiesPage from "./AmenitiesPage";

const PATH = "/amenities";
const TITLE = "Sobha Parq City Amenities | Clubhouse & Open Space, Hennur";
const DESCRIPTION =
  "Explore the proposed Sobha Parq City amenities on Hennur Main Road, North Bangalore. The project website states 40+ amenities, approximately 80% open space and a 50,000 sq. ft. clubhouse; verify facilities and specifications in the official amenity schedule.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City amenities",
    "Sobha Parq City amenities list",
    "Sobha Parq City clubhouse",
    "Sobha Parq City clubhouse size",
    "Sobha Parq City 40 amenities",
    "Sobha Parq City open space",
    "Sobha Parq City Hennur Main Road",
    "Sobha Parq City gym swimming pool",
    "Sobha Parq City outdoor facilities",
    "Hennur Bangalore apartment amenities",
  ],
  images: [{ ...IMAGES.amenities, alt: "Lifestyle facilities at Sobha Parq City, Hennur Main Road, Bangalore" }],
});

const FAQS = [
  [
    "How many amenities are planned at Sobha Parq City?",
    "The project website mentions more than 40 amenities. The complete facility list should be confirmed through official developer documentation.",
  ],
  [
    "What is the clubhouse size?",
    "The stated clubhouse area is approximately 50,000 sq. ft.",
  ],
  [
    "What is the open-space allocation?",
    "The project website mentions approximately 80% open space across the development.",
  ],
  [
    "Does Sobha Parq City have a gym and swimming pool?",
    "The supplied project information does not confirm individual facilities such as a gymnasium or swimming pool. Buyers should request the latest official amenity list.",
  ],
  [
    "Are outdoor recreational facilities included?",
    "The website mentions more than 40 amenities and 80% open space, but individual outdoor facilities and their locations require confirmation.",
  ],
  [
    "Where can buyers check the complete amenities list?",
    "Buyers can request the official amenity schedule, clubhouse specifications, and approved master plan from the developer or authorised sales representative.",
  ],
];

const schema = pageSchema({ path: PATH, name: "Amenities", title: TITLE, description: DESCRIPTION, image: IMAGES.amenities.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}
