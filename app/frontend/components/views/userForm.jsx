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
    <form className="container mt-5" action={`/users/${props.userId}`} method="post">
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
        <label className="form-label">Add New Hobby:</label>
        <input
          type="text"
          className="form-control"
          value={newHobby}
          name='user[hobbies_attributes][interest]'
          onChange={e => setNewHobby(e.target.value)}
          onBlur={addNewHobby}
        />
      </div>

      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}

// import React, { useState } from 'react';

// export default function UserForm(props) {
//   const [lastName, setLastName] = useState(props.lastName || '');
//   const [residence, setResidence] = useState(props.residence || '');
//   const [hobbies, setHobbies] = useState(props.hobbies || []);
//   const [newHobby, setNewHobby] = useState('');

//   const handleHobbyChange = (index, value) => {
//     const newHobbies = [...hobbies];
//     newHobbies[index] = value;
//     setHobbies(newHobbies);
//   }

//   const addNewHobby = () => {
//     if (newHobby) {
//       setHobbies([...hobbies, newHobby]);
//       setNewHobby('');
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       user: {
//         last_name: lastName,
//         residence: residence,
//         hobbies_attributes: hobbies.map(hobby => ({ interest: hobby }))
//       }
//     };

//     try {
//       const response = await fetch(`/users/${props.userId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-CSRF-Token': props.authenticityToken,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         window.location.href = '/dashboard';
//       } else {
//         const errorData = await response.json();
//         console.error('Update failed:', errorData);
//       }
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="hidden" name="_method" value="patch" />
//       <input type="hidden" name="authenticity_token" value={props.authenticityToken} />

//       <div>
//         <label>Last Name:</label>
//         <input
//           type="text"
//           name="user[last_name]"
//           value={lastName}
//           onChange={e => setLastName(e.target.value)}
//         />
//       </div>

//       <div>
//         <label>Residence:</label>
//         <input
//           type="text"
//           name="user[residence]"
//           value={residence}
//           onChange={e => setResidence(e.target.value)}
//         />
//       </div>

//       <h2>Hobbies</h2>
//       {hobbies.map((hobby, index) => (
//         <div key={index}>
//           <label>Interest:</label>
//           <input
//             type="text"
//             name={`user[hobbies_attributes][${index}][interest]`}
//             value={hobby.interest}
//             onChange={e => handleHobbyChange(index, e.target.value)}
//           />
//         </div>
//       ))}

//       <div>
//         <label>Add New Hobby:</label>
//         <input
//           type="text"
//           value={newHobby}
//           name='user[hobbies_attributes][interest]'
//           onChange={e => setNewHobby(e.target.value)}
//           onBlur={addNewHobby}
//         />
//       </div>

//       <button type="submit" class="btn btn-primary">Add</button>
//     </form>
//   );
// }
