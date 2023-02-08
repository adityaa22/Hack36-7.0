import Head from "next/head";

export default function sponsor() {
  return (
    <>
    <div className="container">
      <h1 className="text-center">Sponsor</h1>
    </div>
      <div className="container">
        <h1 className="text-center">Title Sponsor</h1>
      </div>

      <div className="container">
        <h1 className="text-center">Terra Sponsor</h1>
      </div>

      <div className="container">
        <h1 className="text-center">Giga Sponsor</h1>
        <div className="flex justify-around">
          <div><img src="./sponsor/Devfolio_Logo-Colored.png"></img></div>
          <div><img src="./sponsor/Polygon_Logo-Colored.png"></img></div>     
        </div>
      </div>

      <div className="container">
        <h1 className="text-center">Mega Sponsor</h1>
        <div className="flex justify-center">
          <div>
          <img
            className="w-full h-full"
            src="./sponsor/Filecoin Coloured White Text-1.png"
          ></img>
          </div>
          <div>
          <img className="w-full h-full" src="./sponsor/Solana-Colored.png"></img>
          </div>
          <div>
          <img
            className="w-full h-full"
            src="./sponsor/Replit-light-background.png"
          ></img>
          </div>
        </div>
      </div>
    </>
  );
}
