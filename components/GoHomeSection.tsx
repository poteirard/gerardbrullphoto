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
        className="group bg-gray-400  hover:bg-opacity-20 bg-opacity-10 dark:bg-opacity-30 dark:hover:bg-opacity-50 px-4 py-1 rounded-xl flex gap-1"
      >
        <PrismicNextImage
          field={goHomeButton.data.icon}
          className="dark:invert group-hover:animate-pulse"
        />
        <span className="py-1">{goHomeButton.data.label}</span>
      </PrismicLink>
    </section>
  );
}
