import React, { useState, useEffect } from 'react';
import apiManager from '../../modules/apiManager';
import './AnimalSpotlight.css';

const AnimalSpotlight = props => {
  const [animal, setAnimal] = useState({name: "", breed: ""})
  useEffect(() => {
    apiManager.get("animals", props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed
      });
    });
  }, [props.animalId]);

  return (
    <div className="container-spotlight">
      <div className="animal-spotlight">
        <img src={require('./dog.svg')} alt="My Dog" />
        <div>
          <h3>{animal.name}</h3>
          <p>{animal.breed}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimalSpotlight;