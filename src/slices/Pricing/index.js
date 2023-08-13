import Button from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Fade } from "react-awesome-reveal";

/**
 * @typedef {import("@prismicio/client").Content.PricingSlice} PricingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PricingSlice>} PricingProps
 * @param {PricingProps}
 */
const Pricing = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[100vh] flex-col items-center justify-center gap-20 py-20 text-center"
    >
      <Fade triggerOnce>
        <PrismicRichText field={slice.primary.text} />
      </Fade>
      <ul className="flex flex-wrap justify-center gap-16 m-4">
        {slice.items.map((item, index) => {
          return (
            <Fade triggerOnce key={index}>
              <li className="max-w-xs flex flex-col gap-10 rounded-lg border border-[#F1DBA8] p-8">
                <span className="font-semibold">
                  <PrismicRichText field={item.title} />
                </span>
                <span >
                  <PrismicRichText field={item.price} />
                </span>
                <span >
                  <PrismicRichText field={item.description} />
                </span>
                {item.button_text && (
                  <PrismicNextLink field={item.button_link}>
                    <Button type="secondary">
                    {item.button_text}
                    </Button>
                  </PrismicNextLink>
                )}
              </li>
            </Fade>
          );
        })}
      </ul>
    </section>
  );
};

export default Pricing;
