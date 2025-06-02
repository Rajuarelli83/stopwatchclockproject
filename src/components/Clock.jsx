import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

  
    return () => clearInterval(interval);
  }, []);

  return (
    <div >
     <p style={{ fontSize: '2rem', fontFamily: 'monospace' , backgroundColor:"black",color:"white", borderRadius:7,padding:10,paddingLeft:20}}> {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;