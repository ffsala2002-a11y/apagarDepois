import { createCard } from './createCardProduct.js';

export function renderProductCard(product, root) {
    root.innerHTML = product.map(p => createCard(p)).join("")

    //console.log(product)
}