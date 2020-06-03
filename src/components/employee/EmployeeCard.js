import React from 'react';
import PropTypes from 'prop-types';
import { firstLetterCase } from '../../modules/helpers';

const EmployeeCard = ({employee, history, deleteEmployee}) => {
  return (
    <div>
      <h3>
        Employee Name: {firstLetterCase(employee.name)}
        <p>Job: {employee.job}</p>
      </h3>
      <button type="submit" onClick={() => history.push(`/employees/${employee.id}/edit`)}>Edit</button>
      <button type="button" onClick={() => { history.push(`/employees/${employee.id}/details`)}}>Details</button>
      <button type="submit" onClick={() => deleteEmployee(employee.id)}>Fired!</button>
    </div>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    job: PropTypes.string.isRequired
  })
}

export default EmployeeCard;