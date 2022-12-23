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
    <section className="grid justify-center md:flex justify-between gap-20 py-10 md:py-20 lg:py-32 ">
      <div className="w-40 h-40 m-auto md:m-auto md:w-1/3 md:h-1/3 lg:w-2/3 lg:h-2/3 xl:w-1/3 xl:h-1/3 relative">
        {slice?.primary?.image ? (
          <PrismicImage
            field={slice.primary.image}
            width={200}
            className="rounded-full h-full w-full  "
          />
        ) : (
          <></>
        )}
        <span className="absolute top-0 h-full w-full shadow-2xl shadow-purple-400 rounded-full animate-pulse" />
      </div>
      <div className="md:w-2/3 lg:w-auto">
        <h3 className="text-3xl pb-4 ">{slice?.primary?.title}</h3>
        {slice?.primary?.description ? (
          <div className="text-sm">
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
