/**
 * @typedef {import("@prismicio/client").Content.ReviewSlice} ReviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ReviewSlice>} ReviewProps
 * @param {ReviewProps}
 */
const Review = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for review (variation: {slice.variation}) Slices
    </section>
  );
};

export default Review;
