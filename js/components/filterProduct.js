import { renderProductCard } from './renderProductCard.js';


export function filterProduct(valueInput, root, product) {
    const resultFilter = product.filter(p => p.title.toLowerCase().includes(valueInput));

    if(resultFilter.length === 0) {
        root.innerHTML = '<p>Produto não encontrado!</p>';

        return
    }

    renderProductCard(resultFilter, root)
}