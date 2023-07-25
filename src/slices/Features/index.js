import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Fade } from "react-awesome-reveal";

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
      className="flex min-h-[50vh] flex-col items-center justify-center gap-6 py-20 text-center"
    >
      <Fade triggerOnce>
        <PrismicRichText field={slice.primary.text} />
      </Fade>
      <ul className="flex flex-wrap items-center justify-center">
        {slice.items.map((item,index) => {
          return (
            <Fade delay={index*200} triggerOnce>
              <li key={index} className="min-w-[200px] max-w-[40vw] md:max-w-[30vw] lg:max-w-xs flex justify-center">
                <figure className=" flex flex-col gap-6 w-1/2">
                  <PrismicNextImage
                    field={item.icon}
                    className="transition hover:scale-105"
                  />
                  <figcaption>
                    <PrismicRichText field={item.text} />
                  </figcaption>
                </figure>
              </li>
            </Fade>
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
