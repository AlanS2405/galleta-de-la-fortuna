import getRandomElementFromArray from "../utils/randomeElementFromArray"
import phrase from '../utils/phrases.json'

const ButtonPhrase = ({setPhraseRandom, setPathRandom, arrBackgrounds}) => {

    const handleRandomPhrase = () => {
        const newRandomPhrase = getRandomElementFromArray(phrase)
        setPhraseRandom(newRandomPhrase)
        const newPath = getRandomElementFromArray(arrBackgrounds)
        setPathRandom(newPath)
    }

  return (
    <button onClick={handleRandomPhrase}> Probar mi suerte </button>
  )
}

export default ButtonPhrase
