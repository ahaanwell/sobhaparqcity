import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AmenitiesPage from "./AmenitiesPage";

const PATH = "/amenities";
const TITLE = "Sobha Parqcity Amenities | Hennur Main Road, Bangalore";
const DESCRIPTION =
  "Explore planned amenities at Sobha Parqcity on Hennur Main Road, North Bangalore. Review clubhouse, fitness, sports and family facilities; the final official list is awaited.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parqcity facilities list",
    "Sobha Parqcity Hennur amenities",
    "Sobha Parqcity clubhouse",
    "Sobha Parqcity clubhouse size",
    "Sobha Parqcity lifestyle amenities",
    "Sobha Parqcity sports facilities",
    "Sobha Parqcity kids play area",
    "Sobha Parqcity landscaped open space",
    "Sobha Hennur clubhouse",
    "gated community facilities Hennur Bangalore",
  ],
  images: [{ ...IMAGES.amenities, alt: "Lifestyle facilities at Sobha Parqcity, Hennur Main Road, Bangalore" }],
});

const FAQS = [
  ["Which facilities will Sobha Parqcity have?", "The developer has not yet published the final amenity list. Expect categories such as a clubhouse, fitness and wellness areas, sports courts, children's play zones, landscaped gardens and security systems, to be confirmed in the official brochure."],
  ["Is there a clubhouse at Sobha Parqcity?", "A clubhouse is expected for a community of this size, but its size and facilities will only be known once the approved amenity plan is released."],
  ["How many homes will share the amenities?", "Close to 1,400 apartments (tentative) are planned on about 25 acres, so it is worth checking whether facilities are sized for that many residents."],
  ["Will amenities be ready at possession?", "Handover is proposed for December 2031. Ask the developer which amenities will be operational at possession and whether any carry extra charges."],
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
