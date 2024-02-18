import Image from "next/image";
import MiloOnHack from "../public/Milo-on-Hack36.png";

export default function About() {
    return (
        <div
            className="py-20 2xl:container scroll-mt-40"
            id="about"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
        >
            <h1
                data-shadow="ABOUT US"
                className="mb-4 text-5xl text-center uppercase md:hidden font-harry-font md:text-8xl"
            >
                About us
            </h1>
            <div className="grid grid-cols-1 gap-4 mx-5 md:grid-cols-5 md:mx-10">
                <div
                    className="col-span-3 text-justify "
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="800"
                >
                    <h1
                        data-shadow="ABOUT US"
                        className="hidden mb-4 text-5xl text-center uppercase md:block font-harry-font md:text-8xl"
                    >
                        About us
                    </h1>
                    Another new year, and here we are, back with Hack36 6.0, one with even
                    more enthusiasm and anticipation! Although it will be held in a hybrid
                    mode, the spirit of the traditional hackathon shall never be gone from
                    this exciting event! Have you always had an idea which you wished to
                    showcase to the world using your creativity and programming skills?
                    Well, here is your chance. Gather a team of 2-4 college students, with
                    no restrictions regarding branch, year, course or college whatsoever.
                    Brainstorm together and channel your inner hackers in this 36-hour
                    long exhibition! Come and be a part of this fun-filled experience,
                    with intriguing talks, interactive workshops and various mini-games
                    round the clock. So buckle up as you would not want to miss out on
                    this unparalleled opportunity!
                </div>
                <div
                    className="relative flex items-center justify-center col-span-2 row-start-1 md:row-auto "
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="800"
                >
                    <img
                        src="/Milo-on-Hack36.png"
                        className="object-contain w-full h-full md:aspect-video max-h-70"
                    />
                </div>
            </div>
        </div>
    );
}
