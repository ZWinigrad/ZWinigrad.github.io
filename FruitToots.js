const fruitBloop = new Audio();
fruitBloop.src = "https://files.catbox.moe/f5tzag.mp3";
      
const fruitFloop = new Audio();
fruitFloop.src = "https://files.catbox.moe/f5tzag.mp3";
      
const fruitPop = new Audio();
fruitPop.src = "https://files.catbox.moe/ut0z16.mov";

const chop = new Audio();
chop.src = "https://gofile.io/d/U5sIUd";

const balloon = document.getElementById("balloon");
const ballhov = document.getElementById("ballhov");

const start = document.getElementById("start");
const ebutt = document.getElementById("ebutt");
const mbutt = document.getElementById("mbutt");
const hbutt = document.getElementById("hbutt");

const etit = document.getElementById("etit");
const mtit = document.getElementById("mtit");
const htit = document.getElementById("htit");


ebutt.addEventListener ('click', function() {
    easyPopup1.style.display = 'block';
  });

ebutt.addEventListener ('mouseover', function() {
    ebutt.src = '/assests/pearSlice.png';
    ebutt.style.width = "20%";
    ebutt.style.top = "25%";
    ebutt.style.left = "10%";
    fruitFloop.play();
        if (fruitFloop.paused) {
          fruitFloop.play();
        }else{
          fruitFloop.currentTime = 0;
        }
    ehov.style.display = 'block';
    etit.style.display = 'block';
  });
  
ebutt.addEventListener ('mouseout', function() {
    ebutt.src = '/assests/pear.png';
    ebutt.style.width = "15%";
    ebutt.style.top = "35%";
    ebutt.style.left = "15%";
    fruitFloop.play();
        if (fruitFloop.paused) {
          fruitFloop.play();
        }else{
          fruitFloop.currentTime = 0;
        }
    ehov.style.display = 'none';
    etit.style.display = 'none';
  });
  
mbutt.addEventListener ('click', function() {
    medPopup1.style.display = 'block';
    m1Intervals();
  });
  
mbutt.addEventListener ('mouseover', function() {
    mbutt.src = '/assests/grapefruit.png';
    mbutt.style.width = "35%";
    mbutt.style.top = "32%";
    mbutt.style.left = "35%";
    fruitFloop.play();
        if (fruitFloop.paused) {
          fruitFloop.play();
        }else{
          fruitFloop.currentTime = 0;
        }
    mhov.style.display = 'block';
    mtit.style.display = 'block';
  });
  
mbutt.addEventListener ('mouseout', function() {
    mbutt.src = '/assests/GrapefruitUncut.png';
    mbutt.style.width = "25%";
    mbutt.style.top = "35%";
    mbutt.style.left = "40%";
    fruitFloop.play();
        if (fruitFloop.paused) {
          fruitFloop.play();
        }else{
          fruitFloop.currentTime = 0;
        }
    mhov.style.display = 'none';
    mtit.style.display = 'none';
  });
  
hbutt.addEventListener ('click', function() {
    hardPopup1.style.display = 'block';
    h1StartInt1();
    h1StartInt2();
    h1Intervals();
  });  

hbutt.addEventListener ('mouseover', function() {
    hbutt.src = '/assests/strawSlice.png';
    hbutt.style.width = "17%";
    hbutt.style.top = "37%";
    hbutt.style.left = "70%";
    fruitFloop.play();
        if (fruitFloop.paused) {
          fruitFloop.play();
        }else{
          fruitFloop.currentTime = 0;
        }
    hhov.style.display = 'block';
    htit.style.display = 'block';
  });
  
hbutt.addEventListener ('mouseout', function() {
    hbutt.src = '/assests/strawberry.png';
    hbutt.style.width = "10%";
    hbutt.style.top = "40%";
    hbutt.style.left = "75%";
    fruitFloop.play();
        if (fruitFloop.paused) {
          fruitFloop.play();
        }else{
          fruitFloop.currentTime = 0;
        }
    hhov.style.display = 'none';
    htit.style.display = 'none';
  });
  
const easyPopup1 = document.getElementById("easyPopup1");
const easyPopup2 = document.getElementById("easyPopup2");
const easyPopup3 = document.getElementById("easyPopup3");
const easyFinal = document.getElementById("easyFinal");

const medPopup1 = document.getElementById("medPopup1");
const medPopup2 = document.getElementById("medPopup2");
const medPopup3 = document.getElementById("medPopup3");
const medFinal = document.getElementById("medFinal");

const hardPopup1 = document.getElementById("hardPopup1");
const hardPopup2 = document.getElementById("hardPopup2");
const hardPopup3 = document.getElementById("hardPopup3");
const hardFinal = document.getElementById("hardFinal");

const ehov = document.getElementById("ehov");
const mhov = document.getElementById("mhov");
const hhov = document.getElementById("hhov");
  
  
//e1//
  
  const e1Straw1 = document.getElementById("e1Straw1")
  const e1Straw2 = document.getElementById("e1Straw2")
  const e1Straw3 = document.getElementById("e1Straw3")
  const e1Straw4 = document.getElementById("e1Straw4")
  const e1FruitArray = [e1Straw1, e1Straw2, e1Straw3, e1Straw4];
  const e1Fruits = Array.from(e1FruitArray);
  let e1score = 0;
  let etscore1 = 0;
  document.getElementById("e1score").textContent = e1score
  document.getElementById("etscore1").textContent = etscore1
      
  e1Fruits.forEach(element => {
      element.addEventListener('mouseover', function() {
      let indexe1Fruit = Math.floor(Math.random() * e1FruitArray.length);
      const e1Fruit = e1FruitArray[indexe1Fruit].style.display = "block";
      e1score += 1;
      etscore1 = e1score + e2score + e3score;
      fruitPop.play();
        if (fruitPop.paused) {
          fruitPop.play();
        }else{
          fruitPop.currentTime = 0
        }
      // @ts-ignore
      document.getElementById("e1score").textContent = e1score
      // @ts-ignore
      document.getElementById("etscore1").textContent = etscore1
      element.classList.add('highlight');
      });
    });
  
    e1Fruits.forEach(element => {
        element.addEventListener('mouseout', function() {
        let indexe1Fruit = Math.floor(Math.random() * e1FruitArray.length);
        const e1Fruit = e1FruitArray[indexe1Fruit].style.display = "none";
        e1score += 1;
        etscore1 = e1score + e2score + e3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("e1score").textContent = e1score
        document.getElementById("etscore1").textContent = etscore1
        element.classList.remove('highlight');
        });
      });
    
    function checkElementsVisibility(e1Fruits, e1callback) {
      const e1allHidden = e1Fruits.every(element => element.style.display === 'none');
        if (e1allHidden) {
        e1callback();
          }
        }

    const e1elements = Array.from(e1FruitArray); // Example: selects all elements with class "element-to-check"

    function handlee1AllHidden() {
      easyPopup1.style.display = 'none';
      easyPopup2.style.display = 'block';
      }

      // MutationObserver to observe changes in display property
    const e1observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        checkElementsVisibility(e1elements, handlee1AllHidden);
        }
      });
    });

    e1elements.forEach(element => {
      e1observer.observe(element, { attributes: true, attributeFilter: ['style'] });
    });

