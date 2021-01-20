function update(e){
    var x = e.clientX 
    var y = e.clientY 
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  if (window.screen.width > 1000 ){
  document.addEventListener('mousemove',update)}
