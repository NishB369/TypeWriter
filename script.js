const words = "apple orange banana grape peach lemon cherry plum pear mango kiwi melon fig date papaya guava olive corn rice wheat oats beans peas spinach kale onion carrot garlic pepper potato ginger radish tomato lettuce broccoli cucumber pumpkin cabbage celery avocado mushroom berry nut pasta bread milk cheese soup salad cake pie cookie muffin pizza burger sandwich taco nachos sushi fries coffee tea juice water soda wine beer steak chicken turkey pork beef bacon sausage tofu shrimp fish rice pasta stew curry waffle honey jelly butter egg cream yogurt basil thyme cinnamon cocoa mint sugar salt pepper vinegar oil butter toast bagel donut popcorn cereal pancake burrito nacho enchilada quesadilla lasagna spaghetti macaroni noodle meatball chili casserole smoothie wrap stirfry toast quiche pretzel dumpling gnocchi "

let wordsArray =  ""
let n = 10; 
for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * 100);
    wordsArray+=words.split(" ")[randomIndex]+" "
}

var disp_area = document.querySelector(".text_area")
for( i=0; i<wordsArray.length; i++){
    if (wordsArray[i]!=' ')
    disp_area.innerHTML+=`<span>${wordsArray[i]}</span>`
    else
    disp_area.innerHTML+=`<span>•</span>`
}

var textInput = document.querySelector("#textInput")
var key_sound = document.querySelector("#key_sound")
var enter_sound = document.querySelector("#enter_sound")
var lvl_complete = document.querySelector("#lvl_complete")

corr = 0
wrong = 0
a=-1
len=0
var timestart;
var timeend;

textInput.addEventListener("mouseenter",function(){
    timestart=Date.now()
})

textInput.addEventListener("keydown",function(){

    key_sound.play()
    key_sound.playbackRate = 2.5

    event.key==" "?keypressedid="#space":keypressedid='#'+String(event.key)
    keyto = document.querySelector(keypressedid)
    keyto.style.transform="translateY(1.5px)"
    keyto.style.backgroundColor="orange"

    a++
    if (event.key==wordsArray[a]){
        disp_area.childNodes[a+1].style.color="green"
        corr++
    }
    else{
        disp_area.childNodes[a+1].style.color="red"
        wrong++
    }

    len ++
    if (len==wordsArray.length){
        textInput.disabled=true 
        document.querySelector("body").innerHTML+=`<div><h1 style="color:white; font-family:Helvetica">Accuracy:${Math.round(corr/(corr+wrong)*100)}%</h1></div>`
        timeend=Date.now()
        console.log(timeend,timestart,(timeend-timestart)/1000);

    } 
})

textInput.addEventListener("keyup",function(){
    event.key==" "?keypressedid="#space":keypressedid='#'+String(event.key)
    keyto = document.querySelector(keypressedid)
    keyto.style.transform="translateY(0px)"
    keyto.style.backgroundColor="#f7f7f7"
})


