


var slideIndex= 1
showSlides(slideIndex) 

function mudaFoto(n){

    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex =n)

}
function showSlides(n){
    var i
    var slides= document.getElementsByClassName('MySlide')
    var dots = document.getElementsByClassName('demo')

if(n > slides.length){
    slideIndex = 1
}
if (n < 1){slideIndex = slides.length}
for (i = 0 ; i < slides.length; i++){
    slides[i].style.display= 'none'
}
for (i = 0 ; i < dots.length; i++){
    dots[i].className.replace('active', '')
}
slides[slideIndex-1].style.display='block'
dots[slideIndex-1].className +='active'
}

function playSlide(){

    showSlides(slideIndex++)
}

setInterval(playSlide, 2000)






