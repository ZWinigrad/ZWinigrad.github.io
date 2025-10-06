let activeEntities = [];
let currentOnComplete = null;
let start = document.getElementById("start");
let title = document.getElementById("title");
let div = document.getElementById("div");
let menu = document.getElementById("menu");
let almanac = document.getElementById("almanac");
let body = document.getElementById("body");
let gunmenu = document.getElementById("gunmenu");
let gunbar = document.getElementById("gunbar");
let pelletForm = document.getElementById("pelletForm");
let radiusForm = document.getElementById("radiusForm");
let close = document.getElementById("close");
let wizard = document.getElementById("wizard");
let stip = document.getElementById("stip");
let closewiz = document.getElementById("closewiz");
let baloon = document.getElementById("baloon");


const thunk = new Audio();
thunk.src = "https://files.catbox.moe/501vy3.mov";

const womp = new Audio();
womp.src = "https://files.catbox.moe/upir2j.mov";

const pew = new Audio();
pew.src = "https://files.catbox.moe/bqfmyu.mov";
pew.volume = 0.25;

const splat = new Audio();
splat.src = "https://files.catbox.moe/k8vtz1.mov";

const boom = new Audio();
boom.src = "https://files.catbox.moe/wp8jgb.mov";
boom.volume = 0.25;

menu.addEventListener('click', function () {
  almanac.style.display = "grid";
  crabs.style.display = "none";
  baloon.style.display = "none";
});

let shotgunMode = false;

wizard.addEventListener('click', function(){
  stip.style.display = "block";
});

closewiz.addEventListener('click', function(){
  stip.style.display = "none";
  wizard.src ="https://wallpapers.com/images/hd/soldier-s-grave-png-rdu83-ixf4lrdiub9fy4ne.jpg";
});

close.addEventListener('click', function(){
  almanac.style.display = "none";
  crabs.style.display = "grid";
  baloon.style.display = "block";
});

let crabs = document.getElementById("crabs")
let l1 = document.getElementById("l1")
let l2 = document.getElementById("l2")
let l3 = document.getElementById("l3")
let menuPopup = document.getElementById("menuPopup")

const lArray = [
  {element: l1, ltitle: "Level 1: Fungi Free-for-all!", desc: "Fungi are attacking your fruits!\nIt's time to fight back!"},
  {element: l2, ltitle: "Level 2: Microscopic Mayhem!", desc: "Fend off tiny invaders as they try to eat your harvest"},
  {element: l3, ltitle: "Level 3: Athropoda Attack!", desc: "The final wave brings the mightiest foes...\nWill you survive the onslaught?"},
];
const levels = Array.from(lArray);

levels.forEach(item => {
  item.element.addEventListener('mouseover', function() {
    item.element.classList.remove('hue');
    menuPopup.style.display = "block";
    document.getElementById("ltitle").textContent = item.ltitle;
    document.getElementById("desc").innerText = item.desc;
  });
});

levels.forEach(item => {
  item.element.addEventListener('mouseout', function() {
    item.element.classList.add('hue');
    menuPopup.style.display = "none"
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 's'|| e.key === 'S') {
    shotgunMode = !shotgunMode;
    gunbar.innerText = shotgunMode ? "Shotgun Mode ON" : "Shotgun Mode OFF";
    shotgunRing.style.display = shotgunMode ? "block" : "none";
    gunmenu.src = shotgunMode
      ? "https://www.svirangers.com/workpress/wp-content/uploads/2023/04/hunter-gif-3.gif"
      : "https://i.imgur.com/GcAZSze.gif";
    pelletForm.style.display = shotgunMode
      ? "block"
      : "none";
    radiusForm.style.display = shotgunMode
      ? "block"
      : "none";
  }
});

let pelletCount = 15;

pelletForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const input = document.getElementById("pelletCount");
  pelletCount = parseInt(input.value) || 15;
});

let pelletRadius = 75;

radiusForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const input = document.getElementById("pelletRadius");
  pelletRadius = parseInt(input.value) || 75;
});

