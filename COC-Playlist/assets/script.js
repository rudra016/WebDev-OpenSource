/*
🎬 Clash of CLash playlist With Vanilla JavaScript
👨🏻‍⚕️ By: CoderRalph
*/


const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Clash of Clash Animation #1',
        'name': 'Clash Is Raiding Chess! Clash of Clans Animation.mp4',
        'duration': '1:14',
    },

    {
        'id': 'a2',
        'title': 'Clash of Clash Animation #2',
        'name': 'Goblins Got Talent (Clash Of Clans).mp4',
        'duration': '1:10',
    },

    {
        'id': 'a3',
        'title': 'Clash of Clash Animation #3',
        'name': 'The Legend Of The Ice Hound (Clash Of Clans).mp4',
        'duration': '1:35',
    },

    {
        'id': 'a4',
        'title': 'Clash of Clash Animation #4',
        'name': 'Year Of The Tiger Comes To Clash!.mp4',
        'duration': '1:54',
    },

    {
        'id': 'a5',
        'title': 'Clash of Clash Animation #5',
        'name': 'SNOWDAY _ A Clashmas Story ❄️.mp4',
        'duration': '2:21',
    },

    {
        'id': 'a6',
        'title': 'Clash of Clash Animation #6',
        'name': '.mp4',
        'duration': '',
    },
    
    {
        'id': 'a7',
        'title': 'Clash of Clash Animation #7',
        'name': '.mp4',
        'duration': '',
    },

    {
        'id': 'a8',
        'title': 'Clash of Clash Animation #8',
        'name': '.mp4',
        'duration': '',
    },

    {
        'id': 'a9',
        'title': 'Clash of Clash Animation #9',
        'name': '.mp4',
        'duration': '',
    },

    {
        'id': 'a9',
        'title': 'Clash of Clash Animation #10',
        'name': '.mp4',
        'duration': '',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
