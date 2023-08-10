import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";

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
          content={
            prismic.asImageSrc(page.data.meta_image) ||
            prismic.asImageSrc(settings.data.logo)
          }
        />
      </Head>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ trips, reviews, bookings }}
      />
    </Layout>
  );
}

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, { lang: locale });
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

  const pages = await client.getAllByType("page", { lang: "*" });

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
