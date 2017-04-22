function setHand(hand, degree) {
  hand.style.transform = `rotate(${degree}deg)`
}

function tick() {
  const date = new Date()

  const secondsDegree = ((date.getSeconds() / 60) * 360)
  const minutesDegree = ((date.getMinutes() / 60) * 360) + ((date.getSeconds()/60)*6) + 90;
  const hoursDegree = ((date.getHours() / 12) * 360) + ((date.getMinutes()/60)*30) + 90;

  setHand(document.querySelector('.second'), secondsDegree)
  setHand(document.querySelector('.minute'), minutesDegree)
  setHand(document.querySelector('.hour'), hoursDegree)
}

setInterval(tick, 1000)
