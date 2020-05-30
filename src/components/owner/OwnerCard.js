import React from 'react';
import PropTypes from 'prop-types';
import { firstLetterCase } from '../../modules/helpers';

const OwnerCard = ({owner, history, deleteOwner}) => {
  return  (
    <div>
      <div>
        <h3>
          Owner: {firstLetterCase(owner.name)}
          <p>Phone number: {owner.phoneNumber}</p>
        </h3>
        <button type="button" onClick={() => history.push(`/owners/${owner.id}/edit`)}>Edit</button>
        <button type="button" onClick={() => deleteOwner(owner.id)}>Remove</button>
      </div>
    </div>
  );
};

OwnerCard.propTypes = {
  owner: PropTypes.object.isRequired
}

export default OwnerCard;