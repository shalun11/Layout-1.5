const swiper = new Swiper('.brands__slider', {
  slidesPerView: "auto",
  spaceBetween: 16,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      enabled: false,
    }
  },
});

let buttonHidden = document.querySelector(".button-hidden");
let buttonHiddenText = buttonHidden.querySelector(".button-hidden__text");
let brandsWrapper = document.querySelector(".brands__wrapper");
console.log(brandsWrapper);

buttonHidden.addEventListener("click", () => {

  if (buttonHidden.classList.contains(".active")) {
    brandsWrapper.style.maxHeight = "119px";
    buttonHidden.classList.remove(".active");
    buttonHiddenText.textContent = "Показать все";
  } else {
    brandsWrapper.style.maxHeight = "100%";
    buttonHidden.classList.add(".active");
    buttonHiddenText.textContent = "Скрыть";
  }
})

