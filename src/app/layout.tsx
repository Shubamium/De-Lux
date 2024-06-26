import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.scss";
import localFont from "next/font/local";
import { CSSProperties } from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Loading from "./layout/loading/Loading";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jqka = localFont({ src: "./fonts/jqka.ttf" });
const title = "De♧Lux";

const description =
  "Two girls are brought together in a world full of mirrors each on different sides; one above and the other below. De♧Lux is a virtual idol duo comprised of Irene & Caspy. De♧Lux’s main focus is to create original music with a mix of J-POP & K-POP elements, along with lore infused storylines.";
const banner = "https://i.ibb.co.com/bNVk3pT/Banner-2.png";
const url = "https://delux.com";

export const metadata: Metadata = {
  title: title,

  metadataBase: new URL(url),

  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  description: description,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jqka.className}
        style={
          {
            "--fontMain": jqka.style.fontFamily,
            "--fontAlt": fredoka.style.fontFamily,
          } as CSSProperties
        }
      >
        <Loading />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
