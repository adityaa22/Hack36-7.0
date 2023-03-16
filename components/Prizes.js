export default function Prizes() {
  return (
    <section
      className="pt-20 pb-10 bg-[url('/prizes.jpg')] bg-fixed bg-cover relative bg-center scroll-mt-40"
      id="prizes"
    >
      <div className="absolute inset-0 bg-gray-200 mix-blend-multiply"></div>
      <h1 className="z-10 pt-4 font-bold tracking-wider text-center text-white uppercase text-7xl font-harry-font">
        Prizes
      </h1>

      <div
        className="flex flex-col items-center justify-center gap-4 p-4 my-20 md:flex-row md:gap-0 md:p-0"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
      >
        <div className="z-10 order-2 mt-4 overflow-hidden transition-all duration-300 shadow-lg md:order-none md:mt-0 md:-mr-4 group card w-80 h-96 rounded-2xl hover:z-30 hover:scale-105">
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
          <div className="px-8 text-gray-800 content bg-[#ffebb3] group-hover:bg-[#ffd86b]  h-full ">
            <h1 className="pt-4 space-x-4 text-2xl font-semibold text-center capitalize">
              <span>#2</span> Silver
            </h1>
            <p className="my-1 text-xs text-center text-gray-600 uppercase">
              Owner of Resurrection Stone
            </p>
            <div className="font-serif text-center">
              <p>Prizes Worth Rs.80k+</p>
              <br></br>
              <p>
                Cash Prize <b>Rs. 20000</b>
              </p>
              <p>+Tons of swags and giveaways</p>
            </div>
          </div>
        </div>
        <div className="z-20 order-1 overflow-hidden transition-all duration-300 shadow-lg md:order-none md:-mt-16 group card w-80 h-96 rounded-2xl hover:scale-105">
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
          <div className="px-8 text-gray-800 content bg-[#ffebb3] group-hover:bg-[#ffd86b] h-full">
            <h1 className="pt-4 text-2xl font-semibold text-center capitalize">
              <span>#1</span> Gold
            </h1>
            <p className="my-1 text-xs text-center text-gray-600 uppercase">
              Posesser of Elder Wand
            </p>
            <div className="font-serif text-center">
              <p>Prizes Worth Rs.100k+</p>
              <br></br>
              <p>
                Cash Prize Worth <b>Rs. 30000</b>
              </p>
              <p>+Tons of swags and giveaways</p>
            </div>
          </div>
        </div>
        <div className="z-10 order-3 overflow-hidden transition-all duration-300 shadow-lg md:order-none md:-ml-4 group card w-80 h-96 hover:z-30 rounded-2xl hover:scale-105">
          <div className="relative h-40">
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "inset 0 0 0 3000px rgba(215, 215, 215, 0.192)",
                backdropFilter: "blur(2px)",
              }}
            ></div>
            <div className="absolute inset-0  bg-[url('/Snitch.png')] sepia  bg-[length:60%] bg-center bg-no-repeat"></div>
          </div>
          {/* <Image src={Snitch} className="object-contain h-40" /> */}
          <div className=" bg-[#ffebb3] transition-all duration-300 group-hover:bg-[#ffd86b]  h-full">
            <div className="px-8 text-gray-800">
              <h1 className="pt-4 text-2xl font-semibold text-center capitalize">
                <span>#3</span> Bronze
              </h1>
              <p className="my-1 text-xs text-center text-gray-600 uppercase">
                Bearer of Cloak of Invisibility
              </p>
              <div className="font-serif text-center">
                <p>Prizes Worth Rs.50k+</p>
                <br></br>
                <p>
                  Cash Prize Worth <b>Rs. 10000</b>
                </p>
                <p>Tons of swags and giveaways</p>
              </div>
              <p>
                {/* The cup represents the vessel of your subconscious mind; the
                five streams are your five senses and the abundant emotion and
                intuition flowing from within you. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
