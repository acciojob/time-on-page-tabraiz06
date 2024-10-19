
import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
const [seconds, setSeconds] = useState(0);

 useEffect(() => {
    // Increment seconds every second (1000ms)
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>You have been on this page for {count} seconds.</h2>

    </div>
  )
}

export default App
