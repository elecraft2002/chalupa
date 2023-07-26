import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Button from "@/components/Button";
import { Fade, Slide } from "react-awesome-reveal";

/**
 * @typedef {import("@prismicio/client").Content.TextWithImagesSlice} TextWithImagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithImagesSlice>} TextWithImagesProps
 * @param {TextWithImagesProps}
 */
const TextWithImages = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[50vh] flex-col items-center justify-center gap-16 py-20 "
    >
      <Fade triggerOnce className="m-4 max-w-7xl">
        <PrismicRichText field={slice.primary.text} />
      </Fade>
      <ul className="box-border  p-4">
        {slice.items.map((item, index) => {
          return (
            <Fade key={index} triggerOnce>
              <li className="my-4 grid w-full max-w-7xl grid-cols-1 grid-rows-2 items-center gap-4 sm:grid-cols-2 sm:grid-rows-1">
                <figure className={` ${index & 1 && "sm:order-last"}`}>
                  <Slide triggerOnce>
                    <PrismicNextImage field={item.image} className="rounded-md" />
                  </Slide>
                </figure>
                <Fade triggerOnce delay={200}>
                  <span className="m-4 flex flex-col items-center">
                    <PrismicRichText field={item.text} />
                    {item.button_text && (
                      <PrismicNextLink document={item.link}>
                        <Button type={"primary"}>{item.button_text}</Button>
                      </PrismicNextLink>
                    )}
                  </span>
                </Fade>
              </li>
            </Fade>
          );
        })}
      </ul>
    </section>
  );
};

export default TextWithImages;
