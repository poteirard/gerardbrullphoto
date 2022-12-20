import { SliceZone, SliceZoneProps } from "@prismicio/react";
import { components } from "../slices";

interface GalleriasLayoutLayoutProps {
  slices: SliceZoneProps["slices"];
}

export function GalleriasLayout({ slices }: GalleriasLayoutLayoutProps) {
  return (
    <>
      <div className="grid md:flex shrink-0 space-between w-full h-full">
        <SliceZone slices={slices} components={components} />
      </div>
      <div className="container mx-auto px-4">
        <SliceZone slices={slices} components={components} />
      </div>
    </>
  );
}
