document.querySelectorAll(".carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".carouselItem");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carouselSpan"></span>`;
  });

  carousel.insertAdjacentHTML("beforeend", 
  `<div class="carouselNav">
  ${buttonsHtml.join("")}
  </div>`);

  const buttons = carousel.querySelectorAll(".carouselSpan");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach(item => item.classList.remove("carouselItemSelected"));
      buttons.forEach(button => button.classList.remove("carouselSpanSelected"));

      items[i].classList.add("carouselItemSelected");
      buttons[i].classList.add("carouselSpanSelected");

    })
  }) 

  items[0].classList.add("carouselItemSelected");
  buttons[0].classList.add("carouselSpanSelected");

})