import '../components/layoutTabs.module.js';

let clientsList = document.getElementById('clientsList');
let salesInvoice = document.getElementById('salesInvoice');
let invoice_search_input_container = document.getElementById('invoice_search_input_container');
let backBtn = document.getElementById('backBtn');

let tl = new TimelineMax({paused:true});

tl.to(salesInvoice,0.4,{opacity:0,display:'none'})
.to(clientsList,0.4,{opacity:1,display:'block'})


invoice_search_input_container.addEventListener('click',()=>{
    tl.play()
})
backBtn.addEventListener('click',()=>{
    tl.reverse()
})