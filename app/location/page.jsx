import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import LocationPage from "./LocationPage";

const PATH = "/location";
const TITLE = "Sobha Parqcity Location | Hennur Main Road, Bangalore";
const DESCRIPTION =
  "Explore the proposed Sobha Parqcity location on Hennur Main Road, North Bangalore. Check area connectivity and what to verify about the exact site address before visiting.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parqcity Hennur location",
    "Sobha Parqcity Hennur Main Road",
    "Sobha Parqcity exact site address",
    "Sobha Parqcity North Bangalore connectivity",
    "Hennur Main Road Bangalore location",
    "Sobha Parqcity nearby facilities",
    "Sobha Parqcity metro station",
    "Sobha Parqcity airport connectivity",
    "Hennur Road connectivity",
  ],
  images: [{ ...IMAGES.banner, alt: "Sobha Parqcity, proposed on Hennur Main Road in North Bangalore" }],
});

const FAQS = [
  ["Where is Sobha Parqcity proposed to be located?", "Sobha Parqcity is described in the supplied project information as a proposed development on Hennur Main Road in North Bangalore. Confirm the exact address and project entrance through current official documents before visiting."],
  ["Is the exact Sobha Parqcity site address confirmed?", "The precise site address and entrance should be verified with the developer and current project disclosures. Do not rely on a general locality or map pin as confirmation of the project boundary."],
  ["How can I assess connectivity from Sobha Parqcity?", "Check the actual routes from the confirmed site entrance to your workplace and regular destinations. Travel times vary by route, time of day and traffic, so test journeys during the hours you expect to travel."],
  ["Is a metro station within walking distance of Sobha Parqcity?", "The supplied project information does not confirm a nearby operational metro station or walking distance. Check current station locations and service status with the relevant transit authority."],
  ["What should I verify before visiting the Sobha Parqcity location?", "Confirm the current project address, entrance, visitor arrangements and route with the developer or sales team. You can also check approach roads, public transport and nearby daily services during your visit."],
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
