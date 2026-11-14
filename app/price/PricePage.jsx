/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import DownloadCostSheetActions from "@/components/DownloadCostSheetActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const priceData = [
  { type: "1 BHK", size: "750 sq. ft.", price: "₹1.1 Cr* onwards" },
  { type: "2 BHK", size: "1,400 sq. ft.", price: "₹2.38 Cr* onwards" },
  { type: "3 BHK", size: "1,750–1,950 sq. ft.", price: "₹2.97 Cr* onwards" },
  { type: "4 BHK", size: "2,600 sq. ft.", price: "₹4.40 Cr* onwards" },
];

function PricePage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Price"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Parq City Price
          </h1>
          <DownloadActions/>
          
<div className="space-y-6 text-gray-800 mt-6">
  <p><strong>Sobha Parq City Price</strong> varies according to apartment configuration, size, and the selected unit. Located on <b>Hennur Main Road in North Bangalore</b>, <a href="https://www.sobhaparqcity.in"><strong>Sobha Parq City</strong></a> is an upcoming residential development planned across <b>50 acres</b>. The project offers spacious apartment configurations designed to accommodate different household requirements.</p>

  <p>The indicative starting prices range from ₹1.1 Cr onwards for the listed 1 BHK configuration to ₹4.40 Cr onwards for a 4 BHK apartment. The price difference reflects variations in apartment size and configuration. Buyers evaluating the project can compare the available unit sizes and starting prices to understand which option aligns with their budget and space requirements.</p>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/costing-details.webp"
              alt="Sobha Parq City Price"
              loading="lazy"
            />
  <h2 className="text-2xl font-bold">Sobha Parq City Apartment Price List</h2>

  <p>The project has multiple apartment configurations with different super built-up areas and indicative starting prices. The following table provides an overview of the available pricing information.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left font-bold">Apartment Type</th>
          <th className="border border-gray-300 p-3 text-left font-bold">Super Built-up Area</th>
          <th className="border border-gray-300 p-3 text-left font-bold">Starting Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">1 BHK</td>
          <td className="border border-gray-300 p-3">750 Sq. Ft.</td>
          <td className="border border-gray-300 p-3">₹1.1 Cr* onwards</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">2 BHK</td>
          <td className="border border-gray-300 p-3">1,400 Sq. Ft.</td>
          <td className="border border-gray-300 p-3">₹2.38 Cr* onwards</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">3 BHK</td>
          <td className="border border-gray-300 p-3">1,750–1,950 Sq. Ft.</td>
          <td className="border border-gray-300 p-3">₹2.97 Cr* onwards</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">4 BHK</td>
          <td className="border border-gray-300 p-3">2,600 Sq. Ft.</td>
          <td className="border border-gray-300 p-3">₹4.40 Cr* onwards</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p><em>Note: Prices are indicative and subject to confirmation by the developer. The final cost may vary depending on the selected apartment, applicable charges, and the latest pricing schedule.</em></p>

  <h2 className="text-2xl font-bold">Sobha Parq City Price Per Square Foot</h2>

  <p>The price per square foot is an important factor when comparing different apartment configurations. It provides buyers with a common reference for understanding the relationship between apartment size and the quoted starting price.</p>

  <p>Based on the supplied apartment sizes and starting prices, the indicative calculations are as follows:</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left font-bold">Configuration</th>
          <th className="border border-gray-300 p-3 text-left font-bold">Area</th>
          <th className="border border-gray-300 p-3 text-left font-bold">Indicative Price</th>
          <th className="border border-gray-300 p-3 text-left font-bold">Approx. Price per Sq. Ft.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">1 BHK</td>
          <td className="border border-gray-300 p-3">750 Sq. Ft.</td>
          <td className="border border-gray-300 p-3">₹1.10 Cr</td>
          <td className="border border-gray-300 p-3">₹14,667</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">2 BHK</td>
          <td className="border border-gray-300 p-3">1,400 Sq. Ft.</td>
          <td className="border border-gray-300 p-3">₹2.38 Cr</td>
          <td className="border border-gray-300 p-3">₹17,000</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">3 BHK</td>
          <td className="border border-gray-300 p-3">1,750 Sq. Ft.</td>
          <td className="border border-gray-300 p-3">₹2.97 Cr</td>
          <td className="border border-gray-300 p-3">₹16,971</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">4 BHK</td>
          <td className="border border-gray-300 p-3">2,600 Sq. Ft.</td>
          <td className="border border-gray-300 p-3">₹4.40 Cr</td>
          <td className="border border-gray-300 p-3">₹16,923</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>These figures are calculated using the provided starting prices and super built-up areas. They should be treated as approximate comparisons rather than confirmed developer-quoted rates. The final rate may differ according to the actual unit price and applicable charges.</p>

  <h2 className="text-2xl font-bold">Understanding the Sobha Parq City Price by Apartment Configuration</h2>

  <p>The apartment configurations have different space requirements and entry-level prices. Understanding these differences can help prospective buyers evaluate the available options more effectively.</p>

  <h3 className="text-xl font-bold">1 BHK Apartment Price</h3>

  <p>The listed 1 BHK apartment has a super built-up area of 750 sq. ft., with an indicative starting price of ₹1.1 Cr onwards. It represents the lowest entry price among the configurations in the supplied price list.</p>

  <p>Buyers considering this option can evaluate whether the available apartment size meets their space requirements and whether the overall purchase cost fits their budget.</p>

  <h3 className="text-xl font-bold">2 BHK Apartment Price</h3>

  <p>The 2 BHK configuration offers approximately 1,400 sq. ft. of super built-up area, starting at ₹2.38 Cr onwards. This option provides additional residential space compared with the smaller configuration.</p>

  <p>The indicative price is relevant for buyers who require two bedrooms and a larger apartment layout. The actual cost should be checked against the selected unit and the developer's current price quotation.</p>

  <h3 className="text-xl font-bold">3 BHK Apartment Price</h3>

  <p>The 3 BHK apartments are listed with sizes ranging from 1,750 to 1,950 sq. ft. The indicative starting price is ₹2.97 Cr onwards.</p>

  <p>The variation in apartment sizes gives buyers different space options within the same configuration. The final price may depend on the specific unit selected, its area, and the applicable pricing terms.</p>

  <h3 className="text-xl font-bold">4 BHK Apartment Price</h3>

  <p>The 4 BHK configuration has a listed super built-up area of 2,600 sq. ft., with an indicative starting price of ₹4.40 Cr onwards.</p>

  <p>This is the largest configuration included in the supplied price list. Buyers looking for a larger residential layout can assess its overall cost alongside the available apartment size.</p>

  <h2 className="text-2xl font-bold">Factors That May Affect the Final Sobha Parq City Price</h2>

  <p>The starting prices provide an initial understanding of the project's pricing structure. However, the final apartment purchase cost may depend on several factors.</p>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Apartment configuration:</strong> The selected 1, 2, 3, or 4 BHK layout determines the apartment's listed size and starting price.</li>
    <li><strong>Apartment size:</strong> Larger super built-up areas generally have higher total purchase prices.</li>
    <li><strong>Unit selection:</strong> The final quotation should be checked for the specific apartment being considered.</li>
    <li><strong>Additional charges:</strong> Applicable taxes, registration, stamp duty, and other charges may increase the overall acquisition cost.</li>
    <li><strong>Developer pricing updates:</strong> Prices may change as the project progresses through its development and sales stages.</li>
  </ul>

  <p>Buyers should request a detailed cost sheet to understand the complete financial commitment rather than relying only on the advertised starting price.</p>

  <h2 className="text-2xl font-bold">Project Details and Pricing Context</h2>

  <p><b>Sobha Parq City</b> is planned as a residential development by <a href="https://www.sobha.com/" target="_blank" rel="nofollow noopener noreferrer"><b>Sobha Group</b></a> on <b>Hennur Main Road, North Bangalore</b>. The project covers approximately <b>50 acres</b> and is planned to accommodate more than <b>4,463 apartments across 12 towers</b>.</p>

  <p>The project information also mentions <b>80% open space</b>, a clubhouse of approximately 50,000 sq. ft., and more than 40 amenities. These are website-stated project details and should be independently confirmed through the developer's official documentation.</p>

  <p>The project is described as being in a pre-launch or Expression of Interest (EOI) stage. Its current development and sales status should be confirmed before making any financial commitment.</p>

  <h2 className="text-2xl font-bold">Additional Charges and Payment Considerations</h2>

  <p>The advertised <b>Sobha Parq City Price</b> represents an indicative starting amount and may not include every expense associated with purchasing an apartment.</p>

  <p>Before proceeding, buyers should request a complete cost breakdown covering applicable taxes, stamp duty, registration charges, and any other additional costs specified by the developer. The payment schedule, booking amount, cancellation terms, and agreement conditions should also be reviewed carefully.</p>

  <p>It is equally important to verify the project's RERA registration number and applicable approvals through official records. The registration details should be available and verified before entering into a booking or sale agreement.</p>
