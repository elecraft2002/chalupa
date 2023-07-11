import Button from "@/components/Button";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ProcedureSlice} ProcedureSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProcedureSlice>} ProcedureProps
 * @param {ProcedureProps}
 */
const Procedure = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[50vh] flex-col items-center justify-center gap-16 py-20 bg-slate-900/70"
    >
      Procedure
      <div className="grid w-screen grid-cols-1 grid-rows-2 items-center sm:grid-cols-2 sm:grid-rows-1">
        <div className="m-4 flex flex-col items-center gap-8">
          {slice.variation === "procedireWithImage" && (
            <figure>
              <PrismicNextImage field={slice.primary.image} />
            </figure>
          )}
          {slice.variation === "default" && (
            <span>
              <PrismicRichText field={slice.primary.text} />
            </span>
          )}
          {slice.primary.button_link.id && (
            <PrismicNextLink field={slice.primary.button_link}>
              <Button>
                <PrismicRichText field={slice.primary.button_text} />
              </Button>
            </PrismicNextLink>
          )}
        </div>
        <div>
          <ul>
            {slice.items.map((item, i) => {
              return (
                <li key={i} className={"relative mx-4 flex  gap-4 pb-8"}>
                  <span
                    className={`flex aspect-1 h-16 w-16 items-center justify-center rounded-full border border-slate-500 bg-glass-200 text-slate-800 after:absolute after:top-0 after:-z-10 after:h-full after:w-[${
                      slice.items.length === i + 1 ? "0px" : "1px"
                    }] after:bg-slate-300 `}
                  >
                    {i + 1}
                  </span>
                  <span className="mt-4 w-full">
                    <PrismicRichText field={item.text} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Procedure;
