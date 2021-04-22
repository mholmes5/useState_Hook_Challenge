import React, { useState } from "react";

function App() {
  const [time, resetTime] = useState(new Date().toLocaleTimeString());

  function getTime() {
    resetTime(new Date().toLocaleTimeString());
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
