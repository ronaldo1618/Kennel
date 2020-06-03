import React, { useState, useEffect } from 'react';
import apiManager from '../../modules/apiManager';
import ObjCard from '../detailCard/ObjCard';

const AnimalList = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return apiManager.getAll("animals").then(animalsFromAPI => {
      setAnimals(animalsFromAPI);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  const deleteAnimal = id => {
    apiManager.delete("animals", id)
    .then(() => apiManager.getAll("animals").then(setAnimals));
  };

  return (
    <>
      <section className="section-content">
        <button type="button" className="btn" onClick={() => {props.history.push("./animals/new")}}>Admit Animal</button>
      </section>
      <div className="container-cards">
        {animals.map(animal => <ObjCard key={animal.id} obj={animal} objURL={"animals"} title={"breed"} attribute={animal.breed} deleteObj={deleteAnimal} {...props}/>)}
      </div>
    </>
  );
};

export default AnimalList;