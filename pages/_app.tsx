import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
