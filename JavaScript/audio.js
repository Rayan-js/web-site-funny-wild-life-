
var count = 0
var btn = document.getElementById('btn')
var som = document.getElementById('Myaudio')

  function playM(){

   /* som = new Audio 
    som.src = 'sounds/HamtaroAbertura.mp3'*/

    if(count == 0){

    count= 1
    som.play() 
    btn.innerHTML =' Pause  &#9208'   
    }else {
        count = 0
        som.pause()
        btn.innerHTML =' Play  &#9658'   
    }


}




