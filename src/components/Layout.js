import { Header } from "./Header";
import { Footer } from "./Footer";
import Background from "./Background";
import CookieConsent from "react-cookie-consent";
import { PrismicRichText } from "@prismicio/react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/router";

export function Layout({ locales, navigation, settings, children }) {
  // const router = useRouter();
  // key={router.asPath}
  return (
    <div className="text-secondary ">
      <Background />
      <Header locales={locales} navigation={navigation} settings={settings} />
      {/* <motion.main
        key={router.asPath}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-16"
      > */}
      <main className="mt-16">{children}</main>
      {/* </motion.main> */}
      <Footer settings={settings} navigation={navigation} />
      <CookieConsent buttonText={settings.data.cookies_button}>
        <PrismicRichText field={settings.data.cookies} />
      </CookieConsent>
    </div>
  );
}
