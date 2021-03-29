let getAlltargetsBtn = document.querySelectorAll('[data-target-modal]');

let tl = new TimelineMax({paused: true });
let popOpened = false;

getAlltargetsBtn.forEach(element => {

    element.addEventListener('click', (e) => {
        if(popOpened === false){
        let x;
        let y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        let getData = element.getAttribute('data-target-modal');
        // let get the pop up name
        let popUpName = document.querySelector('.' + getData);
        tl.to(popUpName, 0.3, { top: y,left: x})
        .fromTo(popUpName, 0.3, {display: 'none',opacity: 0}, {display: 'block',opacity: 1,onComplete:()=>{popOpened = true;}})
        tl.play();
        }

    })
});

let close_popup = document.querySelector('.popup--discount-each-product .cancel-submit-btn');
close_popup.addEventListener('click',()=>{
    tl.reverse(0.3);
    tl.eventCallback("onReverseComplete", ()=>{
        tl.clear();
    });
    popOpened = false;
})