import { SponsorCard } from "../components/SponsorCard";

export default function sponsor() {
  return (
    <div className="text-gray-900 bg-white">
      <div className="py-14">
        <h1 className="text-4xl font-bold text-center uppercase md:text-5xl lg:text-6xl">
          Sponsor
        </h1>
        <p className="mt-4 text-center capitalize">
          Thank you to our sponsors for believing in us and making things
          happen.
        </p>
      </div>
      <div className="space-y-10">
        <section>
          <h1 className="text-3xl font-bold text-center">Title Sponsor</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            <SponsorCard
              imgNameWithExt="Devfolio.png"
              name="Devfolio"
              link="https://devfolio.co/"
            />
            <SponsorCard
              imgNameWithExt="Filecoin.png"
              name="FileCoin"
              link="https://filecoin.io/"
            />
            <SponsorCard
              imgNameWithExt="Polygon.png"
              name="Polygon"
              link="https://polygon.technology/"
            />
            <SponsorCard
              imgNameWithExt="Replit.png"
              name="Replit"
              link="https://replit.com/"
            />
            <SponsorCard
              imgNameWithExt="Solana.png"
              name="Solana"
              link="https://solana.com/"
            />
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold text-center">Terra Sponsor</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            <SponsorCard
              imgNameWithExt="Devfolio.png"
              name="Devfolio"
              link="https://devfolio.co/"
            />
            <SponsorCard
              imgNameWithExt="Filecoin.png"
              name="FileCoin"
              link="https://filecoin.io/"
            />
            <SponsorCard
              imgNameWithExt="Polygon.png"
              name="Polygon"
              link="https://polygon.technology/"
            />
            <SponsorCard
              imgNameWithExt="Replit.png"
              name="Replit"
              link="https://replit.com/"
            />
            <SponsorCard
              imgNameWithExt="Solana.png"
              name="Solana"
              link="https://solana.com/"
            />
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold text-center">Giga Sponsor</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            <SponsorCard
              imgNameWithExt="Devfolio.png"
              name="Devfolio"
              link="https://devfolio.co/"
            />
            <SponsorCard
              imgNameWithExt="Filecoin.png"
              name="FileCoin"
              link="https://filecoin.io/"
            />
            <SponsorCard
              imgNameWithExt="Polygon.png"
              name="Polygon"
              link="https://polygon.technology/"
            />
            <SponsorCard
              imgNameWithExt="Replit.png"
              name="Replit"
              link="https://replit.com/"
            />
            <SponsorCard
              imgNameWithExt="Solana.png"
              name="Solana"
              link="https://solana.com/"
            />
          </div>
        </section>
        <section>
          <h1 className="text-3xl font-bold text-center">Mega Sponsor</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            <SponsorCard
              imgNameWithExt="Devfolio.png"
              name="Devfolio"
              link="https://devfolio.co/"
            />
            <SponsorCard
              imgNameWithExt="Filecoin.png"
              name="FileCoin"
              link="https://filecoin.io/"
            />
            <SponsorCard
              imgNameWithExt="Polygon.png"
              name="Polygon"
              link="https://polygon.technology/"
            />
            <SponsorCard
              imgNameWithExt="Replit.png"
              name="Replit"
              link="https://replit.com/"
            />
            <SponsorCard
              imgNameWithExt="Solana.png"
              name="Solana"
              link="https://solana.com/"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
