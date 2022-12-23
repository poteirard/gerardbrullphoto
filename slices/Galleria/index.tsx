import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

export type TextProps = SliceComponentProps<Content.ContentSlice>;

const Content = ({ slice }: TextProps) => {
  return (
    <div className="galleria-images">
      {slice.items.map((item, key) => (
        <div key={key}>
          <PrismicNextImage
            field={item.image}
            width={2000}
            className="snap-start rounded-xl object-cover w-full h-full dark:shadow-[0_0_30px_-15px_rgba(0,0,0,0.1)] dark:shadow-cyan-600"
            imgixParams={{
              mark: "https://assets.imgix.net/~text?w=500&txt-color=fff&txt=Copyright Gerard Brull Photo&txt-size=30&txt-lead=0&txt-pad=20&bg=80002228&txt-font=Avenir-Heavy",
              markAlign: ["bottom", "center"],
              markAlpha: 50,
              markFit: "crop",
              markPad: 20,
              markScale: 40,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Content;
