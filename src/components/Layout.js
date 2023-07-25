import { Header } from "./Header";
import { Footer } from "./Footer";
import Background from "./Background";
import CookieConsent from "react-cookie-consent";
import { PrismicRichText } from "@prismicio/react";

export function Layout({ locales, navigation, settings, children }) {
  return (
    <div className="text-secondary ">
      <Background />
      <Header locales={locales} navigation={navigation} settings={settings} />
      <main className="mt-16">{children}</main>
      <Footer settings={settings} navigation={navigation} />
      <CookieConsent buttonText={settings.data.cookies_button}>
        <PrismicRichText field={settings.data.cookies} />
      </CookieConsent>
    </div>
  );
}
