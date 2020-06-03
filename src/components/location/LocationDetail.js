import React, { useState, useEffect } from 'react';
import apiManager from '../../modules/apiManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({address: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiManager.get("locations", props.locationId)
      .then(locationObj => {
        setLocation({
          address: locationObj.address
        });
        setIsLoading(false)
      });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    apiManager.delete("locations", props.locationId)
      .then(() => props.history.push('/locations'));
  };

  return (
    <div className="card">
      <div className="card-content">
        <address>
          <h3>
            {location.address}
          </h3>
          <button type="button" disabled={isLoading} onClick={handleDelete}>
            Closing
          </button>
        </address>
      </div>
    </div>
  );
}

export default LocationDetail;