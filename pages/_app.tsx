import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link, { LinkProps } from "next/link";
import {
  PrismicProvider,
  PrismicLink,
  LinkProps as LinkPropsPrismic,
  JSXMapSerializer,
  JSXFunctionSerializer,
} from "@prismicio/react";
import "../styles/dist.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, linkResolver } from "../prismicio";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const NextLinkShim = ({
  href,
  locale,
  children,
  ...props
}: LinkProps & LinkPropsPrismic) => {
  return (
    <Link href={href} locale={locale} {...props}>
      {children}
    </Link>
  );
};

const richTextComponents: JSXMapSerializer | JSXFunctionSerializer = {
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-1 "
    >
      {children}
    </PrismicLink>
  ),
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={NextLinkShim}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
