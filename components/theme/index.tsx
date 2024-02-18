import React from "react";
import { themeData } from "../../data/themeData";
import Theme from "./Theme";

const Themes = () => {
    return (
        <section className="my-20" id="themes">
            <div className="2xl:container ">
                <h1 className="tracking-wider text-center uppercase text-8xl font-harry-font">
                    themes
                </h1>

                <div className="flex flex-wrap justify-center gap-8 p-8">
                    {themeData.map((theme, idx) => {
                        return <Theme {...theme} key={idx} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Themes;
