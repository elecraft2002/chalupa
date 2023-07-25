import Article from "@/components/Article";
import Button from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Fade } from "react-awesome-reveal";

/**
 * @typedef {import("@prismicio/client").Content.RealizaceSlice} RealizaceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RealizaceSlice>} RealizaceProps
 * @param {RealizaceProps}
 */
const Realizace = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center py-16"
    >
      <Fade triggerOnce><PrismicRichText field={slice.primary.text} /></Fade>
      <div className="flex w-full flex-wrap place-content-around">
        {context.bookings
          ?.slice(0, slice.primary.visible ? slice.primary.visible : 3)
          .map((project,index) => {
            return <Fade triggerOnce delay={index*200} key={project.id}><Article type={0} data={project} /></Fade>;
          })}
      </div>
      {prismicH.asText(slice.primary.button_text) && (
        <Fade triggerOnce>
          <PrismicNextLink document={slice.primary.button_link}>
            <Button type={"secondary"}>
              <PrismicRichText field={slice.primary.button_text} />
            </Button>
          </PrismicNextLink>
        </Fade>
      )}
    </section>
  );
};

export default Realizace;
