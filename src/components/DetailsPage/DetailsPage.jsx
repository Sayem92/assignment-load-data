import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  //   console.log(id);

  useEffect(() => {
    // Fetch show details by ID from API and update state

    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((response) => response.json())
      .then((data) => {
        const newData = data?.filter((data, i) => data?.show?.id == id);
        // console.log(newData[0]);
        setShowData(newData[0]);
      });
  }, [id]);

  // set data local storage
  const setDataStorage = () => {
    const setData = localStorage.setItem("update", JSON.stringify(showData));
  };

  if (!showData) return <div>Loading...</div>;

  return (
    <div className="dark:bg-black md:py-10">
      <div className="lg:w-9/12 lg:p-4 mx-auto pb-5  bg-gray-300 rounded-lg">
        <div className="  ">
          <div className="flex justify-between items-center">
            <h2 className=" py-4 pl-6  font-bold text-3xl text-gray-900 ">
              {showData?.show?.name}
            </h2>
          </div>
          <div>
            <img
              className="lg:w-96 ml-5 w-64 border"
              src={showData?.show?.image?.original}
              alt=""
            />
          </div>
          <div className=" pl-6 my-4 pr-5">
            <div className="my-4 font-semibold">
              <a
                href={showData?.show?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-700 mr-20"
              >
                Site
              </a>
              <span className="mr-20 text-black">
                Rating: {showData?.show?.rating?.average}
              </span>
              <span className="text-black">
                Country: {showData?.show?.network?.country?.name}
              </span>
            </div>
            <p className="text-xl">{showData?.show?.summary}</p>

            <div className="m-6 justify-center">
              <Link to={`/booking/${id}`} onClick={setDataStorage}>
                <button className="btn p-4 rounded-sm font-semibold text-white border-none bg-gradient-to-r from-green-500 to-blue-500 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                  Booking Ticket
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
