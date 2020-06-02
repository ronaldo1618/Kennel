import React from 'react';
import { firstLetterCase } from '../../modules/helpers';

const OwnerCard = props => {
  return  (
    <div>
      <div>
        <h3>
          Owner: {firstLetterCase(props.owner.name)}
          <p>Phone number: {props.owner.phoneNumber}</p>
        </h3>
        <button type="button" onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>Edit</button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
      </div>
    </div>
  );
};

export default OwnerCard;