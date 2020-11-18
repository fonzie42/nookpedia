import React, { useState } from 'react'
import Bugs from './Bugs'
import Fish from './Fish'
import { CritterPediaIcon } from 'components/NookIcons/CritterPediaIcon'
import { Phone } from './Phone'
function App() {
  const [isCritterPediaOpen, setIsCritterPediaOpen] = useState<boolean>(false)
  const [isCritterOpen, setIsCritterOpen] = useState<boolean>(false)
  const [isFishOpen, setIsFishOpen] = useState<boolean>(false)
  const [, setIsSeaCreaturesOpen] = useState<boolean>(false)

  return (
    <Phone />
    // <div className="App">
    //   <CritterPediaIcon
    //     onClick={() => {
    //       setIsCritterPediaOpen(!isCritterPediaOpen)
    //     }}
    //   />
    //   {isCritterPediaOpen && (
    //     <>
    //       <CritterPediaIcon
    //         soloIcon="critter"
    //         onClick={() => {
    //           setIsCritterOpen(true)

    //           setIsFishOpen(false)
    //           setIsSeaCreaturesOpen(false)
    //           setIsCritterPediaOpen(false)
    //         }}
    //       />

    //       <CritterPediaIcon
    //         soloIcon="fish"
    //         onClick={() => {
    //           setIsFishOpen(true)

    //           setIsCritterOpen(false)

    //           setIsSeaCreaturesOpen(false)
    //           setIsCritterPediaOpen(false)
    //         }}
    //       />

    //       <CritterPediaIcon
    //         soloIcon="sea-creature"
    //         onClick={() => {
    //           setIsSeaCreaturesOpen(true)
    //           setIsFishOpen(false)

    //           setIsCritterOpen(false)
    //           setIsCritterPediaOpen(false)
    //         }}
    //       />
    //     </>
    //   )}
    //   {isFishOpen && <Fish />}
    //   {isCritterOpen && <Bugs />}
    // </div>
  )
}

export default App
