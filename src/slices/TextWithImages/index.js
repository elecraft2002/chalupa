import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Button from "@/components/Button";

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
      className="flex min-h-[50vh] flex-col items-center justify-center gap-16 bg-slate-300/70 py-20 text-slate-900"
    >
      <span className="m-4 max-w-7xl">
        <PrismicRichText field={slice.primary.text} />
      </span>
      <ul className="box-border  p-4">
        {slice.items.map((item, index) => {
          return (
            <li
              key={index}
              className="grid w-full max-w-7xl grid-cols-1 grid-rows-2 items-center gap-4 sm:grid-cols-2 sm:grid-rows-1 "
            >
              <figure className={` ${index & 1 && "sm:order-last"}`}>
                <PrismicNextImage field={item.image} />
              </figure>
              <span className="flex flex-col items-center m-4">
                <PrismicRichText field={item.text} />
                {item.button_text && (
                  <PrismicNextLink document={item.link}>
                    <Button type={"primary"}>
                    {item.button_text}
                    </Button>
                  </PrismicNextLink>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TextWithImages;
