import { PrismicLink } from "@prismicio/react";
import { GoHomeButtonDocument } from "../.slicemachine/prismicio";
import { PrismicNextImage } from "@prismicio/next";

interface GoHomeButtonSection {
  goHomeButton: GoHomeButtonDocument;
}

export function GoHomeButtonSection({ goHomeButton }: GoHomeButtonSection) {
  return (
    <section className="flex justify-center pt-4 pb-10">
      <PrismicLink
        field={goHomeButton.data.link}
        className="group button px-4 py-1 flex gap-1"
      >
        <PrismicNextImage
          field={goHomeButton.data.icon}
          className="dark:invert group-hover:animate-pulse w-5"
        />
        <span className="py-1">{goHomeButton.data.label}</span>
      </PrismicLink>
    </section>
  );
}
