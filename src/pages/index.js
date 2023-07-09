import Head from "next/head";
import { PrismicLink, SliceZone } from "@prismicio/react";
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
import image1 from "@/assets/img/parallax/chalupa-1.png";
import image2 from "@/assets/img/parallax/chalupa-2.png";

export default function Home({
  page,
  navigation,
  settings,
  locales,
  reviews,
  trips,
}) {
  console.log("page", page);
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
      <ParallaxBanner className="h-screen w-screen">
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
      </ParallaxBanner>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ reviews, trips }}
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
  const trips = await client.getAllByType("realizace", { lang: locale });

  const locales = await getLocales(page, client);

  return {
    props: {
      page,
      trips,
      navigation,
      settings,
      locales,
      reviews,
    },
  };
}
