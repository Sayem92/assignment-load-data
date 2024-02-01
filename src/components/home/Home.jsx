import React, { useState, useEffect } from "react";
import HomeCard from "./HomeCard";

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data from API and update state

    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="m-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {shows?.map((show,i) => (
          <HomeCard key={i} show={show}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
