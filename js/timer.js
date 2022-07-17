
export default function Timer({
  minutesDisplay,
  secondsDisplay
}){
  let minutes = Number(minutesDisplay.textContent)
  let timerTimerOut

  function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset(){
    clearTimeout(timerTimerOut)
    updateDisplay(minutes, 0)
  }

  function countdown(){
    timerTimerOut = setTimeout(function(){
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, seconds)

      if(isFinished){
        updateDisplay()
        return
      }

      if(seconds <= 0){
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, seconds - 1)

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes){
    minutes = newMinutes
  }

  function plus(){
    minutes += 5
  }

  function minus(){
    if(!minutes == 0){
      minutes -= 5
    }
  }

  function hold(){
    clearTimeout(timerTimerOut)
  }

  return{
    updateDisplay,
    reset,
    countdown,
    updateMinutes,
    plus,
    minus,
    hold
  }
}