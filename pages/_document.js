import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="relative w-full text-white init_defult_bg_color h-max">
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
