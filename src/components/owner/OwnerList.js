import React, { useState, useEffect } from 'react';
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = () => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    OwnerManager.getAll()
    .then(owners => setOwners(owners));
  };

  useEffect(() => {
    getOwners()
  }, []);

  return (
    <div>
      {owners.map(owner => <OwnerCard key={owner.id} owner={owner} />)}
    </div>
  )
}

export default OwnerList;