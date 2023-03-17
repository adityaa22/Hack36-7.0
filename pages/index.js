import Head from "next/head";
import { Inter } from "@next/font/google";
import About from "../components/About";
import Landing from "../components/Landing";
import Prizes from "../components/Prizes";
import Judges from "../components/Judges";
import { Faq } from "../components/Faq";
import { ShowCase } from "../components/ShowCase";
import TrackPrizes from "../components/trackPrizes";
import Themes from "../components/theme";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hack 36 6.0</title>
        <meta name="description" content="Hack36 6.0 MNNIT" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link rel="icon" href="/milo.png" />
      </Head>
      <div className="box-border relative w-full">
        <Landing />
        <About />
        <Themes />
        <Prizes />
        {/* <TrackPrizes /> */}
        <ShowCase />
        {/* <Judges /> */}
        <Faq />
      </div>
    </>
  );
}
