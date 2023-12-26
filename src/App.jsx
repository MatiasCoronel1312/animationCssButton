import { useState } from "react"


function App() {
  const [click, setClick] = useState(false)
  const [click2, setClick2] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  const handleClick2 = () => {
    setClick2(!click2)
  }
  return (
    <>
    <div className="div2">
      <button className={`button ${click && ' animation'}`} onClick={handleClick}>{click?'Ok':'Enviar'}</button>
    </div>
    <div className="div2">
      <button className={`button ${click2 && ' animationEr'}`} onClick={handleClick2}>{click2?'Error':'Enviar'}</button>
    </div>
      
      
    </>
  )
}

export default App
