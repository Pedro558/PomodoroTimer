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
  volumeRain,
  btnToggle,
  btnDark,
  btnLight,
  root
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

  btnToggle.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode')
    btnLight.classList.toggle('hide')
    btnDark.classList.toggle('hide')
    
    var rootStyle = getComputedStyle(root)
    var btnSymbolLight = "#323238"
    var cardColorLight = "#E1E1E6";
    var cardColorDark = "#29292E";
    var btnSymbolDark = "#C4C4CC"

    if(rootStyle.getPropertyValue('--btn-color') === btnSymbolLight){
      root.style.setProperty('--btn-color', btnSymbolDark)
      root.style.setProperty('--card-color', cardColorDark)
      root.style.setProperty('--card-symbol', btnSymbolDark)
    }
    else if (rootStyle.getPropertyValue('--btn-color') === btnSymbolDark){
      root.style.setProperty('--btn-color', btnSymbolLight)
      root.style.setProperty('--card-color', cardColorLight)
      root.style.setProperty('--card-symbol', btnSymbolLight)
    }
    //console.log(rootStyle.getPropertyValue('--btn-color') === number)    
    
  })
}

//root.style.setProperty('--btn-color', '#323238')