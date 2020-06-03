import React, { useState, useEffect } from 'react';
import apiManager from '../../modules/apiManager';
import ObjCard from '../detailCard/ObjCard';

const OwnerList = (props) => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    apiManager.getAll("owners")
    .then(owners => setOwners(owners));
  };

  useEffect(() => {
    getOwners()
  }, []);

  const deleteOwner = id => {
    apiManager.delete("owners", id)
    .then(() => apiManager.getAll("owners").then(setOwners))
  }

  return (
    <>
      <section className="section-content">
          <button type="button" className="btn" onClick={() => {props.history.push("./owners/new")}}>New Owner</button>
      </section>
      <div className="container-cards">
        {owners.map(owner => <ObjCard key={owner.id} obj={owner} title={"Phone-number"} attribute={owner.phoneNumber} objURL={"owners"} deleteObj={deleteOwner} {...props}/>)}
      </div>
    </>
  )
}

export default OwnerList;