import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css';

const LocationEditForm = props => {
  const [locationObj, setLocation] = useState({address: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = e => {
    const stateToChange = {...locationObj};
    stateToChange[e.target.id] = e.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = e => {
    e.preventDefault();
    setIsLoading(true);

    const editedLocation = {
      id: props.match.params.locationId,
      address: locationObj.address
    }

    LocationManager.update(editedLocation)
      .then(() => props.history.push('/locations'))
  }

  useEffect(() => {
    LocationManager.get(props.match.params.locationId)
      .then(location => {
        setLocation(location)
        setIsLoading(false);
      });
  }, [props.match.params.locationId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required className="form-control" onChange={handleFieldChange} id="address" value={locationObj.address}/>
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={updateExistingLocation} className="btn btn-primary">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default LocationEditForm;