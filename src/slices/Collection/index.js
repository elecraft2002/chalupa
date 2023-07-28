import Button from "@/components/Button";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Fade } from "react-awesome-reveal";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

/**
 * @typedef {import("@prismicio/client").Content.CollectionSlice} CollectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollectionSlice>} CollectionProps
 * @param {CollectionProps}
 */
const Collection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative my-40 flex h-[200vh] w-full flex-col items-center justify-center py-20 sm:h-[100vh]"
    >
      <div className="absolute top-0 h-[200vh] w-full sm:h-[100vh]">
        <Fade delay={200} className="absolute w-2/3 sm:left-1/4 sm:h-1/3 sm:w-1/4 sm:-translate-x-1/2">
          <PrismicNextImage
            field={slice.primary.image_1}
            className="h-full w-full object-contain"
          />
        </Fade>
        <Fade delay={200} className="absolute right-4 top-[10%] w-2/3 sm:right-4 sm:top-1/4 sm:h-1/3 sm:w-1/3 ">
          <PrismicNextImage
            field={slice.primary.image_2}
            className="h-full w-full object-contain"
          />
        </Fade>
        <Fade delay={200} className="absolute left-4 top-[70%] sm:left-0 sm:top-1/2 sm:h-1/3 sm:w-1/3">
          <PrismicNextImage
            field={slice.primary.image_3}
            className="h-full w-full object-contain"
          />
        </Fade>
        <Fade delay={200} className="absolute bottom-0 right-0 w-2/3 sm:left-[60%] sm:h-1/3 sm:w-1/3">
          <PrismicNextImage
            field={slice.primary.image_4}
            className="h-full w-full object-contain"
          />
        </Fade>
      </div>
      <div className="absolute sm:h-[70vh]">
        <div className="text-center sm:sticky sm:top-[40vh]">
          <Fade className="flex flex-col">
            <span className="mb-20">
              <PrismicRichText field={slice.primary.text} />
            </span>
            {slice.primary.button_text && (
              <PrismicNextLink document={slice.primary.button_link}>
                <Button type={"secondary"}>{slice.primary.button_text}</Button>
              </PrismicNextLink>
            )}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Collection;
