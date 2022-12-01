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

function toggleDisplay(id){
  const item = document.getElementById(id);
  console.log(item.classList);
  if (item.classList.contains("noDisplay")){
    item.classList.remove("noDisplay");
  }
  else{
    item.classList.add("noDisplay");
  }
  console.log(item.classList);
}

