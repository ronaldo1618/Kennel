import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    LocationManager.getWithEmployees()
    .then(locations => {
      setLocations(locations)
    })
  };

  useEffect(() => {
    getLocations()
  }, []);

  const deleteLocation = id => {
    LocationManager.delete(id)
    .then(() => LocationManager.getAll().then(setLocations))
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