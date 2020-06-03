import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { splitTypeArray } from '../../modules/helpers';

const LocationCard = ({hasUser, locationObj, deleteLocation, history}) => {
  return (
      <>
      {
        hasUser ? 
        <div>
          <address>
            <h3>
              {locationObj.address}
            </h3>
            <h3>
             Employees: {locationObj.employees.length > 0 ? splitTypeArray(locationObj.employees.map(employee => employee.name)) : null}
            </h3>
            <Link to={`/locations/${locationObj.id}`}>
              <button>Details</button>
            </Link>
            <button type="submit" onClick={() => history.push(`/locations/${locationObj.id}/edit`)}>Edit</button>
            <button type="button" onClick={() => deleteLocation(locationObj.id)}>Remove</button>
          </address>
        </div> 
        : <address><h3>{locationObj.address}</h3></address>} 
    </>
  );
};

LocationCard.propTypes = {
  locationObj: PropTypes.object.isRequired
}

export default LocationCard;