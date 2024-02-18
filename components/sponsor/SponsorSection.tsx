import { Sponsors } from "@/data/sponsorData";
import { SponsorCard } from "./SponsorCard";

type Prop = {
    sectionName: string;
    data: Sponsors[];
}

export default function SponsorSection({ sectionName, data }: Prop) {
    return (
        <section>
            <h1 className="text-3xl font-bold text-center">{sectionName}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 p-4">
                {data.map((sponsor, idx) => (
                    <SponsorCard
                        key={idx}
                        name={sponsor.name}
                        url={sponsor.url}
                        imageLink={sponsor.imageLink}
                    />
                ))}
            </div>
        </section>
    );
}
