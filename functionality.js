var display = document.getElementById('inner-display');
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');
var refreshButton = document.getElementById('refresh-button');
var lapButton = document.getElementById('lap-button');
var min = 00;
var sec = 00;
var miliSec=00;
display.innerText=min+":"+sec+"."+miliSec;
var intervalId ;
refreshButton.classList.add('hide');
lapButton.classList.add('hide');
playButton.addEventListener('click',function(event){
    event.preventDefault();

    //playButton.classList.remove("show");
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    //pauseButton.classList.add("show");
    refreshButton.classList.remove('hide');
    lapButton.classList.remove('hide');

    intervalId =setInterval(function(){
        miliSec+=1;
        if(miliSec>=100){
            miliSec=0;
            sec+=1;
        }

        if(sec>=60){
            sec=0;
            min++;
        }
        display.innerText=min+":"+sec+"."+miliSec;
    },10);


});

pauseButton.addEventListener('click',function(event){
    event.preventDefault();
    //pauseButton.classList.remove("show");
    pauseButton.classList.add("hide");
    
    playButton.classList.remove("hide");
    //playButton.classList.add("show");
    clearTimeout(intervalId);

});

refreshButton.addEventListener('click',function(event){
    event.preventDefault();
    clearTimeout(intervalId);
    min=0;
    sec=0;
    miliSec=0;
    display.innerText=min+":"+sec+"."+miliSec;
    refreshButton.classList.add('hide');
    lapButton.classList.add('hide');
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
    

});

lapButton.addEventListener('click',function(){
    

});





