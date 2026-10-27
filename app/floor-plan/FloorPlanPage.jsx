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
    alt: "Sobha Parq City 2 BHK floor plan, Sarjapur Bangalore",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/3bhk-floorplan.webp",
    alt: "Sobha Parq City 3 BHK floor plan, Sarjapur Bangalore",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/4bhk-floorplan.webp",
    alt: "Sobha Parq City 4 BHK floor plan, Sarjapur Bangalore",
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
            Sobha Parq City Floor Plan
          </h1>
          <DownloadActions/>
        </div>
      </main>
    </>
  );
}

export default FloorPlanPage;
