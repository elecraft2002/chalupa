import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
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
import { Fade } from "react-awesome-reveal";

/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @param {GalleryProps}
 */
const Gallery = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[50vh] flex-col items-center justify-center gap-6 bg-slate-950/50 py-20 text-center"
    >
      <span>
        <PrismicRichText field={slice.primary.text} />
      </span>
      <ul>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 gap-4 md:grid-cols-3"
        >
          {slice.items.map((item, index) => {
            return (
              <Fade triggerOnce key={index}>
                <li data-src={prismic.asImageSrc(item.image)}>
                  <a
                    className="gallery-item"
                    href={prismic.asImageSrc(item.image)}
                  >
                    <PrismicNextImage
                      class="h-auto max-w-full rounded-lg transition-all hover:scale-105"
                      field={item.image.Small}
                    />
                  </a>
                </li>
              </Fade>
            );
          })}
        </LightGallery>
      </ul>
    </section>
  );
};

export default Gallery;
