import{
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  cardForest,
  cardCoffee,
  cardRain,
  cardFireplace
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
    sounds.pauseAudio()
    sounds.bgForest.play()
  })

  cardCoffee.addEventListener('click', function(){
    sounds.pauseAudio()
    sounds.bgCoffee.play()
  })

  cardRain.addEventListener('click', function(){
    sounds.pauseAudio()
    sounds.bgRain.play()
  })

  cardFireplace.addEventListener('click', function(){
    sounds.pauseAudio()
    sounds.bgFireplace.play()
  })
}