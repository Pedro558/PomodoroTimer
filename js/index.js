import{
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPause,
  cardForest,
  cardCoffee,
  cardFireplace,
  cardRain
} from "./elements.js"

import Events from "./events.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sounds = Sounds()

Events({controls, timer, sounds})

