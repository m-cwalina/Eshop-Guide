import React, { useState } from 'react';

export default function UserForm(props) {
  const [lastName, setLastName] = useState(props.lastName || '');
  const [residence, setResidence] = useState(props.residence || '');
  const [hobbies, setHobbies] = useState(props.hobbies || '');
  const [newHobby, setNewHobby] = useState('');


  const handleHobbyChange = (index, value) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = { ...newHobbies[index], interest: value };
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

      <div className="mb-3">
        <label className="form-label">Last Name:</label>
        <input
          type="text"
          className="form-control"
          name="user[last_name]"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Residence:</label>
        <input
          type="text"
          className="form-control"
          name="user[residence]"
          value={residence}
          onChange={e => setResidence(e.target.value)}
        />
      </div>

      <h2>Hobbies</h2>
      {hobbies.map((hobby, index) => (
        <div className="mb-3" key={index}>
          <label className="form-label">Interest:</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name={`user[hobbies_attributes][${index}][interest]`}
              value={hobby.interest}
              onChange={e => handleHobbyChange(index, e.target.value)}
            />
            <input
              type="hidden"
              name={`user[hobbies_attributes][${index}][id]`}
              value={hobby.id}
            />
          </div>
        </div>
      ))}

      <div className="mb-3">
        <h2>Add New Hobbies</h2>
        <label className="form-label">Add Hobby:</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={newHobby}
            onChange={e => setNewHobby(e.target.value)}
          />
          <button type="button" className="btn btn-secondary" onClick={addNewHobby}>
            Add Interest
          </button>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">Update</button>
    </form>
  );
}
