import React, { useState } from 'react';

export default function UserForm(props) {
  const [lastName, setLastName] = useState(props.lastName || '');
  const [residence, setResidence] = useState(props.residence || '');
  const [hobbies, setHobbies] = useState(props.hobbies || '');
  const [newHobby, setNewHobby] = useState('');

  const handleHobbyChange = (value) => {
    const newHobbies = [...hobbies];
    newHobbies = { ...newHobbies, interest: value };
    setHobbies(newHobbies);
  };

  const addNewHobby = () => {
    if (newHobby) {
      setHobbies([...hobbies, { interest: newHobby }]);
      setNewHobby('');
    }
  };

  return (
    <form className="form-container" action='/profile/update' method="post">
      <input type="hidden" name="_method" value="patch" />
      <input type="hidden" name="authenticity_token" value={props.authenticityToken} />

      <h2>Information</h2>
      <div className="mb-3">
        <label className="form-label text-secondary">Last Name:</label>
        <input
          type="text"
          className="form-control rounded-lg"
          name="user[last_name]"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          style={{ textAlign: "center" }}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Residence:</label>
        <input
          type="text"
          className="form-control  rounded-lg"
          name="user[residence]"
          value={residence}
          onChange={e => setResidence(e.target.value)}
          style={{ textAlign: "center" }}
        />
      </div>

      <h2>Hobbies</h2>
      {hobbies.map((hobby, index) => (
        <div className="mb-3" key={index}>
          <label className="form-label">Interest:</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control  rounded-lg"
              name={`user[hobbies_attributes][interest]`}
              value={hobby.interest}
              onChange={e => handleHobbyChange(e.target.value)}
              style={{ textAlign: "center" }}
            />
            <input
              type="hidden"
              name={`user[hobbies_attributes][id]`}
              value={hobby.id}
            />
          </div>
        </div>
      ))}

      <div className="mb-3">
        <h2>Add New Hobby</h2>
        <div className="input-group add-button">
          <input
            type="text"
            className="form-control  rounded-lg"
            value={newHobby}
            onChange={e => setNewHobby(e.target.value)}
            style={{ textAlign: "center" }}
          />
          <button type="button" className="btn btn-secondary btn-sm" onClick={addNewHobby}>
            Add Interest
          </button>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-lg">Update</button>
    </form>
  );
}
