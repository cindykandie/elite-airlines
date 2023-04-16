import React, { useState } from "react";
import Modal from "./ItemDetails";
import '../App.css'

const Item = ({ airline }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="item-container">
      <img src={airline.logo} alt={`${airline.name} logo`} />
      <div className="item-info">
        <h3>{airline.name}</h3>
        <p>{airline.country}</p>
        <button onClick={handleClick}>More Info</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div>
          <h2>{airline.name}</h2>
          <p><span>Country: </span>{airline.country}</p>
          <p><span>Slogan: </span>{airline.slogan}</p>
          <p><span>Headquarters: </span>{airline.head_quaters}</p>
          <p><span>Website: </span><a target="_blank" href={airline.website}>{airline.name}</a></p>
          <p><span>Established: </span>{airline.established}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Item;
