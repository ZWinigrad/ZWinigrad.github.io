const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const fruitArray = [
  {id: "1", fruit: "Apple", sound: "slap.mp3"},
  {id: "2", fruit: "Asian Pear", sound: "slap.mp3"},
  {id: "3", fruit: "Avocado", sound: ""},
  {id: "4", fruit: "Banana", sound: ""},
  {id: "5", fruit: "Blackberry", sound: ""},
  {id: "6", fruit: "Blueberry", sound: ""},
  {id: "7", fruit: "Cantaloupe", sound: ""},
  {id: "8", fruit: "Cherry", sound: ""},
  {id: "9", fruit: "Dragonfruit", sound: ""},
  {id: "10", fruit: "Grapefruit", sound: ""},
  {id: "11", fruit: "Grapes", sound: ""},
  {id: "12", fruit: "Honeydew", sound: ""},
  {id: "13", fruit: "Kiwi", sound: ""},
  {id: "14", fruit: "Orange", sound: ""},
  {id: "15", fruit: "Peach", sound: ""},
  {id: "16", fruit: "Pear", sound: ""},
  {id: "17", fruit: "Pineapple", sound: ""},
  {id: "18", fruit: "Plum", sound: ""},
  {id: "19", fruit: "Pomegranate", sound: ""},  
  {id: "20", fruit: "Raspberry", sound: ""},
  {id: "21", fruit: "Strawberry", sound: ""},
  {id: "22", fruit: "Watermelon", sound: ""},
];

const draggableItems = document.querySelectorAll('.draggable');
const musicArea = document.querySelector('.music');
let draggingElem = null;

draggableItems.forEach(item => {
  item.addEventListener('mousedown', startDrag);
});

function startDrag(e) {
  e.preventDefault();

  const original = e.target;
  const fruitId = original.dataset.id;
  const fruitData = fruitArray.find(f => f.id === fruitId);

  draggingElem = original.cloneNode(true);
  draggingElem.style.position = 'absolute';
  draggingElem.style.pointerEvents = 'none';
  draggingElem.style.opacity = 0.8;
  draggingElem.style.zIndex = 2000;
  draggingElem.style.width = original.offsetWidth + 'px';
  draggingElem.style.height = original.offsetHeight + 'px';

  document.body.appendChild(draggingElem);
  moveAt(e.pageX, e.pageY);

  function moveAt(pageX, pageY) {
    draggingElem.style.left = pageX - draggingElem.offsetWidth / 2 + 'px';
    draggingElem.style.top = pageY - draggingElem.offsetHeight / 2 + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  function onMouseUp(event) {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    const musicRect = musicArea.getBoundingClientRect();
    const isInMusicArea =
      event.clientX > musicRect.left &&
      event.clientX < musicRect.right &&
      event.clientY > musicRect.top &&
      event.clientY < musicRect.bottom;

    if (isInMusicArea) {
      musicArea.appendChild(draggingElem);
      draggingElem.style.position = 'absolute';
      draggingElem.style.left = (event.clientX - musicRect.left - draggingElem.offsetWidth / 2) + 'px';
      draggingElem.style.top = (event.clientY - musicRect.top - draggingElem.offsetHeight / 2) + 'px';
      draggingElem.style.pointerEvents = 'auto';

      if (fruitData && fruitData.sound) {
        const audioFilePath = `/sounds/${fruitData.sound}`;

        fetch(audioFilePath)
          .then(res => res.arrayBuffer())
          .then(data => audioContext.decodeAudioData(data))
          .then(buffer => {
            const source = audioContext.createBufferSource();
            const gainNode = audioContext.createGain();
            source.buffer = buffer;
            source.loop = true;
            source.connect(gainNode);
            gainNode.connect(audioContext.destination);
            source.start();

            // Store references on the dragged element so we can manipulate or stop later
            draggingElem.dataset.playingAudio = audioFilePath;
            draggingElem._audioNodes = { source, gainNode };

            // Store audio context parts in the DOM element
            const instanceId = `audio-${Date.now()}`;
            draggingElem.dataset.audioId = instanceId;
            draggingElem._audioData = { source, gainNode, buffer };

            // Add click to open popup
            draggingElem.addEventListener('click', () => {
              createPopupForFruitInstance(fruitData, draggingElem);
            });
          })
          .catch(err => console.error("Failed to load sound for fruit:", fruitData.fruit, err));
      } else {
        // If no sound, just add click listener for popup anyway (optional)
        draggingElem.addEventListener('click', () => {
          createPopupForFruitInstance(fruitData, draggingElem);
        });
      }
    } else {
      draggingElem.remove();
    }

    draggingElem = null;
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

function createPopupForFruitInstance(fruitData, fruitElement) {
  // Prevent multiple popups
  if (fruitElement.dataset.popupOpen) return;

  const { source, gainNode } = fruitElement._audioData || {};
  if (!source || !gainNode) return;

  const popup = document.createElement('div');
  popup.classList.add('audio-popup');
  Object.assign(popup.style, {
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff',
    border: '4px solid red',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    zIndex: 9999,
    minHeight: '100px',
    minWidth: '300px',
  });

  const title = document.createElement('h3');
  title.innerText = `${fruitData.fruit} Controls`;
  popup.appendChild(title);

  // Volume Control
  const volumeLabel = document.createElement('label');
  volumeLabel.innerText = 'Volume: ';
  const volumeSlider = document.createElement('input');
  volumeSlider.type = 'range';
  volumeSlider.min = 0;
  volumeSlider.max = 2;
  volumeSlider.step = 0.01;
  volumeSlider.value = gainNode.gain.value;
  volumeSlider.addEventListener('input', () => {
    gainNode.gain.value = volumeSlider.value;
  });
  volumeLabel.appendChild(volumeSlider);
  popup.appendChild(volumeLabel);
  popup.appendChild(document.createElement('br'));

  // Pitch Control
  const pitchLabel = document.createElement('label');
  pitchLabel.innerText = 'Pitch (PlaybackRate): ';
  const pitchSlider = document.createElement('input');
  pitchSlider.type = 'range';
  pitchSlider.min = 0.5;
  pitchSlider.max = 2;
  pitchSlider.step = 0.01;
  pitchSlider.value = source.playbackRate.value;
  pitchSlider.addEventListener('input', () => {
    source.playbackRate.value = pitchSlider.value;
  });
  pitchLabel.appendChild(pitchSlider);
  popup.appendChild(pitchLabel);
  popup.appendChild(document.createElement('br'));

  // Close Button
  const closeBtn = document.createElement('button');
  closeBtn.innerText = 'Close';
  closeBtn.addEventListener('click', () => {
    popup.remove();
    delete fruitElement.dataset.popupOpen;
  });
  popup.appendChild(closeBtn);

  document.body.appendChild(popup);
  fruitElement.dataset.popupOpen = true;
}
