let xPosition = 0
let yPosition = 0
let screenWidth = null
let screenHeight = null

const getMousePosition = (e) => {
    e.preventDefault()
    xPosition = e.clientX
    yPosition = e.clientY
    const followElement = document.getElementById('follow')
    followElement.style.top = (yPosition - 35) + 'px'
    followElement.style.left = (xPosition - 35) + 'px'
    document.getElementById('x-position').innerText = xPosition
    document.getElementById('y-position').innerText = `${screenHeight - yPosition}`
}

const getScreenSize = (e) => {
    screenWidth = window.innerWidth
    screenHeight = window.innerHeight
    document.getElementById('width').innerText = `${screenWidth}px`
    document.getElementById('height').innerText = `${screenHeight}px`
}

window.addEventListener('load', getScreenSize)
window.addEventListener('resize', getScreenSize)
window.addEventListener('mousemove', getMousePosition)
window.addEventListener('touchstart', getMousePosition)
window.addEventListener('touchmove', getMousePosition)
window.addEventListener('touchend', getMousePosition)