var timer = 60;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;

}


function makeBubble(){
    
var clutter = "";


for(var i = 1; i<=80; i++){
    var rn = Math.floor(Math.random()*10)

    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerji = setInterval(function(){
        if(timer > 0){
             timer--;


        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerji);
            document.querySelector("#pbottom").innerHTML = `<h1>GAME OVER</h1>`;
        }
        
    }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function (dets){
   var clickednum = Number(dets.target.textContent);
   if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
});


// increaseScore();
getNewHit();
runTimer();

makeBubble();

