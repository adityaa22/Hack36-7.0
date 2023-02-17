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
        <div className="sticky top-0 z-50">
          <a
            id="mlh-trust-badge"
            style={{
              display: "inline-block",
              maxWidth: "100px",
              minWidth: "60px",
              // position: "fixed",
              // right: "50px",

              width: "10%",
              "z-index": "10000",
            }}
            href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=black"
            target="_blank"
            rel="noreferrer"
            className="absolute top-0 self-end md:fixed right-1 md:right-12"
          >
            {" "}
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-red.svg"
              alt="Major League Hacking 2023 Hackathon Season"
              style={{ width: "100%" }}
            />
          </a>
        </div>

        <div
          className="absolute inset-0 "
          style={{
            "background-image": "url('/genbg.jpeg')",
            "background-repeat": "no-repeat",
            "background-attachment": "fixed",
            "background-position": "start center",
            // "background-size": "cover",
            filter: "blur(4px)",
            filter: "brightness(0.4) blur(3px)",
            zIndex: "-10",
          }}
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
