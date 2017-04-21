function processKeypress({keyCode}) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  const key = document.querySelector(`div[data-key="${keyCode}"`)

  if (audio) {
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
  }
}

function undoTransition(event) {
  if (event.propertyName === 'transform') {
    event.target.classList.remove('playing')
  }
}

document.querySelectorAll('.key')
        .forEach(k => k.addEventListener('transitionend', undoTransition))

window.addEventListener('keydown', processKeypress)
