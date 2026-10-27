/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";

const WIKI = "https://en.wikipedia.org/wiki/";

export default function BangaloreSection() {
  return (
    <section
      id="BangaloreSection"
      aria-labelledby="BangaloreSection-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="BangaloreSection-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Bangalore
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/bangalore.webp"
              alt="Bangalore city, home of Sobha Parq City Sarjapur"
              loading="lazy"
            />
        <div className="space-y-6 text-gray-800">
  <p><ExtLink href={`${WIKI}Bangalore`}><strong>Bangalore</strong></ExtLink>, the capital of <ExtLink href={`${WIKI}Karnataka`}>Karnataka</ExtLink>, is one of India's major technology and employment centres and has developed into a large metropolitan residential market. Housing options across the city include apartments, villas, plotted developments, and independent homes, with different corridors serving different buyer requirements.</p>

  <p><IntLink href="/"><strong>Sobha Parq City</strong></IntLink> is proposed in the <strong>Southeast Bangalore</strong> corridor of <ExtLink href={`${WIKI}Sarjapur`}><strong>Sarjapur</strong></ExtLink>, an area that combines residential communities with access to several technology and employment zones.</p>

  <h3 className="text-xl font-bold">Bangalore as a Residential Market</h3>

  <p>The city's residential demand is supported by its technology sector, business services, educational institutions, and employment opportunities. Different parts of Bangalore offer different advantages depending on a buyer's workplace, lifestyle requirements, preferred connectivity, and budget.</p>

  <p><strong>North Bangalore</strong> has strong airport and industrial connectivity, <strong>East Bangalore</strong> is closely associated with <ExtLink href={`${WIKI}Whitefield,_Bangalore`}>Whitefield</ExtLink> and surrounding employment districts, while <strong>Southeast Bangalore</strong> includes Sarjapur, <ExtLink href={`${WIKI}Bellandur`}>Bellandur</ExtLink>, and <ExtLink href={`${WIKI}Electronic_City`}>Electronic City</ExtLink>.</p>

  <p>Sobha Parq City is positioned within this Southeast Bangalore residential belt. Compare it with other developments in our guide to <IntLink href="/bangalore"><strong>top Sobha projects in Bangalore</strong></IntLink>.</p>

  <h3 className="text-xl font-bold">East and Southeast Bangalore Connectivity</h3>

  <p>Sarjapur has road connections to several established parts of Bangalore. <strong>Whitefield</strong> is an important technology and residential centre to the east, while <strong>Bellandur</strong> and <ExtLink href={`${WIKI}Marathahalli`}><strong>Marathahalli</strong></ExtLink> provide access to the <ExtLink href={`${WIKI}Outer_Ring_Road,_Bangalore`}>Outer Ring Road</ExtLink> employment corridor.</p>

  <p><strong>Electronic City</strong> forms another major employment centre toward the south. This network is particularly relevant for households where family members may work in different technology corridors. See the <IntLink href="/location">Sobha Parq City location page</IntLink> for approximate distances.</p>

  <h3 className="text-xl font-bold">Public Transportation</h3>

  <p>Bangalore's public transport network includes buses, metro services, rail connectivity, and other city transportation options. <ExtLink href={`${WIKI}Namma_Metro`}>Namma Metro</ExtLink>, operated by the <ExtLink href="https://english.bmrc.co.in/">Bangalore Metro Rail Corporation</ExtLink>, has expanded into several parts of the city, while additional corridors are proposed or under development.</p>

  <p>For Sobha Parq City, buyers should verify the nearest operational metro station, available public transport routes, and the status of proposed infrastructure based on the final project location and the date of purchase.</p>

  <h3 className="text-xl font-bold">Airport Connectivity</h3>

  <p><ExtLink href="https://www.bengaluruairport.com/"><strong>Kempegowda International Airport</strong></ExtLink> is located in North Bangalore. Travelling from Sarjapur to the airport involves crossing a significant part of the city, and actual journey times can vary substantially with traffic conditions.</p>

  <p>For frequent airport users, it is useful to consider both the available road route and expected peak-hour travel time rather than relying solely on the approximate distance.</p>

  <h3 className="text-xl font-bold">Business and IT Hubs</h3>

  <p>Bangalore's technology sector is spread across several major employment corridors, including <strong>Whitefield</strong>, the <strong>Outer Ring Road</strong>, <strong>Electronic City</strong>, and the wider <strong>Sarjapur technology belt</strong>.</p>

  <p>Sarjapur's road connections provide access to several of these employment areas. This employment connectivity is one of the factors supporting continued residential development across the wider Sarjapur Road corridor.</p>

  <h3 className="text-xl font-bold">Social Infrastructure and Lifestyle</h3>

  <p>Bangalore offers a broad range of lifestyle and social infrastructure, including schools, hospitals, shopping centres, restaurants, entertainment venues, and recreational facilities.</p>

  <p>Sarjapur has developed its own network of everyday services, while larger retail and entertainment destinations are available across Southeast and East Bangalore. For residents of a large proposed community such as Sobha Parq City, planned on <IntLink href="/master-plan"><strong>about 25 acres</strong></IntLink> with <strong>around 1,400 homes</strong>, this combination of nearby and city-wide infrastructure can provide access to a broad range of daily and lifestyle requirements.</p>
</div>
      </div>
    </section>
  );
}
