
import React, { useState, useEffect } from 'react';

function App() {

    const [head, setTitle] = useState("Hello");

    useEffect(() => {
        <h1>{head}</h1>
      });

  return (
    <div className="container">
      <h1>{head} </h1>
      <input id="username" type="text" placeholder="What's your name?" />
      <button onClick={() => 
    
    (setTitle(`Hello, ${document.getElementById('username').value}`))}>Submit</button>
    </div>
  );
}

export default App;