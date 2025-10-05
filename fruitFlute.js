const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const fruitArray = [
  { id: "1", fruit: "Apple", sound: "slap.mp3" },
  { id: "2", fruit: "Asian Pear", sound: "slap.mp3" },
  { id: "3", fruit: "Avocado", sound: "" },
  { id: "4", fruit: "Banana", sound: "" },
  { id: "5", fruit: "Blackberry", sound: "" },
  { id: "6", fruit: "Blueberry", sound: "" },
  { id: "7", fruit: "Cantaloupe", sound: "" },
  { id: "8", fruit: "Cherry", sound: "" },
  { id: "9", fruit: "Dragonfruit", sound: "" },
  { id: "10", fruit: "Grapefruit", sound: "" },
  { id: "11", fruit: "Grapes", sound: "" },
  { id: "12", fruit: "Honeydew", sound: "" },
  { id: "13", fruit: "Kiwi", sound: "" },
  { id: "14", fruit: "Orange", sound: "" },
  { id: "15", fruit: "Peach", sound: "" },
  { id: "16", fruit: "Pear", sound: "" },
  { id: "17", fruit: "Pineapple", sound: "" },
  { id: "18", fruit: "Plum", sound: "" },
  { id: "19", fruit: "Pomegranate", sound: "" },
  { id: "20", fruit: "Raspberry", sound: "" },
  { id: "21", fruit: "Strawberry", sound: "" },
  { id: "22", fruit: "Watermelon", sound: "" },
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
  Object.assign(draggingElem.style, {
    position: 'absolute',
    pointerEvents: 'none',
    opacity: 0.8,
    zIndex: 2000,
    width: original.offsetWidth + 'px',
    height: original.offsetHeight + 'px'
  });

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
      const clonedElem = draggingElem;
      musicArea.appendChild(clonedElem);
      Object.assign(clonedElem.style, {
        position: 'absolute',
        left: (event.clientX - musicRect.left - clonedElem.offsetWidth / 2) + 'px',
        top: (event.clientY - musicRect.top - clonedElem.offsetHeight / 2) + 'px',
        pointerEvents: 'auto'
      });

      if (fruitData && fruitData.sound) {
  const audioFilePath = `/sounds/${fruitData.sound}`;

  fetch(audioFilePath)
    .then(res => res.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data))
    .then(buffer => {
      const source = audioContext.createBufferSource();
      const gainNode = audioContext.createGain();
      const panner = audioContext.createStereoPanner();
      const filter = audioContext.createBiquadFilter();
      const delay = audioContext.createDelay();

      filter.type = 'lowpass';
      filter.frequency.value = 10000;

      delay.delayTime.value = 0.25; // Quarter second echo
      gainNode.gain.value = 1.0;
      panner.pan.value = 0;

      source.buffer = buffer;
      source.loop = true;

      // Connect nodes: source → filter → delay → panner → gain → destination
      source.connect(filter);
      filter.connect(delay);
      delay.connect(panner);
      panner.connect(gainNode);
      gainNode.connect(audioContext.destination);

      source.start();

      clonedElem._audioData = {
        source,
        gainNode,
        panner,
        filter,
        delay
      };
    })
    .catch(err => {
      console.error("Failed to load sound for fruit:", fruitData.fruit, err);
    });

  // Add click listener after starting the fetch chain (outside of .then)
  clonedElem.addEventListener('click', () => {
    createPopupForFruitInstance(fruitData, clonedElem);
  });
} else {
  clonedElem.addEventListener('click', () => {
    createPopupForFruitInstance(fruitData, clonedElem);
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
  if (fruitElement.dataset.popupOpen) return;

  // Destructure audio nodes including delay
  const { source, gainNode, panner, filter, delay } = fruitElement._audioData || {};

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

  if (gainNode) {
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
  }

  if (source) {
    const pitchLabel = document.createElement('label');
    pitchLabel.innerText = 'Pitch (Playback Rate): ';
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
  }

  if (panner) {
    const panLabel = document.createElement('label');
    panLabel.innerText = 'Pan (Left ↔ Right): ';
    const panSlider = document.createElement('input');
    panSlider.type = 'range';
    panSlider.min = -1;
    panSlider.max = 1;
    panSlider.step = 0.01;
    panSlider.value = panner.pan.value;
    panSlider.addEventListener('input', () => {
      panner.pan.value = panSlider.value;
    });
    panLabel.appendChild(panSlider);
    popup.appendChild(panLabel);
    popup.appendChild(document.createElement('br'));
  }

  if (filter) {
    const filterLabel = document.createElement('label');
    filterLabel.innerText = 'Low-pass Filter (Muffle): ';
    const filterSlider = document.createElement('input');
    filterSlider.type = 'range';
    filterSlider.min = 100;
    filterSlider.max = 10000;
    filterSlider.step = 1;
    filterSlider.value = filter.frequency.value;
    filterSlider.addEventListener('input', () => {
      filter.frequency.value = filterSlider.value;
    });
    filterLabel.appendChild(filterSlider);
    popup.appendChild(filterLabel);
    popup.appendChild(document.createElement('br'));
  }

  if (delay) {
    const delayLabel = document.createElement('label');
    delayLabel.innerText = 'Delay Time (Echo): ';
    const delaySlider = document.createElement('input');
    delaySlider.type = 'range';
    delaySlider.min = 0;
    delaySlider.max = 1;
    delaySlider.step = 0.01;
    delaySlider.value = delay.delayTime.value;
    delaySlider.addEventListener('input', () => {
      delay.delayTime.value = delaySlider.value;
    });
    delayLabel.appendChild(delaySlider);
    popup.appendChild(delayLabel);
    popup.appendChild(document.createElement('br'));
  }

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '🗑️ Delete Fruit';
  deleteBtn.style.marginTop = '10px';
  deleteBtn.addEventListener('click', () => {
    if (source) source.stop();
    popup.remove();
    fruitElement.remove();
  });
  popup.appendChild(deleteBtn);

  const closeBtn = document.createElement('button');
  closeBtn.innerText = 'Close';
  closeBtn.style.marginLeft = '10px';
  closeBtn.addEventListener('click', () => {
    popup.remove();
    delete fruitElement.dataset.popupOpen;
  });
  popup.appendChild(closeBtn);

  document.body.appendChild(popup);
  fruitElement.dataset.popupOpen = true;
}
