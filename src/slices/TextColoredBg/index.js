import Button from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Fade } from "react-awesome-reveal";

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
      className="flex min-h-[100vh] flex-col items-center justify-center gap-6 py-20 text-center"
    >
      <Fade triggerOnce>
        <PrismicRichText field={slice.primary.text} />
      </Fade>
      {slice.primary.button_text && (
        <PrismicNextLink document={slice.primary.link}>
          <Button type="secondary">
            {slice.primary.button_text}
          </Button>
        </PrismicNextLink>
      )}
    </section>
  );
};

export default TextColoredBg;
