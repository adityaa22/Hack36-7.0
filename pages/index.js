import Head from "next/head";
import { Inter } from "@next/font/google";
import About from "../components/About";
import Landing from "../components/Landing";
import Themes from "../components/Themes";
import Prizes from "../components/Prizes";
import Judges from "../components/Judges";
import { Faq } from "../components/Faq";
import { ShowCase } from "../components/ShowCase";
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
      <div
        className="box-border relative min-h-screen"
        style={
          {
            // background:"linear-gradient(179.53deg, #251A1B -75.69%, #1E3935 99.6%)",
            // "background-image":
            //   "url('/bookgb.jpeg')",
            //   "background-repeat": "no-repeat",
            //   "background-attachment": "fixed",
            //   "background-size": "cover",
            // "filter": "blur(4px)",
          }
        }
      >
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
        <Landing />
        <About />
        {/* <Themes /> */}
        <Prizes />
        <ShowCase />
        {/* <Judges /> */}
        <Faq />
      </div>
    </>
  );
}
