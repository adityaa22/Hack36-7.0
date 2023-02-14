export default function About() {
  return (
    <div className="container mt-20">
      <div className="grid grid-cols-2 mx-5">
        <div className="text-justify">
          <h1
            data-shadow="ABOUT US"
            className="mb-4 font-bold uppercase text-8xl"
          >
            About us
          </h1>
          Another new year, and here we are, back with Hack36 6.0, one with even
          more enthusiasm and anticipation! Although it will be held in a hybrid
          mode, the spirit of the traditional hackathon shall never be gone from
          this exciting event! Have you always had an idea which you wished to
          showcase to the world using your creativity and programming skills?
          Well, here is your chance. Gather a team of 2-4 college students, with
          no restrictions regarding branch, year, course or college whatsoever.
          Brainstorm together and channel your inner hackers in this 36-hour
          long exhibition! Come and be a part of this fun-filled experience,
          with intriguing talks, interactive workshops and various mini-games
          round the clock. So buckle up as you would not want to miss out on
          this unparalleled opportunity!
        </div>
        <div className="relative">
          <div className="bg-yellow-500 ">
            <div className="absolute w-4/5 h-full px-10 bg-purple-500 rounded-lg right-4 -top-4 aspect-square"></div>
            <iframe
              src="https://www.youtube.com/embed/nOQyWbPO2Ds"
              title="What's new in Tailwind CSS v3.1?"
              frameborder="0"
              className="absolute z-10 w-full h-full px-10 rounded-lg aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-around mx-5 mt-5 text-center">
        <h1>
          sponsors <br /> here
        </h1>
        <h1>
          sponsors <br /> here
        </h1>
        <h1>
          sponsors <br /> here
        </h1>
        <h1>
          sponsors <br /> here
        </h1>
        <h1>
          sponsors <br /> here
        </h1>
        <h1>
          sponsors <br /> here
        </h1>
        <h1>
          sponsors <br /> here
        </h1>
      </div> */}
    </div>
  );
}
