var hov = document.getElementById('func_hov');
var side = document.getElementById('side');
var close_nav = document.getElementById('close_nav');

hov.addEventListener("click",()=>{
    side.style.visibility = 'visible';

})


close_nav.addEventListener('click',() =>{ 
    side.style.visibility = 'hidden';
})