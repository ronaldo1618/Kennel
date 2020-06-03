import React, { useState, useEffect } from 'react';
import ObjCard from '../detailCard/ObjCard';
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
      <div className="container-cards">
        {locations.map(locationObj => <ObjCard key={locationObj.id} obj={locationObj} deleteObj={deleteLocation} objURL={"locations"} attribute={locationObj.address} title={"Address"} {...props}/>)}
      </div>
    </>
  )
}
export default LocationList;