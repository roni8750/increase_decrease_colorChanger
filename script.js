const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const text = document.querySelector('p')
let fontSize = 36;

const bigText = () => {
    if (fontSize >= 51) return
    fontSize += 5
    text.style.fontSize = fontSize + 'px'
}
const smallText = () => {
    if (fontSize <= 21) return
    fontSize -= 5
    text.style.fontSize = fontSize + 'px'
}

const addColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    text.style.color = `rgba(${r},${g},${b})`
}


sizeUp.addEventListener('click', bigText)
sizeDown.addEventListener('click', smallText)
color.addEventListener('click', addColor)
