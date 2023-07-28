/**
 * @typedef {import("@prismicio/client").Content.ImageZoomSlice} ImageZoomSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageZoomSlice>} ImageZoomProps
 * @param {ImageZoomProps}
 */
const ImageZoom = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_zoom (variation: {slice.variation}) Slices
    </section>
  );
};

export default ImageZoom;
