import React, { useState } from 'react';
import apiManager from '../../modules/apiManager';
import './OwnerForm.css';

const OwnerForm = props => {
  const [owner, setOwner] = useState({name: "", phoneNumber: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = e => {
    const stateToChange = { ...owner };
    stateToChange[e.target.id] = e.target.value;
    setOwner(stateToChange);
  }

  const constructNewOwner = e => {
    e.preventDefault();
    if (owner.name === "" || owner.phoneNumber === "") {
      window.alert("Please make sure all fields are filled out")
    } else {
      setIsLoading(true);
      apiManager.post("owners", owner)
        .then(() => props.history.push('/owners'));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange} id="name" placeholder="Owner name"/>
            <label htmlFor="name">Name</label>
            <input type="text" required onChange={handleFieldChange} id="phoneNumber" placeholder="phone number"/>
            <label htmlFor="phoneNumber">phone number</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} onClick={constructNewOwner}>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default OwnerForm;