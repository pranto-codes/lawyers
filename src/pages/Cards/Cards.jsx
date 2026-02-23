import React, { Suspense, useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ data }) => {
  const [allCards, setAllCards] = useState([]);

  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllCards(data);
  //       // console.log(data);
  //     });
  // });

  const cardPromise = fetch("./data.json").then((res) => res.json());

  return (
    <div className="m-8">
      <h1 className="text-4xl font-semibold flex justify-center">
        Our Best Lawyers
      </h1>
      <p className=" flex justify-center m-5">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <Suspense fallback={<span>loading...</span>}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {data.map((singleCard) => (
            <Card key={singleCard.card} singleCard={singleCard}></Card>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Cards;
