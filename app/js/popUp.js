const popupItems = document.querySelectorAll('.nft-item .button-place-bid a#playButton');
const audioElements = document.querySelectorAll('audio');
const popupCloseButton = document.querySelectorAll('.popup-close-button');

popupItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    const correspondingAudio = audioElements[index];
    const correspondingPopup = document.querySelectorAll('.popup')[index];
    showPopup(correspondingAudio, correspondingPopup);
  });
});

popupCloseButton.forEach(button => {
  button.addEventListener('click', () => {
    hidePopups();
  });
});

function showPopup(audio, popup) {
  popup.style.display = 'block';
  audio.play();
}

function hidePopups() {
  const popups = document.querySelectorAll('.popup');
  for (const popup of popups) {
    popup.style.display = 'none';
  }
  audioElements.forEach(audio => audio.pause()); // Stop all playing audio
}