</div>

<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions About Sobha Parq City Price</h2>

  <h3 className="text-xl font-bold">1. What is the starting price of Sobha Parq City?</h3>

  <p>The indicative starting price is ₹1.1 Cr onwards for the listed 1 BHK configuration. Prices for larger configurations start at ₹2.38 Cr for 2 BHK, ₹2.97 Cr for 3 BHK, and ₹4.40 Cr for 4 BHK.</p>

  <h3 className="text-xl font-bold">2. What is the price of a 2 BHK apartment in Sobha Parq City?</h3>

  <p>The listed 2 BHK apartment has an area of 1,400 sq. ft., with an indicative starting price of ₹2.38 Cr onwards.</p>

  <h3 className="text-xl font-bold">3. What is the price of a 3 BHK apartment?</h3>

  <p>The 3 BHK configuration ranges from 1,750 to 1,950 sq. ft., with an indicative starting price of ₹2.97 Cr onwards.</p>

  <h3 className="text-xl font-bold">4. What is the price of a 4 BHK apartment?</h3>

  <p>The listed 4 BHK apartment measures approximately 2,600 sq. ft., with an indicative starting price of ₹4.40 Cr onwards.</p>

  <h3 className="text-xl font-bold">5. Does the Sobha Parq City Price include registration and taxes?</h3>

  <p>The supplied starting prices do not confirm whether registration, stamp duty, taxes, or other additional charges are included. Buyers should obtain an updated cost sheet from the developer.</p>

  <h3 className="text-xl font-bold">6. How can buyers confirm the latest apartment prices?</h3>

  <p>Prospective buyers should contact the developer or authorised sales representative for the latest availability, apartment-specific quotation, payment schedule, and complete cost breakdown.</p>
</div>

        </div>
      </main>
    </>
  );
}

export default PricePage;
