const slap = new Audio();
slap.src = "https://files.catbox.moe/d8cs22.mp3";

let fruitSelect = document.getElementById('fruitSelect');

const fruitArray = [
  {id: "0", fruit: "Select Fruit", yum: "EASTER EGG!!!!", img:"/confetti.png", backgroundSize: "100px 100px"},
  {id: "1", fruit: "Apple", yum: "Fall", img:"/apple.png", backgroundSize: "100px 100px"},
  {id: "2", fruit: "Asian Pear", yum: "Quest reward yum", img:"/Asianpear.png", backgroundSize: "100px 100px"},
  {id: "3", fruit: "Avocado", yum: "Yum in the context of all that came before it", img:"/avocado.png", backgroundSize: "100px 100px"},
  {id: "4", fruit: "Banana", yum: "Time slipping from my grapsing hands", img:"/banana.png", backgroundSize: "100px 100px"},
  {id: "5", fruit: "Blackberry", yum: "Parental betrayal", img:"/blackberry.png", backgroundSize: "100px 100px"},
  {id: "6", fruit: "Blueberry", yum: "Internship", img:"/blueberry.png", backgroundSize: "100px 100px"},
  {id: "7", fruit: "Cantaloupe", yum: "Hotel lobby memory from when you were 7 (yum)", img:"/Cantaloupe.png", backgroundSize: "100px 100px"},
  {id: "8", fruit: "Cherry", yum: "Captialist brain melting", img:"/cherry.png", backgroundSize: "100px 100px"},
  {id: "9", fruit: "Dragonfruit", yum: "Yum (spoon required)", img:"/dragonfruit1.png", backgroundSize: "100px 100px"},
  {id: "10", fruit: "Grapefruit", yum: "EWWWWWWWWWWW", img:"/GrapefruitUncut.png", backgroundSize: "100px 100px"},
  {id: "11", fruit: "Grapes", yum: "situational yum", img:"/grapes.png", backgroundSize: "200px 100px"},
  {id: "12", fruit: "Honeydew", yum: "Apathy", img:"/Honeydew.png", backgroundSize: "100px 100px"},
  {id: "13", fruit: "Kiwi", yum: "Yum (spoon optional)", img:"/kiwi.png", backgroundSize: "100px 100px"},
  {id: "14", fruit: "Orange", yum: "Not yum (except Cara Cara, you're perfect my beautiful star child)", img:"/pixelOrange4.png", backgroundSize: "100px 100px"},
  {id: "15", fruit: "Peach", yum: "Hair", img:"/peach.png", backgroundSize: "150px 100px"},
  {id: "16", fruit: "Pear", yum: "I am boar!", img:"/pear.png", backgroundSize: "100px 100px"},
  {id: "17", fruit: "Pineapple", yum: "Yeouch!", img:"/pineapple.png", backgroundSize: "100px 150px"},
  {id: "18", fruit: "Plum", yum: "The future", img:"/plum.png", backgroundSize: "100px 100px"},
  {id: "19", fruit: "Pomegranate", yum: "Yum for ants", img:"/pixelpom.png", backgroundSize: "100px 100px"},  
  {id: "20", fruit: "Raspberry", yum: "My fingers are stained", img:"/raspberry.png", backgroundSize: "100px 100px"},
  {id: "21", fruit: "Strawberry", yum: "Not my bowl of fruit", img:"/strawberry.png", backgroundSize: "100px 100px"},
  {id: "22", fruit: "Watermelon", yum: "Yum if you squint your eyes", img:"/watermelon.png", backgroundSize: "100px 100px"},
];

fruitArray.forEach(option => {
    const opt = new Option(option.fruit, option.id);
    fruitSelect.add(opt);
});

const fruitName = document.getElementById('fruitName');
const yumRating = document.getElementById('yumRating');
const fruitImg = document.getElementById('fruitImg');
const body = document.getElementById('body');

