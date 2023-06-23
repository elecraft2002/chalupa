import Article from "@/components/Article";
import Button from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

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
      className="flex flex-col items-center py-16 bg-slate-100/70"
    >
      <PrismicRichText field={slice.primary.text} />
      <div className="flex w-full flex-wrap place-content-around">
        {context.realizace
          ?.slice(0, slice.primary.visible ? slice.primary.visible : 3)
          .map((project) => {
            return <Article type={0} key={project.id} data={project} />;
          })}
      </div>
      {prismicH.asText(slice.primary.button_text) && (
        <PrismicNextLink document={slice.primary.button_link}>
          <Button type={"secondary"}>
            <PrismicRichText field={slice.primary.button_text} />
          </Button>
        </PrismicNextLink>
      )}
    </section>
  );
};

export default Realizace;
