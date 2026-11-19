import React from "react";
import { Link } from "react-router";

const Card = ({ singleCard, onCancel, showCancel = false }) => {
  const {
    image,
    name,
    speciality,
    experience,
    id,
    license,
    available,
    consultationFee,
  } = singleCard;

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="relative h-64 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-52 sm:w-44">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              {experience}+ Years Experience
            </span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {available}
            </span>
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-900 transition group-hover:text-emerald-800">
            {name}
          </h2>

          <p className="mt-1 font-medium text-emerald-700">{speciality}</p>

          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <p>▣ License: {license}</p>
            {consultationFee !== undefined && (
              <p>
                Consultation fee:{" "}
                <span className="font-bold text-gray-800">
                  ৳{consultationFee}
                </span>
              </p>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            {showCancel ? (
              <button
                onClick={() => onCancel(id)}
                className="w-full rounded-xl border border-red-200 px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
              >
                Cancel Appointment
              </button>
            ) : (
              <Link
                to={`/cardDetails/${id}`}
                className="w-full rounded-xl bg-emerald-800 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-900"
              >
                View Profile & Details →
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
