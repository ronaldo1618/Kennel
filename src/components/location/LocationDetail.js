import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({address: ""});

  useEffect(() => {
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          address: location.address
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <address>
          <h3>
            {location.address}
          </h3>
        </address>
      </div>
    </div>
  );
}

export default LocationDetail;