import React, { useState, useEffect } from 'react';
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = (props) => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    OwnerManager.getAll()
    .then(owners => setOwners(owners));
  };

  useEffect(() => {
    getOwners()
  }, []);

  const deleteOwner = id => {
    OwnerManager.delete(id)
    .then(() => OwnerManager.getAll().then(setOwners))
  }

  return (
    <>
      <section className="section-content">
          <button type="button" className="btn" onClick={() => {props.history.push("./owners/new")}}>New Owner</button>
      </section>
      <div>
        {owners.map(owner => <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner} {...props}/>)}
      </div>
    </>
  )
}

export default OwnerList;