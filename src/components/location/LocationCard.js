import React from 'react';

const LocationCard = (props) => {
  return (
    <div>
      <address>
        <h3>
          {props.location.address}
        </h3>
      </address>
    </div>
  );
};

export default LocationCard;