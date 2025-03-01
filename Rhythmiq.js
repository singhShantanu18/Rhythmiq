

let audioElement = new Audio('tracks/audio1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let nextPlay = document.getElementById('nextPlay');
let prevPlay = document.getElementById('prevPlay');
let div = document.querySelector('div');
let songDisplay = document.querySelector('.js-songDisplay');


let songList = [
    {songname : "track1" , filepath : "tracks/audio1.mp3", coverpath : "coverImg/1.png"},
    {songname : "track2" , filepath : "tracks/audio2.mp3", coverpath : "coverImg/2.png"},
    {songname : "track3" , filepath : "tracks/audio3.mp3", coverpath : "coverImg/3.png"},
    {songname : "track4" , filepath : "tracks/audio4.mp3", coverpath : "coverImg/4.jfif"},
    {songname : "track5" , filepath : "tracks/audio5.mp3", coverpath : "coverImg/5.png"},
]

// Playing and pausing tracks
masterPlay.addEventListener('click' , () => {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Updating progressBar
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value = progress;
})

//Changing track time when progress bar is updated
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =( myProgressBar.value * audioElement.duration) / 100;
}) 

// Changing tracks by forward and backward buttons
nextPlay.addEventListener('click' , ()=>{
    console.log(1+index);
    if(index<5)
    {
        index ++;
        audioElement.src = `tracks/audio${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause')
        gif.style.opacity = 1;

        songDisplay.innerHTML = `Track${index}`
    }
    else
    {
        index = 1;
        audioElement.src = `tracks/audio1.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause')

        songDisplay.innerHTML = `Track${index}`
    }
})

prevPlay.addEventListener('click' , ()=>{
    if(index>1)
    {
        index--;
        audioElement.src = `tracks/audio${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause')
        gif.style.opacity = 1;

        songDisplay.innerHTML = `Track${index}`
    }
    else
    {
        index = 5;
        audioElement.src = `tracks/audio5.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause')

        songDisplay.innerHTML = `Track${index}`
    }
})


//Changings tracks onclicking the song name!
div.addEventListener('click' , (e)=>{
    index = e.target.id;
    audioElement.src= `tracks/audio${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-pause')

    songDisplay.innerHTML = `Track${index}`
})



//display track name which is being played
songDisplay.innerHTML = `Track${index}`