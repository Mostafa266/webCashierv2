let tl = new TimelineMax();
tl.fromTo('.item-nav', 0.5, { opacity: 0,position:'relative',right:'-20px'}, {opacity: 1,position:'relative',right:0,stagger: 0.1})
.fromTo('.card', 0.3, {opacity: 0,position:'relative',bottom:'-20px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1},'-=1')
.fromTo('.divider', 0.5, {opacity: 0,position:'relative',width:'0'}, {opacity: 1,position:'relative',width:'100%',stagger: 0.1},'-=2.5')
.fromTo('.billdivider', 0.5, {opacity: 0,position:'relative',width:'0'}, {opacity: 1,position:'relative',width:'100%',stagger: 0.1},'-=1.5')
.fromTo('.clientContainer', 0.5, {opacity: 0,top:'100px'}, {opacity: 1,top:'56px'},'-=1.45')
.fromTo('.billDetails', 0.5, {opacity: 0,position:'relative',bottom:'-20px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1},'-=1.45')
$('#lang').on('click',function(){
    $('body').toggleClass('ltr');
    tl.restart()
  })








  let tl2 = new TimelineMax({paused:true});

  tl2.to('#productsList',0.3,{opacity:'0',display:'none'})
  tl2.fromTo('#clientList',0.3,{display:'none',opacity:'0'},{display:'block',opacity:1})
  tl2.fromTo('.headerAddClient',0.3,{opacity:0,top:'40px'},{opacity:1,top:"4px"})
  tl2.fromTo('#list-of-Users li',0.3,{display:'none',opacity:'0',bottom:'-30px'},{display:'block',opacity:1,bottom:'0px',stagger:0.1},'-=0.3')

  $('#dropdownClient').on('click',function(){
    tl2.play();
  });

  $('#closeClientsList').on('click',function(){
    tl2.reverse(0.7);
  })



  // let listOfUsers = document.querySelectorAll('#list-of-Users li');

  // listOfUsers.forEach(function(userItem) {
  //     userItem.addEventListener('click',function(){
  //         let usersChilds = this.childNodes;
  //       //  console.log(usersChilds[1]);
  //         usersChilds.forEach(function(item){
  //           console.log(item);
  //         })
  //       })
  // });




  $( "#list-of-Users li" ).each(function( index ) {
    $(this).on('click',function(){
      let client_title = document.getElementById('client_title');
      let userNametext = $( this ).find('#name').text();
      let userPhone = $( this ).find('#userPhone').text();
      client_title.innerText= userNametext +" - "+ userPhone
      console.log(userPhone);
      tl2.reverse(0.7);
      
    })
  });