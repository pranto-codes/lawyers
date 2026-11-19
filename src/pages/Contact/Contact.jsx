import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <main className="bg-gray-50">
      <section className="bg-emerald-950 px-5 py-20 text-center text-white sm:px-8">
        <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-300">
          Get In Touch
        </span>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
          We're Here to Help.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-emerald-100">
          Have questions about our platform or need assistance? Send us a
          message and our team will be happy to help.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-700">
            Contact Information
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
            Let's start a conversation.
          </h2>
          <p className="mt-4 leading-7 text-gray-500">
            Whether you need help using Law.BD or have a general inquiry, feel
            free to reach out.
          </p>

          <div className="mt-9 space-y-6">
            {[
              {
                icon: "✉",
                title: "Email",
                value: "support@lawbd.example",
              },
              {
                icon: "☎",
                title: "Phone",
                value: "+880 1XXX-XXXXXX",
              },
              {
                icon: "⌖",
                title: "Location",
                value: "Dhaka, Bangladesh",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl text-emerald-800">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10 lg:col-span-3">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Send Us a Message
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill in the details below.
          </p>

          {submitted && (
            <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
              Thank you! Your message has been submitted in this demo.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-emerald-600 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="What is your message about?"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-emerald-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-emerald-600 focus:bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-800 px-7 py-4 font-bold text-white transition hover:bg-emerald-900 sm:w-auto"
            >
              Send Message →
            </button>
          </form>

          <p className="mt-5 text-xs leading-6 text-gray-400">
            Demo notice: This form currently displays a confirmation message. It
            does not send or store messages on a server.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
