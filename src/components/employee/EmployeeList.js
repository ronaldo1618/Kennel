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

  return (
    <div>
      {employees.map(employee => <EmpolyeeCard key={employee.id} employee={employee} />)}
    </div>
  )
}

export default EmployeeList;