const maxX = window.innerWidth - 150;
const maxY = window.innerHeight - 150;

function getRandomPosition() {
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  return { x, y };
}

let completeTriggered = false; // Flag to track if onComplete has been triggered

function triggerShotgunEffect(x, y) {
  const range = pelletRadius;
  const hitEntities = new Set(); // Track entities hit this round
  const entities = Array.from(document.querySelectorAll("#div img"));

  for (let i = 0; i < pelletCount; i++) {
    const offsetX = Math.random() * range * 2 - range;
    const offsetY = Math.random() * range * 2 - range;
    const shotX = x + offsetX;
    const shotY = y + offsetY;

    if (isNaN(shotX) || isNaN(shotY)) continue;

    createShotEffect(shotX, shotY);

    for (let entity of entities) {
      if (hitEntities.has(entity)) continue; // Skip already hit

      const rect = entity.getBoundingClientRect();
      if (
        shotX >= rect.left &&
        shotX <= rect.right &&
        shotY >= rect.top &&
        shotY <= rect.bottom
      ) {
        hitEntities.add(entity); // Mark as hit
        entity.click();          // Trigger the hit logic
        break;                   // One hit per pellet
      }
    }
  }
}




function createShotEffect(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return;
  const shot = document.createElement("div");
  shot.style.position = "absolute";
  shot.style.left = `${x - 7.5}px`;
  shot.style.top = `${y - 7.5}px`;
  shot.style.width = "10px";
  shot.style.height = "10px";
  shot.style.borderRadius = "20%";
  shot.style.backgroundImage = "url('/bullethole.png')";
  shot.style.filter = "brightness(2000%)";
  shot.style.backgroundSize = "cover";
  shot.style.opacity = "1";
  shot.style.pointerEvents = "none";
  shot.style.zIndex = "9999";

  shot.style.animation = "shotEffect 0.2s forwards ease-out";

  document.body.appendChild(shot);

  setTimeout(() => {
    shot.remove();
  }, 200);
}

document.addEventListener("click", (e) => {
  if (!e.isTrusted || !e.clientX || !e.clientY) return;

  if (e.target.closest("#start") || e.target.closest("#menu") || e.target.closest("#almanac")) return;

  if (shotgunMode) {
    const newBoom = boom.cloneNode();
    newBoom.volume = boom.volume; // Set volume to cloned instance
    newBoom.play();
    
    triggerShotgunEffect(e.clientX, e.clientY);
    createShotgunBlastEffect(e.clientX, e.clientY);
  } else {
    const newPew = pew.cloneNode();
    newPew.volume = pew.volume; // Set volume to cloned instance
    newPew.play();
  }
});

const shotgunRing = document.createElement("div");
shotgunRing.style.position = "fixed";
shotgunRing.style.border = "2px dashed yellow";
shotgunRing.style.borderRadius = "50%";
shotgunRing.style.pointerEvents = "none";
shotgunRing.style.zIndex = "9999";
shotgunRing.style.display = "none";
document.body.appendChild(shotgunRing);

shotgunRing.style.animation = "pulse 1s infinite alternate";

let lastUpdate = 0;
document.addEventListener("mousemove", (e) => {
  const now = performance.now();
  if (now - lastUpdate < 16) return; // ~60fps
  lastUpdate = now;

  if (shotgunMode) {
    shotgunRing.style.left = e.clientX - pelletRadius + "px";  
    shotgunRing.style.top = e.clientY - pelletRadius + "px";  
    shotgunRing.style.width = pelletRadius * 2 + "px";            
    shotgunRing.style.height = pelletRadius * 2 + "px";            
  }
});


function createShotgunBlastEffect(x, y) {
  const blast = document.createElement("div");
  blast.style.position = "fixed";
  blast.style.left = `${x - 7.5}px`;
  blast.style.top = `${y - 7.5}px`;
  blast.style.width = "10px";
  blast.style.height = "10px";
  blast.style.backgroundImage = "url('/bullethole.png')";
  blast.style.backgroundSize = "cover";
  blast.style.borderRadius = "50%";
  blast.style.opacity = "1";
  blast.style.pointerEvents = "none";
  blast.style.zIndex = "9999";
  blast.style.animation = "shotEffect 0.2s forwards ease-out";
  blast.style.filter = "brightness(2000%)";

  document.body.appendChild(blast);

  setTimeout(() => {
    blast.remove();
  }, 200);
}

