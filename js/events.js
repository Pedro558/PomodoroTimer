import{
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  cardForest,
  cardCoffee,
  cardRain,
  cardFireplace,
  volumeCoffee,
  volumeFireplace,
  volumeForest,
  volumeRain
} from "./elements.js"

let soundActive = false

export default function({controls, timer, sounds}){
  buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sounds.pressButton()
  })

  buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sounds.pressButton()
  })

  buttonStop.addEventListener('click', function(){
    timer.reset()
    sounds.pressButton()
  })

  buttonPlus.addEventListener('click', function(){
    timer.plus()
    timer.updateDisplay()
    sounds.pressButton()
  })

  buttonMinus.addEventListener('click', function(){
    timer.minus()
    timer.updateDisplay()
    sounds.pressButton()
  })
  
 
  cardForest.addEventListener('click', function(){
    sounds.pauseAudio()
    if (!soundActive) {
      sounds.bgForest.play()
      return soundActive = true
    } 

    if (soundActive) {
      sounds.bgForest.pause()
      return soundActive = false
    }
  })

  cardCoffee.addEventListener('click', function(){
    sounds.pauseAudio()
    if (!soundActive) {
      sounds.bgCoffee.play()
      return soundActive = true
    } 

    if (soundActive) {
      sounds.bgCoffee.pause()
      return soundActive = false
    }
  })

  cardRain.addEventListener('click', function(){
    sounds.pauseAudio()
    if (!soundActive) {
      sounds.bgRain.play()
      return soundActive = true
    } 

    if (soundActive) {
      sounds.bgRain.pause()
      return soundActive = false
    }
  })

  cardFireplace.addEventListener('click', function(){
    sounds.pauseAudio()
    if (!soundActive) {
      sounds.bgFireplace.play()
      return soundActive = true
    } 

    if (soundActive) {
      sounds.bgFireplace.pause()
      return soundActive = false
    }
  })

  volumeForest.addEventListener('input', function(){
    sounds.bgForest.volume = this.value
  })

  volumeCoffee.addEventListener('input', function(){
    sounds.bgCoffee.volume = this.value
  })

  volumeFireplace.addEventListener('input', function(){
    sounds.bgFireplace.volume = this.value
  })

  volumeRain.addEventListener('input', function(){
    sounds.bgRain.volume = this.value
  })
}