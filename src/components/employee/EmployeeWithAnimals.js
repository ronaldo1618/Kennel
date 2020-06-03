import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from '../../modules/AnimalManager';

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (id) => {
    setIsLoading(true);
    AnimalManager.delete(id).then(() =>
      props.history.push(`/animals`)
    );
  };

  useEffect(() => {
    EmployeeManager.getWithAnimals(props.match.params.employeeId)
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
      setIsLoading(false);
  }, [props.match.params.employeeId]);

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          isLoading={isLoading}
          handleDelete={() => handleDelete(animal.id)}
          {...props}
        />
      )}
    </div>
  );
};

export default EmployeeWithAnimals;