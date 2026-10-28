/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

function LocationPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Parqcity Location
          </h1>
          <DownloadActions/>
        </div>
      </main>
    </>
  );
}

export default LocationPage;
