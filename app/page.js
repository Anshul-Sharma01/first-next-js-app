"use client"
// import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // const [count, setCount] = useState(0);

  const handleClick = async() => {
    let data = {
      name : "Anshul",
      role : "Coder"
    }
    let a = await fetch("/api/add", {
      method : "POST", headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data),
    })
    let res = await a.json();
    console.log(res);

  }

  return (
    // <div className="flex justify-center items-center gap-4 h-screen">
    //   <h1>
    //     {/* I am a component {count} */}
    //     {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button> */}
    //   </h1>
    //   <Image alt="demo-img" src="http://www.menucool.com/slider/prod/image-slider-3.jpg" width={800} height={800} />
    // </div>
    <>
      <h1 className="text-xl font-bold">Next.js API Routes Demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}
