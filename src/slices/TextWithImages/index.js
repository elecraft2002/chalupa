import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Button from "@/components/Button";
import { Fade, Slide } from "react-awesome-reveal";
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Head from "next/head";
/**
 * @typedef {import("@prismicio/client").Content.TextWithImagesSlice} TextWithImagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithImagesSlice>} TextWithImagesProps
 * @param {TextWithImagesProps}
 */
const TextWithImages = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[50vh] flex-col items-center justify-center gap-16 py-20 "
    >
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </Head>
      <Fade triggerOnce className="m-4 max-w-7xl text-center">
        <PrismicRichText field={slice.primary.text} />
      </Fade>
      <ul className="box-border  p-4">
        {slice.items.map((item, index) => {
          return (
            <Fade key={index} triggerOnce>
              <li className="my-4 grid w-full max-w-7xl grid-cols-1 grid-rows-2 items-center gap-4 sm:grid-cols-2 sm:grid-rows-1">
                <figure className={` ${index & 1 && "sm:order-last"}`}>
                  <Slide triggerOnce>
                    <Swiper
                      modules={[A11y, Pagination, Navigation]}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      autoplay={true}
                      navigation
                      spaceBetween={20}
                      style={{
                        "--swiper-pagination-color": "#F1DBA8",
                        "--swiper-navigation-color": "#F1DBA8",
                      }}
                    >
                      {prismicH.isFilled.image(item.image) && (
                        <SwiperSlide
                          key={index}
                          className="flex h-full w-full items-center justify-center"
                        >
                          <PrismicNextImage
                            field={item.image.Small}
                            className="h-full w-full rounded-md object-contain"
                          />
                        </SwiperSlide>
                      )}
                      {prismicH.isFilled.image(item.image_2) && (
                        <SwiperSlide
                          key={index}
                          className="flex h-full w-full items-center justify-center"
                        >
                          <PrismicNextImage
                            field={item.image_2.Small}
                            className="h-full w-full rounded-md object-cover"
                          />
                        </SwiperSlide>
                      )}
                      {prismicH.isFilled.image(item.image_3) && (
                        <SwiperSlide
                          key={index}
                          className="flex h-full w-full items-center justify-center"
                        >
                          <PrismicNextImage
                            field={item.image_3.Small}
                            className="h-full w-full rounded-md object-cover"
                          />
                        </SwiperSlide>
                      )}
                      {prismicH.isFilled.image(item.image_4) && (
                        <SwiperSlide
                          key={index}
                          className="flex h-full w-full items-center justify-center"
                        >
                          <PrismicNextImage
                            field={item.image_4.Small}
                            className="h-full w-full rounded-md object-cover"
                          />
                        </SwiperSlide>
                      )}
                    </Swiper>
                  </Slide>
                </figure>
                <Fade triggerOnce delay={200}>
                  <span className="m-4 flex flex-col items-center text-center">
                    <PrismicRichText
                      field={item.text}
                      /*  components={{
                        heading2: ({ children }) => (
                          <Heading
                            as="h2"
                            size="2xl"
                            className="mb-2 font-title last:mb-0 text-3xl"
                          >
                            {children}
                          </Heading>
                        ),
                      }} */
                    />
                    {item.button_text && (
                      <PrismicNextLink document={item.link}>
                        <Button type={"primary"}>{item.button_text}</Button>
                      </PrismicNextLink>
                    )}
                  </span>
                </Fade>
              </li>
            </Fade>
          );
        })}
      </ul>
    </section>
  );
};

export default TextWithImages;
