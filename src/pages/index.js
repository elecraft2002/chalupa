import Head from "next/head";
import { PrismicLink, PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { components } from "@/slices/";
import { Layout } from "@/components/Layout";
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/Button";
import Play from "@/assets/svg/Play";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Article from "@/components/Article";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import image0 from "@/assets/img/parallax/chalupa-0.jpg";
import { useState } from "react";
import { interpolate } from "@/functions/interpolate";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Parallax = ({ page }) => {
  const [progress, updateProgress] = useState(0);
  const width = interpolate(progress, [0, 0.5, 1], [-110, 100, 100]);
  const height = interpolate(progress, [0, 0.5, 1], [-30, 100, 100]);
  return (
    <ParallaxBanner className="h-[200vh] w-screen">
      <ParallaxBannerLayer
        className="flex h-screen w-screen items-center justify-center"
        onProgressChange={(e) => updateProgress(e)}
        translateY={["-100vh", "200vh"]}
      >
        <Fade
          triggerOnce
          style={{ width: `${width}vw`, height: `${height}vh` }}
          className="overflow-hidden"
        >
          <Image
            {...image0}
            className="h-full w-full object-cover"
          />
        </Fade>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        className="flex h-screen w-screen items-center justify-center"
        translateY={["-100vh", "200vh"]}
      >
        <Fade delay={500} triggerOnce>
          <PrismicRichText
            components={{
              paragraph: (paragraph) => (
                <h1 className="text-xl uppercase sm:text-4xl xl:text-8xl">
                  {paragraph.children}
                </h1>
              ),
            }}
            field={page.data.title}
          />
        </Fade>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default function Home({
  page,
  navigation,
  settings,
  locales,
  reviews,
  trips,
  bookings,
}) {
  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <Head>
        {
          <title>
            {prismic.isFilled.richText(page.data.meta_title)
              ? page.data.meta_title
              : prismic.asText(page.data.title)}
          </title>
        }
        <meta
          name="description"
          content={prismic.asText(page.data.meta_description)}
        />
        <link
          rel="icon"
          href={prismic.asImageSrc(settings.data.logo.Icon)}
          sizes="any"
        />
        <meta
          property="og:title"
          content={
            prismic.isFilled.richText(page.data.meta_title)
              ? page.data.meta_title
              : prismic.asText(page.data.title)
          }
        />
        <meta
          property="og:description"
          content={prismic.asText(page.data.meta_description)}
        />
        <meta
          property="og:image"
          content={prismic.asImageSrc(settings.data.logo)}
        />
      </Head>
      {/* <ParallaxBanner className="h-screen w-screen">
        <ParallaxBannerLayer
          className="h-screen w-screen"
          image={image0.src}
          translateY={["-80vh", "80vh"]}
        />
        <ParallaxBannerLayer
          className="h-screen w-screen"
          image={image1.src}
          translateY={["-50vh", "50vh"]}
        />
        <ParallaxBannerLayer translateY={["-70vh", "70vh"]}>
          <div className="flex h-screen w-screen items-center justify-center">
            <h1 className="text-4xl font-bold text-slate-100">Chalupa</h1>
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer
          className="h-screen w-screen"
          image={image2.src}
          translateY={["-20vh", "20vh"]}
        />
      </ParallaxBanner> */}
      <Parallax page={page} />
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ reviews, trips, bookings }}
      />
    </Layout>
  );
}

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const reviews = await client.getAllByType("review", { lang: locale });
  const trips = await client.getAllByType("trip", { lang: locale });
  const bookings = await client.getAllByType("booking", { lang: locale });

  const locales = await getLocales(page, client);

  return {
    props: {
      page,
      trips,
      navigation,
      settings,
      locales,
      reviews,
      bookings,
    },
  };
}
