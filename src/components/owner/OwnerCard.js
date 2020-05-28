import React from 'react';

const OwnerCard = props => {
  return  (
    <div>
      <div>
        <h3>
          Owner: {props.owner.name}
          <p>Phone number: {props.owner.phoneNumber}</p>
        </h3>
      </div>
    </div>
  );
};

export default OwnerCard;