import Image from "next/image";
import Link from "next/link";
import HACKNAVLOGO from "../public/Hack36-01.png";
import { useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-black ">
            <div className="2xl:container ">
                <div className="flex items-center p-2 mx-5 rounded-b-lg">
                    <Link href="/">
                        <Image src={HACKNAVLOGO} alt="hack36 logo" width={50} height={50} />
                    </Link>
                    <div className="md:hidden right-2 absolute">
                        <button
                            className="navbar-burger flex items-center text-blue-600 p-3"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className="block h-4 w-4 fill-current"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="justify-between hidden w-2/5 mx-auto text-xs font-bold uppercase md:flex ">
                        <Link href="/#about">
                            <li>About</li>
                        </Link>
                        <Link href="/#prizes">
                            <li>Prizes</li>
                        </Link>
                        <Link href="/#faq">
                            <li>Faq</li>
                        </Link>
                        <Link href="/sponsor">
                            <li>Sponsor</li>
                        </Link>
                        <Link href="/team">
                            <li>Team</li>
                        </Link>
                    </ul>
                </div>
                <ul
                    className={`w-full p-2 space-y-12 text-xs font-bold text-center uppercase transition-all duration-500 ${isOpen ? "h-full" : "hidden"
                        }`}
                >
                    <Link href="/#about">
                        <li className="p-2 border border-white">About</li>
                    </Link>
                    <Link href="/#prizes">
                        <li className="p-2 border border-white">Prizes</li>
                    </Link>
                    <Link href="/#faq">
                        <li className="p-2 border border-white">Faq</li>
                    </Link>
                    <Link href="/sponsor">
                        <li className="p-2 border border-white">Sponsors</li>
                    </Link>
                    <Link href="/team">
                        <li className="p-2 border border-white">Team</li>
                    </Link>
                </ul>
                <div className="sticky top-0 z-50">
                    <a
                        id="mlh-trust-badge"
                        style={{
                            display: "inline-block",
                            maxWidth: "100px",
                            minWidth: "60px",
                            // position: "fixed",
                            // right: "50px",

                            width: "10%",
                            zIndex: 10000,
                        }}
                        href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=black"
                        target="_blank"
                        rel="noreferrer"
                        className="absolute self-end top- md:fixed right-1 md:top-0 md:right-12"
                    >
                        {" "}
                        <img
                            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-red.svg"
                            alt="Major League Hacking 2023 Hackathon Season"
                            style={{ width: "100%" }}
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}