//e2//

  const e2pear1 = document.getElementById("e2pear1")
  const e2pear2 = document.getElementById("e2pear2")
  const e2pear3 = document.getElementById("e2pear3")
  const e2pear4 = document.getElementById("e2pear4")
  const e2pear5 = document.getElementById("e2pear5")
  const e2FruitArray = [e2pear1, e2pear2, e2pear3, e2pear4, e2pear5];
  const e2Fruits = Array.from(e2FruitArray);
  let e2score = 0;
  let etscore2 = 0;
  document.getElementById("e2score").textContent = e2score
  document.getElementById("etscore2").textContent = etscore2
      
  e2Fruits.forEach(element => {
      element.addEventListener('mouseover', function() {
      let indexe2Fruit = Math.floor(Math.random() * e2FruitArray.length);
      const e2Fruit = e2FruitArray[indexe2Fruit].style.display = "block";
      e2score += 1;
      etscore2 = e1score + e2score + e3score;
      fruitPop.play();
        if (fruitPop.paused) {
          fruitPop.play();
        }else{
          fruitPop.currentTime = 0
        }
      document.getElementById("e2score").textContent = e2score
      document.getElementById("etscore2").textContent = etscore2
      element.classList.add('highlight');
      });
    });
  
    e2Fruits.forEach(element => {
        element.addEventListener('mouseout', function() {
        let indexe2Fruit = Math.floor(Math.random() * e2FruitArray.length);
        const e2Fruit = e2FruitArray[indexe2Fruit].style.display = "none";
        e2score += 1;
        etscore2 = e1score + e2score + e3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("e2score").textContent = e2score
        document.getElementById("etscore2").textContent = etscore2
        element.classList.remove('highlight');
        });
      });
    
    function checkElementsVisibility(e2Fruits, e2callback) {
      const e2allHidden = e2Fruits.every(element => element.style.display === 'none');
        if (e2allHidden) {
        e2callback();
          }
        }

    const e2elements = Array.from(e2FruitArray); // Example: selects all elements with class "element-to-check"

    function handlee2AllHidden() {
      easyPopup2.style.display = 'none';
      easyPopup3.style.display = 'block';
      }

      // MutationObserver to observe changes in display property
    const e2observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        checkElementsVisibility(e2elements, handlee2AllHidden);
        }
      });
    });

    e2elements.forEach(element => {
      e2observer.observe(element, { attributes: true, attributeFilter: ['style'] });
    });

//e3//

  const e3Banana1 = document.getElementById("e3Banana1")
  const e3Banana2 = document.getElementById("e3Banana2")
  const e3Banana3 = document.getElementById("e3Banana3")
  const e3Banana4 = document.getElementById("e3Banana4")
  const e3Banana5 = document.getElementById("e3Banana5")
  const e3FruitArray = [e3Banana1, e3Banana2, e3Banana3, e3Banana4, e3Banana5];
  const e3Fruits = Array.from(e3FruitArray);
  let e3score = 0;
  let etscore3 = 0;
  document.getElementById("e3score").textContent = e3score
  document.getElementById("etscore3").textContent = etscore3
      
  e3Fruits.forEach(element => {
      element.addEventListener('mouseover', function() {
      let indexe3Fruit = Math.floor(Math.random() * e3FruitArray.length);
      const e3Fruit = e3FruitArray[indexe3Fruit].style.display = "block";
      e3score += 1;
      etscore3 = e1score + e2score + e3score;
      fruitPop.play();
        if (fruitPop.paused) {
          fruitPop.play();
        }else{
          fruitPop.currentTime = 0
        }
      document.getElementById("e3score").textContent = e3score
      document.getElementById("etscore3").textContent = etscore3
      element.classList.add('highlight');
      });
    });
  
    e3Fruits.forEach(element => {
        element.addEventListener('mouseout', function() {
        let indexe3Fruit = Math.floor(Math.random() * e3FruitArray.length);
        const e3Fruit = e3FruitArray[indexe3Fruit].style.display = "none";
        e3score += 1;
        etscore3 = e1score + e2score + e3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("e3score").textContent = e3score
        document.getElementById("etscore3").textContent = etscore3
        element.classList.remove('highlight');
        });
      });
    
    function checkElementsVisibility(e3Fruits, e3callback) {
      const e3allHidden = e3Fruits.every(element => element.style.display === 'none');
        if (e3allHidden) {
        e3callback();
          }
        }

    const e3elements = Array.from(e3FruitArray); // Example: selects all elements with class "element-to-check"

    function handlee3AllHidden() {
      easyPopup3.style.display = 'none';
      easyFinal.style.display = 'block';
      }

      // MutationObserver to observe changes in display property
    const e3observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        checkElementsVisibility(e3elements, handlee3AllHidden);
        }
      });
    });

    e3elements.forEach(element => {
      e3observer.observe(element, { attributes: true, attributeFilter: ['style'] });
    });
  
  
  
  
