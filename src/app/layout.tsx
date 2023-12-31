import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Display, Permanent_Marker } from "next/font/google";
import { AppProvider } from "@/lib/context";
import Footer from "@/components/Footer";
import HomeSectionEight from "@/components/HomeSectionEight";

const redHatDispaly = Red_Hat_Display({
  weight: ["500", "300", "400"],
  subsets: ["latin"],
});
const parmanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--parmanentMarker",
});
export const metadata: Metadata = {
  title: "Fitnesso",
  description: "Fitness App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${redHatDispaly.className} ${parmanentMarker.variable}  text-[#081158] `}
      >
        <AppProvider>
          <Navbar />
          {children}
          <HomeSectionEight />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
