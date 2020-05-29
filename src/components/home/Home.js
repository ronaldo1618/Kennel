import React, { useState, useEffect } from "react";
import AnimalSpotlight from '../animal/AnimalSpotlight';
import AnimalManager from '../../modules/AnimalManager';
import './Home.css';
import AnimalCard from "../animal/AnimalCard";

const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    AnimalManager.getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
    <address>
      <h3>
        Visit Us at the Nashville North Location
        <p>500 Puppy Way</p>
      </h3>
    </address>
    <h1>Animal Spotlight</h1>
    <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
    {
      spotlightId && <AnimalSpotlight animalId={spotlightId} />
    }
    </>
  );
};

export default Home;