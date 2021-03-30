let appbar_menu_btn = document.querySelector('.appbar-menu-btn');
let appbar_menu = document.querySelector('.appbar-menu');
let tl = new TimelineMax({
    paused: true
});
tl.fromTo(appbar_menu, 0.3, {
    display: 'none',
    opacity: 0
}, {
    display: 'block',
    opacity: 1,
  
})
tl.reverse()
appbar_menu_btn.addEventListener('click', () => {
    tl.reversed(!tl.reversed())
})