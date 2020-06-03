import React, { useState, useEffect } from "react"
import apiManager from '../../modules/apiManager';

const OwnerEditForm = (props) => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const updateExistingOwner = evt => {
    evt.preventDefault()
    setIsLoading(true);
    const editedOwner = {
      id: props.match.params.ownerId,
      name: owner.name,
      phoneNumber: owner.phoneNumber
    };

    apiManager.update("owners", editedOwner)
      .then(() => props.history.push("/owners"))
  }

  useEffect(() => {
    apiManager.get("owners", props.match.params.ownerId)
      .then(owner => {
        setOwner(owner);
        setIsLoading(false);
      });
  }, [props.match.params.ownerId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={owner.name}
            />
            <label htmlFor="name">Owner name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="phoneNumber"
              value={owner.phoneNumber}
            />
            <label htmlFor="phoneNumber">PhoneNumber</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingOwner}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default OwnerEditForm;