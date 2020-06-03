import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard';
import apiManager from '../../modules/apiManager';

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    apiManager.getWithEmployees()
    .then(locations => {
      setLocations(locations)
    })
  };

  useEffect(() => {
    getLocations()
  }, []);

  const deleteLocation = id => {
    apiManager.delete("locations", id)
    .then(() => apiManager.getWithEmployees().then(setLocations))
  }

  return (
    <>
      <section className="section-content">
          <button type="button" className="btn" onClick={() => {props.history.push("./locations/new")}}>New Location</button>
      </section>
      <div>
        {locations.map(locationObj => <LocationCard key={locationObj.id} locationObj={locationObj} deleteLocation={deleteLocation} {...props}/>)}
      </div>
    </>
  )
}
export default LocationList;