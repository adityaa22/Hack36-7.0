import TrackPrize from "./TrackPrize";
import trackPrizeData from "../../data/trackPrizeData";
const TrackPrizes = () => {
  return (
    <section className="Track">
      <div className="2xl:container">
        <div className="flex flex-wrap justify-center gap-4 mx-4 mt-12 gap-y-8">
          {trackPrizeData.map((prize, idx) => {
            return (
              <TrackPrize
                key={idx}
                mainText={prize.prize}
                imgSrc={prize.imageUrl}
                imgAlt={prize.companyName}
                bottomText={prize.eligibility}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrackPrizes;
