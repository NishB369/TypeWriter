const wordsArray = "apartment catch position imagine "
var disp_area = document.querySelector(".text_area")
for( i=0; i<wordsArray.length; i++){
    if (wordsArray[i]!=' ')
    disp_area.innerHTML+=`<span>${wordsArray[i]}</span>`
    else
    disp_area.innerHTML+=`<span>•</span>`
}

var textInput = document.querySelector("#textInput")

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

