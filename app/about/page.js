import React from "react";

export const metadata = {
    title: "About Page",
    description: "This is a page for about section",
};

const about = () => {
    return(
        <>
            <h1 className="text-xl">
                Problems solved by Next.js
                <ul>
                    <li>Full Stack Solution</li>
                    <li>File Based Routing</li>
                    <li>Additional features like router from react/navigation</li>
                    <li>Optimized rendering</li>
                </ul>
            </h1>
        </>
    )
}


export default about;
