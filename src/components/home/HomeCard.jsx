import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ show }) => {
  //   console.log(show?.show);
  const { image, name, summary, officialSite, id } = show?.show;
  const shortDetails = summary?.slice(0, 120);
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 bg-gray-900 text-gray-100 rounded-sm">
        <img
          src={image?.original}
          alt=""
          className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <span className=" block pb-2 text-sm text-gray-400">
            <a
              href={officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-700"
            >
              OfficialSite
            </a>
          </span>
          <p>{shortDetails}...</p>
          <div className="flex justify-end">
            <Link to={`/summary/${id}`}>
              <button
                type="button"
                className=" px-8 py-3 mt-4 font-semibold border-none rounded border-gray-100 text-gray-100 bg-green-500"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
