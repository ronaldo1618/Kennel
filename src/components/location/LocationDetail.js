import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({address: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          address: location.address
        });
        setIsLoading(false)
      });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId)
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