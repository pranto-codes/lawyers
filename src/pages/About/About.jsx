import React from "react";
import { Link } from "react-router";

const About = () => {
  const values = [
    {
      icon: "⚖",
      title: "Professional Excellence",
      description:
        "We aim to connect people with experienced legal professionals who understand their areas of practice.",
    },
    {
      icon: "🤝",
      title: "Trust & Transparency",
      description:
        "We believe that finding legal support should be a clear, straightforward, and comfortable experience.",
    },
    {
      icon: "✦",
      title: "Client Convenience",
      description:
        "Our platform makes it easier to explore lawyer profiles and manage appointment bookings.",
    },
  ];

  return (
    <main>
      <section className="bg-emerald-950 px-5 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-300">
            Who We Are
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Making legal guidance more accessible to everyone.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-100">
            Law.BD is designed to make discovering legal professionals and
            arranging appointments simpler, more convenient, and more
            transparent.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-700">
            Our Story
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            A simpler way to find legal professionals.
          </h2>
        </div>

        <div className="space-y-5 leading-8 text-gray-600">
          <p>
            Finding the right lawyer can feel overwhelming. People often need a
            convenient way to explore professional backgrounds, understand
            specialties, and make informed choices.
          </p>
          <p>
            That's why Law.BD brings lawyer profiles and appointment booking
            together in one platform. Our goal is to make the process easier for
            people seeking legal guidance.
          </p>
          <p>
            We believe access to professional information should be simple,
            organized, and user-friendly.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-700">
              What Drives Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center sm:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Ready to find the right legal expert?
        </h2>
        <p className="mt-4 text-gray-500">
          Explore our lawyer directory and take the next step.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex rounded-full bg-emerald-800 px-8 py-4 font-bold text-white hover:bg-emerald-900"
        >
          Explore Lawyers →
        </Link>
      </section>
    </main>
  );
};

export default About;
