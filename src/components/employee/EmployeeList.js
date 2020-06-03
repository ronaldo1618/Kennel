import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import apiManager from '../../modules/apiManager';

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    apiManager.getAll("employees")
    .then(employees => setEmployees(employees));
  };

  useEffect(() => {
    getEmployees()
  }, []);

  const deleteEmployee = id => {
    apiManager.delete("employees", id)
    .then(() => apiManager.getAll("employees").then(setEmployees));
  };

  return (
    <>
      <section className="section-content">
        <button type="button" className="btn" onClick={() => {props.history.push("/employees/new")}}>New Employee</button>
      </section>
      <div>
        {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee} {...props}/>)}
      </div>
    </>
  )
}

export default EmployeeList;