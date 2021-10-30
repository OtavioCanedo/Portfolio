import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Heading(){ //Sempre começar com letra maiuscula
  return (
    <h1></h1>
  )
}
/*const Heading = () => <h1>PUC Seminario</h1>*/

ReactDOM.render(  //assim ou {Heading()}
  <React.StrictMode>
    <App />    
  </React.StrictMode>,
  document.getElementById('root')
);
