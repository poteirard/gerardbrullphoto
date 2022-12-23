import React from "react";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import type { Content } from "@prismicio/client";
export type TextProps = SliceComponentProps<Content.ContentSlice>;

const CtaSection = ({ slice }: TextProps) => {
  return (
    <section className="grid  justify-center md:flex lg:px-20 xl:px-40 gap-20 py-10 md:py-20 ">
      <div className="flex m-auto justify-center md:block shrink-0 relative w-48 h-48">
        {slice?.primary?.image ? (
          <PrismicImage
            field={slice.primary.image}
            width={200}
            className="rounded-full"
          />
        ) : (
          <></>
        )}
        <span className="absolute top-0 right-0 left-0 h-full w-full shadow-2xl shadow-purple-400 rounded-full animate-pulse" />
      </div>
      <div className="">
        <h3 className="text-3xl pb-4 ">{slice?.primary?.title}</h3>
        {slice?.primary?.description ? (
          <div className="text-sm text-justify">
            <PrismicRichText
              field={slice?.primary?.description}
              components={{
                paragraph: ({ children }) => <p className="py-2">{children}</p>,
              }}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default CtaSection;
