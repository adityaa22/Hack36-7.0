import { TeamData } from "@/data/teamData";
import Member from "./Member";

type Prop = {
    section: string;
    data: TeamData[];
}

export default function TeamSection({ section, data }: Prop) {
    return (
        <div>
            <div className="max-w-2xl p-2 mx-auto">
                <h3 className="text-3xl font-bold tracking-tight text-cream-600 sm:text-3xl">
                    {section}
                </h3>
            </div>
            <ul
                role="list"
                className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
                {data.map((person, idx) => (
                    <>{person.imageUrl != "" && <Member {...person} key={idx} />}</>
                ))}
            </ul>
        </div>
    );
}
