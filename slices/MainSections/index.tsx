import React from "react";
import {
  PrismicLink,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

export type TextProps = SliceComponentProps<Content.ContentSlice>;

const MainSections = ({ slice }: TextProps) => {
  return (
    <section className="relative w-full flex flex-wrap items-center content-center group hover:shadow-2xl dark:hover:shadow-blue-400 hover:shadow-gray-400">
      <PrismicLink document={slice.primary.link}>
        <PrismicNextImage
          field={slice.primary.image}
          width="1000"
          height="500"
          imgixParams={{ fit: "crop", ar: "2:1" }}
          priority={true}
        />
        <div className="w-full absolute bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-60 group-hover:bg-opacity-90 bottom-2 p-1 md:p-4">
          <h2 className="tracking-wide dark:text-white text-md md:text-xl text-center">
            <PrismicText field={slice.primary.title} />
          </h2>
        </div>
      </PrismicLink>
    </section>
  );
};

export default MainSections;
