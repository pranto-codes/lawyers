import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-950 px-5 pb-7 pt-16 text-gray-300 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-700 text-xl font-bold text-white">
              L
            </div>
            <span className="text-2xl font-extrabold text-white">
              Law<span className="text-emerald-400">.BD</span>
            </span>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
            Connecting people with legal professionals through a simple,
            convenient, and user-friendly appointment platform.
          </p>

          <div className="mt-6 flex gap-3">
            {["f", "𝕏", "in"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={`Social link ${social}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-bold text-white transition hover:bg-emerald-700"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link className="transition hover:text-emerald-400" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-emerald-400" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-emerald-400" to="/blogs">
                Legal Blogs
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-emerald-400" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Our Services</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li>Lawyer Directory</li>
            <li>Lawyer Profiles</li>
            <li>Appointment Booking</li>
            <li>Legal Information</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Get In Touch</h3>
          <ul className="mt-6 space-y-4 text-sm text-gray-400">
            <li>Dhaka, Bangladesh</li>
            <li>support@lawbd.example</li>
            <li>+880 1XXX-XXXXXX</li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600"
          >
            Contact Us →
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-gray-800 pt-7">
        <div className="flex flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Law.BD. All rights reserved.</p>
          <p>Designed for a better legal-service experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
