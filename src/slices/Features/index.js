import Button from "@/components/Button";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
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
      className="flex min-h-[50vh] flex-col items-center justify-center gap-40 py-20 text-center"
    >
      <Fade triggerOnce>
        <PrismicRichText field={slice.primary.text} />
      </Fade>
      <ul className="flex flex-wrap items-center justify-center">
        {slice.items.map((item, index) => {
          return (
            <Fade key={index} delay={index * 200} triggerOnce>
              <li className="flex min-w-[200px] max-w-[40vw] justify-center md:max-w-[30vw] lg:max-w-xs">
                <figure className=" flex w-1/2 flex-col gap-6">
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
      {slice.primary.button_text && (
        <PrismicNextLink document={slice.primary.link}>
          <Button type={"secondary"}>{slice.primary.button_text}</Button>
        </PrismicNextLink>
      )}
    </section>
  );
};

export default Features;
