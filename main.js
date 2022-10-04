/* animasi skills */
window.onload = function () {
    let bar = document.querySelectorAll('.graph');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
      let count = 0;
      let progressAnimation = setInterval(() => {
        count++;
        progress.setAttribute('data-text', `${count}%`);
        if (count >= value) {
          clearInterval(progressAnimation);
        }
      }, 15);
    });
  };

/* lagu */
var song = document.getElementById("song");
var icon = document.getElementById("icon");

 icon.onclick = function () {
   if(song.paused){
     song.play();
     icon.src= "assets/image/pausepng.png";
    }
    else{
      song.pause();
      icon.src= "assets/image/playpng.png";
   }
}
