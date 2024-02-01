import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = localStorage.getItem("update");

    const parse = JSON.parse(getData);
    setData(parse);
  }, [setData]);

  const bookingSave = () => {
    const booking = {
      movieName: data?.show?.name,
      days: data?.show?.schedule?.days,
      time: data?.show?.schedule?.time,
      country: data?.show?.network?.country?.name,
    };
    const bookingData = localStorage.setItem(
      "booking",
      JSON.stringify(booking)
    );
    toast.success("booking successfully");
  };

  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-50">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="text-lg font-bold">Booking Form</p>
              <p className="text-xs">
                You can see all information and confirm your booking. You can
                your movie and enjoy the time.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Movie Name
                </label>
                <input
                  id="moviename"
                  type="text"
                  placeholder="Movie name"
                  defaultValue={data?.show?.name}
                  disabled
                  className="w-full p-1 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-100"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Website
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="website"
                  defaultValue={data?.show?.url}
                  disabled
                  className="w-full p-1 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-100"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="country" className="text-sm">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder=""
                  disabled
                  defaultValue={data?.show?.network?.country?.name}
                  className="w-full p-1 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-100"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="time" className="text-sm">
                  Time
                </label>
                <input
                  id="time"
                  type="text"
                  placeholder=""
                  disabled
                  defaultValue={data?.show?.schedule?.time}
                  className="w-full p-1 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-100"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="days" className="text-sm">
                  Days
                </label>
                <input
                  id="days"
                  type="text"
                  placeholder=""
                  disabled
                  defaultValue={data?.show?.schedule?.days}
                  className="w-full p-1 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-100"
                />
              </div>
            </div>
          </fieldset>
        </form>
        <div className="m-6 justify-end">
          <Link to={`/home`} onClick={bookingSave}>
            <button className="btn p-4 rounded-sm font-semibold text-white border-none bg-gradient-to-r from-green-500 to-blue-500 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              Submit
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
