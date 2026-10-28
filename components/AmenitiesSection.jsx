/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";

export const amenitiesData = [
  { id: 1,  name: "Gymnasium",           image: "/images/amenities/gym.svg" },
  { id: 2,  name: "Swimming Pool",       image: "/images/amenities/swm.svg" },
  { id: 3,  name: "Yoga Pavilion",       image: "/images/amenities/yoga.svg" },
  { id: 4,  name: "Video Door Phone",    image: "/images/amenities/videos.svg" },
  { id: 5,  name: "Kids Activity Zone",  image: "/images/amenities/kids.svg" },
  { id: 6,  name: "Mini Theater",        image: "/images/amenities/mine.svg" },
  { id: 7,  name: "Aerobics Room",       image: "/images/amenities/tennis.svg" },
  { id: 8,  name: "Indoor Games Room",   image: "/images/amenities/chess.svg" },
  { id: 9,  name: "Club House",          image: "/images/amenities/disco-ball.svg" },
  { id: 10, name: "Dance/Music",         image: "/images/amenities/dance.svg" },
  { id: 11, name: "24/7 CCTV Monitoring",image: "/images/amenities/cctv.svg" },
  { id: 12, name: "Jogging Track",       image: "/images/amenities/jog.svg" },
  { id: 13, name: "Tennis Court",        image: "/images/amenities/tennis-court.svg" },
  { id: 14, name: "Amphitheatre",        image: "/images/amenities/amphitheatre.svg" },
  { id: 15, name: "EV Charging Points",  image: "/images/amenities/ev-charging.svg" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        
<div className="space-y-6 text-gray-800 mb-6">
  <p>
    The <a href="https://www.sobhaparqcity.in/amenities"><strong>Sobha Parqcity amenities</strong></a> section provides an overview of the lifestyle facilities prospective homebuyers should review for this proposed residential township by <b>Sobha Group</b>. Located on <b>Hennur Main Road, North Bangalore</b>, the development is planned across approximately 50 acres, with 12 blocks, 24 wings and a range of apartment configurations. The final selection of amenities will help define the recreational, social and everyday living experience within the township.
  </p>

  <p>
    For homebuyers evaluating Sobha Parqcity, amenities are an important consideration alongside apartment layouts, project specifications and the overall master plan. Facilities designed for recreation, fitness, relaxation and community interaction can contribute to a convenient residential environment. However, the specific amenities proposed for Sobha Parqcity should be confirmed through the developer's official brochure and approved project documents before individual facilities are described as included.
  </p>
</div>

        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Sobha Parqcity amenities"
        >
          {amenitiesData.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[90%] object-contain"
                  loading="lazy"
                 
                />
              </div>

              <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
        
<div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Sobha Parqcity Lifestyle Amenities</h3>

  <p>
    Lifestyle amenities can provide residents with shared spaces to relax, spend time with family and interact with neighbours. At Sobha Parqcity, the overall scale of the proposed township makes the planning of common areas and lifestyle facilities an important aspect for prospective homebuyers to examine.
  </p>

  <p>
    The official amenities list should clarify which facilities are included, where they are located within the township and whether any are planned for specific development phases. Buyers should also review the applicable usage arrangements and maintenance provisions to understand how shared facilities will be managed after handover.
  </p>

  <h3 className="text-xl font-bold">Sobha Parqcity Sports and Fitness Amenities</h3>

  <p>
    Sports and fitness facilities are important considerations for buyers who prefer opportunities for physical activity close to home. Once the official amenities plan for Sobha Parqcity is available, prospective residents can review the confirmed fitness spaces, sports facilities and designated areas for indoor or outdoor activities.
  </p>

  <p>
    The types, number and specifications of these facilities have not been confirmed in the supplied project information. Buyers should consult the developer's official documentation for the final list rather than assume that a gym, swimming pool, sports court or particular fitness facility is included.
  </p>

  <h3 className="text-xl font-bold">Sobha Parqcity Family and Recreation Amenities</h3>

  <p>
    Recreational spaces can support family activities and offer residents opportunities to spend time outside their individual apartments. The final amenities plan for Sobha Parqcity will help establish whether dedicated children's areas, indoor recreation spaces, gathering areas or other leisure facilities form part of the proposed development.
  </p>

  <p>
    Families considering the project should examine the location, design and intended use of any confirmed recreational facilities. Details such as accessibility, age suitability and operating arrangements can help buyers determine whether the planned amenities meet their household's requirements.
  </p>

  <h3 className="text-xl font-bold">Sobha Parqcity Community Facilities</h3>

  <p>
    Community facilities can provide shared spaces for social interaction, meetings and resident activities. In a large residential township such as Sobha Parqcity, the placement and management of these areas may influence how residents use common spaces and participate in community life.
  </p>

  <p>
    The final project documents should be reviewed for details about any proposed multipurpose spaces, gathering areas or other shared facilities. Their availability, size and specifications should be confirmed before they are included in a definitive amenities list.
  </p>

  <h3 className="text-xl font-bold">Sobha Parqcity Amenities Plan and Facilities</h3>

  <p>
    The amenities plan is an important reference for understanding the proposed location of facilities and their relationship to the residential towers and common areas. Depending on the information provided in the official drawings, it may also clarify access routes, designated activity zones and the arrangement of shared spaces.
  </p>

  <p>
    As Sobha Parqcity is currently at the pre-launch stage, the confirmed amenities list and detailed specifications should be obtained from the developer. Buyers should verify which facilities form part of the approved development, whether they are planned for a particular phase and what conditions apply to their use.
  </p>

  <h3 className="text-xl font-bold">Why Review Sobha Parqcity Amenities Before Buying?</h3>

  <p>
    Reviewing the amenities can help buyers compare Sobha Parqcity with other residential developments according to their practical lifestyle requirements. The usefulness of a facility depends not only on its type but also on its design, accessibility, maintenance arrangements and suitability for its intended users.
  </p>

  <p>Before making a purchase decision, prospective buyers should:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Request the latest official amenities list and layout.</li>
    <li>Confirm which facilities are included in the approved project.</li>
    <li>Check the proposed locations and specifications of shared facilities.</li>
    <li>Review maintenance charges and applicable usage conditions.</li>
    <li>Verify whether facilities will be delivered with the relevant development phase.</li>
  </ul>

  <p>
    These checks can provide a clearer understanding of the proposed residential environment while helping buyers distinguish confirmed project details from unverified promotional information.
  </p>
</div>

      </div>
    </section>
  );
}