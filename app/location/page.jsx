import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import LocationPage from "./LocationPage";

const PATH = "/location";
const TITLE = "Sobha Parq City Location – Sarjapur Map & Distances";
const DESCRIPTION =
  "Sobha Parq City is in Sarjapur, south-east Bangalore. Map and approximate distances to the ORR, Whitefield, Electronic City, schools and airport.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City exact location",
    "Sobha Parq City Google map",
    "Sobha Parq City distance from ORR",
    "Sobha Parq City to Whitefield distance",
    "Sobha Parq City to Electronic City",
    "Sobha Parq City nearby schools",
    "Sobha Parq City metro station",
    "Sobha project Sarjapura 562125",
    "Sarjapur Road connectivity",
  ],
  images: [{ ...IMAGES.map, alt: "Map showing Sobha Parq City in Sarjapur, south-east Bangalore" }],
});

const FAQS = [
  ["What is the address of Sobha Parq City?", "The project is proposed in Sarjapur, Bangalore, Karnataka 562125. The exact site address will be confirmed in the RERA registration."],
  ["How far is Sobha Parq City from the Outer Ring Road?", "Roughly 13–15 km from the deeper parts of the Sarjapur belt, depending on the route and traffic."],
  ["Is there a metro station near Sobha Parq City?", "There is no operational metro station in Sarjapur yet. A metro line toward Sarjapur and Dommasandra has been proposed, but its timeline should be checked with BMRCL."],
  ["How far is the airport from Sobha Parq City?", "Kempegowda International Airport is about 45–50 km away by road."],
  ["What should I check when visiting the Sobha Parq City location?", "Drive your daily routes at peak hours, and look at the approach road, nearby schools and hospitals, and public transport options."],
];

const schema = pageSchema({ path: PATH, name: "Location", title: TITLE, description: DESCRIPTION, image: IMAGES.map.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <LocationPage />
      <BlogSection/>
    </>
  );
}
