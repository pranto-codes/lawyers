import React, { use } from "react";
import { Link, useLocation } from "react-router";

const Card = ({ singleCard }) => {
  //const data = use(cardPromise);
  //console.log(data);
  console.log(singleCard);

  const { image, name, speciality, experience, id, license, available } =
    singleCard;

  const location = useLocation();

  return (
    <div className=" bg-gray-200 border-0 p-1 m-2 rounded-xl ">
      <div className="  text-black flex gap-3 ">
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
          <div>
            {location.pathname === "/" && (
              <Link to={`/cardDetails/${id}`}>
                <button className=" rounded-2xl btn btn-wide bg-gray-300 text-blue-600">
                  View Details
                </button>
              </Link>
            )}

            {location.pathname === "/bookings" && (
              <button className="btn btn-soft btn-secondary rounded-2xl">
                Cancel Appointment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
