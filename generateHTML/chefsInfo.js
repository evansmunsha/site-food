let chefsHTML = "";

chefs.forEach((chefs) => {
  chefsHTML =
    chefsHTML +
    `
      <div class="chefs">
        <img src="${chefs.image}" alt="">
        <span>${chefs.name}</span>
        <p class="text-about-chef">
          ${chefs.info}
        </p>
      </div>
  `;
});

document.querySelector(".js-chefs-container-grid").innerHTML = chefsHTML;
