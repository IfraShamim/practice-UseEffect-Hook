import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
    setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize' , handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  }, [])
  
  return (
    <>
      <h1>Window Width: {windowWidth}</h1>
    </>
  )
}

export default App
