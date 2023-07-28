import { PrismicRichText } from "@/components/PrismicRichText";
import { interpolate } from "@/functions/interpolate";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

/**
 * @typedef {import("@prismicio/client").Content.ImageZoomSlice} ImageZoomSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageZoomSlice>} ImageZoomProps
 * @param {ImageZoomProps}
 */
const ImageZoom = ({ slice }) => {
  const [progress, updateProgress] = useState(0);
  const width = interpolate(progress, [0, 0.5, 1], [-110, 100, 100]);
  const height = interpolate(progress, [0, 0.5, 1], [-30, 100, 100]);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ParallaxBanner className="h-[200vh] w-screen">
        <ParallaxBannerLayer
          className="flex h-screen w-screen items-center justify-center"
          onProgressChange={(e) => updateProgress(e)}
          translateY={["-100vh", "200vh"]}
        >
          <Fade
            triggerOnce
            style={{ width: `${width}vw`, height: `${height}vh` }}
            className="min-h-[20vh] min-w-[20vw] overflow-hidden"
          >
            <PrismicNextImage
              field={slice.primary.image}
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
                  <h1 className="font-title text-xl uppercase sm:text-4xl xl:text-8xl">
                    {paragraph.children}
                  </h1>
                ),
              }}
              field={slice.primary.text}
            />
          </Fade>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default ImageZoom;
