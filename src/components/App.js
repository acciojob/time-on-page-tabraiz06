
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count++)
  }, 1000);
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>You have been on this page for {count} seconds.</h2>

    </div>
  )
}

export default App