//m1//
  
    const m1Grape = document.getElementById("m1Grape")
    const m1Pom = document.getElementById("m1Pom")
    const m1Pear = document.getElementById("m1Pear")
    let m1Orange = document.getElementById("m1Orange")
    const m1FruitArray = [m1Grape, m1Pom, m1Pear, m1Orange];
    let m1Fruits = Array.from(m1FruitArray);
    let m1score = 0;
    let mtscore1 = 0;
    
    let oxmin = Math.ceil(300);
    let oxmax = Math.floor(1000);
    
    let oymin = Math.ceil(200);
    let oymax = Math.floor(500);

    function getRandomPositionm1o() {
      const x = Math.floor(Math.random() * (oxmax - oxmin + 1) + oxmin);
      const y = Math.floor(Math.random() * (oymax - oymin + 1) + oymin);
      return { x, y };
    }

    function animatem1Orange() {
      const newPosition = getRandomPositionm1o();
      m1Orange.style.left = newPosition.x + "px";
      m1Orange.style.top = newPosition.y + "px";
    }

    
    
    let gxmin = Math.ceil(300);
    let gxmax = Math.floor(1000);
    
    let gymin = Math.ceil(200);
    let gymax = Math.floor(500);

    function getRandomPositionm1g() {
      const x = Math.floor(Math.random() * (gxmax - gxmin + 1) + gxmin);
      const y = Math.floor(Math.random() * (gymax - gymin + 1) + gymin);
      return { x, y };
    }

    function animatem1Grape() {
      const newPosition = getRandomPositionm1g();
      m1Grape.style.left = newPosition.x + "px";
      m1Grape.style.top = newPosition.y + "px";
    }

  
    let pxmin = Math.ceil(300);
    let pxmax = Math.floor(1000);
    
    let pymin = Math.ceil(200);
    let pymax = Math.floor(500);

    function getRandomPositionm1p() {
      const x = Math.floor(Math.random() * (pxmax - pxmin + 1) + pxmin);
      const y = Math.floor(Math.random() * (pymax - pymin + 1) + pymin);
      return { x, y };
    }

    function animatem1p() {
      const newPosition = getRandomPositionm1p();
      m1Pom.style.left = newPosition.x + "px";
      m1Pom.style.top = newPosition.y + "px";
    }
    

    let pexmin = Math.ceil(300);
    let pexmax = Math.floor(1000);
    
    let peymin = Math.ceil(200);
    let peymax = Math.floor(500);

    function getRandomPositionm1pe() {
      const x = Math.floor(Math.random() * (pexmax - pexmin + 1) + pexmin);
      const y = Math.floor(Math.random() * (peymax - peymin + 1) + peymin);
      return { x, y };
    }

    function animatem1Pear() {
      const newPosition = getRandomPositionm1pe();
      m1Pear.style.left = newPosition.x + "px";
      m1Pear.style.top = newPosition.y + "px";
    }

      
    m1Fruits.forEach(element => {
      element.addEventListener('mouseover', function() {
      let indexm1Fruit = Math.floor(Math.random() * m1FruitArray.length);
      const m1Fruit = m1FruitArray[indexm1Fruit].style.display = "block";
      m1score += 1;
      mtscore1 = m1score + m2score + m3score;
      fruitPop.play();
        if (fruitPop.paused) {
          fruitPop.play();
        }else{
          fruitPop.currentTime = 0
        }
      document.getElementById("m1score").textContent = m1score;
      document.getElementById("mtscore1").textContent = mtscore1;
      element.classList.add('highlight');
      });
    });
  
      m1Fruits.forEach(element => {
        element.addEventListener('mouseout', function() {
        let indexm1Fruit = Math.floor(Math.random() * m1FruitArray.length);
        const m1Fruit = m1FruitArray[indexm1Fruit].style.display = "none";
        m1score += 1;
        mtscore1 = m1score + m2score + m3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("m1score").textContent = m1score;
        document.getElementById("mtscore1").textContent = mtscore1;
        element.classList.remove('highlight');
        });
      });
    
    function checkElementsVisibility(m1Fruits, m1callback) {
      const m1allHidden = m1Fruits.every(element => element.style.display === 'none');
        if (m1allHidden) {
        m1callback();
          }
        }

    const m1elements = Array.from(m1FruitArray); // Example: selects all elements with class "element-to-check"

    function handlem1AllHidden() {
      medPopup1.style.display = 'none';
      medPopup2.style.display = 'block';
      clearm1Intervals();
      m2Intervals();
      }

      // MutationObserver to observe changes in display property
    const m1observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        checkElementsVisibility(m1elements, handlem1AllHidden);
        }
      });
    });

    m1elements.forEach(element => {
      m1observer.observe(element, { attributes: true, attributeFilter: ['style'] });
    });




//m2

    const m2gf1 = document.getElementById("m2gf1")
    const m2gf2 = document.getElementById("m2gf2")
    const m2m1 = document.getElementById("m2m1")
    const m2m2 = document.getElementById("m2m2")
    const m2FruitArray = [m2gf1, m2gf2, m2m1, m2m2];
    const m2Fruits = Array.from(m2FruitArray);
    let m2score = 0;
    let mtscore2 = 0;
    
    let m2gf1ID;
    let m2gf2ID;
    let m2m1ID;
    let m2m2ID;
    
    let gf1xmin = Math.ceil(50);
    let gf1xmax = Math.floor(250);
    
    let gf1ymin = Math.ceil(100);
    let gf1ymax = Math.floor(600);

    function getRandomPositionm2gf1() {
      const x = Math.floor(Math.random() * (gf1xmax - gf1xmin + 1) + gf1xmin);
      const y = Math.floor(Math.random() * (gf1ymax - gf1ymin + 1) + gf1ymin);
      return { x, y };
    }

    function animatem2gf1() {
      const newPosition = getRandomPositionm2gf1();
      m2gf1.style.left = newPosition.x + "px";
      m2gf1.style.top = newPosition.y + "px";
    }

    
    let gf2xmin = Math.ceil(850);
    let gf2xmax = Math.floor(1000);
    
    let gf2ymin = Math.ceil(100);
    let gf2ymax = Math.floor(600);

    function getRandomPositionm2gf2() {
      const x = Math.floor(Math.random() * (gf2xmax - gf2xmin + 1) + gf2xmin);
      const y = Math.floor(Math.random() * (gf2ymax - gf2ymin + 1) + gf2ymin);
      return { x, y };
    }

    function animatem2gf2() {
      const newPosition = getRandomPositionm2gf2();
      m2gf2.style.left = newPosition.x + "px";
      m2gf2.style.top = newPosition.y + "px";
    }

      
      
    let m2m1xmin = Math.ceil(400);
    let m2m1xmax = Math.floor(800);
    
    let m2m1ymin = Math.ceil(200);
    let m2m1ymax = Math.floor(500);

    function getRandomPositionm2m1() {
      const x = Math.floor(Math.random() * (m2m1xmax - m2m1xmin + 1) + m2m1xmin);
      const y = Math.floor(Math.random() * (m2m1ymax - m2m1ymin + 1) + m2m1ymin);
      return { x, y };
    }

    function animatem2m1() {
      const newPosition = getRandomPositionm2m1();
      m2m1.style.left = newPosition.x + "px";
      m2m1.style.top = newPosition.y + "px";
    }

    
    let m2m2xmin = Math.ceil(400);
    let m2m2xmax = Math.floor(800);
    
    let m2m2ymin = Math.ceil(200);
    let m2m2ymax = Math.floor(500);

    function getRandomPositionm2m2() {
      const x = Math.floor(Math.random() * (m2m2xmax - m2m2xmin + 1) + m2m2xmin);
      const y = Math.floor(Math.random() * (m2m2ymax - m2m2ymin + 1) + m2m2ymin);
      return { x, y };
    }

    function animatem2m2() {
      const newPosition = getRandomPositionm2m2();
      m2m2.style.left = newPosition.x + "px";
      m2m2.style.top = newPosition.y + "px";
    }

    
  
  


      
    m2Fruits.forEach(element => {
      element.addEventListener('mouseover', function() {
      let indexm2Fruit = Math.floor(Math.random() * m2FruitArray.length);
      let m2FruitBlock = m2FruitArray[indexm2Fruit].style.display = "block";
      m2score += 1;
      mtscore2 = m1score + m2score + m3score;
      fruitPop.play();
        if (fruitPop.paused) {
          fruitPop.play();
        }else{
          fruitPop.currentTime = 0
        }
      document.getElementById("m2score").textContent = m2score
      document.getElementById("mtscore2").textContent = mtscore2
      element.classList.add('highlight');
      });
    });
  
      m2Fruits.forEach(element => {
        element.addEventListener('mouseout', function() {
        let indexm2Fruit = Math.floor(Math.random() * m2FruitArray.length);
        const m2Fruit = m2FruitArray[indexm2Fruit].style.display = "none";
        m2score += 1;
        mtscore2 = m1score + m2score + m3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("m2score").textContent = m2score
        document.getElementById("mtscore2").textContent = mtscore2
        element.classList.remove('highlight');
        });
      });
    
    function checkElementsVisibility(m2Fruits, m2callback) {
      const m2allHidden = m2Fruits.every(element => element.style.display === 'none');
        if (m2allHidden) {
        m2callback();
          }
        }

    const m2elements = Array.from(m2FruitArray); // Example: selects all elements with class "element-to-check"

    function handlem2AllHidden() {
      medPopup2.style.display = 'none';
      medPopup3.style.display = 'block';
      clearm2Intervals();
      m3Intervals();
    }

      // MutationObserver to observe changes in display property
    const m2observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        checkElementsVisibility(m2elements, handlem2AllHidden);
        }
      });
    });

    m2elements.forEach(element => {
      m2observer.observe(element, { attributes: true, attributeFilter: ['style'] });
    });

