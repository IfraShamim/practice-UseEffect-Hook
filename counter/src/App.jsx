import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count])
  
  return (
    <>
    <button onClick={() => {setCount(count+1)}}>Count: {count}</button>
    </>
  )
}

export default App
