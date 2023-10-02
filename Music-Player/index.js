// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
audioElement.name = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songs = [
    { songName: "1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "2", filePath: "songs/4.mp3", coverPath: "covers/2.jpg" },
    { songName: "3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Aashiqui Aa Gayi", filePath: "songs/Aashiqui Aa Gayi.mp3", coverPath: "covers/4.jpg" },
    { songName: "Dhokha", filePath: "songs/Dhokha.mp3", coverPath: "covers/5.jpg" },
    { songName: "Dil Ko Karaar Aaya", filePath: "songs/Dil Ko Karaar Aaya.mp3", coverPath: "covers/6.jpg" },
    { songName: "Hasi Ban Gayi", filePath: "songs/Hasi.mp3", coverPath: "covers/7.jpg" },
    { songName: "Kesariya", filePath: "songs/Kesariya.mp3", coverPath: "covers/8.jpg" },
    { songName: "maan meri jaan", filePath: "songs/maan meri jaan.mp3", coverPath: "covers/9.jpg" },
    { songName: "Raatan Lambiyan", filePath: "songs/Raatan Lambiyan.mp3", coverPath: "covers/10.jpg" },
]
songItems.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
})
// audio element
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.toggle('fa-play-circle');
        masterPlay.classList.toggle('fa-pause-circle');
        gif.style.opacity = 1;
        // autoElement 
        // setTimeout(() => {
        //     audioElement.pause();
        //     console.log(audioElement.currentTime);
        // }, 3000);
        document.getElementById(audioElement.name).classList.remove('fa-play-circle');
        document.getElementById(audioElement.name).classList.add('fa-pause-circle');
        // Array.from(document.getElementsByClassName('songItemPlay'))[audioElement.name].getElement
    }
    else {
        audioElement.pause();
        masterPlay.classList.toggle('fa-play-circle');
        masterPlay.classList.toggle('fa-pause-circle');
        document.getElementById(audioElement.name).classList.add('fa-play-circle');
        document.getElementById(audioElement.name).classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
    masterSongName.innerHTML = songs[songIndex].songName;
})
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 10000);
    // console.log(progress + "%");
    myProgressBar.value = progress;
    // setInterval(() => {
    //     console.clear();
    // }, 1000);
});
myProgressBar.addEventListener('input', () => {
    // console.log("clicked")
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 10000;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        // element.classList.togg
        // element.classList.toggle('fa-play-circle');
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        makeAllPlays();
        // console.log(e.target);
        // console.log(songs[e.target.id].filePath);
        // console.log(audioElement.src);
        // console.log(audioElement)
        // let currentaudio = audioElement.name;

        // console.log(songIndex);
        // console.log(songs[songIndex])

        songIndex = parseInt(e.target.id);
        if (parseInt(songIndex) == parseInt(audioElement.name)) {
            if (audioElement.paused) {
                audioElement.play();
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                masterSongName.innerHTML = songs[songIndex].songName;
                return;
            }
            audioElement.pause();
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            return;
        }
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songs[songIndex].filePath}`;
        audioElement.currentTime = 0;
        audioElement.play();
        audioElement.name = songIndex;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        masterSongName.innerHTML = songs[songIndex].songName;
    })
})
document.getElementById('next').addEventListener('click', () => {
    let previousSong = document.getElementsByClassName('songItemPlay')[songIndex];
    previousSong.classList.add('fa-play-circle');
    previousSong.classList.remove('fa-pause-circle');
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    let currentSong = document.getElementsByClassName('songItemPlay')[songIndex];
    currentSong.classList.add('fa-pause-circle');
    currentSong.classList.remove('fa-play-circle');
    audioElement.src = `${songs[songIndex].filePath}`;
    audioElement.currentTime = 0;
    audioElement.play();
    audioElement.name = songIndex;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerHTML = songs[songIndex].songName;
})
document.getElementById('previous').addEventListener('click', () => {

    let previousSong = document.getElementsByClassName('songItemPlay')[songIndex];

    previousSong.classList.add('fa-play-circle');
    previousSong.classList.remove('fa-pause-circle');
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    let currentSong = document.getElementsByClassName('songItemPlay')[songIndex];
    currentSong.classList.add('fa-pause-circle');
    currentSong.classList.remove('fa-play-circle');
    audioElement.src = `${songs[songIndex].filePath}`;
    audioElement.currentTime = 0;
    audioElement.play();
    audioElement.name = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerHTML = songs[songIndex].songName;
})
const playNext = () => {
    let previousSong = document.getElementsByClassName('songItemPlay')[songIndex];
    previousSong.classList.add('fa-play-circle');
    previousSong.classList.remove('fa-pause-circle');
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    let currentSong = document.getElementsByClassName('songItemPlay')[songIndex];
    currentSong.classList.add('fa-pause-circle');
    currentSong.classList.remove('fa-play-circle');
    audioElement.src = `${songs[songIndex].filePath}`;
    audioElement.currentTime = 0;
    audioElement.play();
    audioElement.name = songIndex;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerHTML = songs[songIndex].songName;

    // audioElement.play();
}
audioElement.addEventListener('ended', playNext);