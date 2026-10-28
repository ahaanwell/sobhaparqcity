/* eslint-disable react/no-unescaped-entities */
import { ExtLink, IntLink } from "./SeoLinks";

import FloorPlanClient from "./FloorPlanClient";

const floorPlans = [
  {
    id: 1,
    label: "1 BHK Floor Plan",
    image: "./images/floorplans/1bhk.webp",
    alt: "Sobha Parqcity 1 BHK floor plan",
  },
  {
    id: 2,
    label: "2 BHK Floor Plan",
    image: "./images/floorplans/2bhk.webp",
    alt: "Sobha Parqcity 2 BHK floor plan",
  },
  {
    id: 3,
    label: "3 BHK Floor Plan",
    image: "./images/floorplans/3bhk.webp",
    alt: "Sobha Parqcity 3 BHK floor plan",
  },
  {
    id: 4,
    label: "4 BHK Floor Plan",
    image: "./images/floorplans/4bhk.webp",
    alt: "Sobha Parqcity 4 BHK floor plan",
  },
];

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        

<div className="space-y-6 text-gray-800 mb-6">
  <p>
    The <a href="https://www.sobhaparqcity.in/floor-plan"><strong>Sobha Parqcity floor plans</strong></a> are designed around different space requirements, with proposed options including <b>1, 2, 3 and 4 BHK apartments</b>. The stated apartment sizes range from <b>750 sq. ft. to 2,600 sq. ft.</b>, giving homebuyers a choice of configurations based on their household size and preferred living space.
  </p>

  <p>
    The 1 BHK option is listed at 750 sq. ft.; its approved floor-plan image has not been supplied. The 2 BHK and larger configurations may suit households requiring additional bedrooms or flexible space for work, study and other activities.
  </p>

  <p>
    As Sobha Parqcity is currently in the pre-launch stage, the information below is based on the supplied apartment configurations and sizes. Final room layouts, dimensions, area definitions and specifications should be verified against the official floor plans released by the developer.
  </p>
</div>


        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          aria-label="Sobha Parqcity floor plans"
        >
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <FloorPlanClient plan={plan} />
              </div>

              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>

        
<div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Sobha Parqcity 1 BHK Floor Plan</h3>

  <p>
    The proposed <strong>Sobha Parqcity 1 BHK apartment</strong> is listed at 750 sq. ft. An approved 1 BHK floor-plan drawing has not been supplied, so buyers should request the official plan to verify room dimensions, layout and the stated area measurement.
  </p>

  <h3 className="text-xl font-bold">Sobha Parqcity 2 BHK Floor Plan</h3>

  <p>
    The proposed <strong>Sobha Parqcity 2 BHK floor plan</strong> has a stated area of 1,400 sq. ft. This configuration may be suitable for couples, small families or buyers looking for a two-bedroom apartment. A typical 2 BHK home includes two bedrooms, a living and dining area, a kitchen and bathrooms. However, the exact room arrangement and number of bathrooms for this project have not yet been confirmed.
  </p>

  <p>
    When reviewing the 2 BHK floor plan, buyers should consider bedroom dimensions, living and dining space, kitchen placement, storage provisions and movement between rooms. These details can help determine whether the layout meets everyday household needs.
  </p>

  <h3 className="text-xl font-bold">Sobha Parqcity 3 BHK Floor Plan</h3>

  <p>
    The proposed <strong>Sobha Parqcity 3 BHK floor plan</strong> offers stated sizes ranging from 1,750 sq. ft. to 1,950 sq. ft. With three bedrooms, this configuration may suit families that need additional sleeping space, a guest room or a dedicated work-from-home area.
  </p>

  <p>
    The available size range gives buyers an opportunity to compare different 3 BHK options once the detailed drawings are released. Important considerations include bedroom dimensions, the arrangement of private and shared spaces, dining space, furniture placement and storage. The final plans will clarify how the available area is distributed across the apartment.
  </p>

  <h3 className="text-xl font-bold">Sobha Parqcity 4 BHK Floor Plan</h3>

  <p>
    The proposed <strong>Sobha Parqcity 4 BHK floor plan</strong> has a stated area of 2,600 sq. ft. This is the largest apartment configuration in the supplied size range and may suit larger households looking for four bedrooms and additional space for family activities.
  </p>

  <p>
    When assessing this configuration, buyers should review the dimensions and arrangement of all bedrooms, living and dining areas, kitchen space, bathrooms and any additional rooms or storage provisions shown in the official drawing. The final floor plan will help establish how the available area is organised and whether it suits the household's requirements.
  </p>

  <h2 className="text-2xl font-bold">Sobha Parqcity Floor Plan Size Comparison</h2>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left font-bold">Apartment Type</th>
          <th className="border border-gray-300 p-3 text-left font-bold">Stated Size</th>
          <th className="border border-gray-300 p-3 text-left font-bold">Key Consideration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">1 BHK</td>
          <td className="border border-gray-300 p-3">750 sq. ft.</td>
          <td className="border border-gray-300 p-3">Confirm official floor plan and area measurement</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">2 BHK</td>
          <td className="border border-gray-300 p-3">1,400 sq. ft.</td>
          <td className="border border-gray-300 p-3">Two-bedroom living requirements</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">3 BHK</td>
          <td className="border border-gray-300 p-3">1,750–1,950 sq. ft.</td>
          <td className="border border-gray-300 p-3">Additional bedroom and flexible household use</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">4 BHK</td>
          <td className="border border-gray-300 p-3">2,600 sq. ft.</td>
          <td className="border border-gray-300 p-3">Four-bedroom requirements and additional living space</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-xl font-bold">How to Choose a Sobha Parqcity Floor Plan</h3>

  <p>
    Choosing the right floor plan involves more than comparing the total square footage. Buyers should consider household size, privacy requirements, bedroom dimensions, furniture placement, storage needs and the practical arrangement of shared spaces. Natural light, ventilation and the position of windows and balconies are also worth reviewing in the official drawings.
  </p>

  <p>
    Before selecting an apartment, request the latest floor plan and verify the applicable area measurements, layout specifications and included features. As the project is in the pre-launch stage, buyers should check the final configurations against the developer's official documentation before making a booking decision.
  </p>
</div>

      </div>
    </section>
  );
}