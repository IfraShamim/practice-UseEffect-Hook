import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [isWhiteTheme, setIsWhiteTheme] = useState(true)
  useEffect(() => {
    document.body.style.backgroundColor = isWhiteTheme ? 'white' : 'black';
  }, [isWhiteTheme])
  
  
  return (
    <>
     <button onClick={() => {setIsWhiteTheme(!isWhiteTheme)}}>Switch Theme</button>
    </>
  )
}

export default App
