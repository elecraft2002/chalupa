/**
 * @typedef {import("@prismicio/client").Content.IconsSlice} IconsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IconsSlice>} IconsProps
 * @param {IconsProps}
 */
const Icons = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for icons (variation: {slice.variation}) Slices
    </section>
  );
};

export default Icons;
