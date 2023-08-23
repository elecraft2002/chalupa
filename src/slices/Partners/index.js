import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Fade } from "react-awesome-reveal";

/**
 * @typedef {import("@prismicio/client").Content.PartnersSlice} PartnersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PartnersSlice>} PartnersProps
 * @param {PartnersProps}
 */
const Partners = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[100vh] flex-col items-center gap-20 py-20 text-center"
    >
      <span>
        <PrismicRichText field={slice.primary.text} />
      </span>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {slice.items.map((item, index) => {
          return (
            <Fade triggerOnce key={index}>
              <li>
                <PrismicNextLink field={item.link}>
                  <PrismicNextImage
                    class="h-auto max-w-full rounded-lg transition-all hover:scale-105"
                    field={item.image.Small}
                  />
                </PrismicNextLink>
              </li>
            </Fade>
          );
        })}
      </ul>
    </section>
  );
};

export default Partners;
