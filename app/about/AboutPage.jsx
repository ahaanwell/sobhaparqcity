/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const keyNumbers = [
  { value: "50 Acres*", label: "Proposed site area", href: "/master-plan" },
  { value: "1,300*", label: "Apartments proposed" },
  { value: "12*", label: "Planned towers" },
  { value: "2, 3, 3.5 & 4 BHK", label: "Proposed home types", href: "/floor-plan" },
  { value: "₹2.38 Cr*", label: "Supplied starting price", href: "/price" },
  { value: "2032*", label: "Proposed possession year" },
];

function AboutPage() {
  return (
    <main className="w-full bg-white px-4 md:px-0">
      <PageHero title="About" />
      <div className="max-w-5xl mx-auto py-10">
        <section aria-labelledby="about-heading">
          <h1 id="about-heading" className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            About Sobha Parq City
          </h1>
          <p className="mt-6 text-gray-800 leading-7">
            Sobha Parq City is a proposed residential township on Hennur Main Road in North Bangalore. Project information currently describes a large-scale development with multiple apartment options, planned for people comparing homes in this part of Bengaluru. The plans, specifications and commercial details are subject to official approvals and may change, so prospective buyers should confirm each detail using the latest developer documents.
          </p>
        </section>

        <section className="mt-8" aria-label="Proposed Sobha Parq City project details">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
            Sobha Parq City at a Glance
          </h2>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
            {keyNumbers.map(({ value, label, href }) => {
              const content = (
                <>
                  <p className="text-xl font-bold text-primary">{value}</p>
                  <p className="mt-1 text-sm text-gray-700">{label}</p>
                </>
              );

              return href ? (
                <IntLink
                  key={label}
                  href={href}
                  className="rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition-shadow"
                >
                  {content}
                </IntLink>
              ) : (
                <div key={label} className="rounded-xl border border-gray-200 p-4 text-center">
                  {content}
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-sm text-gray-600">
            *Proposed or currently supplied project information; confirm figures, pricing and timelines in current official documents.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-gray-800 leading-7">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            A Proposed Township on Hennur Main Road
          </h2>
          <p>
            The project is described as covering approximately 50 acres, with 12 residential towers and about 1,300 apartments. The proposed tower heights range from G+36 to G+42 floors. These figures provide an early overview of the intended scale; the sanctioned master plan and statutory disclosures should be treated as the authoritative source as they become available.
          </p>
          <p>
            Hennur Main Road places the proposed development in North Bangalore. The surrounding area and its road connections may be relevant to residents travelling to workplaces, schools, healthcare and other parts of the city. Since the precise project entrance and address should be confirmed, check the latest project location details before arranging a visit. See the <IntLink href="/location">Sobha Parq City location guide</IntLink> for more context.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-gray-800 leading-7">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Apartment Options and Price Information
          </h2>
          <p>
            The proposed home types are 2, 3, 3.5 and 4 BHK apartments, with supplied size information ranging from 1,400 to 2,600 square feet. The currently supplied starting price is ₹2.38 crore. Pricing, unit sizes and availability can differ by apartment and may be revised; use the latest cost sheet and approved floor plans when comparing options.
          </p>
          <p>
            You can explore the current <IntLink href="/floor-plan">floor plan information</IntLink> and <IntLink href="/price">price details</IntLink> on this website. Those pages are informational and do not replace a written quotation or project documents issued by the developer.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-gray-800 leading-7">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Developer and Project Status
          </h2>
          <p>
            Sobha Group is identified in the project information as the developer. For company background, refer to the <ExtLink href="https://www.sobha.com/">developer's official website</ExtLink>. A developer's wider portfolio should be considered separately from the approvals, specifications and delivery commitments for this particular project.
          </p>
          <p>
            Sobha Parq City is described as pre-launch, with its RERA status listed as applied and possession planned for 2032. An application is not the same as granted registration. Check the current registration, approvals and documented possession date with the relevant authorities and in the agreement before making a booking decision.
          </p>
        </section>

        <section className="mt-10 rounded-xl bg-gray-50 p-5 md:p-7">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            About This Sobha Parq City Information Site
          </h2>
          <p className="mt-4 text-gray-800 leading-7">
            This website brings together project information to help visitors explore the proposed homes, location, pricing, plans and facilities. It is an independent information and enquiry site, not Sobha Limited's official website. Details can change, so verify project claims directly through official disclosures and written documents before relying on them.
          </p>
          <p className="mt-4 text-gray-800 leading-7">
            If you would like to request available project material or ask a question, use the <IntLink href="/contact">contact page</IntLink>. You can also review the <IntLink href="/amenities">planned amenities</IntLink> and <IntLink href="/master-plan">master plan information</IntLink>.
          </p>
        </section>

        <div className="mt-8">
          <DownloadActions />
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
