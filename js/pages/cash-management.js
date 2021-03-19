

let customerCard = document.getElementById('customer-card')
let customerCardPlcaeholder = document.getElementById('customer-card-placeholder')
let customerCardPlcaeholder_bigCircle = document.querySelector('#customer-card-placeholder .big-circle')
let customerCardPlcaeholder_smallCircle = document.querySelector('#customer-card-placeholder .small')
let payReceiveItems = document.querySelectorAll('.pay-receive-list .pay-receive-list-item');
let invoiceSearchInput = document.getElementById('invoice_search_input_container');


// ---------------//////---------------
// Animation for items in pay receive list 
// Css style in _pay-receive-list.scss
let tl = new TimelineMax();
tl.fromTo(payReceiveItems, 0.5, { opacity: 0,position:'relative',bottom:'-50px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1})
// ---------------//////---------------






// ---------------//////---------------
// Animation for CARD in invoice 
// Css style in _customer-card.scss & _customer-card-placeholder.scss
let customerCardTl = new TimelineMax({paused:true});


customerCardTl
    .to(customerCardPlcaeholder_bigCircle,0.3,{width:'100%',height:'100%',borderRadius:'16px'})
    .to(customerCardPlcaeholder_smallCircle,0.3,{borderRadius:'16px'},'-=0.3')
    .to(customerCardPlcaeholder_bigCircle,0.5,{backgroundColor:'#F1F9FF'},'-=0.3')
    .to(customerCardPlcaeholder_smallCircle,0.5,{backgroundColor:'#F1F9FF'},'-=0.4')
    .to(customerCardPlcaeholder,0.5,{display:'none',opacity:0},'-=0.1')
    .fromTo(customerCard,0.5,{display:'none',opacity:0},{display:'flex',opacity:1})

payReceiveItems.forEach(element => {
    element.addEventListener('click',()=>{
        customerCardTl.play();
        // pay-receive-list-item--details
        invoiceSearchInput.classList.add('haveUser')
        let clieckedItemValue = document.querySelector('.pay-receive-list-item--details span');
        let invoiceInput = document.getElementById('invoiceInput');
        console.log(clieckedItemValue.innerHTML);
        invoiceInput.value = clieckedItemValue.innerHTML;
    })
});

let resetInvoiceSearchInput = document.getElementById('removeClientNameFromInvoice');
resetInvoiceSearchInput.addEventListener('click',()=>{
    customerCardTl.reverse(0.5);

    invoiceSearchInput.classList.remove('haveUser')
    invoiceInput.value = '';


})
// ---------------//////---------------


























const fadeOut = ele => {
    let fadeOut = new TimelineMax();
    fadeOut.to(ele,0.5,{opacity:'0',display:'none'})
}
const fadeIn = ele => {
    let fadeIn = new TimelineMax();
    fadeIn.to(ele,0.5,{opacity:'1',display:'block'})
}