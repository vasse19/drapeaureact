import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./styles/index.scss";

//import reportWebVitals from './reportWebVitals';

ReactDOM.render( //rendu 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);