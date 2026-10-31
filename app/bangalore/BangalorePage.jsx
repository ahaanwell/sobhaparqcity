import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const projects = [
  {
    name: "SOBHA OneWorld",
    location: "Greater Whitefield, along Old Madras Road, Bengaluru",
    type: "Integrated residential, retail, commercial and cultural community",
    sourceUrl: "https://sobhaoneworlds.in",
    details: [
      ["Location", "Greater Whitefield, Old Madras Road"],
      ["Home types", "1-bed residences and 2, 3 and 4-bed luxury residences"],
      ["Listed area range", "1,063–2,415 sq. ft."],
      ["Project scale", "48 acres and 15.32 guntas; 3,484 residences"],
      ["Completion", "Phase-wise dates from July 2032 to September 2033, as published by SOBHA"],
    ],
  },
  {
    name: "SOBHA Altair",
    location: "Hadosiddapura, off Sarjapur Main Road, Bengaluru",
    type: "Luxury 3 and 4-bedroom residences",
    sourceUrl: "#",
    details: [
      ["Location", "Hadosiddapura, off Sarjapur Main Road"],
      ["Home types", "3 and 4-bedroom residences"],
      ["Listed area range", "1,894–2,570 sq. ft."],
      ["Project scale", "3.308 acres; 207 residences"],
      ["Completion", "May 2031, as published by SOBHA"],
    ],
  },
  {
    name: "SOBHA Townpark",
    location: "Near Electronic City, Hosur Road, Bengaluru",
    type: "New York-themed residential community",
    sourceUrl: "#",
    details: [
      ["Location", "Near Electronic City, on Hosur Road"],
      ["Home types", "2, 3 and 4-bedroom residences"],
      ["Listed area range", "1,240–2,846 sq. ft."],
      ["Community", "SOBHA Madison Heights and SOBHA Hamptons"],
      ["Completion", "Phase and wing dates published from December 2030 to June 2033"],
    ],
  },
  {
    name: "SOBHA Neopolis",
    location: "Panathur, off Marathahalli–ORR, Bengaluru",
    type: "Greek-themed residential township",
    sourceUrl: "#",
    details: [
      ["Location", "Panathur, off Marathahalli–ORR"],
      ["Home types", "3 and 4-bedroom residences"],
      ["Listed area range", "1,611–2,481 sq. ft."],
      ["Project scale", "25 acres and 35.9 guntas; 1,875 residences across 19 towers"],
      ["Completion", "Phase-wise dates published from December 2028 to December 2031"],
    ],
  },
  {
    name: "SOBHA Ayana",
    location: "Panathur Main Road, Balagere, East Bengaluru",
    type: "Modern tropical 3-bedroom residences",
    sourceUrl: "#",
    details: [
      ["Location", "Panathur Main Road, Balagere, East Bengaluru"],
      ["Home types", "3-bedroom residences"],
      ["Listed area range", "1,553–1,789 sq. ft."],
      ["Project scale", "6.28 acres; 683 apartments"],
      ["Completion", "December 2031, as published by SOBHA"],
    ],
  },
];

function ProjectCard({ project, index }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        Featured project {index + 1}
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
      <p className="mt-4 text-sm">
        <ExtLink href={project.sourceUrl}>View project details on the SOBHA website</ExtLink>
      </p>
    </article>
  );
}

