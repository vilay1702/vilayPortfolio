burger = document.querySelector('#burger');

myNav = document.getElementById('navbar');


let visible = false;

burger.addEventListener("click", function(){
    if(!visible){
        myNav.style.width = '200px';
        myNav.style.opacity = '100%';
        visible=true;
    }
    else{
        myNav.style.width = '0px';
        myNav.style.opacity = '0%';
        visible=false;
    }
})