import React, { useState, useEffect } from 'react';
import apiManager from '../../modules/apiManager';
import ObjCard from '../detailCard/ObjCard';

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
      <div className="container-cards">
        {employees.map(employee => <ObjCard key={employee.id} obj={employee} objURL={"employees"} attribute={employee.job} title={"Job"} deleteObj={deleteEmployee} {...props}/>)}
      </div>
    </>
  )
}

export default EmployeeList;