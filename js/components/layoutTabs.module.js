let tabBtn = document.querySelectorAll('.layout-tabs--buttons-btn');
let layoutContainer = document.querySelectorAll('.layout-container');

const layoutTabs = (e) => {
    e.preventDefault();
    tabBtn.forEach(ele => {
        ele.classList.remove('active');
    });
    layoutContainer.forEach(element => {
        element.classList.remove('active')
    });
    let clickItem = e.currentTarget.getAttribute('data-target-id');
    let clickItemHash = '#'+clickItem;
    let getLayout = document.querySelector(clickItemHash);
    getLayout.classList.add('active')
    e.currentTarget.classList.add('active')
  } 
  
  tabBtn.forEach(node => {
    node.addEventListener('click', layoutTabs)
  });

