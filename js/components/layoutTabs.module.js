let tabBtnMain = document.querySelectorAll('.main-layout-tab-btn');
let subTabBtn = document.querySelectorAll('.clients-tabs-btn');

const layoutTabs = (e, layoutContainer, tabsBtn) => {
  e.preventDefault();
  let getContent = document.querySelectorAll(`${layoutContainer}`);
  let getTabs = document.querySelectorAll(`${tabsBtn}`);
  getTabs.forEach(ele => {
    ele.classList.remove('active');
  });
  getContent.forEach(element => {
    element.classList.remove('active')
  });

  let clickItem = e.currentTarget.getAttribute('data-target-id');
  let clickItemHash = '#' + clickItem;
  let getLayout = document.querySelector(clickItemHash);
  getLayout.classList.add('active')
  e.currentTarget.classList.add('active')

}
tabBtnMain.forEach(node => {
  node.addEventListener('click', function (e) {
    layoutTabs(e, '.layout-container', '.main-layout-tab-btn')
  })
});

subTabBtn.forEach(node => {
  node.addEventListener('click', function (e) {
    layoutTabs(e, '.customers-tab-content', '.clients-tabs-btn')
  })
});


// layoutTabs function take 2 parameter
// 1 - Event
// 2 - Tab Content class name
// 3 - take Tabs btn class name 

// if you have more than One layout tabs please don't forget to add custom class for every one in html and in call function in js
// same class to btns
// same class to content