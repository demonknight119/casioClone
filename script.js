
const videoContainer = document.querySelector('.video-container');
const iframe = videoContainer.querySelector('iframe');
const img = videoContainer.querySelector('img');

videoContainer.addEventListener('click', function() {
    if (!videoContainer.classList.contains('playing')) {
        videoContainer.classList.add('playing');

        // Add autoplay to the video
        iframe.src = iframe.src + "?autoplay=1&mute=1";

     }
});