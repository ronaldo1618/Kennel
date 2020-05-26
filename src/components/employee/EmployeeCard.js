import React from 'react';

const EmployeeCard = () => {
  return (
    <div>
      <h3>
        Employee Name: <span className="card-employeename">Yara</span>
        <p>Job: Taking care of your lovely pet!</p>
      </h3>
      <h3>
        Employee Name: <span className="card-employeename">Jeff</span>
        <p>Job: Groomer</p>
      </h3>
      <h3>
        Employee Name: <span className="card-employeename">Tanya</span>
        <p>Job: Customer Service Representative</p>
      </h3>
    </div>
  );
};

export default EmployeeCard;