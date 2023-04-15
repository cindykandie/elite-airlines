import React from 'react';
import Item from './Item';
import data from "../data.json";
import '../App.css'

const ItemList = () => {
  return (
    <div className="item-list">
      {data.airlines.map((airline) => (
        <Item key={airline.id} airline={airline} />
      ))}
    </div>
  );
};

export default ItemList;
