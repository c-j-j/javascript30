function handleChange(e) {
  console.log(`--${this.dataset.var}`);
  document.documentElement.style.setProperty(`--${this.dataset.var}`, `${this.value}${this.dataset.suffix}`)
}

function addEventListeners() {
  const inputs = document.querySelectorAll("input")

  inputs.forEach(i => i.addEventListener("change", handleChange))
  inputs.forEach(i => i.addEventListener("mousemove", handleChange))
}

document.addEventListener('DOMContentLoaded', addEventListeners)
