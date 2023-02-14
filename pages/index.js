import Head from "next/head";
import { Inter } from "@next/font/google";
import About from "../components/About";
import Landing from "../components/Landing";
import Themes from "../components/Themes";
import Prizes from "../components/Prizes";
import Judges from "../components/Judges";
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
        className="box-border min-h-screen"
        style={{
          background:
            "linear-gradient(179.53deg, #251A1B -75.69%, #1E3935 99.6%)",
        }}
      >
        <Landing />
        <About />
        <Themes />
        <Prizes />
        <Judges />
      </div>
    </>
  );
}
