import Image from "next/image";
import React from "react";
import LandingImage from "../public/landing/singer.jpeg";
import LandingImage2 from "../public/landing/swags.jpeg";
import LandingImage3 from "../public/landing/tableTennis.jpeg";
import LandingImage4 from "../public/landing/redbull.jpeg";
import LandingImage5 from "../public/landing/hack36T.jpeg";
import Landing from "./Landing";

export const ShowCase = () => {
  return (
    <section
      className="md:py-16 scroll-mt-40"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
    >
      <div className="p-4 space-y-1 text-center">
        <h1 className="text-sm font-medium uppercase">Join The community</h1>
        <h1 className="text-3xl font-bold uppercase md:text-5xl font-harry-font">
          its not just about coding
        </h1>
      </div>
      <div className="flex gap-4 mt-10 overflow-hidden md:mt-20 flex-nowrap">
        <div className="animate-horizontal-showcase grid shrink-0 grid-cols-2 grid-rows-2 gap-3 w-[30rem] md:w-[40rem]">
          <Image
            src={LandingImage}
            alt="Error"
            className="object-cover w-full h-full col-span-1 row-span-2 rounded-lg shadow-lg"
          />
          <Image
            src={LandingImage4}
            alt="Error"
            className="object-cover w-full h-full row-span-1 rounded-lg shadow-lg"
          />
          <div className="flex items-center justify-center w-full h-full row-span-1 p-4 text-center rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-[#f087ff] leading-5">
                750+
              </h1>
              <p className="text-sm leading-5 uppercase">
                Teams participated in hack36 5.0
              </p>
            </div>
          </div>
        </div>

        <div className="animate-horizontal-showcase grid shrink-0 grid-cols-2 grid-rows-2 gap-3 w-[30rem] md:w-[40rem]">
          <Image
            src={LandingImage5}
            alt="error"
            className="object-cover w-full h-full col-span-1 row-span-2 rounded-lg shadow-lg"
          />
          <div className="flex items-center justify-center w-full h-full row-span-1 p-4 text-center rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-[#19fb9b] leading-5">
                100+
              </h1>
              <p className="text-sm leading-5 uppercase">different colleges</p>
            </div>
          </div>
          <Image
            src={LandingImage3}
            alt="error"
            className="object-cover w-full h-full row-span-1 rounded-lg shadow-lg"
          />
        </div>

        <div className="animate-horizontal-showcase grid shrink-0 grid-cols-2 grid-rows-2 gap-3 w-[30rem] md:w-[40rem]">
          <Image
            src={LandingImage}
            className="object-cover w-full h-full col-span-1 row-span-2 rounded-lg shadow-lg"
          />
          <Image
            src={LandingImage2}
            className="object-cover w-full h-full row-span-1 rounded-lg shadow-lg"
          />
          <div className="flex items-center justify-center w-full h-full row-span-1 p-4 text-center rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-[#ffeb3b] leading-5">
                1200+
              </h1>
              <p className="text-sm leading-5 uppercase">motivated hackers</p>
            </div>
          </div>
        </div>
        <div className="animate-horizontal-showcase grid shrink-0 grid-cols-2 grid-rows-2 gap-3 w-[30rem] md:w-[40rem]">
          <Image
            src={LandingImage}
            alt="Error"
            className="object-cover w-full h-full col-span-1 row-span-2 rounded-lg shadow-lg"
          />
          <Image
            src={LandingImage4}
            alt="Error"
            className="object-cover w-full h-full row-span-1 rounded-lg shadow-lg"
          />
          <div className="flex items-center justify-center w-full h-full row-span-1 p-4 text-center rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-[#f087ff] leading-5">
                750+
              </h1>
              <p className="text-sm leading-5 uppercase">
                Teams participated in hack36 5.0
              </p>
            </div>
          </div>
        </div>

        <div className="animate-horizontal-showcase grid shrink-0 grid-cols-2 grid-rows-2 gap-3 w-[30rem] md:w-[40rem]">
          <Image
            src={LandingImage5}
            alt="error"
            className="object-cover w-full h-full col-span-1 row-span-2 rounded-lg shadow-lg"
          />
          <div className="flex items-center justify-center w-full h-full row-span-1 p-4 text-center rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-[#19fb9b] leading-5">
                100+
              </h1>
              <p className="text-sm leading-5 uppercase">different colleges</p>
            </div>
          </div>
          <Image
            src={LandingImage3}
            alt="error"
            className="object-cover w-full h-full row-span-1 rounded-lg shadow-lg"
          />
        </div>

        <div className="animate-horizontal-showcase grid shrink-0 grid-cols-2 grid-rows-2 gap-3 w-[30rem] md:w-[40rem]">
          <Image
            src={LandingImage}
            className="object-cover w-full h-full col-span-1 row-span-2 rounded-lg shadow-lg"
          />
          <Image
            src={LandingImage2}
            className="object-cover w-full h-full row-span-1 rounded-lg shadow-lg"
          />
          <div className="flex items-center justify-center w-full h-full row-span-1 p-4 text-center rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-[#ffeb3b] leading-5">
                1200+
              </h1>
              <p className="text-sm leading-5 uppercase">motivated hackers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
