import React from 'react'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import {Content} from "@prismicio/client";
import {PrismicNextImage} from "@prismicio/next";

export type TextProps = SliceComponentProps<Content.ContentSlice>

const MainSections = ({ slice }: TextProps) => {
    console.log({slice})
    return (
        <section>
        <span className="title">
          {
              slice.primary.title ?
                  <PrismicRichText field={slice.primary.title}/>
                  : <h2>Template slice, update me!</h2>
          }
        </span>
            {
                slice.primary.description ?
                    <PrismicRichText field={slice.primary.description}/>
                    : <p>start by editing this slice from inside Slice Machine!</p>
            }
            <PrismicNextImage
                className="m-24"
                field={slice.primary.image}
            />
        </section>
    );
}

export default MainSections