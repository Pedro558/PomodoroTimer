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
      sounds.pauseAudiosExcept(sounds.bgForest)

      if (sounds.bgForest.paused) {
        sounds.bgForest.play()
      } else {
        sounds.bgForest.pause()
      }
  })

  cardCoffee.addEventListener('click', function(){
      sounds.pauseAudiosExcept(sounds.bgCoffee)

      if (sounds.bgForest.paused) {
        sounds.bgCoffee.play()
      } else {
        sounds.bgCoffee.pause()
      }
  })

  cardRain.addEventListener('click', function(){
      sounds.pauseAudiosExcept(sounds.bgRain)

      if (sounds.bgRain.paused) {
        sounds.bgRain.play()
      } else {
        sounds.bgRain.pause()
      }
  })

  cardFireplace.addEventListener('click', function(){
      sounds.pauseAudiosExcept(sounds.bgFireplace)

      if (sounds.bgFireplace.paused) {
        sounds.bgFireplace.play()
      } else {
        sounds.bgFireplace.pause()
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