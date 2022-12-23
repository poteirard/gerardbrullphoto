import { ReactNode } from "react";
import { Gantari } from "@next/font/google";
import { FooterDocument, NavbarDocument } from "../.slicemachine/prismicio";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AlternateLanguage } from "@prismicio/types";

interface LayoutProps {
  children: ReactNode;
  navbar: NavbarDocument;
  footer: FooterDocument;
  altLangs: AlternateLanguage[];
}

const gantari = Gantari({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const Layout = ({ children, navbar, footer, altLangs }: LayoutProps) => {
  return (
    <div className={`${gantari.variable} font-sans`}>
      <Navbar navbar={navbar} altLangs={altLangs} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
};
