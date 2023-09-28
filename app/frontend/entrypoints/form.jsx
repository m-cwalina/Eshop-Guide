import "./main.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from '@/components/views/userForm';

  const domContainer = document.querySelector('#form');
  const {userId, lastName, residence, hobbies, authenticityToken } = domContainer.dataset;
  const parsedHobbies = JSON.parse(hobbies || '[]');

  ReactDOM.render(
    <UserForm
      userId={userId}
      lastName={lastName}
      residence={residence}
      hobbies={parsedHobbies}
      authenticityToken={authenticityToken}
    />,
    domContainer
  );
