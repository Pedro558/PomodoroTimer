export default function(){
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
  const bgForest = new Audio("https://github.com/Pedro558/bgAudios/blob/main/Floresta.wav?raw=true")
  bgForest.loop = true

  const bgCoffee = new Audio("https://github.com/Pedro558/bgAudios/blob/main/Cafeteria.wav?raw=true")
  bgCoffee.loop = true

  const bgRain = new Audio("https://github.com/Pedro558/bgAudios/blob/main/Chuva.wav?raw=true")
  bgRain.loop = true

  const bgFireplace = new Audio("https://github.com/Pedro558/bgAudios/blob/main/Lareira.wav?raw=true")

  function pauseAudio(){
    bgForest.pause()
    bgCoffee.pause()
    bgRain.pause()
    bgFireplace.pause()
  }

  function pressButton(){
    buttonPressAudio.play()
  }

  function timeEnd(){
    kitchenTimer.play()
  }

  return{
    pressButton,
    timeEnd,
    pauseAudio,
    bgForest,
    bgCoffee,
    bgRain,
    bgFireplace
  }
}