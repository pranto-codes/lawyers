import React from "react";
import Card from "../Card/Card";

const Cards = ({ data = [] }) => {
  return (
    <section className="bg-gray-50 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-700">
            Meet Our Legal Experts
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Find the Right Lawyer for Your Needs
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            Connect with experienced legal professionals across different
            practice areas. Explore their profiles and choose the right expert
            for your consultation.
          </p>
        </div>

        {data.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
            <p className="text-lg font-semibold text-gray-700">
              No lawyers available right now.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Please check back later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {data.map((singleCard) => (
              <Card key={singleCard.id} singleCard={singleCard} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
