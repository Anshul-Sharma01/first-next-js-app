import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blog",
  description: "I am a blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="container mx-auto min-h-[85vh]">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
