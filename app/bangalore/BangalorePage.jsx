import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projects = [
  {
    name: "Sobha One World",
    location: "Off Hoskote, East Bangalore, opposite Hoskote Toll Plaza",
    type: "Luxury themed apartments",
    details: [
      ["Land area", "350 acres (as supplied; verify against official project documents)"],
      ["Apartments", "3,484 Vaastu-aligned units"],
      ["Configurations", "1, 2, 3 and 4 BHK"],
      ["Tower structure", "3 basements + ground + 46 floors"],
      ["Connectivity", "Kadugudi-Whitefield Metro Station; confirm route and travel time"],
      ["Starting price", "₹1.09 crore onwards (indicative; confirm current price)"],
      ["Status and possession", "Pre-launch; possession stated as 2031 onwards (tentative)"],
      [
        "RERA",
        "The supplied information both describes approval as awaited and provides registration number PRM/KA/RERA/1250/304/PR/080526/008634. Verify the number and current status directly with Karnataka RERA.",
      ],
    ],
  },
  {
    name: "Sobha Neopolis",
    location: "Panathur Road, off Marathahalli-ORR, Bengaluru 560087",
    type: "Luxury residential apartments with Greek-inspired architecture",
    details: [
      ["Land area", "25.86 acres"],
      ["Apartments", "1,875"],
      ["Towers and structure", "19 high-rise towers; 2 basements + ground + 18 floors"],
      ["Open space", "Approximately 78%"],
      ["Starting price", "₹95 lakhs (indicative; confirm current price)"],
      ["Status and possession", "New launch; possession stated as December 2027"],
      ["RERA", "PRM/KA/RERA/1251/446/PR/200923/006269 (verify current project details)"],
    ],
  },
  {
    name: "Sobha Liora",
    location: "Immadihalli, Whitefield, Bangalore",
    type: "Luxury residential apartments",
    details: [
      ["Land area", "7 acres"],
      ["Apartments", "Approximately 420 units"],
      ["Configurations", "3, 3.5 and 4 BHK"],
      ["Towers and structure", "4 towers; 2 basements + ground + 17 floors"],
      ["Open space", "80%"],
      ["Starting price", "On request"],
      ["Status and possession", "Pre-launch; possession stated as December 2030"],
      ["Approvals", "RERA and BBMP approval stated in supplied information; verify official records"],
    ],
  },
  {
    name: "Sobha Victoria Park",
    location: "Off Hennur Road, Bangalore",
    type: "Residential development",
    details: [
      ["Land area", "6.03 acres"],
      ["Apartments", "300"],
      ["Configurations and sizes", "2 and 3 BHK; 865–1,562 sq. ft."],
      ["Towers and floors", "5 towers; 9 floors each"],
      ["Starting price", "₹1.29 crore onwards (indicative; confirm current price)"],
      ["Status and possession", "Under construction; possession stated as December 2027"],
      ["RERA", "PRM/KA/RERA/1251/309/PR/310322/004800 (verify current project details)"],
    ],
  },
  {
    name: "Sobha Sacred Grove by the Lake",
    location: "Chikkathirupathi, Malur",
    type: "Residential plots",
    details: [
      ["Developer", "Sobha Limited"],
      ["Land area and plots", "26 acres; 388 plots"],
      ["Plot sizes", "1,200, 1,500 and 2,400 sq. ft."],
      ["Starting price", "₹83.98 lakhs (indicative; confirm current price)"],
      ["RERA", "PRM/KA/RERA/1265/347/PR/020226/008445 (verify current project details)"],
    ],
  },
];

