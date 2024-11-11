// "use client"
// import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center gap-4 h-screen">
      <h1>
        {/* I am a component {count} */}
        {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button> */}
      </h1>
      <Image alt="demo-img" src="http://www.menucool.com/slider/prod/image-slider-3.jpg" width={800} height={800} />
    </div>
  );
}
