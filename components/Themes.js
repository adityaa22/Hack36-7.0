import Image from "next/image";
import ThemeCard from "../public/theme-card.png";
export default function Themes() {
  return (
    <section className="mt-20">
      <div className="container">
        <h1 className="font-bold text-center uppercase text-8xl ">themes</h1>

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
