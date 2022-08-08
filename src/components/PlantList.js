import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantsToDisplay = plants.map((plant) => {
    return <PlantCard key={plant.id} name={plant.name} id={plant.id} image={plant.image} price={plant.price}/>
  })

  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
