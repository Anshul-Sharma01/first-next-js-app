import React from "react";
import Script from "next/script";

export const metadata = {
    title: "Contact",
    description: "This is a page for contact section",
};

const contact = () => {
    return(
        <div>
            <Script>
                {`alert("Welcome to Contact Page")`}
            </Script>
            I am contact page
        </div>
    )
}

export default contact;
