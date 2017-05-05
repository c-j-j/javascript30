const video = document.querySelector('video')
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const strip = document.querySelector('.strip')

function getWebcamFeed() {
  return navigator.mediaDevices.getUserMedia({ video: true, audio: false} )
}

function modifyImage(pixels) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] += 50
    pixels.data[i + 1] += 100
    pixels.data[i + 2] += 150
  }

  return pixels
}

function splitRGB(pixels) {
  for (var i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]
    pixels.data[i + 500] = pixels.data[i + 1]
    pixels.data[i - 550] = pixels.data[i + 2]
  }

  return pixels
}

function drawToCanvas() {
  const {videoWidth: width, videoHeight: height} = video
  canvas.height = height
  canvas.width = width
  setInterval(() => {
    context.drawImage(video, 0, 0, width, height)
    context.globalAlpha = 0.3
    let pixels = context.getImageData(0, 0, width, height)
    pixels = splitRGB(pixels)
    context.putImageData(pixels, 0, 0)
  }, 16)
}

function takePhoto() {
  const data = canvas.toDataURL('image/jpeg')

  const link = document.createElement('a')
  link.href = data
  link.innerHTML = `<img src="${data}" alt="Photo"/>`
  link.setAttribute('download', 'photo')
  strip.insertBefore(link, strip.firstChild)
}

getWebcamFeed().then(feed => {
  video.src = window.URL.createObjectURL(feed)
  video.play()
})

video.addEventListener('canplay', drawToCanvas)
