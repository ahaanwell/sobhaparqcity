/* eslint-disable react/no-unescaped-entities */

import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { ExtLink, IntLink } from "./SeoLinks";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Residential Township",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹ 1.1 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "1, 2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "750 to 2,600 sq.ft",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "50 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "4,463 Units",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Floor Structure",
    value: "3B + G + 42 Floors",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Total Wings",
    value: "24 Wings",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Total Blocks",
    value: "12 Blocks",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "Sobha Limited",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "Dec 2031",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
          <h2
          id="highlights-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Sobha Parqcity Overview
        </h2>
        <div className="w-full h-px bg-gray-200 mb-6" />
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Sobha Parqcity project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        

<div className="space-y-6 text-gray-800 mt-6">
  
<div className="space-y-6 text-gray-800">
  <p><a href="https://www.sobhaparqcity.in/" ><strong>Sobha Parqcity</strong></a> is a proposed residential township by <strong>Sobha Group</strong>, planned on <strong>Hennur Main Road in North Bangalore, Karnataka</strong>. The large-scale development is designed to bring together multiple apartment configurations within a planned residential community, offering homebuyers a choice of living spaces to suit different household needs. Covering approximately <strong>50 acres</strong>, the proposed township is expected to feature <strong>12 blocks, 24 wings and around 4,463 apartments</strong>.</p>

  <p>The development is planned with a floor structure of <strong>3 basements + ground + 42 floors</strong>. Its location on <b>Hennur Main Road</b> places the proposed project in North Bangalore, an area homebuyers can evaluate based on their commuting needs, access to everyday services and preferred residential surroundings. The proposed apartment options provide choices for buyers exploring a new home in this part of Bengaluru.</p>

  <p><strong>Sobha Parqcity</strong> is currently described as being in the pre-launch stage, with possession planned for <b>2031</b>. Prospective homebuyers should evaluate the project based on its proposed development scale, location, residential planning, final specifications and construction progress. As the project is at an early stage, buyers should verify the exact project address, officially released documents, applicable approvals and current RERA registration status before making a booking decision.</p>
</div>


  <h3 className="text-xl font-bold">Sobha Parqcity Highlights</h3>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Project Name:</strong> Sobha Parqcity</li>
    <li><strong>Developer:</strong> Sobha Group</li>
    <li><strong>Project Type:</strong> Residential Township</li>
    <li><strong>Project Status:</strong> Pre-Launch</li>
    <li><strong>Total Land Area:</strong> 50 Acres</li>
    <li><strong>Total Wings:</strong> 24</li>
    <li><strong>Total Blocks:</strong> 12</li>
    <li><strong>Total Residential Units:</strong> Approximately 4,463</li>
    <li><strong>Floor Structure:</strong> 3 Basements + Ground + 42 Floors</li>
    <li><strong>Residential Options:</strong> Apartments</li>
    <li><strong>Apartment Configurations:</strong> 1, 2, 3 and 4 BHK</li>
    <li><strong>Apartment Size Range:</strong> 750–2,600 sq. ft.</li>
    <li><strong>Starting Price:</strong> ₹1.1 Crore Onwards</li>
    <li><strong>RERA Status:</strong> Applied</li>
    <li><strong>Planned Possession:</strong> 2031</li>
  </ul>

  <h3 className="text-xl font-bold">Sobha Parq City Township Development</h3>

  <p>
    The proposed development of <b>Sobha Parq City</b> brings together 24 residential wings within a single township spread across approximately <b>50 acres</b>. The overall planning and arrangement of the buildings will play an important role in shaping the use of internal spaces and shared infrastructure.
  </p>

  <p>
    The final master plan will provide a clearer understanding of tower placement, internal circulation, open spaces and the distribution of common facilities. Buyers should refer to the officially released plans to understand how the proposed development is organised across the site.
  </p>

  <h3 className="text-xl font-bold">Sobha Parqcity Community Living</h3>

  <p>
    <b>Sobha Parqcity</b> is proposed as a residential community centred on apartment living, with multiple configurations planned to accommodate different household requirements. This range gives prospective residents the opportunity to compare apartment options according to their space needs, budget and long-term residential plans.
  </p>

  <p>
    The overall living experience will depend on the final design, shared facilities, internal infrastructure and community spaces included in the approved plan. Details about amenities and recreational provisions should be assessed separately once the developer publishes the confirmed specifications.
  </p>

  <h3 className="text-xl font-bold">Sobha Parqcity Project Status and Development Timeline</h3>

  <p>
    Sobha Parqcity is currently described as a pre-launch development, with possession planned for 2031. As the project progresses, official updates will be important for understanding its approval status, construction schedule and development milestones.
  </p>

  <p>
    The RERA registration status is currently listed as applied. Prospective buyers should verify the registration through the relevant official authority and review the sanctioned plans, contractual commitments and declared completion timeline before entering into a purchase agreement. The final project details should be confirmed through the developer's official documentation.
  </p>
</div>


      </div>
    </section>
  );
}
