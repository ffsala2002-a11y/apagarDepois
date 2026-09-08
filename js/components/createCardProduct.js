import { formatarBRL } from '../util/formatPrice.js';



export function createCard(product) {
  return `
    
    <article class="product-card">
      <figure class="product-card__image">
        <img src="${product.image}" loading="lazy" alt="">

        <figcaption class="product-card__badge">
        ${product.discount}% OFF
        </figcaption>
      </figure>

      <header class="product-card__header">
        <h2 class="product-card__title">${product.title}</h2>
      </header>

      <div class="product-card__price">
        <strong class="product-card__pricing">
        ${formatarBRL(product.price)}
        </strong>
      </div>
    </article>
    
    
    `
}