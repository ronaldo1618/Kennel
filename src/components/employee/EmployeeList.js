import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    EmployeeManager.getAll()
    .then(employees => setEmployees(employees));
  };

  useEffect(() => {
    getEmployees()
  }, []);

  const deleteEmployee = id => {
    EmployeeManager.delete(id)
    .then(() => EmployeeManager.getAll().then(setEmployees));
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