/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import DownloadCostSheetActions from "./DownloadCostSheetActions";

const priceData = [
  { type: "1 BHK",        size: "750 Sq.ft",    price: "₹1.1 Cr* onwards" },
  { type: "2 BHK",        size: "1400 Sq.ft",    price: "₹2.38 Cr* onwards" },
  { type: "3 BHK",        size: "1750 - 1950 Sq.ft",    price: "₹2.97 Cr* onwards" },
  { type: "4 BHK",  size: "2600 Sq.ft",  price: "₹4.40 Cr* onwards" },
];

export default function PriceListSection() {

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Price
        </h2>
        <div className="w-full h-px bg-gray-200 mb-6" />
        

<div className="space-y-6 text-gray-800 mb-6">
  <p>
    The <a href="https://www.sobhaparqcity.in/price"><strong>Sobha Parqcity price</strong></a> starts at <b>₹1.1 crore onwards</b> for a <b>1 BHK apartment of approximately 750 sq. ft.</b>, with higher starting prices for larger apartment configurations. Developed by Sobha Group, this proposed residential township on <b>Hennur Main Road, North Bangalore</b>, is planned to offer multiple apartment options for buyers exploring residential properties. The indicative prices vary according to the apartment size and configuration selected.
  </p>

  <p>
    The starting price for a <b>2 BHK apartment is ₹2.38 crore</b>, for a <b>3 BHK apartment is ₹2.97 crore</b>, and for a <b>4 BHK apartment is ₹4.40 crore onwards</b>. These prices provide an initial reference for comparing the proposed apartment options, but the final cost should be confirmed through the latest official price list.
  </p>
</div>


        <div className="flex flex-col lg:flex-row gap-0">

<div className="flex-1 overflow-x-auto">
  <table
    className="w-full text-sm md:text-base"
    role="table"
    aria-label="Apartment types and pricing"
  >
    <thead>
      <tr className="border bg-primary text-white border-gray-200">
        <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Size</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Price</th>
      </tr>
    </thead>
    <tbody>
      {priceData.map((row, i) => (
        <tr
          key={i}
          className="border-b border-gray-300 hover:bg-gray-50 transition"
        >
          <td className="py-2 px-2 text-center text-black">{row.type}</td>
          <td className="py-2 px-2 text-center text-black">{row.size}</td>
          <td className="py-2 px-2 text-center font-medium text-primary">
            {row.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
          <div className="px-4 md:px-0">
            <img 
            className="w-full"
            loading="lazy"
            src="/images/costing-details.webp" alt="Sobha Parqcity price list and cost sheet, Hennur Main Road, Bangalore" />
            <DownloadCostSheetActions/>
          </div>

        </div>
        

<div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Factors That Affect the Final Price of Sobha Parqcity</h3>

  <p>
    The final purchase cost of an apartment at <b>Sobha Parqcity</b> may vary depending on the selected unit, its size, floor level and other terms specified in the official price sheet. Buyers should also account for applicable taxes, registration charges, stamp duty and any additional costs disclosed by the developer.
  </p>

  <p>
    Before making a purchase decision, it is advisable to obtain a detailed cost sheet and understand the payment schedule. Comparing the total acquisition cost rather than only the advertised starting price can help buyers plan their property budget more accurately.
  </p>
</div>


      </div>
    </section>
  );
}