const words =
  "apple orange banana grape peach lemon cherry plum pear mango kiwi melon fig date papaya guava olive corn rice wheat oats beans peas spinach kale onion carrot garlic pepper potato ginger radish tomato lettuce broccoli cucumber pumpkin cabbage celery avocado mushroom berry nut pasta bread milk cheese soup salad cake pie cookie muffin pizza burger sandwich taco nachos sushi fries coffee tea juice water soda wine beer steak chicken turkey pork butter bacon sausage tofu shrimp fish rice pasta stew curry waffle honey jelly butter egg cream yogurt basil thyme cinnamon cocoa mint sugar salt pepper vinegar oil butter toast bagel donut popcorn cereal pancake burrito nacho enchilada quesadilla lasagna spaghetti macaroni noodle meatball chili casserole smoothie wrap stirfry toast quiche pretzel dumpling gnocchi ";

let n = 8;
// getting the difficulty val
var diff_slider = document.querySelector("#diff_slider");
diff_slider.addEventListener("change", function () {
  n = diff_slider.value;
});

// access of text_input
var textInput = document.querySelector("#textInput");
textInput.disabled = true;
textInput.style.backgroundColor = "blue";
textInput.style.opacity = 0.25;

// parameters var declaration
corr = 0;
wrong = 0;
a = -1;
len = 0;
var timestart;
var timeend;

// sounds access
soundList = document.querySelectorAll("audio");

// on completion page
let result = document.querySelector(".result");
let parameter_value01 = document.querySelector("#parameter_value01");
let parameter_value02 = document.querySelector("#parameter_value02");
let parameter_value03 = document.querySelector("#parameter_value03");

keyList = document.querySelectorAll(".key");
var settings = document.querySelector("#settings");

var start = document.querySelector(".start");
start.addEventListener("click", function () {
  a=-1
  settings.style.cursor="not-allowed"
  settings.style.pointerEvents = "none"
  soundList[1].play();
  soundList[1].playbackRate = 2;
  start.innerHTML = "<div>Start<div>";
  keyList.forEach((element) => {
    element.style.transform = "translateY(0px)";
    element.style.backgroundColor = "#f7f7f7";
  });

  // generating n random words
  let wordsArray = "";
  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * 100);
    wordsArray += words.split(" ")[randomIndex] + " ";
  }

  // putting the words to display
  var disp_area = document.querySelector(".text_area");

  disp_area.innerHTML = "";
  textInput.value = "";

  for (i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] != " ")
      disp_area.innerHTML += `<span>${wordsArray[i]}</span>`;
    else disp_area.innerHTML += `<span>•</span>`;
  }

  //giving access to text_input
  textInput.disabled = false;
  textInput.style.backgroundColor = "transparent";
  textInput.style.opacity = 1;

  textInput.addEventListener("click", function () {
    timestart = Date.now();

    textInput.addEventListener("keydown", function () {
      soundList[0].play();
      event.key == " "
        ? (keypressedid = "#space")
        : (keypressedid = "#" + String(event.key));
      keyto = document.querySelector(keypressedid);
      keyto.style.transform = "translateY(1.5px)";
      keyto.style.backgroundColor = "orange";

      a++;
      if (event.key == wordsArray[a]) {
        disp_area.childNodes[a].style.color = "green";
        corr++;
      } else {
        disp_area.childNodes[a].style.color = "red";
        wrong++;
      }

      len++;
      if (len == wordsArray.length) {
        soundList[2].play();
        soundList[2].playbackRate = 2;
        parameter_value01.innerHTML += `<div>${Math.round(
          (corr / (corr + wrong)) * 100
        )}%</div>`;
        timeend = Date.now();
        result.style.display = "flex";
        parameter_value03.innerHTML += `<div>${Math.round(
          (timeend - timestart) / 1000
        )}s</div>`;
        parameter_value02.innerHTML += `<div>${Math.round(
          n / ((timeend - timestart) / 1000 / 60)
        )}wpm</div>`;
        textInput.disabled = true;
      }
    });

    textInput.addEventListener("keyup", function () {
      event.key == " "
        ? (keypressedid = "#space")
        : (keypressedid = "#" + String(event.key));
      keyto = document.querySelector(keypressedid);
      keyto.style.transform = "translateY(0px)";
      keyto.style.backgroundColor = "#f7f7f7";
    });
  });
});

let cross_btn = document.querySelector(".cross_btn");
cross_btn.addEventListener("click", function () {
  soundList[3].play();
  soundList[3].playbackRate=2
  result.style.display = "none";
  start.innerHTML =
    '<div class="bi bi-arrow-counterclockwise"></div><div>Re-Start<div>';
  settings.style.pointerEvents = "auto"
  settings.style.cursor="pointer"
});


var settings_panel = document.querySelector(".settings_panel");
settings.addEventListener("click", function () {
  soundList[3].play();
  soundList[3].playbackRate=2
  settings_panel.style.display = "flex";
});

var settings_cross_btn = document.querySelector(".settings_cross_btn");
settings_cross_btn.addEventListener("click", function () {
  soundList[3].play();
  soundList[3].playbackRate=2
  settings_panel.style.display = "none";
});

soundList[0].playbackRate=2
let themeList = document.querySelectorAll(".theme_val")
themeList.forEach(function(theme_val,i){
  theme_val.addEventListener("click",function(){
    switch (i) {
      case 0:
        soundList[0].src="/Game/game_key_sound.mp3"
        soundList[0].playbackRate=4
        soundList[1].src="/Game/game_start_sound.mp3"
        soundList[2].src="/Game/game_complete_sound.mp3"
        break;
      
      case 1:
        soundList[0].src="/Game/game_key_sound.mp3"
        soundList[1].src="/Game/game_start_sound.mp3"
        soundList[2].src="/Game/game_complete_sound.mp3"
        break;

      default:
        break;
    }
  })
})