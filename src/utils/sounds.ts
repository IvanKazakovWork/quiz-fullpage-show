// Sound utilities for playing audio files
// Place your sound files in the public folder:
// public/sounds/correct.mp3
// public/sounds/wrong.mp3

export const playCorrectSound = () => {
  try {
    const audio = new Audio('/sounds/correct.mp3');
    audio.volume = 0.5;
    audio.play();
  } catch (error) {
    console.error('Error playing correct sound:', error);
  }
};

export const playWrongSound = () => {
  try {
    const audio = new Audio('/sounds/wrong.mp3');
    audio.volume = 0.5;
    audio.play();
  } catch (error) {
    console.error('Error playing wrong sound:', error);
  }
};