function BangalorePage({ faqs = [] }) {
  return (
    <main className="w-full bg-white px-4 md:px-0">
      <PageHero title="Bangalore" />
      <div className="mx-auto max-w-5xl py-10">
        <h1 className="text-center text-2xl font-bold text-gray-800 md:text-3xl">
          Bengaluru City Guide and 5 SOBHA Projects to Compare
        </h1>
        <p className="mt-6 leading-7 text-gray-800">
          Bengaluru (also widely called Bangalore) is Karnataka’s capital and a major centre for technology, business, education and research. This guide starts with the city’s neighbourhoods, employment corridors, transport and day-to-day considerations, then compares five SOBHA residential projects currently featured for Bengaluru. The projects are a shortlist for research, not a ranking or investment recommendation.
        </p>

        <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mt-6"
              src="/images/bangalore.webp"
              alt="Bengaluru city landmark and gardens"
              loading="lazy"
            />

        <section className="mt-10 space-y-5 leading-7 text-gray-800" aria-labelledby="about-bengaluru-heading">
          <h2 id="about-bengaluru-heading" className="text-xl font-semibold text-gray-900 md:text-2xl">
            About Bengaluru: city, economy and everyday life
          </h2>
          <p>
            Bengaluru is the capital of Karnataka, located on the state’s southeastern plateau. The city is internationally associated with India’s information-technology sector, but its economy also includes start-ups, aerospace, biotechnology, manufacturing, research, professional services and higher education. These varied employment bases draw students and working professionals from across India and support demand for homes in different parts of the metropolitan area.
          </p>
          <p>
            The city is a collection of distinct neighbourhoods rather than one compact business district. Central Bengaluru combines established commercial areas, civic institutions and historic destinations. The east has major technology and residential clusters around Whitefield, Marathahalli, Panathur and Sarjapur Road; the north includes Hebbal, Yelahanka and airport-side growth areas; the south includes Jayanagar, JP Nagar, Bannerghatta Road and Electronic City. These are broad geographic descriptions: actual commute times depend on the precise address, route and traffic.
          </p>
          <p>
            Bengaluru’s climate is shaped by its elevation on the Deccan Plateau, with a monsoon cycle and seasonal changes in rainfall. Parks, lakes and tree-lined areas contribute to the city’s urban character, while rapid growth also makes water availability, drainage, heat, construction and traffic important local planning considerations. Conditions vary between neighbourhoods, so a city-wide description should not replace a site visit.
          </p>
          <h3 className="text-lg font-semibold text-gray-900">Transport and connectivity</h3>
          <p>
            <ExtLink href="https://english.bmrc.co.in/">Namma Metro</ExtLink>, BMTC buses, suburban and intercity rail services, and the road network together serve different travel needs. Major routes include Outer Ring Road, Old Madras Road, Hosur Road, Sarjapur Road and the city’s radial roads. <ExtLink href="https://www.bengaluruairport.com/">Kempegowda International Airport</ExtLink> is north of the urban core and is reached by road; journey time changes with traffic and the starting point. Metro extensions and other infrastructure projects may improve future connections, but planned routes or stations should not be treated as operational until confirmed by the relevant authority.
          </p>
          <h3 className="text-lg font-semibold text-gray-900">Education, healthcare and recreation</h3>
          <p>
            The metropolitan area has universities, schools, hospitals, clinics, shopping districts, cultural venues, sports facilities and public parks. Access is highly neighbourhood-specific: a school or hospital described as “near Bengaluru” may still require a substantial drive from a particular home. Families should map their regular destinations and check the route at the times they expect to travel.
          </p>
          <h3 className="text-lg font-semibold text-gray-900">Choosing where to live in Bengaluru</h3>
          <p>
            Start with the daily commute, not a city-wide label such as “North” or “East Bengaluru.” Compare the exact project entrance with work, school, healthcare and transit; visit at peak and off-peak times; and ask about water sources, power backup, maintenance costs, construction status and access roads. For a home purchase, independently verify the project’s Karnataka RERA registration, sanctioned plans, title and written sale terms. The <ExtLink href="https://bengaluruurban.nic.in/en/">Bengaluru Urban District website</ExtLink>, <ExtLink href="https://www.sobha.com/city/bengaluru/">SOBHA’s Bengaluru project directory</ExtLink> and <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink> are useful starting points for official information.
          </p>
        </section>

        <nav className="mt-6 rounded-xl bg-gray-50 p-5" aria-label="Projects in this guide">
          <h2 className="text-lg font-semibold text-gray-900">5 SOBHA projects in Bengaluru</h2>
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
            Five SOBHA projects in Bangalore to compare
          </h2>
          <p className="leading-7 text-gray-700">
            The selection below reflects a mix of locations, home sizes and residential formats shown in SOBHA’s Bengaluru project directory. It is not a quality ranking. Areas, unit counts and completion dates are reproduced from the developer’s project pages and can change; consult the linked project page and official records for the latest details.
          </p>
          {projects.map((project, index) => (
            <div key={project.name} id={`project-${index + 1}`}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
          <p className="text-sm leading-6 text-gray-600">
            Project descriptions and figures were checked against the developer’s public pages during preparation. Availability, prices, regulatory status and completion commitments can change. Confirm the exact phase and registration details on the{" "}
            <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink> before making a decision.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-7 text-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
            How these Bengaluru projects differ
          </h2>
          <p>
            The five projects represent different parts of the city. OneWorld is in Greater Whitefield on Old Madras Road; Townpark is near Electronic City on Hosur Road; Altair is off Sarjapur Main Road; and Neopolis and Ayana are both in the Panathur–Balagere area near the Marathahalli–Outer Ring Road corridor. Compare the exact site entrances and your regular routes rather than assuming projects in the same broad zone have identical connectivity.
          </p>
          <p>
            Home sizes and configurations differ: the official project listings show 1–4-bed options at OneWorld, 3- and 4-bedroom residences at Altair and Neopolis, 2–4-bedroom residences at Townpark, and 3-bedroom homes at Ayana. These summaries help narrow a search, but they do not replace the current unit schedule, approved drawings or a project-specific cost sheet.
          </p>
          <p>
            Compare total ownership cost rather than just a headline price. Request a dated quotation and check taxes, registration, parking, maintenance deposits, payment milestones and other charges. Confirm whether each quoted area is carpet, built-up or saleable area, and review the approved layout, specifications and agreement terms before booking.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-7 text-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
            A practical checklist before shortlisting
          </h2>
          <p>
            Use the following checks to turn a broad comparison into a project-specific review. Ask for documents that correspond to the exact phase, tower and apartment you are considering, not just general marketing material.
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li><strong>Confirm the identity and status:</strong> Match the project name, developer, location and RERA registration number against the Karnataka RERA portal. Check that the registration is active and applies to the phase or property being offered.</li>
            <li><strong>Verify the site and approvals:</strong> Review the sanctioned plan, land details, applicable BBMP or local authority approvals, and the project&apos;s registered disclosures.</li>
            <li><strong>Test the location for your routine:</strong> Visit the site, inspect the approach roads and check travel times to work, schools, healthcare and transit at the times you normally travel.</li>
            <li><strong>Get the full financial picture:</strong> Compare a dated written quotation, payment milestones, taxes, registration, maintenance charges, cancellation provisions and any other fees.</li>
            <li><strong>Read the contract and delivery terms:</strong> Check the agreement for sale, specifications, possession date, delay provisions and what is included in the handover.</li>
          </ul>
          <p>
            Project descriptions are useful for shortlisting, but do not establish legal status or guarantee future infrastructure, appreciation, rental income or delivery. Check current official records and written contract terms before paying or signing.
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
            Frequently asked questions about Bengaluru and SOBHA projects
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
            This website also publishes information about Sobha Parqcity, described here as a proposed residential development on Hennur Main Road in North Bengaluru. Check the latest project disclosures and applicable approvals independently, as project details, availability and pricing may change.
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
