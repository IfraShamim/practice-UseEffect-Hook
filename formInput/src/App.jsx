import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    console.log(inputVal);
  }, [inputVal]); 

  const handleInput = (e) => {
    setInputVal(e.target.value); 
  };

  return (
    <>
      <h1>Form Input</h1>
      <form action="">
        <input
          type="text"
          placeholder="Enter your name.."
          value={inputVal}
          onChange={handleInput} 
        /><br /><br />
        <input type="password" placeholder="Enter password" />
      </form>
      <p>Logged Value: {inputVal}</p> 
    </>
  );
}

export default App;
