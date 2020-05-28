import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll().then(animalsFromAPI => {
      setAnimals(animalsFromAPI);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  const deleteAnimal = id => {
    AnimalManager.delete(id)
    .then(() => AnimalManager.getAll().then(setAnimals));
  };

  return (
    <>
      <section className="section-content">
        <button type="button" className="btn" onClick={() => {props.history.push("./animals/new")}}>Admit Animal</button>
      </section>
      <div className="container-cards">
        {animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={deleteAnimal} />)}
      </div>
    </>
  );
};

export default AnimalList;