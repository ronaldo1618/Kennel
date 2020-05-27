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

  return (
    <div>
      {locations.map(location => <LocationCard key={location.id} location={location} />)}
    </div>
  )
}
export default LocationList;