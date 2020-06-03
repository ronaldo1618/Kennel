import React, { useState, useEffect } from "react"
import apiManager from '../../modules/apiManager';
import "./AnimalForm.css"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    apiManager.getAll("employees")
    .then(employees => setEmployees(employees));
  };

  useEffect(() => {
    getEmployees()
  }, []);


  const handleFieldChange = e => {
    const stateToChange = { ...animal };
    stateToChange[e.target.id] = e.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = e => {
    e.preventDefault()
    setIsLoading(true);
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      employeeId: parseInt(animal.employeeId)
    };
    apiManager.update("animals", editedAnimal)
      .then(() => props.history.push("/animals"))
  }

  useEffect(() => {
    apiManager.get("animals", props.match.params.animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, [props.match.params.animalId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            <select className="form-control" id="employeeId" value={animal.employeeId} onChange={handleFieldChange}>
              {employees.map(employee => 
              <option key={employee.id} value={employee.id}>{employee.name}</option>
              )}
            </select>
            <label htmlFor="employeeId">Employee</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm