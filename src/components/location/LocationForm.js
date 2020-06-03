import React, { useState } from 'react';
import apiManager from '../../modules/apiManager';
import './LocationForm.css';

const LocationForm = props => {
  const [location, setLocation] = useState({address: "",name: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = e => {
    const stateToChange = { ...location };
    stateToChange[e.target.id] = e.target.value;
    setLocation(stateToChange);
  }

  const constructNewLocation = e => {
    e.preventDefault();
    if (location.address === "" || location.name === "") {
      window.alert("Please make sure all fields are filled out")
    } else {
      setIsLoading(true);
      apiManager.post("locations", location)
        .then(() => props.history.push('/locations'));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Location Name"/>
            <label htmlFor="name">Name</label>
            <input type="text" required onChange={handleFieldChange} id="address" placeholder="Location address"/>
            <label htmlFor="address">Address</label>
            <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={constructNewLocation}>Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default LocationForm;