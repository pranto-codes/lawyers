import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utility/AddtoDB";
import Card from "../Card/Card";
const Bookings = () => {
  const [list, setList] = useState([]);

  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    console.log(storedBookData);
    const convStoredBooks = storedBookData.map((card) => parseInt(card));
    //console.log(convStoredBooks);
    const myBookings = data.filter((card) => convStoredBooks.includes(card.id));
    setList(myBookings);
  }, []);
  return (
    <div>
      <div className="text-center m-2 border rounded-2xl ">
        <h1 className="text-2xl font-semibold">
          My Todays Appointment {list.length}
        </h1>
        <p>
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="m-5 ">
        {list.map((c) => (
          <Card key={c.card} singleCard={c}></Card>
        ))}
      </div>
    </div>
  );
};
export default Bookings;
