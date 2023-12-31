import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

/**
 * @typedef {import("@prismicio/client").Content.TripsNewSlice} TripsNewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TripsNewSlice>} TripsNewProps
 * @param {TripsNewProps}
 */
const TripsNew = ({ slice }) => {
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
            className={`block h-16 cursor-pointer rounded-full p-4 transition-all hover:scale-110 bg-secondary ${
              filter === "Summer"
                ? "scale-110 bg-slate-500/80 drop-shadow-md"
                : ""
            }`}
            onClick={() => {
              if (filter === "Summer") {
                setFilter(null);
                return;
              }
              setFilter("Summer");
            }}
          >
            <PrismicNextImage
              field={slice.primary.summer}
              className="h-8 w-8"
            />
          </div>
        </Fade>
        <Fade triggerOnce className="m-4 max-w-7xl text-center">
          <div
            className={`block h-16 cursor-pointer rounded-full p-4 transition-all hover:scale-110 bg-secondary ${
              filter === "Winter"
                ? "scale-110 bg-slate-500/80 drop-shadow-md"
                : ""
            }`}
            onClick={() => {
              if (filter === "Winter") {
                setFilter(null);
                return;
              }
              setFilter("Winter");
            }}
          >
            <PrismicNextImage
              field={slice.primary.winter}
              className="h-8 w-8"
            />
          </div>
        </Fade>
      </div>

      <ul className="flex flex-wrap items-start justify-between gap-8 m-4">
        {slice.items.map((item, index) => {
          if (filter) {
            if (item.season !== filter && item.season !== "Both") return null;
          }
          return (
            <Fade key={index} delay={index * 100} triggerOnce>
              <li className="max-w-sm">
                <figure className="w-full pr-4">
                  <PrismicNextImage
                    field={item.image.Small}
                    className="box-border h-full w-full rounded-md"
                  />
                </figure>
                <div className="relative -mt-4 ml-4 bg-secondary/90 p-4 text-primary rounded-md">
                  <PrismicRichText field={item.text} />
                </div>
              </li>
            </Fade>
          );
        })}
      </ul>
    </section>
  );
};

export default TripsNew;
