import React, { useState } from 'react';
import apiManager from '../../modules/apiManager';
import './EmployeeForm.css';

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({name: "", job: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = e => {
    const stateToChange = {...employee};
    stateToChange[e.target.id] = e.target.value;
    setEmployee(stateToChange);
  }

  const constructNewEmployee = e => {
    e.preventDefault();
    if (employee.name === "" || employee.job === "") {
      window.alert("please fill out all fields")
    } else {
      setIsLoading(true);
      apiManager.post("employees", employee)
        .then(() => props.history.push('/employees'));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Employee name"/>
            <label htmlFor="name">Name</label>
            <input type="text" required onChange={handleFieldChange} id="job" placeholder="Job name"/>
            <label htmlFor="job">Job</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={constructNewEmployee}>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default EmployeeForm;