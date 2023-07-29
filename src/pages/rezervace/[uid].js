import Head from "next/head";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import Stars from "@/components/Stars";

// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";

const Gallery = ({ images }) => {
  console.log(images);
  return (
    <div class="grid gap-4 p-4">
      <Carousel autoPlay infiniteLoop className="h-auto max-w-full rounded-lg">
        {images.map((item) => {
          return (
            <div key={item.id} className="h-full w-full">
              <PrismicNextImage
                field={item.image}
                className="h-full max-w-full rounded-lg object-cover"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default function Page({
  page,
  navigation,
  settings,
  locales,
  trips,
  reviews,
  bookings,
}) {
  return (
    <Layout locales={locales} navigation={navigation} settings={settings}>
      <Head>
        <title>
          {prismic.asText(page.data.title)} |{" "}
          {prismic.asText(settings.data.siteTitle)}
        </title>
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
      <section className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-20 pt-20">
        <span className="text-center">
          <PrismicRichText field={page.data.title} />
        </span>
        <span className="text-center">
          <PrismicRichText field={page.data.description} />
        </span>

        <iframe
          src={prismic.asLink(page.data.iframeurl)}
          id="trevlix-book-app"
          name="trevlix-book-app"
          frameborder="0"
          className="box-border h-[100vh] w-full max-w-6xl p-4 md:h-[50vh]"
        ></iframe>
      </section>
      <div>
        <SliceZone
          slices={page.data.slices}
          components={components}
          context={{ reviews, trips, bookings, settings }}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("booking", params.uid, { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const reviews = await client.getAllByType("review", { lang: locale });
  const trips = await client.getAllByType("trip", { lang: locale });
  const bookings = await client.getAllByType("booking", { lang: locale });

  const locales = await getLocales(page, client);

  return {
    props: {
      page,
      navigation,
      settings,
      locales,
      trips,
      reviews,
      bookings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("booking", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