body.addEventListener('click', (e) => {
  const entity = e.target.closest('img');
  if (!entity || !entity.health) return;

  handleEntityClick(
    entity,
    entity.individualBar || null,
    entity.healthUnits || null,
    entity.sound || pew,
    entity.dataset.groupId || null,
    entity.currentOnComplete || (() => {})
  );
});



function animateEntity(entity, growRate, speed) {
  let width = parseInt(entity.style.width);
  let height = parseInt(entity.style.height);
  let lastMove = performance.now();

  function update(time) {
    if (time - lastMove >= speed) {
      const { x, y } = getRandomPosition();
      entity.style.left = x + "px";
      entity.style.top = y + "px";

      width += growRate;
      height += growRate;
      entity.style.width = width + "px";
      entity.style.height = height + "px";

      lastMove = time;
    }

    entity.moveFrame = requestAnimationFrame(update);
  }

  entity.moveFrame = requestAnimationFrame(update);
}

function handleEntityClick(entity, individualBar, healthUnits, sound, groupId, currentOnComplete) {

  let health = entity.health;
  if (health <= 0) return;

  health--;
  entity.health = health;

  if (healthUnits && healthUnits[health]) {
    healthUnits[health].style.backgroundColor = 'gray';
  }

  if (health <= 0) {
    if (entity.moveFrame) cancelAnimationFrame(entity.moveFrame);
    if (entity.moveInterval) clearInterval(entity.moveInterval);
    if (individualBar) individualBar.remove();

    entity.remove();
 
    activeEntities = activeEntities.filter(e => e !== entity);

    const stillActive = groupId
      ? activeEntities.some(e => e.dataset.groupId === groupId)
      : activeEntities.length > 0;

    if (!stillActive && typeof currentOnComplete === 'function') {
      currentOnComplete();
    }
  }
}

function spawnMultipleEntities({
  count = 1,
  src,
  titleText,
  growRate = 25,
  speed = 1000,
  background,
  top = "5%",
  left = "25%",
  onComplete = () => {},
  groupId = null,
  width = 40,
  height = 60,
}) {
  title.innerHTML = titleText;
  let remaining = count;
  let completeTriggered = false;
  if (!groupId) groupId = `group-${Date.now()}-${Math.random()}`;


  const currentOnComplete = () => {
    if (!completeTriggered) {
      completeTriggered = true;
      onComplete();
    }
  };

  if (background) {
    body.style.backgroundImage = `url(${background})`;
    body.style.backgroundSize = "cover";
  }

  for (let i = 0; i < count; i++) {
    const entity = document.createElement('img');
    entity.src = src;
    entity.style.position = "fixed";
    entity.style.top = top;
    entity.style.left = left;
    entity.style.width = width + "px";
    entity.style.height = height + "px";
    entity.style.transition = "left 0.5s ease, top 0.5s ease";
    entity.style.userSelect = "none";
    entity.health = 1;
    entity.classList.add("noselect")
    entity.currentOnComplete = currentOnComplete;
    if (groupId) entity.dataset.groupId = groupId;

    div.appendChild(entity);
    activeEntities.push(entity);

    // Replace setInterval with requestAnimationFrame for movement
    animateEntity(entity, growRate, speed);

  }
}

