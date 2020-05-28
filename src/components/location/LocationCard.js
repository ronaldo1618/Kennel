import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = (props) => {
  return (
    <div>
      <address>
        <h3>
          {props.location.address}
        </h3>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Remove</button>
      </address>
    </div>
  );
};

export default LocationCard;