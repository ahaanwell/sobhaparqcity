/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import MasterPlanClient from "@/components/MasterPlanClient";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

function MasterPlanPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Master Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Parqcity Master Plan
          </h1>
          <DownloadActions/>
        </div>
      </main>
    </>
  );
}

export default MasterPlanPage;
