// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PrismicNextImage } from "@prismicio/next";
import useWindowSize from "@/functions/useWindowSize";
/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param {SliderProps}
 */
const Slider = ({ slice }) => {
  const { width, height } = useWindowSize();
  const maxSlidesPerView = width / 400 > 4 ? 4 : width / 400;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="box-border w-full max-w-7xl rounded-md p-4">
        <Swiper
          // install Swiper modules
          modules={[A11y, Autoplay]}
          slidesPerView={maxSlidesPerView}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={true}
          spaceBetween={20}
        >
          {slice.items.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex h-full w-full items-center justify-center"
              >
                <PrismicNextImage
                  field={item.image.Normal}
                  className="h-full  w-full rounded-md object-contain"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
