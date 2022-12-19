import { ReactNode } from "react";
import { Gantari } from "@next/font/google";
import { NavbarDocument } from "../.slicemachine/prismicio";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  navbar: NavbarDocument;
}

const gantari = Gantari({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const Layout = ({ children, navbar }: LayoutProps) => {
  return (
    <div className={`${gantari.variable} font-sans`}>
      <Navbar navbar={navbar} />
      <main>{children}</main>
    </div>
  );
};
