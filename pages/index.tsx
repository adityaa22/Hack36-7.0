import { Inter } from "@next/font/google";
import About from "../components/About";
import { Faq } from "../components/Faq";
import Judges from "../components/Judges";
import Landing from "../components/Landing";
import Prizes from "../components/Prizes";
import { ShowCase } from "../components/ShowCase";
import Themes from "../components/theme";
import TrackPrizes from "../components/trackPrizes";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="box-border relative w-full">
            <Landing />
            <About />
            <Themes />
            <Prizes />
            <TrackPrizes />
            <Judges />
            <ShowCase />
            {/* <Judges /> */}
            <Faq />
        </div>
    );
}
