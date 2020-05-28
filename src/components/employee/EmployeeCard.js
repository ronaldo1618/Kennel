import React from 'react';

const EmployeeCard = (props) => {
  return (
    <div>
      <h3>
        Employee Name: {props.employee.name}
        <p>Job: {props.employee.job}</p>
      </h3>
    </div>
  );
};

export default EmployeeCard;