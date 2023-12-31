import "@/styles/globals.css";

import { PrismicNextLink, PrismicPreview } from "@prismicio/next";

import { repositoryName, linkResolver } from "@/prismicio";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import Link from "next/link";
import { Heading } from "@/components/Heading";
import { ParallaxProvider } from "react-scroll-parallax";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import logo from "@/assets/img/logo.png";

const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h1" size="8xl" className="mb-8 font-title last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <h2 className="mb-2 font-title text-3xl  last:mb-0">{children}</h2>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="2xl" className="mb-2  text-xl last:mb-0">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" className="mb-2  text-lg last:mb-0">
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading as="h5" className="mb-2  text-base last:mb-0">
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
    <pre className="mb-7 rounded p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // console.log(router.asPath)
  // key={router.asPath}
  return (
    <AnimatePresence /* mode="wait" */>
      {/* <motion.img
        key={router.asPath + "img"}
        src={logo.src}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2 }}
        className="opacity-0"
      /> */}
      <motion.div
        key={router.asPath + "main"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
        // onTransitionEndCapture={()=>console.log("Ahoj")}
      >
        <PrismicProvider
          internalLinkComponent={Link}
          linkResolver={linkResolver}
          richTextComponents={richTextComponents}
        >
          <ParallaxProvider>
            <Component {...pageProps} />
            <GoogleAnalytics trackPageViews />
            <PrismicPreview repositoryName={repositoryName} />
          </ParallaxProvider>
        </PrismicProvider>
      </motion.div>
    </AnimatePresence>
  );
}
