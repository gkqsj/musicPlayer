const playerElement = document.getElementById('myPlayer');

const controls = playerElement.querySelector('.optionsBox');

const progBar = document.getElementById('progressBar');

const playBtn = controls.querySelector('.play');
const pauseBtn = controls.querySelector('.pause');
const nextBtn = controls.querySelector('.next');
const prevBtn = controls.querySelector('.prev');

const audioElement = playerElement.querySelector('.audio');


playBtn.addEventListener('click', ()=>{
    audioElement.play();
})

pauseBtn.addEventListener('click', ()=>{
    audioElement.pause();
})

nextBtn.addEventListener('click', ()=>{
    audioElement.currentTime += 10;
})

prevBtn.addEventListener('click', ()=>{
    audioElement.currentTime -= 10;
})

audioElement.addEventListener('timeupdate', ()=>{
    const {
        currentTime,
        duration,
    } = audioElement;

    progBar.style.width = `${100 * (currentTime / duration)}%`;
});

function repos(event){
    var x = event.clientX;
    console.log(x-10);
    console.log((x-10)/(98*(window.innerWidth/100)));

    audioElement.currentTime = audioElement.duration*((x-10)/(98*(window.innerWidth/100)))
}