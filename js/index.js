let lazyLoadInstance = new LazyLoad();

// STEPS
let stepsSlider = new Swiper('.steps-slider', {
	navigation: {
		nextEl: '.steps-slider__button-next',
		prevEl: '.steps-slider__button-prev',
	},
	pagination: {
		el: '.steps-slider__pagination'
	},
	spaceBetween: 50,
});
// /STEPS


// FAQ
const dropdowns = [...document.querySelectorAll('.faq-cards-card-question')];
const dropdownOpenedClass = 'opened';
dropdowns.forEach((dropdown, index) => {
  dropdown.addEventListener("click", function () {
    const currentAnswer = this.parentElement.querySelector('.faq-cards-card-answer')
    let currentAnswerHeight = currentAnswer.clientHeight;

    if (this.parentElement.classList.value.includes(dropdownOpenedClass)) {
      currentAnswer.style.marginTop = '0';
      this.parentElement.classList.remove(dropdownOpenedClass);
    } else {
      currentAnswer.style.marginTop = `-${currentAnswerHeight}px`;
      this.parentElement.classList.add(dropdownOpenedClass);
    }
  });
  if (index > 0) {
    dropdown.click();
  }
});
// /FAQ

// BURGER
const burgerButton = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.container--header');
burgerButton.addEventListener('click', () => {
  if (burgerMenu.classList.value.includes('opened')) {
    burgerMenu.classList.remove('opened');
    burgerButton.classList.remove('opened');
  } else {
    burgerMenu.classList.add('opened');
    burgerButton.classList.add('opened');
  }
});
// /BURGER


// SMOOTH ANCHORS
const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault()
    let currentPageOffset = document.querySelector('html').scrollTop;
    let anchor = event.target;
    let scrollTo = anchor.getAttribute('href');
    scrollTo = scrollTo.replace('#', '.');
    scrollTo = document.querySelector(scrollTo).getBoundingClientRect().top + window.scrollY;

    while (currentPageOffset < scrollTo - 100) {
      currentPageOffset++;
      setTimeout(() => {
        document.querySelector('html').scrollTop++
      }, 65)
    }
  })
})
// /SMOOTH ANCHORS
