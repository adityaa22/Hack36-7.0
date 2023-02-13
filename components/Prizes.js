export default function Prizes() {
  return (
    <section className="mt-20 min-h-screen bg-[url('/prizes.jpg')] bg-fixed bg-cover mix-blend-lighten">
      <h1 className="mt-4 font-bold text-center uppercase text-7xl">Prizes</h1>

      <div className="flex items-center justify-center mt-16">
        <div className="-mr-4 overflow-hidden transition-all duration-300 shadow-lg card w-80 h-96 rounded-2xl hover:z-20 hover:scale-105">
          <div className="relative h-40">
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "inset 0 0 0 3000px rgba(215, 215, 215, 0.192)",
                backdropFilter: "blur(2px)",
              }}
            ></div>
            <div className="absolute inset-0  bg-[url('/Snitch.png')] grayscale bg-[length:60%] bg-center bg-no-repeat"></div>
          </div>
          {/* <Image src={Snitch} className="object-contain h-40" /> */}
          <div className="px-8 text-gray-800 content bg-[#ffebb3] hover:bg-[#ffd86b]  h-full ">
            <h1 className="py-4 text-2xl font-semibold capitalize">
              Ace of Cups
            </h1>
            <p>
              The cup represents the vessel of your subconscious mind; the five
              streams are your five senses and the abundant emotion and
              intuition flowing from within you.
            </p>
          </div>
        </div>
        <div className="z-10 -mt-16 overflow-hidden transition-all duration-300 shadow-lg card w-80 h-96 rounded-2xl hover:scale-105">
          <div className="relative h-40">
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "inset 0 0 0 3000px rgba(215, 215, 215, 0.192)",
                backdropFilter: "blur(2px)",
              }}
            ></div>
            <div className="absolute inset-0  bg-[url('/Snitch.png')]  bg-[length:60%] bg-center bg-no-repeat"></div>
          </div>
          {/* <Image src={Snitch} className="object-contain h-40" /> */}
          <div className="px-8 text-gray-800 content bg-[#ffebb3] hover:bg-[#ffd86b] h-full">
            <h1 className="py-4 text-2xl font-semibold capitalize">
              Ace of Cups
            </h1>
            <p>
              The cup represents the vessel of your subconscious mind; the five
              streams are your five senses and the abundant emotion and
              intuition flowing from within you.
            </p>
          </div>
        </div>
        <div className="-ml-4 overflow-hidden transition-all duration-300 shadow-lg card w-80 h-96 hover:z-20 rounded-2xl hover:scale-105">
          <div className="relative h-40">
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "inset 0 0 0 3000px rgba(215, 215, 215, 0.192)",
                backdropFilter: "blur(2px)",
              }}
            ></div>
            <div className="absolute inset-0  bg-[url('/Snitch.png')] sepia bg-[length:60%] bg-center bg-no-repeat"></div>
          </div>
          {/* <Image src={Snitch} className="object-contain h-40" /> */}
          <div className=" bg-[#ffebb3] hover:bg-[#ffd86b]  h-full">
            <div className="px-8 text-gray-800">
              <h1 className="py-4 text-2xl font-semibold capitalize">
                Ace of Cups
              </h1>
              <p>
                The cup represents the vessel of your subconscious mind; the
                five streams are your five senses and the abundant emotion and
                intuition flowing from within you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
