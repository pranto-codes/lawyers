import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Cards from "../Cards/Cards";
import { Link } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <main>
      <Banner />

      <Cards data={data} />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-700">
              Why Choose Law.BD
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Legal support designed around your convenience.
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              Finding the right legal professional shouldn't be complicated.
              Law.BD helps you explore lawyer profiles, understand their
              expertise, and arrange appointments through one convenient
              platform.
            </p>

            <div className="mt-8 space-y-5">
              {[
                [
                  "01",
                  "Verified Professional Profiles",
                  "Explore lawyer details and professional experience.",
                ],
                [
                  "02",
                  "Simple Appointment Booking",
                  "Choose a lawyer and save your appointment easily.",
                ],
                [
                  "03",
                  "Multiple Legal Specialties",
                  "Find support for different legal matters.",
                ],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-bold text-emerald-800">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-9 inline-flex rounded-full bg-emerald-800 px-7 py-3 font-bold text-white transition hover:bg-emerald-900"
            >
              Learn About Us →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex min-h-56 flex-col justify-end rounded-3xl bg-emerald-800 p-7 text-white">
              <span className="text-4xl">⚖</span>
              <h3 className="mt-5 text-xl font-bold">Professional Guidance</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-100">
                Find legal professionals for your needs.
              </p>
            </div>

            <div className="mt-10 flex min-h-56 flex-col justify-end rounded-3xl bg-amber-100 p-7 text-gray-900">
              <span className="text-4xl">✓</span>
              <h3 className="mt-5 text-xl font-bold">Easy Booking</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Manage your appointments in one place.
              </p>
            </div>

            <div className="flex min-h-56 flex-col justify-end rounded-3xl bg-gray-100 p-7 text-gray-900">
              <span className="text-4xl">⌕</span>
              <h3 className="mt-5 text-xl font-bold">Explore Expertise</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Discover lawyers by their specialties.
              </p>
            </div>

            <div className="mt-10 flex min-h-56 flex-col justify-end rounded-3xl bg-emerald-50 p-7 text-gray-900">
              <span className="text-4xl">♡</span>
              <h3 className="mt-5 text-xl font-bold">Client Focused</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                A convenient experience from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 px-5 py-16 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-300">
            Take the First Step
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Need legal guidance? Let's find the right expert.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-emerald-100">
            Explore our lawyer directory and make your next step with
            confidence.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-emerald-900 transition hover:bg-emerald-100"
          >
            Explore Lawyers →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
