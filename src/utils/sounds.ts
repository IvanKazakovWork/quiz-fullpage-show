// Sound utilities for playing audio files
// Place your sound files in the public folder:
// public/sounds/correct.mp3
// public/sounds/wrong.mp3

// Preload audio files to avoid delay
const correctAudio = new Audio('/sounds/correct.mp3');
const wrongAudio = new Audio('/sounds/wrong.mp3');

correctAudio.volume = 0.5;
wrongAudio.volume = 0.5;

// Preload the audio files
correctAudio.load();
wrongAudio.load();

export const playCorrectSound = () => {
  try {
    correctAudio.currentTime = 0; // Reset to start
    correctAudio.play();
  } catch (error) {
    console.error('Error playing correct sound:', error);
  }
};

export const playWrongSound = () => {
  try {
    wrongAudio.currentTime = 0; // Reset to start
    wrongAudio.play();
  } catch (error) {
    console.error('Error playing wrong sound:', error);
  }
};
