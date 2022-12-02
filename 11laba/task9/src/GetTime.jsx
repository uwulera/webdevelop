import React, { useState, useEffect } from 'react';
function GetTime()
{
    let [time, setState] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        <h1>{time}</h1>
      });

    return (<div>
        <h1>{time}</h1>
    <button onClick={() => 
    
    (setInterval(() => {
        setState( new Date().toLocaleTimeString() );
    }, 1 * 1000))}>
    Get Time
    </button></div>
    );
}
export default GetTime;
