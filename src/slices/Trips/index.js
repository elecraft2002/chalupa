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
  console.log(context.trips)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center py-16 text-secondary"
    >
      <PrismicRichText field={slice.primary.text} />

      <div>
        <span className="text-center"><PrismicRichText field={slice.primary.text_summer} /></span>
        <ul className="flex w-full flex-wrap place-content-around">
          {context.trips
            ?.slice(0, slice.primary.visible ? slice.primary.visible : 3)
            .map((project) => {
              if (project.data.season === "Winter") return null;
              return (
                <li key={project.id}>
                  <Article type={0} data={project} />
                </li>
              );
            })}
        </ul>
      </div>
      <div>
      <span className="text-center"><PrismicRichText field={slice.primary.text_winter} /></span>
        <ul className="flex w-full flex-wrap place-content-around">
          {context.trips
            ?.slice(0, slice.primary.visible ? slice.primary.visible : 3)
            .map((project) => {
              if (project.data.season === "Summer" ||project.data.season === null) return null;
              return (
                <li key={project.id}>
                  <Article type={0} data={project} />
                </li>
              );
            })}
        </ul>
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
