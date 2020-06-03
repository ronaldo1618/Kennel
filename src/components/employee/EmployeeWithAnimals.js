import React, { useState, useEffect } from 'react'
import apiManager from '../../modules/apiManager';
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (id) => {
    setIsLoading(true);
    apiManager.delete("animals", id).then(() =>
      props.history.push(`/animals`)
    );
  };

  useEffect(() => {
    apiManager.getWithAnimals(props.match.params.employeeId)
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