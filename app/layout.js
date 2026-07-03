import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageBackground from "./components/page-background";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tech",
});
   export const metadata = {
  title: "CSS Society",
  description: "Computer Science Society",
  icons: {
    icon: "https://res.cloudinary.com/dp4sknsba/image/upload/v1760078712/Untitled_design_xzhopc.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#030303] text-white">
        <PageBackground />

        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}