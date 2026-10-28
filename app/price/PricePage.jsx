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
            Sobha Parqcity Price
          </h1>
          <DownloadActions/>
          
        </div>
      </main>
    </>
  );
}

export default PricePage;
