function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  if (window.screen.width > 1000 ){
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)}
  console.log(window.screen.width)
