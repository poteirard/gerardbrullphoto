import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import type { Content } from "@prismicio/client";

export type TextProps = SliceComponentProps<Content.ContentSlice>;

const Content = ({ slice }: TextProps) => (
  <section>
    <span className="title">
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice fro m inside Slice Machine!</p>
    )}
  </section>
);

export default Content;
