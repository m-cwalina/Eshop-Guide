import "./main.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '@/components/views/dashboard';

const domContainer = document.querySelector('#dashboard');
const { authenticityToken } = domContainer.dataset;

ReactDOM.render(
  <Dashboard authenticityToken={authenticityToken} />,
  domContainer
);
