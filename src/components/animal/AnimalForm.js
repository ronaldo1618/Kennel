import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css';

const AnimalForm = props => {
  const [animal, setAnimal] = useState({name: "", breed: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = e => {
    const stateToChange = { ...animal };
    stateToChange[e.target.id] = e.target.value;
    setAnimal(stateToChange);
  }

  const constructNewAnimal = e => {
    e.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please make sure all fields are filled out")
    } else {
      setIsLoading(true);
      AnimalManager.post(animal)
        .then(() => props.history.push('/animals'));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Animal name"/>
            <label htmlFor="name">Name</label>
            <input type="text" required onChange={handleFieldChange} id="breed" placeholder="Breed name"/>
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={constructNewAnimal}>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default AnimalForm;