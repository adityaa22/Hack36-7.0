import { teamData } from "@/data/teamData";

import TeamSection from "../../components/team/TeamSection";

export default function Team() {
    return (
        <div className="relative py-32">
            <div
                className="absolute inset-0"
                style={{ zIndex: "-9", backdropFilter: "brightness(0.4) blur(3px)" }}
            ></div>
            <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
                <div className="max-w-2xl p-3 mx-auto">
                    <h2 className="text-3xl font-bold tracking-wider uppercase text-cream-900 sm:text-4xl font-harry-font">
                        Meet our team
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-white-600">
                        We’re a dynamic group of individuals who are passionate about what
                        we do.
                    </p>
                </div>
                <div className="space-y-10">
                    <TeamSection section="Faculty Coordinators" data={teamData.faculty} />
                    <TeamSection section="Event Leads" data={teamData.eventLead} />
                    <TeamSection section="Web Team" data={teamData.webTeam} />
                    <TeamSection
                        section="Design and Video Team"
                        data={teamData.designAndVideoTeam}
                    />
                    <TeamSection section="OutReach Team" data={teamData.outreachTeam} />
                    <TeamSection section="Tech Team" data={teamData.techTeam} />
                    <TeamSection section="Content Team" data={teamData.contentTeam} />
                    <TeamSection section="Sponsor Team" data={teamData.sponsorTeam} />
                    <TeamSection section="PR and Logistic" data={teamData.prAndLogistics} />
                </div>
            </div>
        </div>
    );
}
