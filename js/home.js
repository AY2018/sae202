/* Loader */

window.onload = () => {
  const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#";
  const header = document.getElementById('loader');
  let repetitions = 0;

  const interval = setInterval(() =>{
    header.innerText = header.dataset.titre.split("")
      .map((letter, index) => {
        if(index < repetitions){
          return header.dataset.titre[index];
        }
        return lettres[Math.floor(Math.random() * 25)];
      })
      .join("");

    if(repetitions >= header.dataset.titre.length) {
      clearInterval(interval);
    }
    repetitions += 1 / 3;
  }, 60);
};


var video = document.getElementById('myVideo');

video.addEventListener('loadedmetadata', function() {
    var videoDuration = video.duration;
    var nextAppear = videoDuration - 4;

    video.addEventListener('play', function() {
        // Disable the video controls
        video.controls = false;

        // Get the elements to animate
        var mainElement = document.getElementById('mainElement');
        var ccBtn = document.getElementById('ccBtn');
        var musicBtn = document.getElementById('musicBtn');
        var next = document.getElementById('video_nextPage');

        // Start the animations
        mainElement.style.animation = 'whiteToB ' + videoDuration + 's ease forwards';
        ccBtn.style.animation = 'blackToW ' + videoDuration + 's ease forwards';
        musicBtn.style.animation = 'blackToW ' + videoDuration + 's ease forwards';
        next.style.animation = 'nextAppear 3s ease forwards ' + nextAppear + 's';
    });
});


// Mute/Unmute video 
document.getElementById('musicBtn').addEventListener('click', function () {
    video.muted = !video.muted;
    this.classList.toggle('music_no');
});

// Change video source
document.getElementById('ccBtn').addEventListener('click', function() {
    this.classList.toggle('music_no');
    if(video.getAttribute('src') == './img/Composition2.mp4') {
        video.setAttribute('src', './img/Composition1.mp4');
    } else {
        video.setAttribute('src', './img/Composition2.mp4');
    }
    video.load();
    video.play(); // Autoplay the video after switching
});




