import React from "react";
import Item from "../components/Item";
import data from "../data.json";

function Home() {
  return (
    <div className="item-list" data-testid="home">
      {data.airlines.map((airline) => (
        <Item key={airline.id} airline={airline} />
      ))}
    </div>
  );
}

export default Home;
