import { useState } from "react"
import GamePlay from "./components/GamePlay"
import StartGame from "./components/StartGame"


function App() {

  const [isGameStarted, setIsGameStarted] = useState(true)

  const toggleGamePlay = ()=> {
    setIsGameStarted(!isGameStarted)
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay/> : <StartGame 
      toggle={toggleGamePlay}
      />
    }
    
    </>
  )
}

export default App
