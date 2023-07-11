import parseDate from "@/functions/parseDate";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Stars from "../../components/Stars"
/**
 * @typedef {import("@prismicio/client").Content.ReviewsSlice} ReviewsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ReviewsSlice>} ReviewsProps
 * @param {ReviewsProps}
 */


const Reviews1 = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center bg-slate-300/80 py-16"
    >
      <PrismicRichText field={slice.primary.text} />
      <ul className="border-y-2 border-slate-700">
        {context.reviews.map((item) => {
          return (
            <li key={item.id}>
              <Stars count={4} />
              <PrismicNextImage field={item.data.image} />
              <PrismicRichText field={item.data.text} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Reviews = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center bg-slate-800/80 py-16"
    >
      <PrismicRichText field={slice.primary.text} />
      <ul className="flex w-full flex-wrap items-center justify-evenly gap-6">
        {context.reviews.map((item,index) => {
          return (
            <article key={index} className="w-full max-w-sm">
              <div class="mb-4 flex items-center space-x-4">
                <figure className="aspect-1 overflow-hidden rounded-full">
                  <PrismicNextImage
                    className="h-full w-full object-cover"
                    field={item.data.image}
                  />
                </figure>
                <div class="space-y-1 font-medium dark:text-white">
                  <span>
                    <PrismicRichText field={item.data.name} />
                    {/* <div class="mb-1 flex items-center">
                      <svg
                        class="mr-1 h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="mr-1 h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="mr-1 h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="mr-1 h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="mr-1 h-4 w-4 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div> */}<Stars count={item.data.stars}/>
                  </span>
                  <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
                    {item.data.date && (
                      <p>
                        <time datetime={item.data.date}>
                          {parseDate(item.data.date)}
                        </time>
                      </p>
                    )}
                  </footer>
                </div>
              </div>

              <span>
                <PrismicRichText field={item.data.text} />
              </span>
              {/* <a
                href="#"
                class="mb-5 block text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Read more
              </a>
              <aside>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  19 people found this helpful
                </p>
                <div class="mt-3 flex items-center space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                  <a
                    href="#"
                    class="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Helpful
                  </a>
                  <a
                    href="#"
                    class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Report abuse
                  </a>
                </div>
              </aside> */}
            </article>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