//m3//

    const m3p1 = document.getElementById("m3p1")
    const m3p2 = document.getElementById("m3p2")
    const m3p3 = document.getElementById("m3p3")
    const m3p4 = document.getElementById("m3p4")
    const m3FruitArray = [m3p1, m3p2, m3p3, m3p4];
    const m3Fruits = Array.from(m3FruitArray);
    let m3score = 0;
    let mtscore3 = 0;
      
    let m3p1xmin = Math.ceil(50);
    let m3p1xmax = Math.floor(950);
    
    let m3p1ymin = Math.ceil(100);
    let m3p1ymax = Math.floor(600);

    function getRandomPositionm3p1() {
      const x = Math.floor(Math.random() * (m3p1xmax - m3p1xmin + 1) + m3p1xmin);
      const y = Math.floor(Math.random() * (m3p1ymax - m3p1ymin + 1) + m3p1ymin);
      const rotate = Math.floor(Math.random() * 361);
      return { x, y, rotate };
    }

    function animatem3p1() {
      const newPosition = getRandomPositionm3p1();
      m3p1.style.left = newPosition.x + "px";
      m3p1.style.top = newPosition.y + "px";
      m3p1.style.rotate = newPosition.rotate + "deg";
    }


    
    
    
    let m3p2xmin = Math.ceil(50);
    let m3p2xmax = Math.floor(950);
    
    let m3p2ymin = Math.ceil(100);
    let m3p2ymax = Math.floor(600);

    function getRandomPositionm3p2() {
      const x = Math.floor(Math.random() * (m3p2xmax - m3p2xmin + 1) + m3p2xmin);
      const y = Math.floor(Math.random() * (m3p2ymax - m3p2ymin + 1) + m3p2ymin);
      const rotate = Math.floor(Math.random() * 361);
      return { x, y, rotate };
    }

    function animatem3p2() {
      const newPosition = getRandomPositionm3p2();
      m3p2.style.left = newPosition.x + "px";
      m3p2.style.top = newPosition.y + "px";
      m3p2.style.rotate = newPosition.rotate + "deg";
    }

    
    
    
    let m3p3xmin = Math.ceil(50);
    let m3p3xmax = Math.floor(950);
    
    let m3p3ymin = Math.ceil(100);
    let m3p3ymax = Math.floor(600);

    function getRandomPositionm3p3() {
      const x = Math.floor(Math.random() * (m3p3xmax - m3p3xmin + 1) + m3p3xmin);
      const y = Math.floor(Math.random() * (m3p3ymax - m3p3ymin + 1) + m3p3ymin);
      const rotate = Math.floor(Math.random() * 361);
      return { x, y, rotate };
    }

    function animatem3p3() {
      const newPosition = getRandomPositionm3p3();
      m3p3.style.left = newPosition.x + "px";
      m3p3.style.top = newPosition.y + "px";
      m3p3.style.rotate = newPosition.rotate + "deg";
    }


    
    
    
    let m3p4xmin = Math.ceil(50);
    let m3p4xmax = Math.floor(950);
    
    let m3p4ymin = Math.ceil(100);
    let m3p4ymax = Math.floor(600);

    function getRandomPositionm3p4() {
      const x = Math.floor(Math.random() * (m3p4xmax - m3p4xmin + 1) + m3p4xmin);
      const y = Math.floor(Math.random() * (m3p4ymax - m3p4ymin + 1) + m3p4ymin);
      const rotate = Math.floor(Math.random() * 361);
      return { x, y, rotate };
    }

    function animatem3p4() {
      const newPosition = getRandomPositionm3p4();
      m3p4.style.left = newPosition.x + "px";
      m3p4.style.top = newPosition.y + "px";
      m3p4.style.rotate = newPosition.rotate + "deg";
    }


      
    m3Fruits.forEach(element => {
      element.addEventListener('mouseover', function() {
      let indexm3Fruit = Math.floor(Math.random() * m3FruitArray.length);
      const m3Fruit = m3FruitArray[indexm3Fruit].style.display = "block";
      m3score += 1;
      mtscore3 = m1score + m2score + m3score;
      fruitPop.play();
        if (fruitPop.paused) {
          fruitPop.play();
        }else{
          fruitPop.currentTime = 0
        }
      document.getElementById("m3score").textContent = m3score;
      document.getElementById("mtscore3").textContent = mtscore3;
      element.classList.add('highlight');
      });
    });
  
      m3Fruits.forEach(element => {
        element.addEventListener('mouseout', function() {
        let indexm3Fruit = Math.floor(Math.random() * m3FruitArray.length);
        const m3Fruit = m3FruitArray[indexm3Fruit].style.display = "none";
        m3score += 1;
        mtscore3 = m1score + m2score + m3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("m3score").textContent = m3score
        document.getElementById("mtscore3").textContent = mtscore3
        element.classList.remove('highlight');
        });
      });
    
    function checkElementsVisibility(m3Fruits, m3callback) {
      const m3allHidden = m3Fruits.every(element => element.style.display === 'none');
        if (m3allHidden) {
        m3callback();
          }
        }

    const m3elements = Array.from(m3FruitArray); // Example: selects all elements with class "element-to-check"

    function handlem3AllHidden() {
      medPopup3.style.display = 'none';
      medFinal.style.display = 'block';
      clearm3Intervals();
      }

      // MutationObserver to observe changes in display property
    const m3observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        checkElementsVisibility(m3elements, handlem3AllHidden);
        }
      });
    });

    m3elements.forEach(element => {
      m3observer.observe(element, { attributes: true, attributeFilter: ['style'] });
    });





    // h1 sutff
    
    
            
      const h1g1 = document.getElementById("h1g1")
      const h1g2 = document.getElementById("h1g2")
      const h1g3 = document.getElementById("h1g3")
      const h1g4 = document.getElementById("h1g4")
      const h1FruitArray = [h1g1, h1g2, h1g3, h1g4];
      const h1Fruits = Array.from(h1FruitArray);
      let h1score = 0
      let htscore1 = 0
      document.getElementById("h1score").textContent = h1score
      document.getElementById("htscore1").textContent = htscore1
      
      let h1timer, h1poof;
      
      const h1button = document.getElementById("h1button")
      const h1safe = document.getElementById("h1safe")
      
        function h1StartInt1 (){ 
          h1StopInt1();
          h1poof = setInterval(h1dissapear, 3000);
        }
      
        function h1dissapear () {
          h1Fruits.forEach(element => {
          element.style.display = "none";
          });
        }
      
        function h1StartInt2() {
        h1StopInt2();
        let h1intervalDuration = 3000;
        let timeLeft = h1intervalDuration;
        h1timer = setInterval(() => {
          timeLeft -= 10;
          const seconds = Math.floor(timeLeft);
          h1button.innerHTML = seconds;
          if (timeLeft <= 0) {
            h1StopInt2();
          }
        }, 10);
    }
    
    function h1StopInt1 () {
          window.clearInterval(h1poof);
        }
    
    function h1StopInt2 () {
          window.clearInterval(h1timer);
        }
  
    h1safe.addEventListener ('mouseover', function() {
        h1StopInt1();
        h1StopInt2();
    });
      
    h1safe.addEventListener ('mouseout', function() {
        h1StartInt1();
        h1StartInt2();
    });  
    
      
            
    


    
    let h1g1xmin = Math.ceil(50);
    let h1g1xmax = Math.floor(1100);
    
    let h1g1ymin = Math.ceil(600);
    let h1g1ymax = Math.floor(650);

    function getRandomPositionh1g1() {
      const x = Math.floor(Math.random() * (h1g1xmax - h1g1xmin + 1) + h1g1xmin);
      const y = Math.floor(Math.random() * (h1g1ymax - h1g1ymin + 1) + h1g1ymin);
      return { x, y };
    }

    function animateh1g1() {
      const newPosition = getRandomPositionh1g1();
      h1g1.style.left = newPosition.x + "px";
      h1g1.style.top = newPosition.y + "px";
    }
    
    let h1g2xmin = Math.ceil(50);
    let h1g2xmax = Math.floor(1100);
    
    let h1g2ymin = Math.ceil(600);
    let h1g2ymax = Math.floor(650);

    function getRandomPositionh1g2() {
      const x = Math.floor(Math.random() * (h1g2xmax - h1g2xmin + 1) + h1g2xmin);
      const y = Math.floor(Math.random() * (h1g2ymax - h1g2ymin + 1) + h1g2ymin);
      return { x, y };
    }

    function animateh1g2() {
      const newPosition = getRandomPositionh1g2();
      h1g2.style.left = newPosition.x + "px";
      h1g2.style.top = newPosition.y + "px";
    }
    
    let h1g3xmin = Math.ceil(50);
    let h1g3xmax = Math.floor(1100);
    
    let h1g3ymin = Math.ceil(600);
    let h1g3ymax = Math.floor(650);

    function getRandomPositionh1g3() {
      const x = Math.floor(Math.random() * (h1g3xmax - h1g3xmin + 1) + h1g3xmin);
      const y = Math.floor(Math.random() * (h1g3ymax - h1g3ymin + 1) + h1g3ymin);
      return { x, y };
    }

    function animateh1g3() {
      const newPosition = getRandomPositionh1g3();
      h1g3.style.left = newPosition.x + "px";
      h1g3.style.top = newPosition.y + "px";
    }
    
    let h1g4xmin = Math.ceil(50);
    let h1g4xmax = Math.floor(1100);
    
    let h1g4ymin = Math.ceil(600);
    let h1g4ymax = Math.floor(650);

    function getRandomPositionh1g4() {
      const x = Math.floor(Math.random() * (h1g4xmax - h1g4xmin + 1) + h1g4xmin);
      const y = Math.floor(Math.random() * (h1g4ymax - h1g4ymin + 1) + h1g4ymin);
      return { x, y };
    }

    function animateh1g4() {
      const newPosition = getRandomPositionh1g4();
      h1g4.style.left = newPosition.x + "px";
      h1g4.style.top = newPosition.y + "px";
    }
    
    
    
      

      h1Fruits.forEach(element => {
        element.addEventListener('mouseover', function() {
        let indexh1Fruit = Math.floor(Math.random() * h1FruitArray.length);
        const h1Fruit = h1FruitArray[indexh1Fruit].style.display = "block";
        h1score += 1;
        htscore1 = h1score + h2score + h3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("h1score").textContent = h1score
        document.getElementById("htscore1").textContent = htscore1
        element.classList.add('highlight');
        });
      });
  
      h1Fruits.forEach(element => {
        element.addEventListener('mouseout', function() {
        let indexh1Fruit = Math.floor(Math.random() * h1FruitArray.length);
        const h1Fruit = h1FruitArray[indexh1Fruit].style.display = "none";
        h1score += 1;
        htscore1 = h1score + h2score + h3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("h1score").textContent = h1score
        document.getElementById("htscore1").textContent = htscore1
        element.classList.remove('highlight');
        });
      });
    
    function checkElementsVisibility(hardOranges, callback) {
      const h1allHidden = h1Fruits.every(element => element.style.display === 'none');
        if (h1allHidden) {
        callback();
          }
        }

    const h1elements = Array.from(h1FruitArray); // Example: selects all elements with class "element-to-check"

    function handleh1AllHidden() {
      hardPopup1.style.display = 'none';
      hardPopup2.style.display = 'block';
      h1StopInt1();
      h1StopInt2();
      clearh1Intervals();
      h2StartInt1();
      h2StartInt2();
      h2Intervals();
      }

      

      // MutationObserver to observe changes in display property
    const h1observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        checkElementsVisibility(h1elements, handleh1AllHidden);
        }
      });
    });

    h1elements.forEach(element => {
      h1observer.observe(element, { attributes: true, attributeFilter: ['style'] });
    });

