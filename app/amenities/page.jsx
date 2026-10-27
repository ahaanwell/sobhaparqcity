import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AmenitiesPage from "./AmenitiesPage";

const PATH = "/amenities";
const TITLE = "Sobha Parq City Amenities | Hennur Main Road, Bangalore";
const DESCRIPTION =
  "Explore planned amenities at Sobha Parq City on Hennur Main Road, North Bangalore. Review clubhouse, fitness, sports and family facilities; the final official list is awaited.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City facilities list",
    "Sobha Parq City Hennur amenities",
    "Sobha Parq City clubhouse",
    "Sobha Parq City clubhouse size",
    "Sobha Parq City lifestyle amenities",
    "Sobha Parq City sports facilities",
    "Sobha Parq City kids play area",
    "Sobha Parq City landscaped open space",
    "Sobha Hennur clubhouse",
    "gated community facilities Hennur Bangalore",
  ],
  images: [{ ...IMAGES.amenities, alt: "Lifestyle facilities at Sobha Parq City, Hennur Main Road, Bangalore" }],
});

const FAQS = [
  ["Which facilities will Sobha Parq City have?", "The developer has not yet published the final amenity list. Expect categories such as a clubhouse, fitness and wellness areas, sports courts, children's play zones, landscaped gardens and security systems, to be confirmed in the official brochure."],
  ["Is there a clubhouse at Sobha Parq City?", "A clubhouse is expected for a community of this size, but its size and facilities will only be known once the approved amenity plan is released."],
  ["How many homes will share the amenities?", "Close to 1,400 apartments (tentative) are planned on about 25 acres, so it is worth checking whether facilities are sized for that many residents."],
  ["Will amenities be ready at possession?", "Handover is proposed for December 2032. Ask the developer which amenities will be operational at possession and whether any carry extra charges."],
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
