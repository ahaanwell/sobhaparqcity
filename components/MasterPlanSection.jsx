/* eslint-disable react/no-unescaped-entities */
import { ExtLink, IntLink } from "./SeoLinks";

import MasterPlanClient from "./MasterPlanClient";

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        
<div className="space-y-6 text-gray-800 mb-6">
  <p>
    The <a href="https://www.sobhaparqcity.in/master-plan"><strong>Sobha Parq City Master Plan</strong></a> outlines the proposed development of a residential township spread across approximately <b>50 acres</b> on <b>Hennur Main Road, North Bangalore</b>. The project is planned to comprise <b>12 high-rise residential towers</b> and approximately <b>1,300 residential units</b>, with tower configurations ranging from <b>G+36 to G+42 floors</b>. The master plan is expected to present the overall arrangement of residential buildings and other planned components within the project site.
  </p>

  <p>
    For prospective homebuyers, the master plan offers a broader perspective of the township beyond individual apartment layouts. Once the official plan is available, buyers can review the positioning of residential towers, internal access routes, common areas and the distribution of planned facilities. The final approved master plan should be consulted to understand the actual site arrangement and proposed land use at Sobha Parq City.
  </p>
</div>

        <div className="max-w-2xl mx-auto">
          <div
          
            className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden"
          >
            <img
              src="./images/master-plan.webp"
              alt="Sobha Parq City master plan, Sarjapur Bangalore"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <MasterPlanClient/>
          </div>

          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>
        </div>
        
<div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Sobha Parq City Master Plan Layout</h3>

  <p>
    The proposed Sobha Parq City layout brings together multiple high-rise residential towers within a single township. With 12 towers planned across approximately 50 acres, the positioning of buildings and the arrangement of internal circulation routes will be important aspects of the overall site design.
  </p>

  <p>
    The official master plan should provide a clearer view of the relationship between residential blocks, entry and exit points, internal roads, pedestrian pathways and designated common areas. These details can help buyers understand how different sections of the township are connected and how residents may move around the development.
  </p>

  <h3 className="text-xl font-bold">Sobha Parq City Tower Planning</h3>

  <p>
    Sobha Parq City is proposed to feature 12 residential towers with configurations ranging from G+36 to G+42 floors. The master plan and accompanying tower layouts should help buyers identify the position of individual buildings and understand how the towers are arranged across the project site.
  </p>

  <p>
    When the official drawings become available, prospective purchasers should review tower locations, building orientation, access points and proximity to shared facilities. These details may help buyers compare available apartments and assess the location of a preferred unit within the overall development.
  </p>

  <h3 className="text-xl font-bold">Sobha Parq City Open Spaces and Common Areas</h3>

  <p>
    Open spaces and common areas are important elements to examine when evaluating a residential township. For Sobha Parq City, the final approved master plan will be needed to establish the allocation of land for landscaped areas, pedestrian movement, recreational facilities and other shared uses.
  </p>

  <p>
    Buyers should examine the actual distribution and dimensions of these spaces rather than assume that particular amenities or landscaping features are included. The developer's official master plan and approved project documents will provide a reliable basis for understanding the proposed common areas and their arrangement within the township.
  </p>

  <h3 className="text-xl font-bold">Sobha Parq City Master Plan Benefits for Homebuyers</h3>

  <p>
    Reviewing the Sobha Parq City master plan can help prospective buyers understand the overall development before choosing an apartment. While an individual floor plan focuses on the internal layout of a home, the master plan presents a wider view of the township and its proposed site organisation.
  </p>

  <p>The master plan can help buyers assess:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>The placement and arrangement of residential towers.</li>
    <li>The proposed entry, exit and internal circulation routes.</li>
    <li>The distribution of common areas and planned facilities.</li>
    <li>The relationship between residential buildings and shared spaces.</li>
    <li>The location of a preferred tower within the overall development.</li>
  </ul>

  <p>
    These details can support a more informed comparison of available apartments. Buyers should verify the relevant information using the latest official master plan, particularly while the project remains in the pre-launch stage.
  </p>

  <h3 className="text-xl font-bold">Sobha Parq City Master Plan Status</h3>

  <p>
    Sobha Parq City is currently described as a pre-launch residential development. A verified master plan has not been included in the project information provided, so specific details about the positioning of amenities, landscaped areas, internal roads and other site features remain subject to confirmation.
  </p>

  <p>
    Prospective buyers should request the latest master plan and check it against the applicable sanctioned plans and project approvals. Reviewing the official documentation can help them understand the proposed site arrangement and identify any differences between preliminary project information and the final approved development.
  </p>
</div>

      </div>
    </section>
  );
}