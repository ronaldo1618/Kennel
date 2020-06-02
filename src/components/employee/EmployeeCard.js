import React from 'react';
import { firstLetterCase } from '../../modules/helpers';

const EmployeeCard = (props) => {
  return (
    <div>
      <h3>
        Employee Name: {firstLetterCase(props.employee.name)}
        <p>Job: {props.employee.job}</p>
      </h3>
      <button type="submit" onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>Edit</button>
      <button type="submit" onClick={() => props.deleteEmployee(props.employee.id)}>Fired!</button>
    </div>
  );
};

export default EmployeeCard;