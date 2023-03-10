import { getNode } from '../../lib/index.js';
const modalCart = getNode('.modal__cart')
const plusBtn = getNode('.modal__cart--plus')
const minusBtn = getNode('.modal__cart--minus')
const modalCartCount = getNode('.modal__cart--count')
const modalProductPrice = getNode('.modal__cart-product-price')
const totalPrice = getNode('.modal__cart--total-price')
const closeModal = getNode('.modal__cart--close')
const recommend = getNode('.swiper-recommend');
const bestPrice = getNode('.main__best-price');
const productList = getNode('.product-list__list-wrapper');

// 갯수 증가 & 감소 & 합계 & 천의자리 콤마
let currentValue = modalCartCount.innerText;
let productPrice = modalProductPrice.innerText
productPrice = productPrice.replace(',', '');
productPrice = parseInt(productPrice);

function modalPlusCount() {
  currentValue = parseInt(currentValue) + 1;
  if (currentValue <= 0) {
    return;
  } else {
    modalCartCount.innerText = currentValue;
    let total = currentValue * productPrice;
    totalPrice.innerText = total.toLocaleString();
  }
}
function modalMinusCount() {
  currentValue = parseInt(currentValue) - 1;
  if (currentValue <= 0) {
    currentValue = 1;
    modalCartCount.innerText = currentValue;

    return;
  } else {
    modalCartCount.innerText = currentValue;
    let total = (currentValue * productPrice);
    totalPrice.innerText = total.toLocaleString();
  }

}
plusBtn.addEventListener('click', modalPlusCount)
minusBtn.addEventListener('click', modalMinusCount)

// MODAL CART 등장
function showModal(event) {
  if (event.target.tagName === 'BUTTON') {
    modalCart.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}

if (recommend) {
  recommend.addEventListener('click', showModal);
}
if (bestPrice) {
  bestPrice.addEventListener('click', showModal);
}
if (productList) {
  productList.addEventListener('click', showModal);
}
// modal 창 닫기 버튼
function closeModalCart() {
  modalCart.hidden = true;
  document.body.style.overflow = '';
  currentValue = 1;
  modalCartCount.innerText = currentValue;
  totalPrice.innerText = 1 * productPrice;
}
closeModal.addEventListener('click', closeModalCart)
