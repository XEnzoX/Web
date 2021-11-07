const colors = document.querySelectorAll('.colors span') ;
const image = document.querySelector('.left-column img') ;
const input = document.querySelector('.right-column .colors .quantity input');
const price = document.querySelector('.right-column .price') ;

    input.addEventListener('change',()=> {
        price.textContent = `USD ${input.value * 50}` ;
    }) ;
    colors[0].addEventListener('click' , ()=> {
        image.src = './images/darkblue.png' ;
    }) ;
    colors[1].addEventListener('click' , ()=> {
        image.src = './images/green.png' ;
    }) ;
    colors[2].addEventListener('click' , ()=> {
        image.src = './images/purple.png' ;
    }) ;
    colors[3].addEventListener('click' , ()=> {
        image.src = './images/black.png' ;
    }) ;





