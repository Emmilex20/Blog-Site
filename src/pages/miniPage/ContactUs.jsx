import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzpqbej");
  if (state.succeeded) {
    return alert("Message submitted successfully!");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Contact Form */}
        <div className="md:w-2/3 w-full">
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="md:w-1/3 w-full mt-6 md:mt-0 md:pl-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-base mb-4">
              <strong>Address:</strong> 24 Road, G close. Festac, Lagos, Nigeria
            </p>
            <p className="text-base mb-4">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:underline"
              >
                (+234) 913-206-2212
              </a>
            </p>
            <p className="text-base mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:aginaemmanuel6@gmail.com"
                className="text-blue-600 hover:underline"
              >
                aginaemmanuel6@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Optional Google Map Embed */}
      <div className="mt-6 mb-12"> {/* Add margin-bottom to ensure spacing */}
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Our Location
        </h2>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4306636460165!2d3.2720236740455486!3d6.467001123819277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b88b949d069cb%3A0xc75a85311768313a!2s24%20Road%2C%20G%20Cl%2C%20Festac%20Town%2C%20Festac%201%20102102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1726021123858!5m2!1sen!2sng"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
