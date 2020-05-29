import React from 'react';
import { Link } from 'react-router-dom';
import { splitTypeArray } from '../../modules/helpers';

const LocationCard = (props) => {
  console.log(props)
  return (
      <>
      {
        props.hasUser ? 
        <div>
          <address>
            <h3>
              {props.locationObj.address}
            </h3>
            <h3>
             Employees: {props.locationObj.employees.length > 0 ? splitTypeArray(props.locationObj.employees.map(employee => employee.name)) : null}
            </h3>
            <Link to={`/locations/${props.locationObj.id}`}>
              <button>Details</button>
            </Link>
            <button type="submit" onClick={() => props.history.push(`/locations/${props.locationObj.id}/edit`)}>Edit</button>
            <button type="button" onClick={() => props.deleteLocation(props.locationObj.id)}>Remove</button>
          </address>
        </div> 
        : <address><h3>{props.locationObj.address}</h3></address>} 
    </>
  );
};

export default LocationCard;