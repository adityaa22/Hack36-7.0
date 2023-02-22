import { SponsorCard } from "../../components/sponsor/SponsorCard";
import SponsorSection from "../../components/sponsor/SponsorSection";
import data from "../../data/sponsorData";

export default function sponsor() {
  return (
    <div className="relative text-white-900 bg-gray">
      <div
        className="absolute inset-0 "
        style={{
          "background-image": "url('/genbg.jpeg')",
          "background-repeat": "no-repeat",
          "background-attachment": "fixed",
          "background-position": "start center",
          zIndex: "-10",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ zIndex: "-9", backdropFilter: "brightness(0.4) blur(3px)" }}
      ></div>
      <div className="py-14">
        <h1 className="text-4xl font-bold text-center uppercase md:text-5xl lg:text-6xl font-harry-font">
          Sponsors
        </h1>
        <p className="mt-4 text-center capitalize">
          Thank you to our sponsors for believing in us and making things
          happen.
        </p>
        <p className="text-center">
          <a
            href="mailto:hackathon@mnnit.ac.in"
            rel="noreferrer"
            target="_blank"
            className="inline-block px-4 py-2 mx-auto mt-4 text-gray-100 transition-all bg-gray-800 rounded-md cursor-pointer hover:bg-gray-900 capitatext-center"
          >
            Sponsor Us
          </a>
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
        <div
          className="flex flex-wrap items-center justify-center p-4 m-6"
          style={{ boxShadow: "inset 0 0 0 3000px rgba(255, 255, 255, 0.4)" }}
        >
          <img className="p-5" src="/sponsor/past_sponsors-09.png" />
        </div>
      </div>
    </div>
  );
}
