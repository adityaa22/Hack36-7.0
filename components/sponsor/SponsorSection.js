import { SponsorCard } from "./SponsorCard";

export default function SponsorSection({ sectionName, data }) {
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-center">{sectionName}</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
          {data.map((idx,sponsor) => (
            <SponsorCard
              key={idx}
              name={sponsor.name}
              url={sponsor.url}
              imageLink={sponsor.imageLink}
            />
          ))}
        </div>
      </section>
    </>
  );
}
