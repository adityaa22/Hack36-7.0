import { SponsorCard } from "../../components/sponsor/SponsorCard";
import SponsorSection from "../../components/sponsor/SponsorSection";
import data from "./data";

export default function sponsor() {
  return (
    <div className="text-white-900 bg-gray">
      <div className="py-14">
        <h1 className="text-4xl font-bold text-center uppercase md:text-5xl lg:text-6xl">
          Sponsor
        </h1>
        <p className="mt-4 text-center capitalize">
          Thank you to our sponsors for believing in us and making things
          happen.
        </p>
      </div>
      <div className="space-y-10">
        {data.title.length > 0 && (
          <SponsorSection sectionName="Title Sponsor" data={data.title} />
        )}
        {data.terra.length > 0 && (
          <SponsorSection sectionName="Terra Sponsor" data={data.title} />
        )}
        {data.giga.length > 0 && (
          <SponsorSection sectionName="Giga Sponsor" data={data.giga} />
        )}
        {data.mega.length > 0 && (
          <SponsorSection sectionName="Mega Sponsor" data={data.mega} />
        )}
        {data.benefactors.length > 0 && (
          <SponsorSection sectionName="Benefactors" data={data.benefactors} />
        )}

        <h1 className="text-3xl font-bold text-center">Past Sponsors</h1>
        <div className="flex flex-wrap items-center justify-center p-4 m-6"
        style={{ boxShadow: "inset 0 0 0 3000px rgba(255, 255, 255, 0.4)"}}
        >
          <img className="p-5" src="/sponsor/past_sponsors-09.png" />
        </div>
      </div>
    </div>
  );
}
