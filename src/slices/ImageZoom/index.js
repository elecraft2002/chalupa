import { interpolate } from "@/functions/interpolate";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
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
        <ParallaxBanner className="h-[200vh] w-screen text-center">
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
                field={slice.primary.image.Desktop}
                className="h-full w-full object-cover"
              />
            </Fade>
          </ParallaxBannerLayer>
          <ParallaxBannerLayer
            className="flex h-screen w-screen items-center justify-center text-center"
            translateY={["-100vh", "200vh"]}
          >
            <Fade delay={500} triggerOnce className=" text-center">
              <PrismicRichText
                components={{
                  heading3: (paragraph) => (
                    <h1
                      className={`text-center text-xl uppercase tracking-[.18em] sm:text-4xl xl:text-8xl`}
                    >
                      {paragraph.children}
                    </h1>
                  ),
                  paragraph: (paragraph) => (
                    <h2 className="mb-8 text-center text-xl uppercase tracking-[.18em] sm:text-4xl">
                      {paragraph.children}
                    </h2>
                  ),
                }}
                field={slice.primary.text}
              />
            </Fade>
          </ParallaxBannerLayer>
          <ParallaxBannerLayer
            className="flex h-screen w-screen items-end justify-center text-center"
            translateY={["-100vh", "200vh"]}
          >
            <Fade triggerOnce className="mb-28 tracking-[.3em] text-center">
              <PrismicRichText field={slice.primary.bottom_text} />
            </Fade>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      ) : (
        <div className="relative flex h-[80vh] items-center justify-center">
          <Fade triggerOnce className="m-8">
            <PrismicNextImage
              field={slice.primary.image.Mobile}
              className="h-full w-full object-cover"
            />
          </Fade>
          <Fade delay={500} triggerOnce className="absolute text-center">
            <PrismicRichText
              components={{
                paragraph: (paragraph) => (
                  <h1 className="text-xl uppercase sm:text-4xl xl:text-[85px] text-center">
                    {paragraph.children}
                  </h1>
                ),
              }}
              field={slice.primary.text}
            />
          </Fade>
          <Fade
            triggerOnce
            className="absolute bottom-10 mb-28 tracking-widest"
          >
            <PrismicRichText field={slice.primary.bottom_text} />
          </Fade>
        </div>
      )}
    </section>
  );
};

export default ImageZoom;
