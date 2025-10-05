
    // Fruit definitions and mapping to sound
    const fruitArray = [
  {id: "1", fruit: "Apple", sound: "slap"},
  {id: "2", fruit: "Asian Pear", sound: "slap"},
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

    // Map sound keys to hosted MP3 URLs (must be on your origin or allowed by media-src)
    const soundRegistry = {
      slap: "https://files.catbox.moe/d8cs22.mp3"
      // you can add other sounds: punch: "/sounds/punch.mp3", etc.
    };

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const musicArea = document.querySelector('.music');
    const draggableItems = document.querySelectorAll('.draggable');

    let draggingElem = null;

    draggableItems.forEach(item => {
      item.addEventListener('mousedown', startDrag);
    });

    function startDrag(e) {
      e.preventDefault();
      const original = e.target;
      const fruitId = original.getAttribute('data-id');
      const fruitData = fruitArray.find(f => f.id === fruitId);

      // Clone the element for dragging
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

      function onMouseMove(evt) {
        moveAt(evt.pageX, evt.pageY);
      }

      function onMouseUp(evt) {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        const musicRect = musicArea.getBoundingClientRect();
        const isInMusicArea =
          evt.clientX > musicRect.left &&
          evt.clientX < musicRect.right &&
          evt.clientY > musicRect.top &&
          evt.clientY < musicRect.bottom;

        if (isInMusicArea) {
          // Place inside music area
          musicArea.appendChild(draggingElem);
          draggingElem.style.position = 'absolute';
          draggingElem.style.left = (evt.clientX - musicRect.left - draggingElem.offsetWidth / 2) + 'px';
          draggingElem.style.top = (evt.clientY - musicRect.top - draggingElem.offsetHeight / 2) + 'px';
          draggingElem.style.pointerEvents = 'auto';

          // Play sound if defined
          if (fruitData && fruitData.sound && soundRegistry[fruitData.sound]) {
            playSound(soundRegistry[fruitData.sound]);
          }

          // Optionally attach click for popup controls
          setTimeout(() => {
            draggingElem.addEventListener('click', () => {
              showAudioPopup(fruitData, draggingElem);
            });
          }, 100);
        } else {
          // Dropped outside → remove
          draggingElem.remove();
        }

        draggingElem = null;
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    function playSound(url) {
      // Resume context if needed (user gesture matters)
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      fetch(url)
        .then(resp => resp.arrayBuffer())
        .then(buf => audioCtx.decodeAudioData(buf))
        .then(audioBuffer => {
          const source = audioCtx.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(audioCtx.destination);
          source.start(0);
          // We don’t keep track in this version — for popup controls you'd wrap this
        })
        .catch(err => {
          console.error('Error playing sound:', err);
        });
    }

    function showAudioPopup(fruitData, elem) {
      // In this simpler version, no persistent audio node is stored,
      // so the popup might not do much. But you can design it to
      // show fruit name or future controls.
      let existing = elem._popup;
      if (existing) {
        existing.style.display = 'block';
        return;
      }
      const popup = document.createElement('div');
      popup.style.position = 'fixed';
      popup.style.top = '20%';
      popup.style.left = '50%';
      popup.style.transform = 'translateX(-50%)';
      popup.style.background = '#fff';
      popup.style.border = '2px solid #333';
      popup.style.padding = '10px';
      popup.style.zIndex = 9999;

      const title = document.createElement('h3');
      title.innerText = fruitData.fruit + " Controls";
      popup.appendChild(title);

      const note = document.createElement('p');
      note.innerText = "Sound playing is one-shot (no controls in this version).";
      popup.appendChild(note);

      const closeBtn = document.createElement('button');
      closeBtn.innerText = "Close";
      closeBtn.onclick = () => {
        popup.style.display = 'none';
      };
      popup.appendChild(closeBtn);

      document.body.appendChild(popup);
      elem._popup = popup;
    }
