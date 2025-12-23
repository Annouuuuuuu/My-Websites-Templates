import { useState } from 'react'
import GITLOGO from '/logo.png'
import Start from './start.jsx'
import Charade from './charade.jsx'
import facebook from '/facebook.svg'
import instagram from '/instagram.svg'
import mail from '/envelope.svg'
import './App.css'

function App() {
  const [showStart, setShowStart] = useState(true)

  return (
    <>
      <div> 
        {/* Header */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={GITLOGO} className="logo" alt="Logo du Club GIT-ENSPD" />
        </a>

        {/* Contenu  */}
      </div>
      <h1>Titre Charade/Enigme/Quizz</h1>
      {showStart ? <Start onStart={() => setShowStart(false)} /> : <Charade />}
      
      
      {/* Footer */}
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={facebook} className='social_icon' alt="Logo Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={instagram} className="social_icon" alt="Logo Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={mail} className="social_icon" alt="Logo Mail" />
        </a>
      </div>
      <p className="read-the-docs">
        (c) Club GIT - ENSPD | Tous droits réservés. <br />
        Développé par Annouuuuuuu
      </p>
    </>
  )
}

export default App
