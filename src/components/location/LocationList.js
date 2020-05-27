import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    LocationManager.getAll()
    .then(locations => setLocations(locations))
  };

  useEffect(() => {
    getLocations()
  }, []);

  const deleteLocation = id => {
    LocationManager.delete(id)
    .then(() => LocationManager.getAll().then(setLocations))
  }

  return (
    <div>
      {locations.map(location => <LocationCard key={location.id} location={location} deleteLocation={deleteLocation} />)}
    </div>
  )
}
export default LocationList;