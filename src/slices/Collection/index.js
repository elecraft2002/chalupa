import Button from "@/components/Button";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Fade } from "react-awesome-reveal";
import * as prismic from "@prismicio/client";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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
      className="relative my-40 flex h-[200vh] w-full flex-col items-center justify-center py-20 sm:h-[200vh]"
    >
      <ul className="w-full">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="absolute top-0 h-[200vh] w-full sm:h-[200vh]"
        >
          <li data-src={prismic.asImageSrc(slice.primary.image_1)}>
            <Fade
              delay={200}
              className="absolute w-2/3 sm:-top-1/3 sm:left-1/4 sm:h-1/3 sm:w-1/4 sm:-translate-x-1/2 sm:translate-y-2/3"
            >
              <a href={prismic.asImageSrc(slice.primary.image_1)}>
                <PrismicNextImage
                  field={slice.primary.image_1}
                  className="h-full w-full object-cover rounded-md"
                />
              </a>
            </Fade>
          </li>

          <li data-src={prismic.asImageSrc(slice.primary.image_2)}>
            <Fade
              delay={200}
              className="absolute right-4 top-[10%] w-2/3 sm:-top-1/4 sm:right-4 sm:h-[45%] sm:w-1/4 sm:translate-y-1/2 "
            >
              <a href={prismic.asImageSrc(slice.primary.image_2)}>
                <PrismicNextImage
                  field={slice.primary.image_2.Small}
                  className="h-full w-full object-cover rounded-md"
                />
              </a>
            </Fade>
          </li>

          <li data-src={prismic.asImageSrc(slice.primary.image_4)}>
            <Fade
              delay={200}
              className="absolute bottom-0 right-0 w-2/3 sm:left-[60%] sm:z-10 sm:h-1/2 sm:w-1/3 sm:translate-y-1/4"
            >
              <a href={prismic.asImageSrc(slice.primary.image_4)}>
                <PrismicNextImage
                  field={slice.primary.image_4.Small}
                  className="h-full w-full object-cover rounded-md"
                />
              </a>
            </Fade>
          </li>

          <li data-src={prismic.asImageSrc(slice.primary.image_3)}>
            <Fade
              delay={200}
              className="absolute left-4 top-[60%] w-2/3 sm:left-0 sm:top-[55%] sm:h-1/3 sm:w-1/3"
            >
              <a href={prismic.asImageSrc(slice.primary.image_3)}>
                <PrismicNextImage
                  field={slice.primary.image_3.Small}
                  className="h-full w-full object-cover rounded-md"
                />
              </a>
            </Fade>
          </li>
        </LightGallery>
      </ul>
      <div className="absolute list-none sm:h-[70vh]">
        <div className="text-center sm:sticky sm:top-[40vh]">
          <li data-src={prismic.asImageSrc(slice.primary.image_1)}></li>
          <Fade className="flex flex-col">
            <span className=" mb-12">
              <PrismicRichText
                field={slice.primary.text}
                components={{
                  heading2: ({ children }) => (
                    <h2 className="mb-2 font-title text-[3.0rem]  last:mb-0">
                      {children}
                    </h2>
                  ),
                }}
              />
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
