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
              <li className="p-8 flex-col gap-8 border rounded-lg">
                <span>
                  <PrismicRichText field={item.title} />
                </span>
                <span>
                  <PrismicRichText field={item.price} />
                </span>
                <span>
                  <PrismicRichText field={item.description} />
                </span>
                {item.button_link.id && (
                  <PrismicNextLink field={item.button_link}>
                    <Button>
                      <PrismicRichText field={item.button_text} />
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
