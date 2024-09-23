// Sæt videoen lidt ned i tempo
bgVideo.playbackRate = .9

// Skru ned for musikken
bgMusic.volume = .2

// Deal med discord linket
const copy = () => {
  hiddenLink.value = discordInput.value

  hiddenLink.focus()
  hiddenLink.select()
  document.execCommand('copy')
}

let cc = 1
const handleClicks = () => {
  //navigator.clipboard.writeText(discordInput.value)
  copy()
  cc++

  copyCount.innerText = ` hele ${cc} gange!`
}

discordLink.onclick = handleClicks
discordInput.onclick = handleClicks

copy()

//navigator.clipboard.writeText(discordInput.value)

// Gør logoet responsive
document.onmousemove = ({pageX: x, pageY: y}) => {
  cursor.style.left = x+'px'
  cursor.style.top = y+'px'


  const h = window.innerHeight/2
  const w = window.innerWidth/2

  pureLogo.style.transform = `perspective(100vw) rotateY(${(x/w)*45-45}deg) rotateZ(${(y/h)*5-5}deg)`
  blurLogo.style.transform = `perspective(100vw) rotateY(${(x/w)*33-33}deg) rotateZ(${(y/h)*4-4}deg)`

  txtLogo.style.cssText = `
    transform: perspective(100vw) rotateY(${(x/w)*33-33}deg) rotateZ(${(y/h)*4-4}deg);
    letter-spacing: ${Math.abs((x/w)*.2-.2)*-1}vw;
  `
}

discField.onmouseenter = e => cursor.style.transform = 'translate(-50%,-50%) scale(130%, 130%) rotate(-20deg)'
discField.onmouseleave = e => cursor.style.transform = 'translate(-50%,-50%) scale(100%, 100%) rotate(-35deg)'

