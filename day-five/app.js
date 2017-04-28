const panels = document.querySelectorAll(".panel")

function handleClick(event) {
  this.classList.toggle('open')
}

function activateText(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('active')
  }
}

panels.forEach(p => p.addEventListener("click", handleClick))
panels.forEach(p => p.addEventListener("transitionend", activateText))
