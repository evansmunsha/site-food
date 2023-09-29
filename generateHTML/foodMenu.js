let productsHTML = "";

foodMenu.forEach((product) => {
  productsHTML =
    productsHTML +
    `
    <div class="food-container">
      <img src="${product.image}" alt="" />
      <div>
        <h3 class="name-title-food">${product.foodTitle}</h3>
        <p class="p-text-food">${product.textFood}</p>
        <span class="food-price">$${(product.priceCents / 100).toFixed(2)}</span>
      </div>
    </div>
  `;
});

document.querySelector(".js-food-display-grid").innerHTML = productsHTML;
