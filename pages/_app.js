import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
