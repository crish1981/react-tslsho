import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './style.css';

export default function App() {
  let c = 'krishna';
  const [values, b] = useState(c);
  function testt() {
    b('use state krishna');
  }
  return (
    <div>
      {values}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="button" value="test" onClick={testt} />
    </div>
  );
}
