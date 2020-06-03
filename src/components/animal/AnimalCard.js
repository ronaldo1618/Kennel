import React from "react";
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers';
import './AnimalCard.css';

const AnimalCard = ({animal, history, deleteAnimal, handleDelete, isLoading}) => {
  return (
    <>
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{firstLetterCase(animal.name)}</span>
        </h3>
        <p>Breed: {firstLetterCase(animal.breed)}</p>
        <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => history.push(`/animals/${animal.id}/edit`)}>Edit</button>
        {
          deleteAnimal ? <button type="button" onClick={() => deleteAnimal(animal.id)}>Discharge</button> : <button type="button" disabled={isLoading} onClick={() => handleDelete(animal.id)}>Discharge</button>
        }
      </div>
    </div>
    </>
  );
};

export default AnimalCard;