function ProjectCard({ project, index }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        Sobha project {index + 1}
      </p>
      <h3 className="mt-1 text-xl font-bold text-gray-900">{project.name}</h3>
      <p className="mt-2 text-gray-700">{project.type}</p>
      <p className="mt-1 text-sm text-gray-600">
        <strong>Location:</strong> {project.location}
      </p>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
        {project.details.map(([label, value]) => (
          <div key={label} className="rounded-lg bg-gray-50 p-3">
            <dt className="text-sm font-semibold text-gray-800">{label}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function BangalorePage({ faqs = [] }) {
  return (
    <main className="w-full bg-white px-4 md:px-0">
      <PageHero title="Bangalore" />
      <div className="mx-auto max-w-5xl py-10">
        <h1 className="text-center text-2xl font-bold text-gray-800 md:text-3xl">
          Five Sobha Projects to Compare in Bangalore
        </h1>
        <p className="mt-6 leading-7 text-gray-800">
          Bangalore offers varied home choices, from high-rise apartments in established employment corridors to plotted communities outside the city centre. This guide brings together five Sobha developments using the project details supplied for this website. Compare location, housing type, scale, price and stated timelines against your own needs, and verify current information with official project documents before making a decision.
        </p>

        <nav className="mt-6 rounded-xl bg-gray-50 p-5" aria-label="Projects in this guide">
          <h2 className="text-lg font-semibold text-gray-900">Projects in this guide</h2>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {projects.map((project, index) => (
              <li key={project.name}>
                <a className="text-primary underline" href={`#project-${index + 1}`}>
                  {index + 1}. {project.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section className="mt-10 space-y-5" aria-labelledby="sobha-projects-heading">
          <h2 id="sobha-projects-heading" className="text-xl font-semibold text-gray-900 md:text-2xl">
            Sobha projects: locations and supplied details
          </h2>
          {projects.map((project, index) => (
            <div key={project.name} id={`project-${index + 1}`}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
          <p className="text-sm leading-6 text-gray-600">
            Project facts, prices, approvals, RERA identifiers and possession timelines above are reproduced from supplied information and may be incomplete or change. Verify identifiers and current status on the{" "}
            <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink>, and confirm prices, availability and commitments with the developer. The supplied Sobha One World information includes conflicting RERA-status details, so its registration number and status especially require direct verification.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-7 text-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
            How these five Sobha developments differ
          </h2>
          <p>
            The projects span different locations and property formats. Sobha One World is described as a large themed apartment development near Hoskote, while Sobha Neopolis is on Panathur Road near the Marathahalli-ORR corridor. Sobha Liora is listed in Immadihalli, Whitefield, and Sobha Victoria Park is off Hennur Road. Sobha Sacred Grove by the Lake is a plotted development in Chikkathirupathi, Malur. These locations serve different daily travel patterns, so compare actual routes to your workplace and regular destinations rather than choosing by project name alone.
          </p>
          <p>
            The apartment options also differ in scale and configuration. The supplied information lists 1 to 4 BHK at One World, 3 to 4 BHK at Liora, and 2 or 3 BHK at Victoria Park; Neopolis is described as having 1,875 apartments across 19 towers. Sacred Grove is not an apartment community: buyers should assess its plot dimensions, site infrastructure and permitted use. Confirm the latest inventory and approved plans before comparing individual homes or sites.
          </p>
          <p>
            Headline prices are not directly comparable unless their inclusions are clear. Request a current cost sheet and check whether it covers taxes, registration, parking, maintenance deposits and other charges. For apartments, review the approved layout, carpet and saleable area definitions, specifications and agreement terms. For a plot, verify its boundaries, title, access, infrastructure and development approvals.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-7 text-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
            A practical checklist before shortlisting
          </h2>
          <p>
            Use the following checks to turn a broad comparison into a project-specific review. Ask for documents that correspond to the exact tower, apartment or plot you are considering, not just general marketing material.
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li><strong>Confirm the identity and status:</strong> Match the project name, developer, location and RERA registration number against the Karnataka RERA portal. Check that the registration is active and applies to the phase or property being offered.</li>
            <li><strong>Verify the site and approvals:</strong> Review the sanctioned plan, land details, applicable BBMP or local authority approvals, and the project&apos;s registered disclosures.</li>
            <li><strong>Test the location for your routine:</strong> Visit the site, inspect the approach roads and check travel times to work, schools, healthcare and transit at the times you normally travel.</li>
            <li><strong>Get the full financial picture:</strong> Compare a dated written quotation, payment milestones, taxes, registration, maintenance charges, cancellation provisions and any other fees.</li>
            <li><strong>Read the contract and delivery terms:</strong> Check the agreement for sale, specifications, possession date, delay provisions and what is included in the handover.</li>
            <li><strong>For plotted developments:</strong> Confirm the exact plot number and dimensions, title, access, utilities, development status and what construction is permitted.</li>
          </ul>
          <p>
            Registration references and launch descriptions on this page come from supplied project information and are not a substitute for checking current official records. In particular, verify any project whose supplied status and registration details appear inconsistent before paying an amount or signing a document.
          </p>
        </section>

        <section
          className="mt-10 border-t border-gray-100 px-4 py-10"
          aria-labelledby="bangalore-faq-heading"
        >
          <h2
            id="bangalore-faq-heading"
            className="mb-3 text-center text-2xl font-semibold text-gray-900"
          >
            Frequently asked questions about Sobha projects in Bangalore
          </h2>
          <div className="mb-6 h-px w-full bg-gray-200" />
          <div className="space-y-6 text-gray-800">
            {faqs.map(([question, answer], index) => (
              <div key={question}>
                <h3 className="text-xl font-bold">
                  {index + 1}. {question}
                </h3>
                <p className="mt-2 leading-7">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl bg-gray-50 p-5 md:p-7">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
            Sobha Parqcity on Hennur Main Road
          </h2>
          <p className="mt-4 leading-7 text-gray-800">
            This website also covers Sobha Parqcity, a proposed township on Hennur Main Road in North Bangalore. Its supplied project information describes approximately 50 acres, 12 blocks, 24 wings, around 4,463 apartments, a floor structure of 3 basements + ground + 42 floors, 1 to 4 BHK configurations and a starting price of ₹1.1 crore. These details are preliminary and should be confirmed through current official disclosures.
          </p>
          <p className="mt-4 leading-7 text-gray-800">
            Explore the <IntLink href="/">Sobha Parqcity overview</IntLink>, review its <IntLink href="/location">location information</IntLink>, or contact us to request current project material.
          </p>
          <div className="mt-5">
            <DownloadActions />
          </div>
        </section>
      </div>
    </main>
  );
}

export default BangalorePage;
