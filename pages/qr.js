import Head from "next/head";
import { Main } from "next/document";
import { useEffect, useState } from "react";



export default function qr() {

  const [board,setBoard] = useState([["1","2","3"],["4","5","6"],["7","8","9"]])

  useEffect(()=>{
    let b=[["1","2","3"],["4","5","6"],["7","8","9"]];
    setBoard(b);
    console.log(board);
  },[])
  const swap = (e) => {
    console.log(e.target.textContent);
  }
  
  return (
    <>
      <Head>
        {/* <meta
          http-equiv="refresh"
          content="3;url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        /> */}
      </Head>
      
       <div className="grid grid-cols-3 gap-4 py-20 mx-auto text-white w-96">
        {  board &&   
        (<>
        <div className="h-24 border-2 border-gray-300 rounded dark:border-gray-700" onClick={swap}>{board[0][0]}</div>
        <div className="h-24 border-2 border-gray-300 rounded dark:border-gray-700" onClick={swap}>2</div>
        <div className="h-24 border-2 border-gray-300 rounded dark:border-gray-700" onClick={swap}>3</div>
        <div className="h-24 border-2 border-gray-300 rounded dark:border-gray-700" onClick={swap}>4</div>
        <div className="h-24 border-2 border-gray-300 rounded dark:border-gray-700" onClick={swap}>5</div>
        <div className="h-24 border-2 border-gray-300 rounded dark:border-gray-700" onClick={swap}>6</div>
        <div className="h-24 border-2 border-gray-300 rounded dark:border-gray-700" onClick={swap}>7</div>
        <div className="h-24 border-2 border-gray-300 rounded dark:border-gray-700" onClick={swap}>8</div>
        <div className="h-24 border-2 border-gray-300 rounded dark:border-gray-700" onClick={swap}>{board[2][2]}</div>
        </>)
        }
      
       </div>
      
    </>
  );
}
