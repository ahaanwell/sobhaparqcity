/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import FloorPlanClient from "@/components/FloorPlanClient";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "./images/2bhk-floorplan.webp",
    alt: "Sobha Parqcity 2 BHK floor plan, Sarjapur Bangalore",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/3bhk-floorplan.webp",
    alt: "Sobha Parqcity 3 BHK floor plan, Sarjapur Bangalore",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/4bhk-floorplan.webp",
    alt: "Sobha Parqcity 4 BHK floor plan, Sarjapur Bangalore",
  },
];

function FloorPlanPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Floor Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Parqcity Floor Plans
          </h1>
          <DownloadActions/>
          
<div className="space-y-6 text-gray-800 mt-6">
  <p>The <strong>Sobha Parqcity Floor Plans</strong> provide an overview of the residential configurations, apartment sizes, and space planning proposed for this development on <a href="https://www.sobhaparqcity.in/location"><b>Hennur Main Road, North Bangalore</b></a>. Developed by <b>Sobha Group</b>, the project is planned across approximately <b>50 acres</b>, with <b>12 residential towers</b> accommodating more than <b>4,463 apartments</b>.</p>

  <p>The proposed apartment options include <b>1, 2, 3, and 4 BHK configurations</b>, according to the available apartment pricing information. These configurations are intended to address different household requirements, from compact residential layouts to larger family homes. Understanding the apartment sizes, room arrangements, and tower distribution can help buyers compare the available options before selecting a unit.</p>

  <h2 className="text-2xl font-bold">Sobha Parqcity Floor Plan Configurations and Sizes</h2>

  <p>The project offers different apartment configurations with varying super built-up areas. Each configuration provides a different amount of residential space, allowing buyers to assess their requirements based on household size and budget.</p>

  <p>The available apartment details are as follows:</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left font-bold">Apartment Type</th>
          <th className="border border-gray-300 p-3 text-left font-bold">Super Built-up Area</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">1 BHK</td>
          <td className="border border-gray-300 p-3">750 Sq. Ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">2 BHK</td>
          <td className="border border-gray-300 p-3">1,400 Sq. Ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">3 BHK</td>
          <td className="border border-gray-300 p-3">1,750–1,950 Sq. Ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">4 BHK</td>
          <td className="border border-gray-300 p-3">2,600 Sq. Ft.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>These measurements are based on the supplied project information. Detailed room dimensions, carpet areas, balcony measurements, and final floor plan drawings should be obtained from the developer's official documents.</p>

  <h2 className="text-2xl font-bold">Sobha Parqcity 1 BHK Floor Plan</h2>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/floorplans/1bhk.webp"
              alt="1 BHK Floor Plan"
              loading="lazy"
            />

  <p>The 1 BHK apartment is listed with a super built-up area of approximately 750 sq. ft. It represents the compact configuration in the available apartment schedule.</p>

  <p>This layout is intended for buyers who require a smaller residential arrangement with a separate bedroom and essential living spaces. When examining the floor plan, buyers should consider the relationship between the living area, bedroom, kitchen, and bathroom.</p>

  <p>The actual room arrangement and internal dimensions should be checked against the official apartment drawing.</p>

  <h2 className="text-2xl font-bold">Sobha Parqcity 2 BHK Floor Plan</h2>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/floorplans/2bhk.webp"
              alt="2 BHK Floor Plan"
              loading="lazy"
            />
  <p>The 2 BHK configuration offers approximately 1,400 sq. ft. of super built-up area. It provides two bedrooms and additional residential space compared with the smaller configuration.</p>

  <p>Buyers should examine the positioning of the bedrooms, living and dining areas, kitchen, and bathrooms. The arrangement of these spaces influences privacy, movement, and everyday functionality.</p>

  <p>The 2 BHK option can be evaluated by households looking for a two-bedroom residential layout with additional space for daily activities.</p>

  <h2 className="text-2xl font-bold">Sobha Parqcity 3 BHK Floor Plan</h2>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/floorplans/3bhk.webp"
              alt="3 BHK Floor Plan"
              loading="lazy"
            />
  <p>The 3 BHK apartments are planned with sizes ranging from approximately 1,750 to 1,950 sq. ft. This configuration provides three bedrooms and a larger residential area.</p>

  <p>The difference in apartment sizes gives buyers an opportunity to compare available space requirements within the same bedroom category. The actual layout should be examined to understand bedroom dimensions, common living areas, kitchen placement, and circulation space.</p>

  <p>The larger configuration may be considered by families requiring additional bedrooms and more flexibility in their residential arrangement.</p>

  <h2 className="text-2xl font-bold">Sobha Parqcity 4 BHK Floor Plan</h2>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/floorplans/4bhk.webp"
              alt="4 BHK Floor Plan"
              loading="lazy"
            />
  <p>The 4 BHK configuration is listed with approximately 2,600 sq. ft. of super built-up area. It is the largest apartment option in the supplied configuration details.</p>

  <p>This layout is intended for households that require four bedrooms and a comparatively larger residential space. Buyers should examine the arrangement of private and shared spaces, including bedroom positioning, living areas, kitchen access, and bathrooms.</p>

  <p>The official floor plan will provide the necessary details about room dimensions and the distribution of internal space.</p>

  <h2 className="text-2xl font-bold">Tower-Wise Apartment Distribution at Sobha Parqcity</h2>

  <p><a href="https://www.sobhaparqcity.in/"><strong>Sobha Parkcity</strong></a> is planned with 12 residential towers and approximately 4,463+ apartments. This makes tower-wise distribution an important consideration when reviewing the overall residential layout.</p>

  <p>Based on the available figures, the approximate average apartment distribution can be calculated as follows:</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left font-bold">Distribution Details</th>
          <th className="border border-gray-300 p-3 text-left font-bold">Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Total Residential Towers</td>
          <td className="border border-gray-300 p-3">12</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Total Apartments</td>
          <td className="border border-gray-300 p-3">4,463+</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Average Apartments per Tower</td>
          <td className="border border-gray-300 p-3">Approximately 367</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>The average is calculated by dividing 4,463 apartments by 12 towers. It represents a theoretical project-wide average rather than the confirmed number of apartments in each tower.</p>

  <p>Actual unit distribution may vary depending on tower design, floor count, floor-wise layouts, and apartment configurations. The official tower schedule is required to establish the exact allocation.</p>

  <h2 className="text-2xl font-bold">Wing-Wise and Floor-Wise Apartment Planning</h2>

  <p>The residential development includes 12 towers. However, the available project information does not provide a verified wing-wise classification or the number of apartments on each floor.</p>

  <p>A detailed tower and wing schedule would help buyers understand how the residential units are distributed throughout the development. It would also clarify the number of floors, apartments per floor, available configurations, and individual unit positions.</p>

  <p>Before selecting an apartment, buyers should request the latest tower-wise floor plans and unit availability statement from the developer.</p>

  <h2 className="text-2xl font-bold">Space Planning and Floor Plan Efficiency</h2>

  <p>The project website states an approximate floor plan efficiency of 73%. This figure provides an indication of the proposed apartment space utilisation, although its calculation method should be confirmed through official technical documents.</p>

  <p>Buyers should compare carpet area with super built-up area to understand the actual usable residential space. Room dimensions, passage areas, wall thickness, and balcony arrangements are also important when evaluating an apartment layout.</p>

  <p>The project website additionally mentions Mivan construction technology. This is a construction specification and should be considered separately from the internal design and space efficiency of individual apartments.</p>
</div>

<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions About Sobha Parqcity Floor Plans</h2>

  <h3 className="text-xl font-bold">1. What apartment configurations are available?</h3>
  <p>The supplied apartment information includes 1, 2, 3, and 4 BHK configurations.</p>

  <h3 className="text-xl font-bold">2. What is the size of the 2 BHK apartment?</h3>
  <p>The listed 2 BHK apartment has approximately 1,400 sq. ft. of super built-up area.</p>

  <h3 className="text-xl font-bold">3. How many residential towers are planned?</h3>
  <p>The project information mentions 12 residential towers.</p>

  <h3 className="text-xl font-bold">4. How many apartments are planned?</h3>
  <p>Approximately 4,463 or more apartments are planned across the development.</p>

  <h3 className="text-xl font-bold">5. What is the average number of apartments per tower?</h3>
  <p>The calculated average is approximately 367 apartments per tower, although actual tower-wise distribution may differ.</p>

  <h3 className="text-xl font-bold">6. Where can buyers obtain detailed floor plans?</h3>
  <p>Buyers should request official apartment drawings, carpet area statements, tower schedules, and configuration-wise availability from the developer.</p>
</div>


        </div>
      </main>
    </>
  );
}

export default FloorPlanPage;
