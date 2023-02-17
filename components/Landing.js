import Image from "next/image";
import React from "react";
import CCLOGO from "../public/CC-Logo-Horizontal-White-small.png";
import MILOWIZARD from "../public/milo-wizard.png";

export default function Landing() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section id="Landing" data-aos="fade-up">
      <main className="container pt-4">
        <div className="  max-h-[700px] h-screen bg-contain relative mx-5 rounded-lg  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-[url('/landing.png')] bg-cover bg-center bg-no-repeat">
            <div className="px-4 py-16 space-y-4 text-center outline-2 ">
              <Image
                src={CCLOGO}
                alt="computer coding club logo"
                width="350"
                height="auto"
                className="mx-auto"
              />
              <p className="italic">presents</p>
              <h1 className="text-6xl uppercase font-harry-font">hack36 6.0</h1>
              <p className="italic">Caffeinate. Collaborate. Celebrate.</p>
              <p>March 24-26, 2023</p>
              <div className="flex items-center justify-center">
                <div
                  className="apply-button"
                  data-hackathon-slug="hack36-v6"
                  data-button-theme="light"
                  //   style={{ height: "44px", width: "312px" }}
                ></div>
              </div>
              <a
                className="inline-flex justify-center items-center rounded w-full max-w-[312px] h-[44px] p-2 space-x-2 bg-[#5865F2]"
                href="https://discord.gg/RgAQdbVX"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="inline bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
                <span className="text-xs font-bold uppercase">
                  Join Discord Server
                </span>
              </a>
            </div>
            <div className="relative">
              <div className=" bg-center rounded-xl w-full h-full  bg-no-repeat bg-[length:80%]"></div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
