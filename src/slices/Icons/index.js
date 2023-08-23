import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Fade } from "react-awesome-reveal";

/**
 * @typedef {import("@prismicio/client").Content.IconsSlice} IconsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IconsSlice>} IconsProps
 * @param {IconsProps}
 */
const Icons = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center gap-20 py-20 text-center"
    >
      <Fade triggerOnce /*  className="mt-28" */>
        <PrismicRichText
          field={slice.primary.text}
          components={{
            heading3: ({ children }) => (
              <h3 className="spacing mb-0 text-xl leading-[1.9em] tracking-widest md:text-[1.95rem]">
                {children}
              </h3>
            ),
          }}
        />
      </Fade>
      <ul className=" flex flex-wrap items-center justify-center gap-20 md:gap-10">
        {slice.items.map((item, index) => {
          return (
            <Fade key={index} delay={index * 200} triggerOnce>
              <li className="flex min-w-[200px] max-w-[40vw] justify-center md:max-w-[30vw] lg:max-w-[12rem]">
                <figure className=" flex w-auto flex-col justify-between gap-6 text-center">
                  <PrismicNextImage
                    field={item.icon}
                    className="m-auto w-1/3 transition hover:scale-105"
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
    </section>
  );
};

export default Icons;
