import { NavbarDocument } from "../.slicemachine/prismicio";
import { PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar({ navbar }: { navbar: NavbarDocument }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <nav className="flex gap-6 md:gap-20 px-4 py-2 md:py-6 container m-auto justify-between">
      <div className="w-34 md:w-56 flex content-center items-center">
        <PrismicLink field={navbar?.data?.home_link}>
          <PrismicNextImage
            field={navbar?.data?.logo}
            className="dark:invert w-48 md:w-72 h-auto"
          />
        </PrismicLink>
      </div>
      <div className="flex content-center items-center text-[0.5rem] md:text-xs dark:text-gray-200">
        <p className="text-shadow-black dark:text-shadow-white w-full text-center">
          {navbar?.data?.title}
        </p>
      </div>
      <div className="flex content-center items-center justify-end w-10">
        <ThemeToggle
          renderIcon={(theme) => {
            return (
              <PrismicNextImage
                field={
                  theme === "dark"
                    ? navbar?.data?.light_icon
                    : navbar?.data?.dark_icon
                }
                width="15"
                className="dark:invert -rotate-45 dark:rotate-0"
              />
            );
          }}
        />
      </div>
    </nav>
  );
}
