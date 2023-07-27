import "@/styles/globals.css";

import { PrismicPreview } from "@prismicio/next";

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
    <Heading as="h1" size="6xl" className="mb-8  last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="2xl" className="mb-2  last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" className="mb-2  text-xl last:mb-0">
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
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 1.0 }}
        variants={{
          initialState: { opacity: 1, zIndex: 99999999 },
          animateState: { opacity: 0, zIndex: -99999999 },
          exitState: { opacity: 1, zIndex: 99999999 },
        }}
        className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-primary"
      >
        <motion.img
        key={router.route+"c"}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          variants={{
            initialState: { opacity: 0 },
            animateState: { opacity: 1 },
            exitState: { opacity: 0 },
          }}
          transition={{ duration: 0.5, delay: 1 }}
          src={logo.src}
          className="max-h-40 max-w-xs"
        />
      </motion.div>
      <motion.div
        key={router.route + "a"}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 1.0 }}
        variants={{
          initialState: { opacity: 0 },
          animateState: { opacity: 1 },
          exitState: { opacity: 0 },
        }}
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
