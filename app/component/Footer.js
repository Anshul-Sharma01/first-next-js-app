import React from "react";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="flex justify-around text-xs bg-slate-800 text-white py-4">
            <div className="text-center">Copyright &copy; Facebook | All rights reserved</div>
            <ul className="flex gap-2 text-sm">
                <Link href="/" className="text-xs">Home</Link>
                <Link href="/about " className="text-xs">About</Link>
                <Link href="/contact" className="text-xs">Contact</Link>
            </ul>
        </footer>
    )
}



export default Footer;

