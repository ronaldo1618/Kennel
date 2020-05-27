import React, { useState, useEffect } from 'react';
import EmpolyeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = () => {
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
    <div>
      {employees.map(employee => <EmpolyeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee} />)}
    </div>
  )
}

export default EmployeeList;