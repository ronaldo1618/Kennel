import React from 'react';

const EmployeeCard = (props) => {
  return (
    <div>
      <h3>
        Employee Name: {props.employee.name}
        <p>Job: {props.employee.job}</p>
      </h3>
      <button type="submit" onClick={() => props.deleteEmployee(props.employee.id)}>Fired!</button>
    </div>
  );
};

export default EmployeeCard;