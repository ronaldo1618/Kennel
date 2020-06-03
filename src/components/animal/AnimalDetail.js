import React, { useState, useEffect } from "react";
import apiManager from '../../modules/apiManager';
import "./AnimalDetail.css";

const AnimalDetail = (props) => {
  const [animal, setAnimal] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState({});

  useEffect(() => {
    apiManager.get("animals", props.animalId)
    .then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
      });
      return apiManager.get("employees", animal.employeeId)
    })
    .then(employee => {
      setEmployees({name: employee.name})
      setIsLoading(false);
    });
  }, [props.animalId]);

  const handleDelete = () => {
    setIsLoading(true);
    apiManager.delete("animals", props.animalId).then(() =>
      props.history.push(`/animals`)
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <p>Caretaker: {employees.name || "not assigned"}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};
export default AnimalDetail;
