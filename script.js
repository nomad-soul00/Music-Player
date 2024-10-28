console.log("hello world");
let currentSong = new Audio();
let seekbar = document.getElementById("seekbar");
let play_Btn = document.getElementById("play");



// function to fetch songs from the folder
async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/projects/music-player/music/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let song = [];
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            // console.log(element.href)
            song.push(element.href);
        }
    }
    // console.log(as);
    // console.log(song);
    return song;
}



const playMusic = (track) => {
    let trackURL = "music/" + track.replaceAll(" ", "%20");
    currentSong.src = trackURL;
    // console.log(currentSong);
    currentSong.play();
   
    // track display
    let playbar_song = document.getElementById("playbar-song-name");
    let artist = document.getElementById("playbar-artist-name");
    let track_copy = track.slice(0,-4).split(/-(.+)/);
    playbar_song.innerHTML = track_copy[0];
    // console.log(playbar_song.innerHTML);
    artist.innerHTML = track_copy[1]
    play_Btn.innerHTML = `<svg class = "pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="currentColor" stroke-width="1.5" />
</svg>`


}

function secondstoMinutes(duration_seconds){
    let minutes = Math.floor(duration_seconds/60);
    let seconds = Math.floor(duration_seconds %60); 

    let formattedMinutes = String(minutes).padStart(2,'0');
    let formattedSeconds = String(seconds).padStart(2,'0');

    return `${formattedMinutes}:${formattedSeconds}`
}



async function main() {
    let songs = await getSongs();
    // console.log(songs[0]);
    
    // document.addEventListener('click', ()=>{
    //     let audio = new Audio("/music-player/music/Ishq-FaheemAbdullah,RauhanMalik.mp3");
    //     audio.play();
    // });
    // console.log(songs[3]);


    let songs_container = document.querySelector(".library-songs-container");
    let song = songs_container.getElementsByTagName("ul")[0].getElementsByTagName("li");

    if (songs.length === 0) {
        songs_container.style.display = 'none';
    }
    else {
        songs.forEach(element => {
            songs_container.getElementsByTagName("ul")[0].innerHTML += `<li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                                    color="#000000" fill="none">
                                    <path
                                        d="M21.5 12.5C21.5 18.0228 17.0228 22.5 11.5 22.5C5.97715 22.5 1.5 18.0228 1.5 12.5C1.5 6.97715 5.97715 2.5 11.5 2.5C12.6688 2.5 13.7907 2.70051 14.8333 3.06902"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path
                                        d="M19.5 9C19.5 10.3807 18.3807 11.5 17 11.5C15.6193 11.5 14.5 10.3807 14.5 9C14.5 7.61929 15.6193 6.5 17 6.5C18.3807 6.5 19.5 7.61929 19.5 9ZM19.5 9V1.5C19.8333 2 20.1 4.1 22.5 4.5"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M13 12.5C13 11.6716 12.3284 11 11.5 11C10.6716 11 10 11.6716 10 12.5C10 13.3284 10.6716 14 11.5 14C12.3284 14 13 13.3284 13 12.5Z"
                                        stroke="currentColor" stroke-width="1.5" />
                                </svg>
                                <p class = "song-name">${element.split("music/")[1].replaceAll("%20", " ")}</p>
                            </li>`
        });

    }

    // console.log(song[0]);
    // playMusic(song[0].querySelector(".song-name").innerHTML);




    // event listener for library music
    Array.from(song).forEach(e => {
        e.addEventListener('click', element => {
            // console.log(e.querySelector(".song-name").innerHTML);
            playMusic(e.querySelector(".song-name").innerText);
           
        })
    });
    // console.log(song)

    //  event listener for play, pause and next buttons
    let play_Btn = document.getElementById("play");
    // console.log(currentSong.src);
    play_Btn.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play_Btn.innerHTML = `<svg class = "pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="currentColor" stroke-width="1.5" />
</svg>`
        }

       
        else{
            currentSong.pause();
            play_Btn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>`;
           
        }
        
    })

    currentSong.addEventListener("timeupdate", ()=>{
        
       let duration_bar = document.querySelector(".time-info") ;
       duration_bar.innerHTML = `${secondstoMinutes(currentSong.currentTime)}/${secondstoMinutes(currentSong.duration)}`;
    //    console.log(seekbar);

    // seekbar script
    seekbar.value = currentSong.currentTime;
    })
    currentSong.addEventListener('loadedmetadata', ()=>{
        seekbar.max = currentSong.duration;
    })

    // event listener for the seekbar
    seekbar.addEventListener('input',()=>{
        currentSong.currentTime = seekbar.value;
    })

    // console.log(song[0].querySelector(".song-name"))
    // window.onload =
    
    if (songs.length > 0) {
        // console.log(song[0].querySelector(".song-name").innerHTML)
        currentSong.src = "music/"+song[0].querySelector(".song-name").innerHTML;
        // "music/" + track.replaceAll(" ", "%20");
    }

}

main();
