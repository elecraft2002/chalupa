import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param {FeaturesProps}
 */
const Features = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[50vh] flex-col items-center justify-center gap-6 bg-slate-300/50 py-20 text-center"
    >
      <div>
        <PrismicRichText field={slice.primary.text} />
      </div>
      <ul className="flex flex-wrap items-center justify-center">
        {slice.items.map((item) => {
          console.log(item);
          return (
            <li className="max-w-[40vw] md:max-w-[30vw] lg:max-w-xs">
              <figure className=" flex flex-col gap-6">
                <PrismicNextImage
                  field={item.icon}
                  className="transition hover:scale-105"
                />
                <figcaption>
                  <PrismicRichText field={item.text} />
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