function spawnInterval({
  interval = 3000,
  count = 3,
  countStrategy = "fixed",
  speed = 1500,
  growRate = 25,
  background,
  src,
  top = "50%",
  left = "50%",
  titleText = "",
  maxWaves = 3,
  width = 40,
  height = 60,
  onComplete = () => {},
}) {
  let wave = 0;
  const groupId = `group-${Date.now()}-${Math.random()}`;
  let lastSpawnTime = 0;
  let animationFrameId = null;  // Store the animation frame ID

  // Utility to resolve dynamic values for each wave
  const resolve = (val) => {
    if (Array.isArray(val)) return val[wave % val.length];
    if (typeof val === "function") return val(wave);
    return val;
  };

  // Function to spawn entities
  const spawnEntities = () => {
    if (wave >= maxWaves) {
      // Check if all entities are removed before calling onComplete
      const stillActive = activeEntities.filter(e => e.dataset.groupId === groupId);

      if (stillActive.length === 0) {
        onComplete(); // Trigger completion when all entities are gone
        cancelAnimationFrame(animationFrameId);  // Cancel the animation frame when done
      }
      return;
    }

    let currentCount;
    switch (countStrategy) {
      case "triple":
        currentCount = Math.max(activeEntities.length * 2, 1);
        break;
      case "exponential":
        currentCount = count * Math.pow(2, wave);
        break;
      case "fixed":
      default:
        currentCount = count;
    }

    spawnMultipleEntities({
      count: currentCount,
      speed: resolve(speed),
      growRate: resolve(growRate),
      src: resolve(src),
      top: resolve(top),
      left: resolve(left),
      background,
      width,
      height,
      titleText: `${titleText}`,
      onComplete: () => {
        // Check if all entities in this wave are gone before proceeding
        const stillActive = activeEntities.filter(e => e.dataset.groupId === groupId);
        
        if (wave >= maxWaves - 1 && stillActive.length === 0) {
          onComplete(); // Trigger final completion if it's the last wave
          cancelAnimationFrame(animationFrameId); // Cancel the animation frame
        }
      },
      groupId,
    });

    wave++; // Increment wave after spawning
  };

  // Function to check time and trigger spawn at correct intervals
  const checkSpawnTime = (timestamp) => {
    // Check if enough time has passed since the last spawn
    if (timestamp - lastSpawnTime >= interval) {
      spawnEntities();  // Trigger spawn if interval has passed
      lastSpawnTime = timestamp;  // Update last spawn time
    }

    // Keep checking on the next frame
    animationFrameId = requestAnimationFrame(checkSpawnTime);
  };

  // Start the loop with requestAnimationFrame
  animationFrameId = requestAnimationFrame(checkSpawnTime);
}


function spawnBoss({
  health = 5,
  count = 1,
  src,
  titleText,
  growRate = 25,
  speed = 1000,
  background,
  top = "5%",
  left = "25%",
  onComplete = () => {},
  groupId = null
}) {
  title.innerHTML = titleText;
  let completeTriggered = false;
  if (!groupId) groupId = `group-${Date.now()}-${Math.random()}`;

  const currentOnComplete = () => {
    if (!completeTriggered) {
      completeTriggered = true;
      onComplete();
    }
  };

  if (background) {
    body.style.backgroundImage = `url(${background})`;
    body.style.backgroundSize = "cover";
  }

  // 🔁 Remove any previous boss health bars
  const existingBarContainer = document.getElementById("multi-boss-health-bars");
  if (existingBarContainer) existingBarContainer.remove();

  // ✅ Create container for boss health bars
  const healthBarContainer = document.createElement('div');
  healthBarContainer.id = "multi-boss-health-bars";
  healthBarContainer.style.position = 'fixed';
  healthBarContainer.style.top = '10%';
  healthBarContainer.style.left = '50%';
  healthBarContainer.style.transform = 'translateX(-50%)';
  healthBarContainer.style.display = 'flex';
  healthBarContainer.style.gap = '20px';
  healthBarContainer.style.zIndex = '9999';
  div.appendChild(healthBarContainer);

  for (let i = 0; i < count; i++) {
    let entityHealth = health;

    // ✅ Create the boss image
    const entity = document.createElement('img');
    entity.src = src;
    entity.style.position = "fixed";
    entity.style.top = top;
    entity.style.left = left;
    entity.style.width = "40px";
    entity.style.height = "60px";
    entity.style.transition = "left 0.5s ease, top 0.5s ease";
    entity.style.userSelect = "none";
    entity.classList.add("noselect")
    entity.dataset.groupId = groupId;

    div.appendChild(entity);
    activeEntities.push(entity);

    // ✅ Create health bar for this boss
    const individualBar = document.createElement('div');
    individualBar.style.display = 'flex';
    individualBar.style.gap = '2px';
    healthBarContainer.appendChild(individualBar);

    const healthUnits = [];
    for (let j = 0; j < health; j++) {
      const unit = document.createElement('div');
      unit.style.width = "20px";
      unit.style.height = "20px";
      unit.style.backgroundColor = "red";
      individualBar.appendChild(unit);
      healthUnits.push(unit);
    }

    // ✅ Animate the boss
    animateEntity(entity, growRate, speed);

    // ✅ Assign values for the delegated click handler
    entity.health = entityHealth;
    entity.currentOnComplete = currentOnComplete;
    entity.individualBar = individualBar;
    entity.healthUnits = healthUnits;
  }
}


