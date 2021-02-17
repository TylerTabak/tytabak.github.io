function update(e){
    var x = e.clientX 
    var y = e.clientY
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  

function openProjects() {
    var y = document.getElementById('project-btn');
    var z = document.getElementById('projects-hdn');
    var w = document.getElementById('project-toggle');
    if (!y.classList.contains('open')) {
        y.classList.add('open');
        z.classList.remove('hidden');
        w.innerHTML = "Projects";
        setTimeout(function(){ z.classList.remove('invisible'); }, 2500);
    } else{
        y.classList.remove('open');
        z.classList.add('hidden');
        z.classList.add('invisible');
        w.innerHTML = `<i id="project-icon" class="fas fa-lightbulb"></i>`
    }
}

  if (window.screen.width > 1000 ){
  document.addEventListener('mousemove',update)}

  var imgArray = [
    'images/javascript.svg',
    'images/vue.svg',
    'images/laravel.svg',
    'images/python.svg',
    'images/java.svg',
    'images/wordpress.svg',
    'images/php.svg',
    'images/mongodb.svg',
    'images/mysql.svg'],
    curIndex = 0;
    imgDuration = 4000;

function slideShow() {
    var x = document.getElementById('slider');
    x.className += "fadeOut";
    setTimeout(function() {
        x.src = imgArray[curIndex];
        x.className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
