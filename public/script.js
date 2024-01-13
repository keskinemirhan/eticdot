function updateNavBasket() {
  let basketItems = JSON.parse(localStorage.getItem("basketItems"));
  const navIndicators = document.querySelectorAll(".basket-count-nav");

  if (!basketItems) basketItems = [];
  let totalItems = 0;
  basketItems.forEach((itm) => {
    totalItems += Number(itm.count);
  });
  navIndicators.forEach((itm) => {
    itm.innerText = totalItems;
  });
}
updateNavBasket();
