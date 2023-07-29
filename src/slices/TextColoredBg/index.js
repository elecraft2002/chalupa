import Button from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextColoredBgSlice} TextColoredBgSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextColoredBgSlice>} TextColoredBgProps
 * @param {TextColoredBgProps}
 */
const TextColoredBg = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[50vh] flex-col items-center justify-center gap-6 bg-[#F1DBA8] py-20 text-center text-primary"
    >
      <span>
        <PrismicRichText field={slice.primary.text} />
      </span>
      {slice.primary.button_text && (
        <PrismicNextLink document={slice.primary.link}>
          <button className="rounded border border-primary px-9 py-2 transition-all hover:scale-105 hover:bg-primary hover:text-[#F1DBA8]">
            {slice.primary.button_text}
          </button>
        </PrismicNextLink>
      )}
    </section>
  );
};

export default TextColoredBg;
