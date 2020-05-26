import React from 'react';

const OwnerCard = () => {
  return  (
    <div className="card">
      <div className="card-content">
        <h3>
          Owner: <span className="card-owner">Jeff</span>
          <p>Founder of Student Kennels</p>
        </h3>
      </div>
    </div>
  );
};

export default OwnerCard;