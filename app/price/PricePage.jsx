/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import DownloadCostSheetActions from "@/components/DownloadCostSheetActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const priceData = [
  { type: "2 BHK",        size: "On Request",    price: "₹ 1.2 Cr* onwards" },
  { type: "3 BHK",        size: "On Request",  price: "On Request" },
  { type: "4 BHK",  size: "On Request",  price: "On Request" },
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
          
        </div>
      </main>
    </>
  );
}

export default PricePage;
