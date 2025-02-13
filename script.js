let songPlay = 0;


let audioPlayer = null;
let isPlaying = false;

  // Add event listeners to all .song divs
  //document.querySelectorAll('.song').forEach(songDiv => {
    //songDiv.addEventListener('click', getImageSource);
  //});
  function showPlayer(songId) {
    const player = document.querySelector('.player-mini');
    const songName = document.querySelector('.play-title');
    const songtitle = document.getElementById(`songtitle${songId}`);
    const songtitleAll = document.querySelectorAll('.song-title'); // Select all song titles
    const songArtist = document.querySelector('.play-subtitle');
    const songImage = document.querySelector('.play-image img');
    
    songtitleAll.forEach(title => {
      title.style.color = '#ffffff'; // Reset all titles to white color (default)
  });
  

    songtitle.style.color= '#ff1a9f';
    // Show player with transition
    player.style.display = 'flex';
    setTimeout(() => {
        player.style.opacity = '1';
        player.style.transform = 'scale(1)'; // Scale to normal size
    }, 10); 

    // Create or reset the audio player
    if (!audioPlayer) {
        audioPlayer = new Audio();
        audioPlayer.addEventListener('ended', () => {
            songId++; // Automatically go to the next song
            if (songId > 14) songId = 1; // Loop back to the first song
            showPlayer(songId); // Change song
        });
    }

    // Reset the audio player to the start (important for playing from the beginning)
    audioPlayer.pause();  // Pause the current audio if any
    audioPlayer.currentTime = 0; // Reset to the beginning

    // Set song details based on songId
    switch (songId) {
        case 1:
            audioPlayer.src = 'https://github.com/floringhitun223/denisa/blob/main/song1.mp3'; 
            songName.innerText = 'Te iubesc';
            songArtist.innerText = 'De la Florin';
            songImage.src = 'assets/song1.jpg';
           
            break;
        case 2:
            audioPlayer.src = 'song2.mp3'; 
            songName.innerText = 'Gâza mea';
            songArtist.innerText = 'De la Florin';
            songImage.src = 'assets/song2.jpg';
            
            break;
        case 3:
            audioPlayer.src = 'song3.mp3'; 
            songName.innerText = 'Denisa mea';
            songArtist.innerText = 'De la Florin';
            songImage.src = 'assets/song3.jpg';
           
            break;
        case 4:
            audioPlayer.src = 'song4.mp3'; 
            songName.innerText = 'Denisa din Damideni';
            songArtist.innerText = 'De la Florin';
            songImage.src = 'assets/song4.jpg';
           
            break;
        case 5:
            audioPlayer.src = 'song5.mp3'; 
            songName.innerText = 'Ne potrivim';
            songArtist.innerText = 'Noi';
            songImage.src = 'assets/song5.jpg';
            
            break;
        case 6:
            audioPlayer.src = ' song6.mp3'; 
            songName.innerText = 'Bucuria mea';
            songArtist.innerText = 'De la Florin';
            songImage.src = 'assets/song6.jpg';
            
            break;
        case 7:
            audioPlayer.src = ' song7.mp3'; 
            songName.innerText = 'My love, my heart';
            songArtist.innerText = 'De la Florin';
            songImage.src = 'assets/song7.jpg';
           
            break;
        case 8:
            audioPlayer.src = ' song8.mp3'; 
            songName.innerText = 'Doar pentru tine';
            songArtist.innerText = 'De la Florin';
            songImage.src = 'assets/song8.jpg';
            
            break;
        case 9:
            audioPlayer.src = ' song9.mp3'; 
            songName.innerText = 'Denisa&Florin';
            songArtist.innerText = 'Noi';
            songImage.src = 'assets/song9.jpg';
           
            break;
        case 10:
            audioPlayer.src = ' song10.mp3'; 
            songName.innerText = 'I think about YOU';
            songArtist.innerText = 'Noi';
            songImage.src = 'assets/song10.jpg';
           
            break;
        case 11:
            audioPlayer.src = ' song11.mp3'; 
            songName.innerText = 'Ne-am îndrăgostit';
            songArtist.innerText = 'Noi';
            songImage.src = 'assets/song11.jpg';
           
            break;
        case 12:
            audioPlayer.src = ' song12.mp3'; 
            songName.innerText = 'Cum ne-am cunoscut';
            songArtist.innerText = 'Noi';
            songImage.src = 'assets/song12.jpg';
           
            break;
        case 13:
            audioPlayer.src = ' song13.mp3'; 
            songName.innerText = 'Mă faci să urlu';
            songArtist.innerText = 'De la Florin';
            songImage.src = 'assets/song13.jpg';
           
            break;
        case 14:
            audioPlayer.src = ' song14.mp3'; 
            songName.innerText = 'Bebelușa';
            songArtist.innerText = 'De la Florin';
            songImage.src = 'assets/song14.jpg';
            
            break;
        default:
            console.log('Song not found');
            break;
    }

    // Play the audio once the source is set
    audioPlayer.play();  // Start playing the song
    isPlaying = true;
    document.querySelector('.pause').querySelector('img').src = 'assets/pause.png'; // Set pause button to show
    getAudioCurrentTime();
}

