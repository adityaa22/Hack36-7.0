import Image from "next/image";
import React from "react";
import LandingImage from "../public/landing.png";
import LandingImage2 from "../public/magicroom.jpg";

export const ShowCase = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-medium capitalize ">
        its not just about coding
      </h1>

      <div className="flex overflow-x-auto">
        <div className="flex gap-2 h-[400px] w-[800px] ">
          <Image src={LandingImage} className="flex-grow w-1/2 rounded-lg" />
          <div className="flex flex-col gap-1 ">
            <Image
              src={LandingImage2}
              className="object-fill rounded-lg h-1/2"
            />
            <div className="bg-yellow-400 rounded-lg h-1/2">some fact</div>
          </div>
        </div>
      </div>
    </section>
  );
};
