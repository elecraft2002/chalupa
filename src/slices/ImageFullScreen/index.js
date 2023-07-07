import Button from "@/components/Button";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

/**
 * @typedef {import("@prismicio/client").Content.ImageFullScreenSlice} ImageFullScreenSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageFullScreenSlice>} ImageFullScreenProps
 * @param {ImageFullScreenProps}
 */
const ImageFullScreen = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-[70vh] w-screen"
    >
      <ParallaxBanner className="h-full w-full">
        <ParallaxBannerLayer speed={8}>
          <PrismicNextImage
            field={slice.primary.image}
            className="h-full w-full object-cover brightness-50"
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="flex flex-col items-center justify-center gap-8">
          <span className="text-center text-slate-100">
            <PrismicRichText field={slice.primary.text} />
          </span>
          {slice.primary.text && (
            <PrismicNextLink field={slice.primary.link}>
              <Button>{slice.primary.button_text}</Button>
            </PrismicNextLink>
          )}
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default ImageFullScreen;