let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedFruit = fruitSelect.value;
  const selectedFruitObject = fruitArray.find(fruit => fruit.id === selectedFruit);
  const fruitDetails = document.getElementById(selectedFruitObject.fruit + 'Text');
  
  fruitArray.forEach(fruit => {
    const fruitDetailElement = document.getElementById(fruit.fruit + "Text");
    if (fruitDetailElement) {
      fruitDetailElement.style.display = "none";
    }
  });
  
  if (selectedFruitObject) {
    fruitName.innerHTML = selectedFruitObject.fruit;
    yumRating.innerHTML = selectedFruitObject.yum;
    fruitImg.style.display = "block";
    fruitImg.src = selectedFruitObject.img;
    fruitDetails.style.display = "block";
    body.style.backgroundImage = "url("+selectedFruitObject.img+")";
    body.style.backgroundSize = selectedFruitObject.backgroundSize
    console.log (selectedFruitObject.backgroundSize)
  } else {
    fruitName.innerHTML = "Item not found";
    yumRating.innerHTML = "Item not found";
  }
});

const tbutton = document.getElementById('tbutton');
const tierList = document.getElementById('tierList');
const tclose = document.getElementById('tclose');

tbutton.addEventListener('click', function() {
  fruitImg.style.display = "none";
  tierList.style.display = "block";
});

tclose.addEventListener('click', function() {
  tierList.style.display = "none";
  fruitImg.style.display = "block";
});

$(document).ready(function() {
    var isDragging = false;
    var currentElement = null;
    var originalText = '';

    $(".tf").draggable({
        start: function() {
            isDragging = true;
            currentElement = $(this);
            originalText = $(this).find("p").text();
            currentElement.stop(true, true);
            currentElement.css({
                "z-index": 9999,
                "position": "absolute", 
                "transform": "none" ,
                "width": currentElement.width() + 5 + "px"
            });
        },

        stop: function () {
          isDragging = false;
          var isOverTd = false;

          $("td").each(function () {
            if (checkCollision(currentElement, $(this))) {
              isOverTd = true;

              // Snap to the center of the <td>
              const $td = $(this);

              currentElement.css({
                position: "absolute"
              });

              // Add wave animation only to the <p>
              const $textContainer = currentElement.find("p");
              const text = $textContainer.text();
              $textContainer.empty();

              for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const span = $("<span class='wave-text'>" + (char === ' ' ? '&nbsp;' : char) + "</span>");
                span.css("animation-delay", (i * 0.1) + "s");
                $textContainer.append(span);
              }

              $textContainer.find("span").each(function () {
                $(this).css({
                    "transform": "none",
                    "writing-mode": "horizontal-tb",
                    "display": "inline-block"
                });
              });

              // Important: Cancel any queued animations
              currentElement.stop(true);
              return false; // Break loop after first hit
            }
          });

          if (!isOverTd) {
           floatElement(currentElement);
          }
        }

    });

    function checkCollision($elem1, $elem2) {
        var x1 = $elem1.offset().left;
        var y1 = $elem1.offset().top;
        var h1 = $elem1.outerHeight(true);
        var w1 = $elem1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $elem2.offset().left;
        var y2 = $elem2.offset().top;
        var h2 = $elem2.outerHeight(true);
        var w2 = $elem2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        return !(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2);
    }

    function floatElement($el) {
        if (isDragging) return;

        var maxX = $(window).width() - $el.width() - 600;
        var maxY = $(window).height() - $el.height() - 600;

        var randomX = Math.random() * maxX;
        var randomY = Math.random() * maxY;

        $el.animate({
            top: randomY,
            left: randomX
        }, 5000, 'linear', function() {
            if (!isDragging) {
                setTimeout(function() {
                    floatElement($el);
                }, 50);
            }
        });
        
    }
    
    function resetText($element) {
      var $textContainer = $element.find("p");
      $textContainer.empty();
      $textContainer.text(originalText);

    $element.find('img').css({
        'visibility': 'visible',
        'display': 'block'
    });

      $element[0].offsetHeight;
      $element.css("transform", "");
    }
});

