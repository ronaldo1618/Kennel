import React from 'react';

const OwnerCard = props => {
  return  (
    <div>
      <div>
        <h3>
          Owner: {props.owner.name}
          <p>Phone number: {props.owner.phoneNumber}</p>
        </h3>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
      </div>
    </div>
  );
};

export default OwnerCard;