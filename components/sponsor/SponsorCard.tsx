import { Sponsors } from "@/data/sponsorData";

export const SponsorCard = ({ imageLink, name, url }: Sponsors) => {
    return (
        <a
            href={url ?? "#"}
            className="overflow-hidden transition-all duration-300 shadow-lg group card w-80 hover:z-20 rounded-2xl hover:scale-105"
        >
            <div className="relative h-40">
                <div
                    className="absolute inset-0"
                    style={{
                        boxShadow: "inset 0 0 0 3000px rgba(255, 255, 255, 0.5)",
                        backdropFilter: "blur(2px)",
                        zIndex: "-1",
                    }}
                ></div>
                <div className="flex items-center justify-center w-full h-full">
                    <img src={imageLink} className="object-contain w-4/5 h-4/5" />
                </div>
            </div>
            {/* <Image src={Snitch} className="object-contain h-40" /> */}
            <div className=" bg-[#ffebb3] group-hover:bg-[#ffd86b]  h-full">
                <div className="px-8 text-center text-gray-800">
                    <h1 className="py-4 text-2xl font-semibold capitalize">{name}</h1>
                </div>
            </div>
        </a>
    );
};
