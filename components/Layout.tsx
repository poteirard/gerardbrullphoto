import { ReactNode } from "react";
import { Gantari } from "@next/font/google";
import {
  FooterDocument,
  GoHomeButtonDocument,
  NavbarDocument,
} from "../.slicemachine/prismicio";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AlternateLanguage } from "@prismicio/types";
import { GoHomeButtonSection } from "./GoHomeSection";

interface LayoutProps {
  children: ReactNode;
  navbar: NavbarDocument;
  footer: FooterDocument;
  altLangs: AlternateLanguage[];
  goHomeButton?: GoHomeButtonDocument;
}

const gantari = Gantari({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const Layout = ({
  children,
  navbar,
  footer,
  altLangs,
  goHomeButton,
}: LayoutProps) => {
  return (
    <div className={`${gantari.variable} font-sans`}>
      <Navbar navbar={navbar} altLangs={altLangs} />
      <main>
        {children}
        {goHomeButton ? (
          <GoHomeButtonSection goHomeButton={goHomeButton} />
        ) : (
          <></>
        )}
      </main>
      <Footer footer={footer} />
    </div>
  );
};
