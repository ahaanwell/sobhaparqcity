import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import LocationPage from "./LocationPage";

const PATH = "/location";
const TITLE = "Sobha Parq City Location | Hennur Road, North Bangalore";
const DESCRIPTION =
  "Explore Sobha Parq City’s location on Hennur Main Road, North Bangalore. Review road and airport connectivity, proposed metro access, nearby IT parks, schools, hospitals and shopping, and verify routes and project details before visiting.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parq City location",
    "Sobha Parq City Hennur Main Road",
    "Sobha Parq City North Bangalore location",
    "Sobha Parq City connectivity",
    "Sobha Parq City airport connectivity",
    "Sobha Parq City metro connectivity",
    "IT parks near Hennur",
    "schools near Hennur Main Road",
    "hospitals near Hennur",
    "Hennur Main Road Bangalore connectivity",
  ],
  images: [{ ...IMAGES.map, alt: "Sobha Parq City, proposed on Hennur Main Road in North Bangalore" }],
});

const FAQS = [
  [
    "Where is Sobha Parq City located?",
    "The project is located on Hennur Main Road in North Bangalore, within the wider Hennur region.",
  ],
  [
    "How is Sobha Parq City connected to the airport?",
    "The location has road access towards Kempegowda International Airport through Hennur–Bagalur Main Road and the alternative Hebbal–NH 44 route.",
  ],
  [
    "Is metro connectivity available near Sobha Parq City?",
    "The proposed Namma Metro Blue Line Phase 2B is planned to serve the wider North Bangalore and airport corridor. Its operational status and nearest station should be verified.",
  ],
  [
    "Which IT parks are accessible from Hennur?",
    "Manyata Embassy Business Park, Karle Town Centre, Kirloskar Business Park and Bhartiya City are important employment destinations in the wider region.",
  ],
  [
    "Are schools and hospitals available near the project?",
    "Yes. The wider Hennur region has educational institutions such as Legacy School and VIBGYOR High School, along with healthcare facilities such as Cratis Hospital and SPARSH Hospital.",
  ],
  [
    "Is Hennur suitable for residential investment?",
    "Buyers can evaluate Hennur based on its employment connectivity, residential demand, infrastructure development, property prices and rental market conditions.",
  ],
];

const schema = pageSchema({ path: PATH, name: "Location", title: TITLE, description: DESCRIPTION, image: IMAGES.banner.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <LocationPage />
      <BlogSection/>
    </>
  );
}
