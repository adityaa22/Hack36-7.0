import TrackPrize from "./TrackPrize";
import trackPrizeData from "../../data/trackPrizeData";
import { useState } from "react";

const TrackPrizes = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <section className="Track">
            <div className="2xl:container">
                <div
                    className={`flex flex-wrap justify-center gap-4 mx-4 mt-12 overflow-hidden transition-all gap-y-8 ${showMore ? "h-auto" : "h-96"
                        } `}
                >
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
                <p className="text-center">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="inline-block px-4 py-2 mx-auto mt-4 text-gray-100 transition-all bg-gray-800 rounded-md cursor-pointer hover:bg-gray-900 capitatext-center"
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </p>
            </div>
        </section>
    );
};

export default TrackPrizes;
