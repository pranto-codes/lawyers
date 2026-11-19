import React from "react";
import { Link } from "react-router";
import bannerImg from "../../assets/banner-img-1.png";

const Banner = () => {
  return (
    <section
      className="relative flex min-h-[650px] items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/30"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Trusted legal professionals
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The Right Legal
            <span className="block text-emerald-400">
              Guidance Starts Here.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            Find experienced lawyers, explore their expertise, and book your
            consultation with confidence. Professional legal support is now just
            a few clicks away.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/bookings"
              className="rounded-full bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-700"
            >
              Book an Appointment →
            </Link>

            <Link
              to="/about"
              className="rounded-full border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Discover More
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-7">
            <div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="mt-1 text-sm text-gray-300">Expert Lawyers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="mt-1 text-sm text-gray-300">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="mt-1 text-sm text-gray-300">Online Access</p>
            </div>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="max-w-sm rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-3xl">
              ⚖
            </div>
            <h2 className="text-2xl font-bold">Legal help you can trust</h2>
            <p className="mt-3 leading-7 text-gray-200">
              Connect with professionals who understand your needs and are
              committed to helping you make informed decisions.
            </p>
            <div className="mt-6 border-t border-white/20 pt-5 text-sm text-gray-200">
              Professional advice. Transparent process. Convenient booking.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
