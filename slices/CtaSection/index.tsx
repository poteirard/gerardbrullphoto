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
    <section className="container m-auto grid justify-center  md:flex gap-10 py-20">
      {slice?.primary?.image ? (
        <PrismicImage
          field={slice.primary.image}
          width={150}
          className="rounded-full md:h-56 md:w-56 shadow-2xl shadow-purple-400 m-auto"
        />
      ) : (
        <></>
      )}
      <div>
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