l1.addEventListener('click', function () {
  crabs.style.display = "none";
  menu.style.display = "none";
  baloon.style.display = "none";

  spawnMultipleEntities({
    count: 1,
    src: "/armillaria.png",
    titleText: "Straight from the Petri Dish...",
    background: "https://www.mini-plast.com/wp-content/uploads/Petri-Dishes-in-Laboratory.png",
    left: "50%",
    top: "50%",
    speed: 1500,
    onComplete: () => {
      spawnMultipleEntities({
        count: 1,
        src: "/brown rot.png",
        titleText: "And into the Plants!",
        background: "https://lh5.ggpht.com/1ZKnGM1ENNyh61BRQT61XTJ11NP8HNSBWRgkbbj0xtGGX6kj48wNVMpLSJFP16pDddXCPjNADWAeB0wGumtO=s985",
        speed: 1250,
        top: "60%",
        left: "23%",
        onComplete: () => {
          spawnMultipleEntities({
            count: 3,
            src: "/mildew1.png",
            titleText: "Garden Galavanters",
            background: "https://www.thompson-morgan.com/static-images/master/static-images/diseases/powdery-mildew/white-spots-on-leaves.jpg",
            speed: 1250,
            top: "40%",
            left: "30%",
            onComplete: () => {
              spawnMultipleEntities({
                count: 4,
                src: "/mildew2.png",
                titleText: "Mildew Mayhem!!",
                speed: 1250,
                background: "https://squashandawe.com/wp-content/uploads/2015/06/dsc_0398.jpg",
                top: "50%",
                left: "50%",
                onComplete: () => {
                  spawnMultipleEntities({
                    count: 3,
                    src: "/brown rot fruit.png",
                    titleText: "Orchard Onslaught",
                    speed: 1000,
                    background: "https://media.istockphoto.com/id/177021819/photo/peach-orchard.jpg?s=612x612&w=0&k=20&c=2gDtXiT1BG9rYQ9EZovEHKRbeBkfL18n8EeKC79AGGg=",
                    top: "43%",
                    left: "51%",
                    onComplete: () => {
                      spawnMultipleEntities({
                        count: 1,
                        src: "/gall.png",
                        titleText: "Rust Gall!",
                        background: "https://growitbuildit.com/wp-content/uploads/2023/01/eastern-red-cedar-cones2.jpg",
                        top: "40%",
                        left: "50%",
                        onComplete: () => {
                          spawnMultipleEntities({
                            count: 5,
                            src: "/gall2.png",
                            titleText: "Galls Galore!",
                            speed: 1000,
                            growRate: 30,
                            top: "60%",
                            left: "40%",
                            background: "https://growitbuildit.com/wp-content/uploads/2023/01/eastern-red-cedar-cones2.jpg",
                            onComplete: () => {
                              spawnMultipleEntities({
                                count: 5,
                                src: "/armillaria fruit.png",
                                titleText: "Fruit Fiasco!",
                                speed: 1000,
                                growRate: 30,
                                top: "60%",
                                left: "60%",
                                background: "https://www.clemson.edu/extension/peach/images/rootcollar.jpeg",
                                onComplete: () => {
                                  spawnBoss({
                                    health: 5,
                                    count: 1,
                                    src: "/armillaria fruit.png",
                                    titleText: "Boss Fight!",
                                    speed: 800,
                                    growRate: 30,
                                    top: "60%",
                                    left: "60%",
                                    background: "https://www.clemson.edu/extension/peach/images/rootcollar.jpeg",
                                    onComplete: () => {
                                          title.innerHTML = "Play Again?";
                                          crabs.style.display = "grid";
                                          body.style.backgroundImage = "url('https://cdn.mos.cms.futurecdn.net/v2/t:0,l:133,cw:533,ch:533,q:80,w:533/EofuTa42mfBXgFqVWHnGXV.jpg')";
                                          menu.style.display = "block";
                                          baloon.style.display = "block";
                                            }
                                          });
                                        }
                                      });
                                    }
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
});

l2.addEventListener('click', function () {
  crabs.style.display = "none";
  menu.style.display = "none";
  baloon.style.display = "none";

  spawnMultipleEntities({
    count: 3,
    src: "/virus1.png",
    titleText: "They're Everywhere!",
    background: "https://cdn.dribbble.com/userupload/33715631/file/original-07b7d3ab8da508d0294cc65a7c1f09c1.gif",
    left: "50%",
    top: "35%",
    onComplete: () => {
      spawnInterval({
        interval: 500,
        count: 1,
        countStrategy: "triple",
        src: "/bacteria1.png",
        titleText: "Ewww...",
        background: "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F494d241c-1d61-42a5-8551-e689540b8ec4_1000x752.jpeg",
        maxWaves: 4,
        left: ["45%","39%","60%","60%"],
        top: ["30%","44%","45%","25%"],
        speed: 1000,
        onComplete: () => {
          spawnMultipleEntities({
            count: 1,
            src: "/virus2.png",
            titleText: "They Multiply!",
            background: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/85/9b/f8/dirty-bathroom-door-handle.jpg",
            speed: 750,
            top: "50%",
            left: "50%",
            onComplete: () => {
              spawnInterval({
              interval: 750,
              count: 5,
              countStrategy: "fixed",
              src: "/virus2.png",
              titleText: "Doorknobs are Nasty...",
              background: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/85/9b/f8/dirty-bathroom-door-handle.jpg",
              speed: 750,
              growRate: 5,
              maxWaves: 5,
              onComplete: () => {
                spawnMultipleEntities({
                count: 1,
                src: "/strawberry.png",
                titleText: "Yum!",
                speed: 10000000000000000,
                background: "https://upload.wikimedia.org/wikipedia/commons/0/03/103_Fragaria_vesca_L.jpg",
                top: "50%",
                left: "50%",
                onComplete: () => {
                  setTimeout (() => {
                  spawnMultipleEntities({
                    count: 1,
                    src: "/strawSlice.png",
                    titleText: "Oh?",
                    speed: 100000000000000,
                    background: "https://upload.wikimedia.org/wikipedia/commons/0/03/103_Fragaria_vesca_L.jpg",
                    top: "50%",
                    left: "50%",
                    onComplete: () => {
                      spawnInterval({
                        interval: 850,
                        count: 1,
                        countStrategy: "triple",
                        src: ["/nematode1.png", "/nematode2.png","/nematode1.png", "/nematode2.png"],
                        titleText: "Oh!",
                        background: "https://upload.wikimedia.org/wikipedia/commons/0/03/103_Fragaria_vesca_L.jpg",
                        top: "50%",
                        left: "50%",
                        maxWaves: 4,
                        speed: 850,
                        growRate: 10,
                        onComplete: () => {
                          spawnInterval({
                            interval: 2000,
                            count: 5,
                            countStrategy: "fixed",
                            src: "/armillaria.png",
                            titleText: "Fungal Infestation!",
                            speed: 1000,
                            growRate: 25,
                            left: ["40%","50%","60%",],
                            top: ["40%","50%","60%",],
                            maxWaves: 3,
                            background: "https://media.istockphoto.com/id/948759248/photo/root-tip-of-onion-and-mitosis-cell-in-the-root-tip-for-education.jpg?s=612x612&w=0&k=20&c=2OHtHEWqYgymtpYReveB3hKZqHzlHuGwzanFnspFq2E=",
                            onComplete: () => {
                              spawnMultipleEntities({
                                count: 5,
                                src: "/bacteria2.png",
                                titleText: "Dirty Dirt",
                                speed: 850,
                                growRate: 10,
                                top: "50%",
                                left: "50%",
                                background: "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_questions_CJdirt_0.gif",
                                onComplete: () => {
                                  spawnInterval({
                                    interval: 850, 
                                    count: 3,
                                    countStrategy: "exponential",
                                    src: "/bacteria2.png",
                                    titleText: "Infinite bacteria source!",
                                    maxWaves: 4,
                                    background: "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_questions_CJdirt_0.gif",
                                    left: ["50%", "40%" , "50%", "60%"],
                                    top: ["30%","50%","70%","50%"],
                                    onComplete: () => {
                                      spawnBoss({
                                        health: 5,
                                        count: 6,
                                        src: "/virus1.png",
                                        titleText: "Villanous Viruses!",
                                        growRate: 5,
                                        speed: 800,
                                        background: "https://c.stocksy.com/a/6TnA00/z9/2573440.jpg",
                                        top: "40%",
                                        left: "70%",
                                        onComplete: () => {
                                          title.innerHTML = "Face the final onslaught?";
                                          crabs.style.display = "grid";
                                          body.style.backgroundImage = "url('https://cdn.mos.cms.futurecdn.net/v2/t:0,l:133,cw:533,ch:533,q:80,w:533/EofuTa42mfBXgFqVWHnGXV.jpg')";
                                          menu.style.display = "block";
                                          baloon.style.display = "block";
                                         }
                                        });
                                        }
                                      });
                                    }
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                  }, 2000); 
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});

l3.addEventListener('click', function () {
  crabs.style.display = "none";
  menu.style.display = "none";
  baloon.style.display = "none";

  spawnBoss({
    health: 5,
    count: 3,
    growRate: 5,
    src: "/fly2.gif",
    titleText: "Fruit Flies",
    background: "https://www.webstaurantstore.com/images/expanded-descriptions/7/7/779880/8669bded-db8a-44e5-b07a-79609587181b.jpg",
    left: "50%",
    top: "50%",
    onComplete: () => {
      spawnInterval({
        interval: 500,
        count: 2,
        countStrategy: "exponential",
        src: "/fly.png",
        titleText: "Fruit Fly Fiesta!!",
        background: "https://pbs.twimg.com/media/F9u2rVgWUAA87PI.jpg",
        speed: 750,
        maxWaves: 4,
        growRate: 5,
        left:["40%","50%","60%","70%"],
        top: "50%",
        onComplete: () => {
          spawnMultipleEntities({
            count: 10,
            src: "/Japanese Beetle.png",
            titleText: "悪い甲虫 (Bad Beetle)",
            background: "https://www.epicgardening.com/wp-content/uploads/2024/03/Wild-poppies-Papaver-rhoeas-and-Forking-larkspur-Consolida-regalis-blooming-in-fthe-field-in-sunny-day-.jpg",
            growRate: 20,
            speed: 750,
            top: "50%",
            left: "50%",
            onComplete: () => {
              spawnMultipleEntities({
                count: 1,
                src: "/banana.png",
                titleText: "Banana?",
                speed: 10000000000000000,
                background: "https://extension.msstate.edu/sites/default/files/styles/feature/public/news/2019/sg20190722_thai_black.JPG?itok=3mWEqVqE",
                top: "50%",
                left: "50%",
                onComplete: () => {
                  spawnInterval({
                    interval: 2000,
                    count: 3,
                    countStrategy: "exponential",
                    src: "/Banana Weevil Larva.png",
                    titleText: "Banana Weevil Larva",
                    top: ["60%","40%","40%","60%","50%"],
                    left: ["60%","60%","40%","40%","50%"],
                    speed: 2000,
                    growRate: 5,
                    maxWaves: 5,
                    background: "https://www.agrosavia.co/media/rb5epwkn/erika-vergara-y-huberto-morales-1.jpg",
                    onComplete: () => {
                      spawnInterval({
                        interval: 500,
                        count: 10,
                        countStrategy: "fixed",
                        src: "/Banana Weevil.png",
                        titleText: "Banana Weevil Adult",
                        background: "https://www.agrosavia.co/media/rb5epwkn/erika-vergara-y-huberto-morales-1.jpg",
                        top: "40%",
                        left: "50%",
                        growRate: 5,
                        speed: 500,
                        maxWaves: 3,
                        onComplete: () => {
                          spawnInterval({
                            interval: 500,
                            count: 5,
                            countStrategy: "fixed",
                            src: "/codling pillar.png",
                            titleText: "Oh dear cod... \n Codlings!",
                            speed: 750,
                            growRate: 5,
                            top: ["5%","5%","5%","90%","70%","90%","70%","60%","50%","40%"],
                            left: ["5%","15%","25%","10%","20%","30%","40%","80%","90%","80%"],
                            width: 100,
                            height: 40,
                            maxWaves: 10,
                            background: "https://globebag.com/cdn/shop/articles/globebagcompanyinc-97646-apple-bushels-pecks-blogbanner1.jpg?v=1662487151",
                            onComplete: () => {
                              spawnInterval({
                                interval: 850,
                                count: 5,
                                countStrategy: "triple",
                                src: "/codling moth.png",
                                titleText: "mophs!",
                                top: ["10%","20%","30%","40%","50%","60%","70%"],
                                left: ["10%","20%","30%","40%","50%","60%","70%"],
                                speed: 750,
                                growRate: 10,
                                maxWaves: 7,
                                background: "https://travelhudsonvalley.com/wp-content/uploads/2023/08/niFYyJm6-hudson-valley-farms-apple-picking.jpg",
                                onComplete: () => {
                                  spawnBoss({
                                    health: 10,
                                    count: 3,
                                    src: "/borer.png",
                                    titleText: "You are boar? \n I am borer!",
                                    background: "https://media.istockphoto.com/id/177021819/photo/peach-orchard.jpg?s=612x612&w=0&k=20&c=2gDtXiT1BG9rYQ9EZovEHKRbeBkfL18n8EeKC79AGGg=",
                                    left: "20%",
                                    top: "50%",
                                    speed: 750,
                                    growRate: 20,
                                    onComplete: () => {
                                      spawnBoss({
                                        health: 30,
                                        count: 1,
                                        src: "/cocrab2.png",
                                        titleText: "Massive Coconut Crab!",
                                        growRate: 10,
                                        speed: 1000,
                                        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKTHJXjtIJ1VMrCvGOYSklrpGA3XYWGvAYQ&s",
                                        top: "70%",
                                        left: "85%",
                                        onComplete: () => {
                                          spawnBoss({
                                          health: 10,
                                          count: 6,
                                          src: "/cocrab1.png",
                                          titleText: "Dad?",
                                          growRate: 15,
                                          speed: 750,
                                          top: "70%",
                                          left: "65%",
                                          background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKTHJXjtIJ1VMrCvGOYSklrpGA3XYWGvAYQ&s",
                                          onComplete: () => {
                                            title.innerHTML = "You've... killed them all... Fruit will reign supreme uncontested";
                                            crabs.style.display = "grid";
                                            body.style.backgroundImage = "url('https://cdn.mos.cms.futurecdn.net/v2/t:0,l:133,cw:533,ch:533,q:80,w:533/EofuTa42mfBXgFqVWHnGXV.jpg')";
                                            menu.style.display = "block";
                                            baloon.style.display = "block";
                                            
                                            }
                                          });
                                        }
                                      });
                                    }
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});
