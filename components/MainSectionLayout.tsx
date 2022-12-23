import { SliceZone, SliceZoneProps } from "@prismicio/react";
import { components } from "../slices";
import Link from "next/link";

interface MainSectionLayoutProps {
  slices: SliceZoneProps["slices"];
}

export function MainSectionLayout({ slices }: MainSectionLayoutProps) {
  let restSlices: SliceZoneProps["slices"] = [];
  const mainSectionSlices = slices?.filter((slice: any) => {
    if (slice.slice_type !== "main_sections") {
      (restSlices as any)?.push(slice);
      return false;
    }
    return true;
  });
  return (
    <>
      <div className="container mx-auto grid md:flex shrink-0 space-between w-full h-full">
        <SliceZone slices={mainSectionSlices} components={components} />
      </div>
      <div className="container mx-auto px-4">
        <SliceZone
          slices={restSlices.length ? restSlices : undefined}
          components={components}
        />
      </div>
    </>
  );
}
