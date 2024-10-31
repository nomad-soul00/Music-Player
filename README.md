## 🎶 Simple Music Player 🎶
Hey there! This is a super basic music player project I made. It’s not much, but it does the main thing – plays music! Just a straightforward design with some functionality to browse and play songs.

## Built with
HTML,CSS,JS.

## Features
Play / Pause Button: Toggle between playing and pausing the current track.
Seekbar: Move the seekbar to skip to different parts of a song.
Track Info: Displays song and artist name while playing.
Automatic Track Fetch: Grabs songs directly from the music folder.


<h2><span style="color:green">Note: This only works on a local setup because of CORS policies on live servers, so you might need to run it with something like Live Server on VS Code. You can also follow the steps below.</span></h2>
   
## Getting Started


Download / Clone the Repo: Get the files on your local machine.
1. Clone the repository:
   ```bash
   git clone https://github.com/nomad-soul00/Music-Player.git

2. Add Songs: Drop your .mp3 files in the "music" folder.
3. got to the script folder > getSongs() function and uncomment the first 2 lines - // let a = await fetch("http://127.0.0.1:3000/projects/music-player/music/");
    // let response = await a.text();
    
4. modify the variable "a" by changing the fetch path to the relative path of the music folder in yout system.

5. Run the Project: Open index.html in your browser to try it out.


## How It Works
Just click on a song to play it! You can use the buttons for play/pause, and the seekbar to move through the track. Simple as that. 😊

## To-Do / Future Plans
 Add more visual polish
 Improve playlist management
 Add volume and playback speed controls





