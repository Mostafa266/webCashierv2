let tl = new TimelineMax();

tl.fromTo('.item-nav', 0.5, {
    opacity: 0,
    position:'relative',
    right:'-20px'
}, {
    opacity: 1,
    position:'relative',
    right:0,
    stagger: 0.1
})
.fromTo('.card', 0.3, {
    opacity: 0,
    position:'relative',
    bottom:'-20px'
}, {
    opacity: 1,
    position:'relative',
    bottom:0,
    stagger: 0.1
},'-=1')
.fromTo('.divider', 0.5, {
    opacity: 0,
    position:'relative',
    width:'0'
}, {
    opacity: 1,
    position:'relative',
    width:'100%',
    stagger: 0.1
},'-=2.5')

.fromTo('.billdivider', 0.5, {
    opacity: 0,
    position:'relative',
    width:'0'
}, {
    opacity: 1,
    position:'relative',
    width:'100%',
    stagger: 0.1
},'-=1.5')


.fromTo('.billDetails', 0.5, {
    opacity: 0,
    position:'relative',
    bottom:'-20px'
}, {
    opacity: 1,
    position:'relative',
    bottom:0,
    stagger: 0.1
},'-=1.45')


$('#lang').on('click',function(){
    $('body').toggleClass('ltr');
    tl.restart()
  })