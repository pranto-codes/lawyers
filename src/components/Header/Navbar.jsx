import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Bookings", path: "/bookings" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `font-medium transition duration-300 hover:text-emerald-700 ${
      isActive ? "text-emerald-700" : "text-gray-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="navbar mx-auto max-w-7xl px-4 py-2 lg:px-8">
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-800 text-xl font-bold text-white">
              L
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                Law<span className="text-emerald-700">.BD</span>
              </h1>
              <p className="text-[10px] font-medium uppercase tracking-[2px] text-gray-500">
                Legal care, simplified
              </p>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={linkClass}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <Link
            to="/bookings"
            className="hidden rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-900 sm:inline-flex"
          >
            My Appointments
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-circle lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
