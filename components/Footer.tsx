import { FooterDocument } from "../.slicemachine/prismicio";

export function Footer({ footer }: { footer: FooterDocument }) {
  return (
    <footer className="flex gap-6 md:gap-20 px-4 py-2 md:pb-6 md:pt-16 container m-auto justify-between">
      <p className="text-xs dark:text-gray-100">
        {footer?.data.copyright_text}
      </p>
    </footer>
  );
}
