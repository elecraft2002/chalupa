import { PrismicRichText } from "@/components/PrismicRichText";
import { interpolate } from "@/functions/interpolate";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
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
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  });
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {screenWidth > 500 ? (
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
                    <h1 className="text-xl uppercase sm:text-4xl xl:text-8xl">
                      {paragraph.children}
                    </h1>
                  ),
                }}
                field={slice.primary.text}
              />
            </Fade>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      ) : (
        <div className="flex h-[80vh] items-center justify-center">
          <Fade triggerOnce className="m-8">
            <PrismicNextImage
              field={slice.primary.image}
              className="h-full w-full object-cover"
            />
          </Fade>
          <Fade delay={500} triggerOnce className="absolute">
            <PrismicRichText
              components={{
                paragraph: (paragraph) => (
                  <h1 className="text-xl uppercase sm:text-4xl xl:text-8xl">
                    {paragraph.children}
                  </h1>
                ),
              }}
              field={slice.primary.text}
            />
          </Fade>
        </div>
      )}
    </section>
  );
};

export default ImageZoom;