// h2

            
      const h2p1 = document.getElementById("h2p1")
      const h2p2 = document.getElementById("h2p2")
      const h2o1 = document.getElementById("h2o1")
      const h2o2 = document.getElementById("h2o2")
      const h2FruitArray = [h2p1, h2p2, h2o1, h2o2];
      const h2Fruits = Array.from(h2FruitArray);
      let h2score = 0;
      let htscore2 = 0;

      let h2timer, h2poof;
      
      const h2button = document.getElementById("h2button")
      const h2safe = document.getElementById("h2safe")
      
        function h2StartInt1 (){ 
          h2StopInt1();
          h2poof = setInterval(h2dissapear, 3000);
        }
      
        function h2dissapear () {
          h2Fruits.forEach(element => {
          element.style.display = "none";
          });
        }
      
        function h2StartInt2() {
        h2StopInt2();
        let h2intervalDuration = 3000;
        let timeLeft = h2intervalDuration;
        h2timer = setInterval(() => {
          timeLeft -= 10;
          const seconds = Math.floor(timeLeft);
          h2button.innerHTML = seconds;
          if (timeLeft <= 0) {
            h2StopInt2();
          }
        }, 10);
    }
    
    function h2StopInt1 () {
          window.clearInterval(h2poof);
        };
    
    function h2StopInt2 () {
          window.clearInterval(h2timer);
        };
  
    h2safe.addEventListener ('mouseover', function() {
        h2StopInt1();
        h2StopInt2();
    });
      
    h2safe.addEventListener ('mouseout', function() {
        h2StartInt1();
        h2StartInt2();
    });  
    
       
      let h2p1xmin = Math.ceil(50);
      let h2p1xmax = Math.floor(300);
    
      let h2p1ymin = Math.ceil(50);
      let h2p1ymax = Math.floor(650);

      function getRandomPositionh2p1() {
        const x = Math.floor(Math.random() * (h2p1xmax - h2p1xmin + 1) + h2p1xmin);
        const y = Math.floor(Math.random() * (h2p1ymax - h2p1ymin + 1) + h2p1ymin);
        return { x, y };
      }

    function animateh2p1() {
      const newPosition = getRandomPositionh2p2();
      h2p1.style.left = newPosition.x + "px";
      h2p1.style.top = newPosition.y + "px";
    }
    
      let h2p2xmin = Math.ceil(50);
      let h2p2xmax = Math.floor(300);
    
      let h2p2ymin = Math.ceil(50);
      let h2p2ymax = Math.floor(650);

      function getRandomPositionh2p2() {
        const x = Math.floor(Math.random() * (h2p2xmax - h2p2xmin + 1) + h2p2xmin);
        const y = Math.floor(Math.random() * (h2p2ymax - h2p2ymin + 1) + h2p2ymin);
        return { x, y };
      }

    function animateh2p2() {
      const newPosition = getRandomPositionh2p2();
      h2p2.style.left = newPosition.x + "px";
      h2p2.style.top = newPosition.y + "px";
    }
    
      let h2o1xmin = Math.ceil(850);
      let h2o1xmax = Math.floor(1100);
    
      let h2o1ymin = Math.ceil(50);
      let h2o1ymax = Math.floor(650);

      function getRandomPositionh2o1() {
        const x = Math.floor(Math.random() * (h2o1xmax - h2o1xmin + 1) + h2o1xmin);
        const y = Math.floor(Math.random() * (h2o1ymax - h2o1ymin + 1) + h2o1ymin);
        return { x, y };
      }

    function animateh2o1() {
      const newPosition = getRandomPositionh2o1();
      h2o1.style.left = newPosition.x + "px";
      h2o1.style.top = newPosition.y + "px";
    }
    
      let h2o2xmin = Math.ceil(850);
      let h2o2xmax = Math.floor(1100);
    
      let h2o2ymin = Math.ceil(50);
      let h2o2ymax = Math.floor(650);

      function getRandomPositionh2o2() {
        const x = Math.floor(Math.random() * (h2o2xmax - h2o2xmin + 1) + h2o2xmin);
        const y = Math.floor(Math.random() * (h2o2ymax - h2o2ymin + 1) + h2o2ymin);
        return { x, y };
      }

    function animateh2o2() {
      const newPosition = getRandomPositionh2o2();
      h2o2.style.left = newPosition.x + "px";
      h2o2.style.top = newPosition.y + "px";
    }



      h2Fruits.forEach(element => {
        element.addEventListener('mouseover', function() {
        let indexh2Fruit = Math.floor(Math.random() * h2FruitArray.length);
        const h2Fruit = h2FruitArray[indexh2Fruit].style.display = "block";
        h2score += 1;
        htscore2 = h1score + h2score + h3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("h2score").textContent = h2score
        document.getElementById("htscore2").textContent = htscore2
        element.classList.add('highlight');
        });
      });
  
      h2Fruits.forEach(element => {
        element.addEventListener('mouseout', function() {
        let indexh2Fruit = Math.floor(Math.random() * h2FruitArray.length);
        const h2Fruit = h2FruitArray[indexh2Fruit].style.display = "none";
        h2score += 1;
        htscore2 = h1score + h2score + h3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("h2score").textContent = h2score
        document.getElementById("htscore2").textContent = htscore2
        element.classList.remove('highlight');
        });
      });
    
    function checkElementsVisibility(h2Fruits, callback) {
      const h2allHidden = h2Fruits.every(element => element.style.display === 'none');
        if (h2allHidden) {
        callback();
          }
        }

    const h2elements = Array.from(h2FruitArray); // Example: selects all elements with class "element-to-check"

    let h2IntervalsCleared = false;

    function handleh2AllHidden() {
      if (!h2IntervalsCleared) {
        hardPopup2.style.display = 'none';
        hardPopup3.style.display = 'block';
        h2StopInt1();
        h2StopInt2();
        clearh2Intervals();
        h3StartInt1();
        h3StartInt2();
        h3Intervals();
        h2IntervalsCleared = true; // Set the flag to true after clearing intervals
      }
    }

      // MutationObserver to observe changes in display property
    const h2observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        checkElementsVisibility(h2elements, handleh2AllHidden);
        }
      });
    });

    h2elements.forEach(element => {
      h2observer.observe(element, { attributes: true, attributeFilter: ['style'] });
    });



