import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = (props) => {
  return (
    <div>
      <address>
        <h3>
          {props.locationObj.address}
        </h3>
        <Link to={`/locations/${props.locationObj.id}`}>
          <button>Details</button>
        </Link>
        <button type="submit" onClick={() => props.history.push(`/locations/${props.locationObj.id}/edit`)}>Edit</button>
        <button type="button" onClick={() => props.deleteLocation(props.locationObj.id)}>Remove</button>
      </address>
    </div>
  );
};

export default LocationCard;