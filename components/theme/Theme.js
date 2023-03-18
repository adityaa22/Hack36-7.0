import React from "react";

const Theme = ({ theme }) => {
  return (
    <figure className=" w-[320px] overflow-hidden group hover:shadow-lg rounded-lg ">
      <div className="relative ">
        <h1 className="absolute z-10 text-lg leading-4 text-white capitalize group-hover:hidden duration-400 top-5 left-5">
          {theme.title ?? ""}
        </h1>
        <div className="absolute inset-0 z-[9] opacity-0 bg-gradient-to-b  z-1 from-gray-800  via-transparent to-transparent group-hover:opacity-40  duration-200"></div>

        <img
          src={theme.imageUrl}
          alt=""
          className="object-contain h-full duration-200 group-hover:scale-105 "
        />
        <div className="absolute bottom-0 z-20 w-full p-2 transition-all duration-200 top-full group-hover:top-0">
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
          <div className="absolute items-center justify-center w-full h-full overflow-auto text-justify break-words ">
            <p className="w-11/12 ">{theme.detail ?? ""}</p>
          </div>
        </div>
        {/* <button className=" cursor-pointer z-10 lg:absolute relative w-full l-0 lg:group-hover:bottom-0 lg:-bottom-full p-2 space-y-2 group-hover:bg-[#ffd86b] duration-200">
        <figcaption className="text-xl text-white capitalize">
          More Info
        </figcaption>
      </button> */}
      </div>
    </figure>
  );
};

export default Theme;
