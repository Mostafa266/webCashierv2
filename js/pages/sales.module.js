import '../components/layoutTabs.module.js';
import '../components/modal.module.js';
import '../components/appBar-menu.module.js';





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

document.getElementById('save_invoice').addEventListener('click',(e)=>{
    e.preventDefault()
    iziToast.show({
        title: 'تم بنجاح',
        message: 'تم حفظ الفاتورة بنجاح',
        color:'green',
        transitionIn:'fadeInUp',
    });
})

document.getElementById('print_price').addEventListener('click',(e)=>{
    e.preventDefault()
    iziToast.show({
        title: 'تمت الطباعه ',
        message: 'تم طباعة عرض السعر بنجاح',
        color:'green',
        transitionIn:'fadeInUp',
    });
})

document.getElementById('delete_invoice').addEventListener('click',(e)=>{
    e.preventDefault()
    iziToast.show({
        title: 'تم بنجاح',
        message: 'تم مسح الفاتورة بنجاح',
        color:'red',
        transitionIn:'fadeInUp',
    });
})
