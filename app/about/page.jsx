import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AboutPage from "./AboutPage";

const PATH = "/about";
const TITLE = "About Sobha Parq City | Hennur Bangalore Project & Developer";
const DESCRIPTION =
  "Learn about Sobha Parq City on Hennur Main Road, North Bangalore, and Sobha Group, its identified developer. Explore the proposed 50-acre township, 12 towers, around 1,300 homes, configurations and project status.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "about Sobha Parq City",
    "Sobha Parq City Hennur",
    "Sobha Group",
    "Sobha Group Bangalore",
    "Sobha Parq City project details",
    "Sobha Parq City developer",
    "Sobha new project Hennur Bangalore",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "About",
  title: TITLE,
  description: DESCRIPTION,
  type: "AboutPage",
  extra: [
    {
      "@type": "Organization",
      name: "Sobha Limited",
      url: "https://www.sobha.com/",
      sameAs: ["https://en.wikipedia.org/wiki/Sobha_(company)"],
    },
  ],
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <AboutPage />
    </>
  );
}
