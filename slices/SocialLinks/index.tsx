import React from "react";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage, LinkField } from "@prismicio/types";

export type TextProps = SliceComponentProps<Content.ContentSlice>;

interface SocialImageProps {
  prismicLink: LinkField;
  prismicImage: ImageFieldImage;
}

type Logos = SocialImageProps[];

const SocialImage = ({ prismicLink, prismicImage }: SocialImageProps) => (
  <PrismicLink
    field={prismicLink}
    className="underline decoration-1 underline-offset-1 "
  >
    <PrismicNextImage field={prismicImage} width="40" className="dark:invert" />
  </PrismicLink>
);

const SocialLinks = ({ slice }: TextProps) => {
  const logos = Object.keys(slice?.primary).reduce<Logos>(
    (previousValue, currentValue) => {
      if (currentValue.includes("_logo")) {
        const logoName = currentValue;
        const linkName = currentValue.replace("_logo", "");
        previousValue.push({
          prismicImage: slice.primary[logoName],
          prismicLink: slice.primary[linkName],
        });
      }
      return previousValue;
    },
    []
  );
  return (
    <section className="container m-auto ">
      <h3 className="text-center pt-2 pb-4 text-2xl text-shadow-white">
        {slice?.primary.title}
      </h3>
      <p className="text-center">{slice?.primary.description}</p>
      <div className="flex gap-4 content-center w-full justify-center py-6">
        {logos.map((logo, key) => (
          <SocialImage
            key={key}
            prismicImage={logo.prismicImage}
            prismicLink={logo.prismicLink}
          />
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
