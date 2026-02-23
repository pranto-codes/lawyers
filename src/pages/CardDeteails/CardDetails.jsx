import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/AddtoDB";

const CardDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const cardId = parseInt(id);

  const data = useLoaderData();
  //console.log(data);
  const singleCard = data.find((card) => card.id === cardId);
  //console.log(singleCard);

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
    addToStoreDB(id);
  };

  return (
    <div className=" bg-gray-200 border-0 p-1 m-2 rounded-xl ">
      <div className="text-black border rounded-2xl ">
        <h2 className="text-2xl font-semibold justify-center flex m-3">
          Lawyers Profile Details
        </h2>

        <p className="font-extralight flex text-center p-2">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className="  text-black flex gap-3 m-2">
        <div>
          <figure className="border rounded-xl">
            <img
              className="w-[250px] h-[250px] p-4  rounded-4xl"
              src={image}
              alt="Movie"
            />
          </figure>
        </div>
        <div className="card-body border rounded-xl">
          <div className="badge badge-soft badge-info">
            {experience}+ Experience
          </div>
          <p className="badge badge-soft badge-success">{available}</p>
          <p className="text-2xl font-semibold">{name}</p>
          <p className="font-semilight">{speciality}</p>
          <p className="font-semilight">@ {license}</p>
          <p className="font-semilight">Available on {availableDays}</p>
          <p className="font-semilight">
            Consultation Fee :{" "}
            <span className="text-green-600 font-semibold">
              Taka {consultationFee}
            </span>
          </p>
        </div>
      </div>
      <div className="m-2 border rounded-2xl text-center">
        <h2 className="text-black text-2xl  font-semibold m-2">
          Book an Appointment
        </h2>

        <p className="text-black font-extrabold flex justify-between">
          Availability : {available}
        </p>

        <div role="alert" className="alert alert-warning alert-soft p-3">
          <span className="">
            Warning: Due to high patient volume, we are currently accepting
            appointments for today only. We appreciate your understanding and
            cooperation!
          </span>
        </div>
        <Link to={`/bookings/${id}`}>
          <button
            onClick={() => handleBooking(id)}
            className="m-2 rounded-2xl btn btn-wide bg-fuchsia-200 text-blue-600"
          >
            Book Appointment Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDetails;
