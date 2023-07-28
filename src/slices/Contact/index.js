import Button from "@/components/Button";
import axios from "axios";
import { useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param {ContactProps}
 */
const Contact = ({ slice }) => {
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

  const handleSubmit = async (e) => {
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
      setError(error.response.data.error);
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[50vh] w-full flex-col items-center justify-center py-20 box-border"
    >
      <h2>Kontaktujte nás</h2>
      <div className="grid w-screen grid-cols-1 grid-rows-2 items-center justify-center sm:grid-cols-2 sm:grid-rows-1">
        <div className="m-auto box-border h-[50vh] w-full max-w-xl p-4">
          {/* {isLoaded && (
          <GoogleMap
            mapContainerClassName="w-full h-full "
            center={center}
            zoom={19}
          >
            <Marker position={center} />
          </GoogleMap>
        )} */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80822.7086265226!2d15.46138965158454!3d50.72532568071398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ec2181cc6ac75%3A0x400af0f6615e320!2zNTQzIDUxIMWgcGluZGxlcsWvdiBNbMO9bg!5e0!3m2!1scs!2scz!4v1687425183658!5m2!1scs!2scz"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="box-border flex w-full flex-col items-center justify-center p-8 ">
          <form className="w-full" onSubmit={handleSubmit}>
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
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  text-primary focus:border-blue-500 focus:ring-blue-500"
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
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  text-primary focus:border-blue-500 focus:ring-blue-500"
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
                class="sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4  text-primary focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <Button>
              <input type="submit" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
