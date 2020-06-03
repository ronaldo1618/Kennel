import React from 'react';
// import PropTypes from 'prop-types';
import { firstLetterCase, splitTypeArray } from '../../modules/helpers';
import './ObjCard.css'

const ObjCard = ({obj, history, deleteObj, objURL, title, attribute, handleDelete, isLoading}) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          {
            objURL === "animals" ? 
            <picture>
              <img src={require("../animal/dog.svg")} alt="My Dog" />
            </picture>
            : null
          }
          <h3>
            Name: {firstLetterCase(obj.name)}
            <p>{title}: {attribute}</p>
          </h3>
          {
            objURL === "locations" ?
            <h3>
              Employees: {obj.employees.length > 0 ? splitTypeArray(obj.employees.map(employee => employee.name)) : null}
            </h3> : null
          }
          <button type="submit" onClick={() => history.push(`/${objURL}/${obj.id}/edit`)}>Edit</button>
          {
            objURL === "owners" ? 
            null : 
            <p>
            {
              objURL === "locations" || objURL === "animals" ?
              <button type="button" onClick={() => { history.push(`/${objURL}/${obj.id}`)}}>Details</button> : <button type="button" onClick={() => { history.push(`/${objURL}/${obj.id}/details`)}}>Details</button>
            }
            </p>
          }
          {
            objURL === "animals" ? <button type="button" disabled={isLoading} onClick={() => handleDelete(obj.id)}>Discharge</button>
            : <button type="button" onClick={() => deleteObj(obj.id)}>GoodBye!</button>  
          }
        </div>
      </div>
    </>
  )
}

export default ObjCard;