function togglePlayPause() {
  const pause_playButt = document.querySelector('.pause').querySelector('img');
  
  if (isPlaying) {
      audioPlayer.pause(); // Pause the song
      isPlaying = false;
      pause_playButt.src = 'assets/play.png'; // Show play button
  } else {
   
      audioPlayer.play(); // Start playing the audio
      isPlaying = true;
      pause_playButt.src = 'assets/pause.png'; // Show pause button
  }
}
function getAudioCurrentTime() {
  if (audioPlayer && !audioPlayer.paused) {
      const currentTime = audioPlayer.currentTime;
      const duration = audioPlayer.duration;
      const progress = document.querySelector('.progress');
      
      // Display the current time in minutes:seconds format
      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      const formattedTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

      // Update the time display
      const timeDisplay = document.querySelector('.time');
      if (timeDisplay) {
          timeDisplay.innerText = formattedTime; // Update the current time
      }

      if (duration > 0) {
          const percentage = (currentTime / duration) * 100;
          console.log('Audio progress: ' + percentage.toFixed(2) + '%');

          // Display the percentage
          const progressDisplay = document.querySelector('.audio-status');
          if (progressDisplay) {
              progressDisplay.innerText = `Progress: ${percentage.toFixed(2)}%`;
          }

          // Update the width of the progress bar
          if (progress) {
              progress.style.width = `${percentage.toFixed(2)}%`; // Set width as a percentage
          }
      }
  } else {
      console.log('Audio is not playing');
  }
}


  document.addEventListener("keydown", function(event) {
    if (event.key === "d") {
        getAudioCurrentTime();
    }
  });
  setInterval(getAudioCurrentTime, 1000); // Updates every second

  function addTenSeconds() {
    const skipTime = 10; // Time in seconds to advance
    if (audioPlayer && !audioPlayer.paused) {
        audioPlayer.currentTime += skipTime; // Increase current time by 10 seconds
        getAudioCurrentTime();
    }
}

function substractTenSeconds() {
  const skipTime = 10; // Time in seconds to advance
  if (audioPlayer && !audioPlayer.paused) {
      audioPlayer.currentTime -= skipTime; // Increase current time by 10 seconds
      getAudioCurrentTime();
  }
}

function playNext(){
  if (!audioPlayer) {
    audioPlayer = new Audio();
    audioPlayer.addEventListener('ended', () => {
        songId++; // Automatically go to the next song
        if (songId > 14) songId = 1; // Loop back to the first song
        showPlayer(songId); // Change song
        
    });
}
}

function downloadCurrentAudio() {
  const songName = document.querySelector('.play-title').innerText; // Get the title from the div
  const audioSrc = audioPlayer.src; // Get the source of the current audio player

  if (audioSrc) {
      // Create a temporary anchor element to trigger the download
      const link = document.createElement('a');
      link.href = audioSrc;  // Set the download link to the current audio source
      link.download = `${songName}.mp3`;  // Set the download filename to the song name with .mp3 extension
      
      // Append the link to the document and trigger a click
      document.body.appendChild(link);
      link.click();

      // Remove the temporary link from the document
      document.body.removeChild(link);
      
      console.log('Downloading: ' + songName);
  } else {
      console.log('No audio is playing');
  }
}