// h3 stuff

    
    const h3s1 = document.getElementById("h3s1")
    const h3s2 = document.getElementById("h3s2")
    const h3s3 = document.getElementById("h3s3")
    const h3s4 = document.getElementById("h3s4")
    const h3FruitArray = [h3s1, h3s2, h3s3, h3s4];
    const h3Fruits = Array.from(h3FruitArray);
    let h3score = 0;
    let htscore3 = 0;
    
    let h3timer, h3poof;
      
    const h3button = document.getElementById("h3button")
    const h3safe = document.getElementById("h3safe")
      
    function h3StartInt1 (){ 
        h3StopInt1();
        h3poof = setInterval(h3dissapear, 3000);
    }
      
    function h3dissapear () {
          h3Fruits.forEach(element => {
          element.style.display = "none";
          });
    }
      
    function h3StartInt2() {
      h3StopInt2();
      let h3intervalDuration = 3000;
      let timeLeft = h3intervalDuration;
      h3timer = setInterval(() => {
          timeLeft -= 10;
          const seconds = Math.floor(timeLeft);
          h3button.innerHTML = seconds;
          if (timeLeft <= 0) {
            h3StopInt2();
          }
        }, 10);
    }
    
    function h3StopInt1 () {
          window.clearInterval(h3poof);
        };
    
    function h3StopInt2 () {
          window.clearInterval(h3timer);
        };
  
    h3safe.addEventListener ('mouseover', function() {
        h3StopInt1();
        h3StopInt2();
    });
      
    h3safe.addEventListener ('mouseout', function() {
        h3StartInt1();
        h3StartInt2();
    });  

    
    let h3s1xmin = Math.ceil(50);
    let h3s1xmax = Math.floor(950);
    
    let h3s1ymin = Math.ceil(100);
    let h3s1ymax = Math.floor(600);

    function getRandomPositionh3s1() {
      const x = Math.floor(Math.random() * (h3s1xmax - h3s1xmin + 1) + h3s1xmin);
      const y = Math.floor(Math.random() * (h3s1ymax - h3s1ymin + 1) + h3s1ymin);
      const rotate = Math.floor(Math.random() * 361);
      return { x, y, rotate };
    }

    function animateh3s1() {
      const newPosition = getRandomPositionh3s1();
      h3s1.style.left = newPosition.x + "px";
      h3s1.style.top = newPosition.y + "px";
      h3s1.style.rotate = newPosition.rotate + "deg";
    }


    
    let h3s2xmin = Math.ceil(50);
    let h3s2xmax = Math.floor(950);
    
    let h3s2ymin = Math.ceil(100);
    let h3s2ymax = Math.floor(600);

    function getRandomPositionh3s2() {
      const x = Math.floor(Math.random() * (h3s2xmax - h3s2xmin + 1) + h3s2xmin);
      const y = Math.floor(Math.random() * (h3s2ymax - h3s2ymin + 1) + h3s2ymin);
      const rotate = Math.floor(Math.random() * 361);
      return { x, y, rotate };
    }

    function animateh3s2() {
      const newPosition = getRandomPositionh3s2();
      h3s2.style.left = newPosition.x + "px";
      h3s2.style.top = newPosition.y + "px";
      h3s2.style.rotate = newPosition.rotate + "deg";
    }

    
    let h3s3xmin = Math.ceil(50);
    let h3s3xmax = Math.floor(950);
    
    let h3s3ymin = Math.ceil(100);
    let h3s3ymax = Math.floor(600);

    function getRandomPositionh3s3() {
      const x = Math.floor(Math.random() * (h3s3xmax - h3s3xmin + 1) + h3s3xmin);
      const y = Math.floor(Math.random() * (h3s3ymax - h3s3ymin + 1) + h3s3ymin);
      const rotate = Math.floor(Math.random() * 361);
      return { x, y, rotate };
    }

    function animateh3s3() {
      const newPosition = getRandomPositionh3s3();
      h3s3.style.left = newPosition.x + "px";
      h3s3.style.top = newPosition.y + "px";
      h3s3.style.rotate = newPosition.rotate + "deg";
    }

    
    let h3s4xmin = Math.ceil(50);
    let h3s4xmax = Math.floor(950);
    
    let h3s4ymin = Math.ceil(100);
    let h3s4ymax = Math.floor(600);

    function getRandomPositionh3s4() {
      const x = Math.floor(Math.random() * (h3s4xmax - h3s4xmin + 1) + h3s4xmin);
      const y = Math.floor(Math.random() * (h3s4ymax - h3s4ymin + 1) + h3s4ymin);
      const rotate = Math.floor(Math.random() * 361);
      return { x, y, rotate };
    }

    function animateh3s4() {
      const newPosition = getRandomPositionh3s4();
      h3s4.style.left = newPosition.x + "px";
      h3s4.style.top = newPosition.y + "px";
      h3s4.style.rotate = newPosition.rotate + "deg";
    }

    
    
    
    
      
    h3Fruits.forEach(element => {
      element.addEventListener('mouseover', function() {
      let indexh3Fruit = Math.floor(Math.random() * h3FruitArray.length);
      const h3Fruit = h3FruitArray[indexh3Fruit].style.display = "block";
      h3score += 1;
      htscore3 = h1score + h2score + h3score;
      fruitPop.play();
        if (fruitPop.paused) {
          fruitPop.play();
        }else{
          fruitPop.currentTime = 0
        }
      document.getElementById("h3score").textContent = h3score
      document.getElementById("htscore3").textContent = htscore3
      element.classList.add('highlight');
      });
    });
  
      h3Fruits.forEach(element => {
        element.addEventListener('mouseout', function() {
        let indexh3Fruit = Math.floor(Math.random() * h3FruitArray.length);
        const h3Fruit = h3FruitArray[indexh3Fruit].style.display = "none";
        h3score += 1;
        htscore3 = h1score + h2score + h3score;
        fruitPop.play();
          if (fruitPop.paused) {
            fruitPop.play();
          }else{
            fruitPop.currentTime = 0
          }
        document.getElementById("h3score").textContent = h3score
        document.getElementById("htscore3").textContent = htscore3
        element.classList.remove('highlight');
        });
      });
    
    function checkElementsVisibility(h3Fruits, callback) {
      const h3allHidden = h3Fruits.every(element => element.style.display === 'none');
        if (h3allHidden) {
        callback();
          }
        }

    const h3elements = Array.from(h3FruitArray); // Example: selects all elements with class "element-to-check"

    function handleh3AllHidden() {
      hardPopup3.style.display = 'none';
      hardFinal.style.display = 'block';
      h3StopInt1();
      h3StopInt2();
      clearh3Intervals();
      }

      // MutationObserver to observe changes in display property
    const h3observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        checkElementsVisibility(h3elements, handleh3AllHidden);
        }
      });
    });

    h3elements.forEach(element => {
      h3observer.observe(element, { attributes: true, attributeFilter: ['style'] });
    });
    
    
    let m11, m12, m13, m14;
    let m21, m22, m23, m24;
    let m31, m32, m33, m34;
    
    function m1Intervals() {
            m11 = setInterval(animatem1Grape, 1000);
            m12 = setInterval(animatem1Orange, 1000);
            m13 = setInterval(animatem1p, 1000);
            m14 = setInterval(animatem1Pear, 1000);
      }
    
    function m2Intervals() {
            m21 = setInterval(animatem2gf1, 750);
            m22 = setInterval(animatem2gf2, 750);
            m23 = setInterval(animatem2m1, 500);
            m24 = setInterval(animatem2m2, 500);
      }
      
    function m3Intervals() {
            m31 = setInterval(animatem3p1, 500);
            m32 = setInterval(animatem3p2, 500);
            m33 = setInterval(animatem3p3, 500);
            m34 = setInterval(animatem3p4, 500);
      }
    
    function clearm1Intervals () {
      clearInterval(m11);
      clearInterval(m12);
      clearInterval(m13);
      clearInterval(m14);
    }
    
    function clearm2Intervals () {
      clearInterval(m21);
      clearInterval(m22);
      clearInterval(m23);
      clearInterval(m24);
    }
    
    function clearm3Intervals () {
      clearInterval(m31);
      clearInterval(m32);
      clearInterval(m33);
      clearInterval(m34);
    };
    
    
    let h11, h12, h13, h14;
    let h21, h22, h23, h24;
    let h31, h32, h33, h34;
    
    function h1Intervals() {
            h11 = setInterval(animateh1g1, 250);
            h12 = setInterval(animateh1g2, 250);
            h13 = setInterval(animateh1g3, 250);
            h14 = setInterval(animateh1g4, 250);
      };
  
    function h2Intervals() {
      h21 = setInterval(animateh2p1, 200);
      h22 = setInterval(animateh2p2, 250);
      h23 = setInterval(animateh2o1, 200);
      h24 = setInterval(animateh2o2, 250);
      };
   
  
    function h3Intervals() {
      h31 = setInterval(animateh3s1, 250);
      h32 = setInterval(animateh3s2, 250);
      h33 = setInterval(animateh3s3, 250);
      h34 = setInterval(animateh3s4, 250);
      };

    function clearh1Intervals () {
      clearInterval(h11);
      clearInterval(h12);
      clearInterval(h13);
      clearInterval(h14);
    };
    
    function clearh2Intervals () {
      clearInterval(h21);
      clearInterval(h22);
      clearInterval(h23);
      clearInterval(h24);
    };

    function clearh3Intervals () {
      clearInterval(h31);
      clearInterval(h32);
      clearInterval(h33);
      clearInterval(h34);
    };
    
    
    const e1000 = document.getElementById("e1000")
    const e750 = document.getElementById("e750")
    const e500 = document.getElementById("e500")
    const e250 = document.getElementById("e250")
    
    document.getElementById("eReveal").addEventListener ('click', function() {
      document.getElementById("e1scoref").textContent = e1score
      document.getElementById("e2scoref").textContent = e2score
      document.getElementById("e3scoref").textContent = e3score
      document.getElementById("etscoref").textContent = etscore3
      if (etscore3 >= 1000) {
        e1000.style.display = "block";
        e750.style.display = "none";
        e500.style.display = "none";
        e250.style.display = "none";
      } else if (etscore3 >= 750) {
        e1000.style.display = "none";
        e750.style.display = "block";
        e500.style.display = "none";
        e250.style.display = "none";
      } else if (etscore3 >= 250) {
        e1000.style.display = "none";
        e750.style.display = "none";
        e500.style.display = "block";
        e250.style.display = "none";
      } else if (etscore3 >= 0) {
        e1000.style.display = "none";
        e750.style.display = "none";
        e500.style.display = "none";
        e250.style.display = "block";
      };
      document.getElementById("eReveal").style.display = "none"
      document.getElementById("reloade").style.display = "block"
    });

    const m750 = document.getElementById("m750")
    const m500 = document.getElementById("m500")
    const m250 = document.getElementById("m250")
    const m0 = document.getElementById("m0")
    
    document.getElementById("mReveal").addEventListener ('click', function() {
      document.getElementById("m1scoref").textContent = m1score
      document.getElementById("m2scoref").textContent = m2score
      document.getElementById("m3scoref").textContent = m3score
      document.getElementById("mtscoref").textContent = mtscore3
      if (mtscore3 >= 750) {
        m750.style.display = "block";
        m500.style.display = "none";
        m250.style.display = "none";
        m0.style.display = "none";
      } else if (mtscore3 >= 500) {
        m750.style.display = "none";
        m500.style.display = "block";
        m250.style.display = "none";
        m0.style.display = "none";
      } else if (mtscore3 >= 250) {
        m750.style.display = "none";
        m500.style.display = "none";
        m250.style.display = "block";
        m0.style.display = "none";
      } else if (mtscore3 >= 0) {
        m750.style.display = "none";
        m500.style.display = "none";
        m250.style.display = "none";
        m0.style.display = "block";
      };
      document.getElementById("mReveal").style.display = "none"
      document.getElementById("reloadm").style.display = "block"
      
    });
    
    
  document.getElementById("hReveal").addEventListener ('click', function() {
      document.getElementById("h1scoref").textContent = h1score
      document.getElementById("h2scoref").textContent = h2score
      document.getElementById("h3scoref").textContent = h3score
      document.getElementById("htscoref").textContent = htscore3
  });
      

    const h500 = document.getElementById("h500")
    const h300 = document.getElementById("h300")
    const h100 = document.getElementById("h100")
    const h0 = document.getElementById("h0")
    
    document.getElementById("hReveal").addEventListener ('click', function() {
      document.getElementById("h1scoref").textContent = h1score
      document.getElementById("h2scoref").textContent = h2score
      document.getElementById("h3scoref").textContent = h3score
      document.getElementById("htscoref").textContent = htscore3
      if (htscore3 >= 500) {
        h500.style.display = "block";
        h300.style.display = "none";
        h100.style.display = "none";
        h0.style.display = "none";
      } else if (htscore3 >= 300) {
        h500.style.display = "none";
        h300.style.display = "block";
        h100.style.display = "none";
        h0.style.display = "none";
      } else if (htscore3 >= 100) {
        h500.style.display = "none";
        h300.style.display = "none";
        h100.style.display = "block";
        h0.style.display = "none";
      } else if (htscore3 >= 0) {
        h500.style.display = "none";
        h300.style.display = "none";
        h100.style.display = "none";
        h0.style.display = "block";
      };
      document.getElementById("hReveal").style.display = "none"
      document.getElementById("reloadh").style.display = "block"
    });


