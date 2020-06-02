import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';
import './AnimalForm.css';

const AnimalForm = props => {
  const [animal, setAnimal] = useState({name: "", breed: "", employeeId: ""});
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    EmployeeManager.getAll()
    .then(employees => setEmployees(employees));
  };

  useEffect(() => {
    getEmployees()
  }, []);

  const handleFieldChange = e => {
    const stateToChange = { ...animal };
    console.log("id", e.target.id, "value", e.target.value)
    stateToChange[e.target.id] = e.target.value;
    setAnimal(stateToChange);
  }

  const constructNewAnimal = e => {
    e.preventDefault();
    if (animal.name === "" || animal.breed === "" || animal.employeeId === "") {
      window.alert("Please make sure all fields are filled out")
    } else {
      setIsLoading(true);
      animal.employeeId = parseInt(animal.employeeId)
      AnimalManager.post(animal)
        .then(() => props.history.push('/animals'));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Animal name"/>
            <label htmlFor="name">Name</label>
            <input type="text" required onChange={handleFieldChange} id="breed" placeholder="Breed name"/>
            <label htmlFor="breed">Breed</label>
            <select className="form-control" id="employeeId" value={animal.employeeId} onChange={handleFieldChange}>
              <option className="hide-option" value=''></option>
              {employees.map(employee => 
              <option key={employee.id} value={employee.id}>{employee.name}</option>
              )}
            </select>
            <label htmlFor="employeeId">Employee</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={constructNewAnimal}>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default AnimalForm;