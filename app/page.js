"use client"
// // import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Home() {
//   // const [count, setCount] = useState(0);

//   const handleClick = async() => {
//     let data = {
//       name : "Anshul",
//       role : "Coder"
//     }
//     let a = await fetch("/api/add", {
//       method : "POST", headers : {
//         "Content-Type" : "application/json"
//       },
//       body : JSON.stringify(data),
//     })
//     let res = await a.json();
//     console.log(res);

//   }

//   return (
//     // <div className="flex justify-center items-center gap-4 h-screen">
//     //   <h1>
//     //     {/* I am a component {count} */}
//     //     {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button> */}
//     //   </h1>
//     //   <Image alt="demo-img" src="http://www.menucool.com/slider/prod/image-slider-3.jpg" width={800} height={800} />
//     // </div>
//     <>
//       <h1 className="text-xl font-bold">Next.js API Routes Demo</h1>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }

import { useRef } from "react"
import { submitAction } from "./actions/form"
// "use client"

export default function Home(){

  let ref = useRef();

  return(
    <div className="flex justify-center items-center h-[100vh]">
      <form action={(e) => {submitAction(e); ref.current.reset()}} ref={ref}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="text-white" name="name" id="name" />
        </div>
        <br/>
        <div>
          <label htmlFor="add">Address</label>
          <input type="text" className="text-white" name="address" id="add" />
        </div>
        <br/>
        <button className="bg-slate-300 border border-white px-4 py-2 text-black">
          Submit
        </button>
      </form>
    </div>
  )
}








