import Button from "@/components/Button";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param {ContactProps}
 */

const Contact = ({ slice, context }) => {
  /* const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBNNnVAI6mPg8SWMszs2ud5anSpDkbW69c",
  });
  const center = {
    lat: 50.7639236,
    lng: 15.0541447,
  }; */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoadingState] = useState(false);
  const [clicked, setClickedState] = useState(false);

  const handleSubmit = async (e) => {
    setClickedState(true);
    e.preventDefault();
    setLoadingState(true);
    // console.log("Submit", { name, email, message });
    // const res = await fetch("/api/contact")
    try {
      const res = await axios.post("/api/contact", { name, email, message });
      setLoadingState(false);
      if (res.status == 200) {
        setName("");
        setEmail("");
        setError("");
        setMessage("");
      }
      // console.log(res);
    } catch (error) {
      // console.log(error.response.data.error);
      setLoadingState(false);
      setError(error.response.data.error);
    }
  };
  console.log(context);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="box-border flex min-h-[50vh] w-full flex-col items-center justify-center gap-20 py-20"
    >
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={"Loading"}
          className="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-20 bg-slate-950/60 backdrop-blur-sm"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              transition: { repeat: Infinity, duration: 2, repeatDelay: 0.2 },
            }}
            key={"Icon"}
          >
            <PrismicNextImage
              field={slice.primary.loading_icon}
              className="max-w-full"
            />
          </motion.div>
          <p className="text-xl md:text-2xl lg:text-6xl">
            {slice.primary.loading}
          </p>
        </motion.div>
      )}
      <span className="text-center">
        <PrismicRichText field={slice.primary.text} />
      </span>
      <div className="grid w-screen grid-cols-1 grid-rows-2 items-center justify-center sm:grid-cols-2 sm:grid-rows-1">
        <div className="m-auto box-border h-full w-full p-4">
          {/* {isLoaded && (
          <GoogleMap
            mapContainerClassName="w-full h-full "
            center={center}
            zoom={19}
          >
            <Marker position={center} />
          </GoogleMap>
        )} */}

          <PrismicNextImage
            field={slice.primary.image}
            className="h-full w-full rounded-sm object-cover"
          />
        </div>
        <div className="box-border flex w-full flex-col items-center justify-center p-8 ">
          <form
            className="flex w-full flex-col items-start gap-4"
            onSubmit={handleSubmit}
          >
            <span className="my-4">
              <PrismicRichText field={slice.primary.adresa} />
            </span>
            <div class="mb-6 w-full max-w-xl">
              <label
                /* for="default-input" */ class="mb-2 block text-sm font-medium"
              >
                Jméno
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                required={true}
                maxLength={30}
                placeholder="Jméno"
                type="text"
                id="default-input"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  text-secondary focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div class="mb-6 w-full max-w-xl">
              <label
                /* for="default-input" */ class="mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                maxLength={30}
                required={true}
                type="email"
                placeholder="Email"
                id="default-input"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  text-secondary focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div class="mb-6 w-full max-w-xl">
              <label for="large-input" class="mb-2 block text-sm font-medium">
                Zpráva
              </label>
              <input
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                maxLength={400}
                placeholder="Zpráva..."
                type="text"
                id="large-input"
                class="sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4  text-secondary focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <Button>
              <input type="submit" />
            </Button>
            <p className="text-red-600">{error}</p>
            {clicked && !error && !loading && <p>{slice.primary.succes}</p>}
          </form>
        </div>
      </div>
      <PrismicRichText field={slice.primary.text_2} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2528.9061944338073!2d15.6208175!3d50.6660022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDM5JzU3LjYiTiAxNcKwMzcnMTQuOSJF!5e0!3m2!1scs!2scz!4v1691685641433!5m2!1scs!2scz"
        width="100%"
        height="100%"
        className="min-h-[50vh]"
        allowFullScreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
