import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrasesList from './utils/phrases.json'
import getRandomElementFromArray from './utils/randomeElementFromArray'
import AuthorCard from './components/AuthorCard'

const arrBackgrounds = [1,2,3,4]

function App() {

  const initialValue = getRandomElementFromArray (phrasesList);
  const initialPath = getRandomElementFromArray (arrBackgrounds);

  const [phraseRandom, setPhraseRandom] = useState(initialValue)
  const [pathRandom, setPathRandom] = useState(initialPath)

  const objStyle = {
    backgroundImage: `url('/fondo${pathRandom}.jpg')`
  }

  return (
    <div style={objStyle} className='app'>
      <div className="container">
      <h1>Galletas de la Fortuna</h1>
      <div className="main">
        <img src="/rectangle1.svg" alt="paper" className="paper"/>
        <PhrasesCard phraseRandom={phraseRandom}/>
      </div>
      <ButtonPhrase
        setPhraseRandom={setPhraseRandom} 
        setPathRandom={setPathRandom}
        arrBackgrounds={arrBackgrounds}
        />
      <h2 className="author"> Fuente: <AuthorCard phraseRandom={phraseRandom}/></h2>
      </div>
    </div>
  )
}

export default App
