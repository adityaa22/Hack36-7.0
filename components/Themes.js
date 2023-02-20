import Image from "next/image";
import ThemeCard from "../public/theme-card.png";
export default function Themes() {
  return (
    <section className="mt-20" id="themes">
      <div className="2xl:container ">
        <h1 className="tracking-wider text-center uppercase text-8xl font-harry-font">
          themes
        </h1>

        <div className="flex flex-wrap justify-around">
          <Image src={ThemeCard} width={400} />
          <Image src={ThemeCard} width={400} />
          <Image src={ThemeCard} width={400} />
          <Image src={ThemeCard} width={400} />
          <Image src={ThemeCard} width={400} />
        </div>
      </div>
    </section>
  );
}
