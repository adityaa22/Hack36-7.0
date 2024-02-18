import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head>
                <title>Hack 36 6.0</title>
                <meta name="description" content="Hack36 6.0 MNNIT" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />
                <link rel="icon" href="/milo.png" />
            </Head>
            <body className="relative w-full text-white init_defult_bg_color h-max">
                <div
                    className="absolute inset-0 "
                    style={{
                        backgroundImage: "url('/genbg.jpeg')",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "start center",
                        zIndex: "-10",
                    }}
                ></div>
                <div
                    className="fixed inset-0"
                    style={{
                        zIndex: "-9",
                        backdropFilter: "brightness(0.4) blur(3px)",
                        right: 0,
                    }}
                ></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
