import * as prismic from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import useDetectScroll from "@smakss/react-scroll-direction";

import { Bounded } from "./Bounded";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";

const localeLabels = {
  "en-us": "EN",
  "cs-cz": "CS",
  "fr-fr": "FR",
};

export function Header({ locales = [], navigation, settings }) {
  const [isOpen, setOpenState] = useState(false);
  const router = useRouter();

  const [scrollDir, setScrollDir] = useState("up");
  const [isAtTop, setTop] = useState(true);
  useEffect(() => {
    const threshold = 100;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (scrollY < 50) setTop(true);
      else setTop(false);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    window.addEventListener("scroll", updateScrollDir);

    return () => window.removeEventListener("scroll", updateScrollDir);
  }, [scrollDir]);
  return (
    <nav
      class={`fixed left-0 top-0 ${
        isAtTop && "lg:pt-12"
      } z-50 w-full overflow-hidden bg-primary/80 backdrop-blur-3xl transition-all duration-700 ${
        scrollDir === "down" && "lg:-translate-y-full"
      }`}
    >
      <div
        onClick={() => {
          setOpenState(!isOpen);
        }}
        className={`${
          !isOpen && "hidden"
        } absolute -z-10 h-screen w-screen backdrop-blur-md lg:hidden`}
      />
      <div class="mx-auto flex  flex-wrap items-center justify-between p-6 lg:grid  lg:grid-cols-[1fr_80px_1fr] xl:grid-cols-3">
        <PrismicNextLink href="/" className="h-8 w-8 lg:order-2 lg:m-auto">
          {prismic.isFilled.image(settings.data.logo) && (
            <PrismicNextImage
              field={settings.data.logo.Navigation}
              className="h-full w-full object-cover  lg:scale-[2.5]"
            />
          )}
        </PrismicNextLink>
        <div class="flex gap-4 text-[14px] lg:order-2 lg:m-auto lg:text-base">
          {prismic.isFilled.richText(navigation.data.button_text) && (
            <PrismicNextLink
              className="flex items-center"
              field={navigation.data.button_link}
            >
              <button className="rounded border border-[#F1DBA8] px-9 py-2 transition-all hover:scale-105 hover:bg-[#F1DBA8] hover:text-primary">
                <PrismicRichText field={navigation.data.button_text} />
              </button>
            </PrismicNextLink>
          )}

          <ul className="flex flex-wrap gap-3">
            {locales.map((locale) => {
              if (locale.lang === settings.lang) return null;
              return (
                <li
                  key={locale.lang}
                  className="flex items-center hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-slate-300"
                >
                  <PrismicNextLink
                    href={locale.url}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                  >
                    {locale.lang.split("-")[0].toUpperCase()}
                  </PrismicNextLink>
                </li>
              );
            })}
          </ul>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="ml-4 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2  focus:ring-gray-200 lg:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => {
              setOpenState(!isOpen);
            }}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class={`${
            !isOpen && "hidden"
          } w-full items-center justify-between lg:order-1 lg:m-auto lg:flex lg:w-auto`}
          id="navbar-sticky"
        >
          <ul class="mt-4 flex flex-col rounded-lg   p-4 font-medium   lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 ">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="text text-[14px]  tracking-tight lg:text-base"
              >
                <PrismicNextLink
                  className={`block rounded py-2 pl-3 pr-4 ${
                    router.asPath === prismic.asLink(item.link)
                      ? "text-slate-400"
                      : ""
                  } hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-slate-300`}
                  field={item.link}
                >
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
          {/* <div className="flex flex-wrap gap-3">
            <span aria-hidden={true}>🌐</span>
            <ul className="flex flex-wrap gap-3">
              {locales.map((locale) => (
                <li key={locale.lang} className="first:">
                  <PrismicNextLink
                    href={locale.url}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                  >
                    {localeLabels[locale.lang] || locale.lang}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  );
  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink href="/">
          {prismic.isFilled.image(settings.data.logo) && (
            <PrismicNextImage field={settings.data.logo} />
          )}
        </PrismicNextLink>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-10">
          <ul className="flex flex-wrap gap-6 lg:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className=" tracking-tight text-slate-800"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <span aria-hidden={true}>🌐</span>
            <ul className="flex flex-wrap gap-3">
              {locales.map((locale) => (
                <li key={locale.lang} className="first:">
                  <PrismicNextLink
                    href={locale.url}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                  >
                    {localeLabels[locale.lang] || locale.lang}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </Bounded>
  );
}
