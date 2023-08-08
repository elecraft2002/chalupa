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
      className="flex min-h-[100vh] flex-col items-center justify-center gap-20 py-40 text-center"
    >
      <Fade triggerOnce>
        <PrismicRichText field={slice.primary.text} />
      </Fade>
      <ul>
        {slice.items.map((item, index) => {
          return (
            <Fade triggerOnce key={index}>
              <li className="p-4">
                <span>
                  <PrismicRichText field={item} />
                </span>
              </li>
            </Fade>
          );
        })}
      </ul>
    </section>
  );
};

export default Pricing;
