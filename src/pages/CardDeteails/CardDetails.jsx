import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { addToStoreDB, getStoredBook } from "../../utility/AddtoDB";

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData();

  const singleCard = data.find((card) => card.id === Number(id));

  if (!singleCard) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Lawyer not found</h2>
        <p className="mt-3 text-gray-500">
          The profile you're looking for may no longer be available.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-emerald-800 px-7 py-3 font-bold text-white"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const {
    consultationFee,
    availableDays,
    name,
    image,
    experience,
    available,
    speciality,
    license,
  } = singleCard;

  const handleBooking = () => {
    const storedBooks = getStoredBook().map(Number);

    if (storedBooks.includes(Number(id))) {
      alert("You have already booked an appointment with this lawyer.");
      return;
    }

    addToStoreDB(id);
    alert("Your appointment has been booked successfully!");
    navigate("/bookings");
  };

  return (
    <main className="bg-gray-50 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-700">
            Professional Profile
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lawyer Profile Details
          </h1>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-500">
            Learn more about this legal professional, their area of expertise,
            availability, and consultation fee.
          </p>
        </div>

        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid md:grid-cols-[280px_1fr]">
            <div className="min-h-72 bg-gray-100">
              <img
                src={image}
                alt={name}
                className="h-full min-h-72 w-full object-cover"
              />
            </div>

            <div className="p-7 sm:p-10">
              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
                {available}
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-gray-900">
                {name}
              </h2>

              <p className="mt-2 text-lg font-semibold text-emerald-700">
                {speciality}
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="mt-1 font-bold text-gray-900">
                    {experience}+ Years
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">License Number</p>
                  <p className="mt-1 font-bold text-gray-900">{license}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available Days</p>
                  <p className="mt-1 font-bold text-gray-900">
                    {availableDays}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Consultation Fee</p>
                  <p className="mt-1 text-xl font-extrabold text-emerald-800">
                    ৳{consultationFee}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Book an Appointment
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Review the availability and consultation fee before confirming
                your appointment.
              </p>
            </div>

            <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
              Available: {available}
            </span>
          </div>

          <div className="mt-7 rounded-2xl bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            <strong>Important:</strong> Appointment availability may change.
            Please contact the lawyer to confirm the final consultation
            schedule.
          </div>

          <button
            onClick={handleBooking}
            className="mt-7 w-full rounded-xl bg-emerald-800 px-7 py-4 font-bold text-white shadow-md transition hover:bg-emerald-900 sm:w-auto"
          >
            Confirm Appointment →
          </button>
        </section>

        <div className="mt-7 text-center">
          <Link
            to="/"
            className="font-semibold text-emerald-800 hover:underline"
          >
            ← Back to all lawyers
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CardDetails;
