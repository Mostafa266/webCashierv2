let appbar_menu_btn = document.querySelector('.appbar-menu-btn');
let appbar_menu = document.querySelector('.appbar-menu');
let tl = new TimelineMax({paused: true });

let menuOpend = false;
appbar_menu_btn.addEventListener('click',()=>{
    if(menuOpend === false){
        tl.fromTo(appbar_menu, 0.3, {display: 'none',opacity: 0}, {display: 'block',opacity: 1,onComplete:()=>{menuOpend = true;}})
        tl.play();
    }
})

