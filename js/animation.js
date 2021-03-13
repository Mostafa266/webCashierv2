$('#removeClientName').fadeOut();

let tl = new TimelineMax();
tl.fromTo('.sidebar ul li', 0.5, { opacity: 0,position:'relative',right:'-70px'}, {opacity: 1,position:'relative',right:0,stagger: 0.1})
.fromTo('.salesContainer .card', 0.3, {opacity: 0,position:'relative',bottom:'-20px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1},'-=1')
.fromTo('.divider', 0.5, {opacity: 0,position:'relative',width:'0'}, {opacity: 1,position:'relative',width:'100%',stagger: 0.1},'-=2.5')
.fromTo('.billdivider', 0.5, {opacity: 0,position:'relative',width:'0'}, {opacity: 1,position:'relative',width:'100%',stagger: 0.1},'-=1.5')
.fromTo('.clientContainer', 0.5, {opacity: 0,top:'100px'}, {opacity: 1,top:'56px'},'-=4.45')
.fromTo('.billDetails', 0.5, {opacity: 0,position:'relative',bottom:'-20px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1},'-=4.45')
$('#lang').on('click',function(){
    $('body').toggleClass('ltr');
    tl.restart()
  })
    // add client list animation
  let tl2 = new TimelineMax({paused:true});
  tl2.to('#productsList',0.3,{opacity:'0',display:'none'})
  tl2.fromTo('#clientList',0.3,{display:'none',opacity:'0'},{display:'block',opacity:1})
  tl2.fromTo('#list-of-Users li',0.3,{display:'none',opacity:'0',bottom:'-30px'},{display:'block',opacity:1,bottom:'0px',stagger:0.1},'-=0.3')
  tl2.fromTo('.headerAddClient',0.3,{opacity:0,top:'40px'},{opacity:1,top:"4px"},'-=1.6')

  $('#dropdownClient').on('click',function(){
    tl2.play();
    $('.bill').fadeOut();
    $('.bg-bills').addClass('fullAddClientScreen')
  });

  $('#closeClientsList').on('click',function(){
    $('.bg-bills').removeClass('fullAddClientScreen');
    tl2.reverse(0.7);
    tl.restart()
    setTimeout(function(){
      $('.bill').fadeIn();
    },500)

  })

  let client_title = document.getElementById('client_title');

  // to get clicke item value from add client 
  $( "#list-of-Users li" ).each(function( index ) {
    $(this).on('click',function(){
      let userNametext = $( this ).find('#name').text();
      let userPhone = $( this ).find('#userPhone').text();
      let dropdownClient = document.getElementById('dropdownClient');
      dropdownClient.style.backgroundColor='#e3f3ff';
      $('#removeClientName').fadeIn();
      client_title.innerText= userNametext +" - "+ userPhone
      tl2.reverse(0.7);
    $('.bill').fadeIn();
      
    })
  });





  let tl3 = new TimelineMax();
  tl3.fromTo('.billdropdown .item-content',0.5,{opacity: 0,position:'relative',bottom:'-30px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1})
  tl3.reversed(true);
  $('#menuIcon').on('click',function(){
    tl3.reversed(!tl3.reversed());
  })
  // Dropdownmenu animation 



  $('.cash-button').on('click',function(){
    iziToast.show({
      title: 'تمت العمليه بنجاح',
      message: 'تم تسجيل فاتورتك بنجاح',
      color:'green',
      transitionIn:'fadeInUp',
  });
  let tl4 = new TimelineMax();
  tl4.fromTo('.divider', 0.5, {opacity: 0,position:'relative',width:'0'}, {opacity: 1,position:'relative',width:'100%',stagger: 0.1},'-=2.5')
  tl4.fromTo('.billDetails', 0.5, {opacity: 0,position:'relative',bottom:'-20px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1},'-=4.45')
  tl4.reverse(0.7);

  })

  
  // to get clicke item value from add client 
  $( ".billDetails .productNameText" ).each(function( index ) {
      let gettingTitleValue = this.innerText;
      tippy(this, {
        onShow(instance) {
          instance.setContent(gettingTitleValue);
          const box = instance.popper.firstElementChild;
          box.classList.add('tippyStyle');
          console.log(box);
        },
        allowHTML: true,
        animation: 'scale'  
      })
  });

// reset input after click close button
$('#removeClientName').on('click',function(){
  client_title.innerText= 'اضف عميل';
  if(client_title.innerText === 'اضف عميل'){
   console.log('adef is jer');
   $('#removeClientName').fadeOut()
  }
})



