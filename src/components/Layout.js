import { Header } from "./Header";
import { Footer } from "./Footer";
import Background  from "./Background"
export function Layout({ locales, navigation, settings, children }) {
  return (
    <div className="text-slate-800">
      <Background />
      <Header locales={locales} navigation={navigation} settings={settings} />
      <main className="mt-16">{children}</main>
      <Footer settings={settings} navigation={navigation} />
    </div>
  );
}
