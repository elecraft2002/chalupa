import "@/styles/globals.css";

import { PrismicPreview } from "@prismicio/next";

import { repositoryName, linkResolver } from "@/prismicio";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import Link from "next/link";
import { Heading } from "@/components/Heading";
import { ParallaxProvider } from "react-scroll-parallax";

const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h2" size="6xl" className="mb-8 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h3" size="2xl" className="mb-2 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={Link}
      linkResolver={linkResolver}
      richTextComponents={richTextComponents}
    >
      <ParallaxProvider>
        <Component {...pageProps} />
        <PrismicPreview repositoryName={repositoryName} />
      </ParallaxProvider>
    </PrismicProvider>
  );
}
