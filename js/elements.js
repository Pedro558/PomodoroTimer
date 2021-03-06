const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardCoffee = document.querySelector('.coffee')
const cardFireplace = document.querySelector('.fireplace')

const volumeCoffee = document.getElementById('coffee')
const volumeFireplace = document.getElementById('fireplace')
const volumeForest = document.getElementById('nature')
const volumeRain = document.getElementById('rain')

const btnToggle = document.querySelector('.btn-toggle')
const btnDark = document.querySelector('.dark-mode-btn')
const btnLight = document.querySelector('.light-mode-btn')
const root = document.querySelector(':root')

export{
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  cardForest,
  cardRain,
  cardCoffee,
  cardFireplace,
  volumeCoffee,
  volumeFireplace,
  volumeForest,
  volumeRain,
  btnToggle,
  btnDark,
  btnLight,
  root
}
