import Image from "next/image";

const TrackPrize = ({ imgSrc, imgAlt, mainText, bottomText }) => {
  return (
    <div className="relative w-[320px] py-4 space-y-6 text-center duration-300 rounded-lg hover:scale-105">
      <div
        className="absolute inset-0"
        style={{
          zIndex: "-1",
          backgroundColor: "rgba(255, 255, 255, 0.18)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          "backdrop-filter": " blur(2.1px)",
          "-webkit-backdrop-filter": "blur(2.1px)",
        }}
      ></div>
      <div className="space-y-4 ">
        <div className="h-[100px] relative w-auto">
          <Image
            src={imgSrc}
            fill={true}
            alt={imgAlt}
            className="z-10 object-contain max-w-full mx-auto scale-95 opacity-100"
          />
        </div>
        {/*  */}
        <p className="left-0 right-0 w-full p-2  capitalize text-xl text-center text-white  bg-[#981ea1]">
          {mainText}
        </p>
        <p className="mt-auto text-xs text-white uppercase bottom-5">
          {bottomText}
        </p>
      </div>
    </div>
  );
};

export default TrackPrize;
