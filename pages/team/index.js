import Member from "../../components/team/Member";
import data from "./data";
import TeamSection from "../../components/team/TeamSection";

export default function team() {
  return (
    <>
      <div className="relative py-32">
      <div className="absolute inset-0 "
        style={{
          "background-image":
            "url('/genbg.jpeg')",
            "background-repeat": "no-repeat",
            "background-attachment": "fixed",
            "background-size": "cover",
          "filter":"blur(4px)",
          "filter":"brightness(0.5) blur(4px)",
          "zIndex": "-10",
        }} 
        ></div>
        <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
          <div className="max-w-2xl p-3 mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-cream-900 sm:text-4xl font-harry-font">
              Meet our team
            </h2>
            <p className="mt-4 text-lg leading-8 text-white-600">
              We’re a dynamic group of individuals who are passionate about what
              we do.
            </p>
          </div>
          <TeamSection section="Event Leads" data={data.eventLead} />
          <TeamSection section="Web Team" data={data.webTeam} />
          <TeamSection section="OutReach Team" data={data.outreachTeam} />
          <TeamSection
            section="Design and Video Team"
            data={data.designAndVideoTeam}
          />
          <TeamSection section="Sponsor Team" data={data.sponsorTeam} />
        </div>
      </div>
    </>
  );
}
