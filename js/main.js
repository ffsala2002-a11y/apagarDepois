import { renderProductCard } from './components/renderProductCard.js';
import { products } from './data/products.js';
import { rootList, searchCamp, btnClose } from './variables/variables.js';
import { filterProduct } from './components/filterProduct.js';
import { close } from './components/buttonClose.js';
import { load } from './components/loading.js';

document.addEventListener('DOMContentLoaded', () => {
    load()
})


searchCamp.addEventListener('input', () => {
    const valueInput = searchCamp.value.toLowerCase().trim();

    filterProduct(valueInput, rootList, products)
});


searchCamp.addEventListener('focus', () => {
    btnClose.classList.add("active")
});

searchCamp.addEventListener('blur', () => {
    btnClose.classList.remove("active")
});

btnClose.onmousedown = (event) => {
    event.preventDefault();
    close();
    renderProductCard(products, rootList);
}

//INIT
renderProductCard(products, rootList);
btnClose()