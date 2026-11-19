import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoredBook } from "../../utility/AddtoDB";
import Card from "../Card/Card";

const Bookings = () => {
  const data = useLoaderData();
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedBookData = getStoredBook().map(Number);
    const myBookings = data.filter((card) =>
      storedBookData.includes(Number(card.id)),
    );

    setList(myBookings);
  }, [data]);

  const handleCancel = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this appointment?",
    );

    if (!confirmed) return;

    // This uses the same "book-list" key commonly used by AddtoDB.
    const storedBooks = getStoredBook().map(Number);
    const updatedBooks = storedBooks.filter((bookId) => bookId !== Number(id));

    localStorage.setItem("book-list", JSON.stringify(updatedBooks));
    setList((previous) => previous.filter((item) => item.id !== Number(id)));
  };

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-emerald-900 px-7 py-12 text-white sm:px-12">
          <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-300">
            Your Dashboard
          </span>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            My Appointments
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-emerald-100">
            Keep track of your selected legal professionals and manage your
            appointments in one place.
          </p>

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-white/10 px-6 py-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl font-extrabold text-emerald-900">
              {list.length}
            </div>
            <div>
              <p className="font-bold">Total Appointments</p>
              <p className="text-sm text-emerald-200">
                Currently saved in your account
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {list.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-4xl">
                ⚖
              </div>
              <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
                No appointments yet
              </h2>
              <p className="mx-auto mt-3 max-w-md leading-7 text-gray-500">
                You haven't booked any lawyers yet. Explore our legal
                professionals and find the right expert for your needs.
              </p>
              <Link
                to="/"
                className="mt-7 inline-flex rounded-full bg-emerald-800 px-8 py-3 font-bold text-white transition hover:bg-emerald-900"
              >
                Explore Lawyers →
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Your Booked Lawyers
                </h2>
                <span className="text-sm text-gray-500">
                  {list.length} appointment{list.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {list.map((lawyer) => (
                  <Card
                    key={lawyer.id}
                    singleCard={lawyer}
                    showCancel={true}
                    onCancel={handleCancel}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Bookings;
