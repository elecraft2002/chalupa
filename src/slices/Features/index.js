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
      className="flex min-h-[50vh] flex-col items-center justify-center gap-20 py-20 text-center"
    >
      <Fade triggerOnce className="mt-28">
        <PrismicRichText
          field={slice.primary.text}
          components={{
            heading3: ({ children }) => (
              <h3 className="spacing mb-0 text-xl leading-[1.6em] tracking-widest md:text-[1.75rem]">
                {children}
              </h3>
            ),
          }}
        />
      </Fade>
      <ul className="mt-20 flex flex-wrap items-center justify-center gap-20 md:gap-10">
        {slice.items.map((item, index) => {
          return (
            <Fade key={index} delay={index * 200} triggerOnce>
              <li className="flex min-w-[200px] max-w-[40vw] justify-center md:max-w-[30vw] lg:max-w-[12rem]">
                <figure className=" flex w-auto flex-col justify-between gap-6 text-center">
                  <PrismicNextImage
                    field={item.icon}
                    className="m-auto w-1/2 transition hover:scale-105"
                  />
                  <figcaption className=" tracking-[.3em]">
                    <PrismicRichText
                      field={item.text}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className="m-auto  w-max text-center text-base last:mb-0">
                            {children}
                          </h3>
                        ),
                      }}
                    />
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
