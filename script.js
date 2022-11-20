console.log("Welcome to stopify!");
//To play the song
//Initialize the variables
let songIndex=0;   //which song is playing at start
let audioElement=new Audio('./Songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');  //fetching the masterPlay id
let myprogress=document.getElementById('myProgress');  
let songitem=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName: "I knew you were trouble", filePath: "Songs/1.mp3", coverPath: 'cover/1.jpg'},
    {songName: "Don't blame me", filePath: "Songs/2.mp3", coverPath: 'cover/2.jpg'},
    {songName: "All you had to do was Stay", filePath: "Songs/3.mp3", coverPath: 'cover/3.jpg'},
    {songName: "August", filePath: "Songs/4.mp3", coverPath: 'cover/4.jpg'},
    {songName: "Back to December", filePath: "Songs/5.mp3", coverPath: 'cover/5.jpg'},
    {songName: "Blank Space", filePath: "Songs/6.mp3", coverPath: 'cover/6.jpg'},
    {songName: "End Game", filePath: "Songs/7.mp3", coverPath: 'cover/7.jpg'},
    {songName: "Look what you made me do", filePath: "Songs/8.mp3", coverPath: 'cover/8.jpg'},
    {songName: "Midnight Rain", filePath: "Songs/9.mp3", coverPath: 'cover/9.jpg'},
]

//Place the cover and name of songs
songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

//Listen to events
//Handle play, pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
//To update the time
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);  //It will give the progress of shong thus far
    console.log(progress);
    myprogress.value=progress;   //The value will be set inside the object name myProgress
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value*audioElement.duration/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='songs/2.mp3';
        audioElement.currentTime=0;
        audioElement.play();
    })
})