import Image from "next/image";
import HACKNAVLOGO from "../public/Hack36-01.png";

export default function Nav() {
  return (
    <nav className="container">
      <div className="flex items-center p-1 mx-5 rounded-b-lg ">
        <Image src={HACKNAVLOGO} alt="hack36 logo" width={50} height={50} />
        <ul className="flex justify-between mx-auto space-x-5 font-bold uppercase">
          <a href="#about"><li>About</li></a>
          <a href="#prizes"><li>Prizes</li></a>
          <a href="/sponsor"><li>Sponsor</li></a>
          <a href="/team"><li>Team</li></a>
          <a href="/faq"><li>FAQ</li></a>
          <a href="#themes"><li>Themes</li></a>    
        </ul>
        <a
          id="mlh-trust-badge"
          style={{
            display: "block",
            maxWidth: "100px",
            minWidth: "60px",
            position: "fixed",
            right: "50px",
            top: 0,
            width: "10%",
            "z-index": "10000",
          }}
          href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=black"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-red.svg"
            alt="Major League Hacking 2023 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a>
      </div>
    </nav>
  );
}
