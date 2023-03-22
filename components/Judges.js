import Image from "next/image";
import Witch from "../public/witch.png";
import Akhilesh_Singh from "../public/Judges/Akhilesh_Singh.jpeg"; 

export default function Judges() {
  return (
    <section className="judges">
      <div className="2xl:container  bg-[url('/magicroom.jpg')]  bg-cover bg-bottom">
        <h1 className="font-bold tracking-wider text-center uppercase text-8xl font-harry-font">
          Judges
        </h1>

        <div className="flex flex-wrap justify-around gap-3 py-20 ">
          <Image src={Akhilesh_Singh} width={250} />
          {/* <Image src={Witch} width={250} />
          <Image src={Witch} width={250} />
          <Image src={Witch} width={250} /> */}
        </div>
      </div>
    </section>
  );
}
