const allTabsBody = document.querySelectorAll(".tab-body-single");
const allTabsHead = document.querySelectorAll(".tab-head-single");

let activeTab = 1;

const init = () => {
  showActiveTabBody();
  showActiveTabHead();
}

const showActiveTabHead = () => allTabsHead[activeTab - 1].classList.add('active-tab');

const showActiveTabBody = () => {
  hideAllTabBody();
  allTabsBody[activeTab - 1].classList.add("show-tab");
}

const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
const hideAllTabHead = () => allTabsHead.forEach(singleTabhead => singleTabhead.classList.remove('active-tab'));

window.addEventListener('DOMContentLoaded', () => init());

allTabsHead.forEach(singleTabhead => singleTabhead.addEventListener('click', () => {
  hideAllTabHead();
  activeTab = singleTabhead.dataset.id;
  showActiveTabHead();
  showActiveTabBody();
}))
