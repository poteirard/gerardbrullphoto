import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import type { Content } from "@prismicio/client";

export type TextProps = SliceComponentProps<Content.ContentSlice>;

const Content = ({ slice }: TextProps) => {
  console.log(slice.primary.title);
  return (
    <section>
      <span className="title">
        <h2>Template slice, update me!</h2>
      </span>
      <p>start by editing this slice fro m inside Slice Machine!</p>
    </section>
  );
};

export default Content;
