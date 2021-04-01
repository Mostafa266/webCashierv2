import '../components/layoutTabs.module.js';
// to enable popup and positioning popup 
import '../components/modal.module.js';
// to enbale menu in appbar
import '../components/appBar-menu.module.js';
// to enable function to get clicked client to get value and show in input in prdouct list 
import './../components/client-list.module.js'





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
    let tl3 = new TimelineMax({paused:true});
    let productsListContainer = document.querySelector('.products-list-container')
    tl3.to(productsListContainer,0.3,{opacity:'0'})
    tl3.play()
    iziToast.show({
        title: 'تم بنجاح',
        message: 'تم مسح الفاتورة بنجاح',
        color:'red',
        transitionIn:'fadeInUp',
    });
})




