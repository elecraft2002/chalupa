import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";
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
 * @typedef {import("@prismicio/client").Content.GalleryNewSlice} GalleryNewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GalleryNewSlice>} GalleryNewProps
 * @param {GalleryNewProps}
 */
const GalleryNew = ({ slice }) => {
  const [filter, setFilter] = useState(null);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[100vh] flex-col items-center justify-center gap-12 py-20 text-center"
    >
      <Fade triggerOnce className="m-4 max-w-7xl text-center">
        <PrismicRichText field={slice.primary.text} />
      </Fade>
      <div className="flex flex-wrap gap-8">
        <Fade triggerOnce className="m-4 max-w-7xl text-center">
          <div
            className={`block h-16 cursor-pointer rounded-full bg-secondary p-4 transition-all hover:scale-110 ${
              filter === "Interior"
                ? "scale-110 bg-slate-500/80 drop-shadow-md"
                : ""
            }`}
            onClick={() => {
              if (filter === "Interior") {
                setFilter(null);
                return;
              }
              setFilter("Interior");
            }}
          >
            <PrismicNextImage
              field={slice.primary.interior}
              className="h-8 w-8"
            />
          </div>
        </Fade>
        <Fade triggerOnce className="m-4 max-w-7xl text-center">
          <div
            className={`block h-16 cursor-pointer rounded-full bg-secondary p-4 transition-all hover:scale-110 ${
              filter === "Exterior"
                ? "scale-110 bg-slate-500/80 drop-shadow-md"
                : ""
            }`}
            onClick={() => {
              if (filter === "Exterior") {
                setFilter(null);
                return;
              }
              setFilter("Exterior");
            }}
          >
            <PrismicNextImage
              field={slice.primary.exterior}
              className="h-8 w-8"
            />
          </div>
        </Fade>
      </div>

      <ul>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4"
        >
          {slice.items.map((item, index) => {
            if (filter) {
              if (item.type !== filter && item.type !== "Both") return null;
            }
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

export default GalleryNew;
