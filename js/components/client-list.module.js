// loop in clients-list-users-item - used in homepage and Add client tab 

let clientsListUsersItem = document.querySelectorAll('.clients-list-users-item')
let clientsListUsers_itemName = document.querySelectorAll('.clients-list-users-item-data--name');


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
});
clientsListUsersItem.forEach(element => {
    element.addEventListener('click',()=>{
        let invoiceInput = document.getElementById('invoiceInput');
        let getName = element.children[0].children[1].children[0].textContent;
        let getNumber = element.children[0].children[1].children[1].textContent;
        invoiceInput.value = getName + ' - ' + getNumber
        tl.reverse(0.5)
    })
});