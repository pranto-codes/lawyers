import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        {" "}
        <li className="link link-hover">Home</li>
      </Link>
      <Link to="bookings">
        <li className="link link-hover">Bookings</li>{" "}
      </Link>
      <Link to="/blogs">
        <li className="link link-hover">Blogs</li>{" "}
      </Link>
      <Link to="/contact">
        <li className="link link-hover">Contact</li>{" "}
      </Link>

      <Link to="/about">
        <li className="link link-hover">About</li>
      </Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Law.BD</a>
      </div>
      <div className="navbar-center">
        <ul className="flex gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-active btn-success">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
