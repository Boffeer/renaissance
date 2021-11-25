let lazyLoadInstance = new LazyLoad();

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


// if (faqCards !== null) {
// 	faqCards.forEach(card => {
// 		const question = card.querySelector('.faq-cards-card-question');
// 		question.addEventListener('click', (event) => {
// 			if (question.parentNode.classList.value.includes(faqOpenedClass)) {
// 				question.parentNode.classList.remove(faqOpenedClass);
// 			} else {
// 				question.parentNode.classList.add(faqOpenedClass);
// 			}
// 			const answer = event.target.nextElementSibling;
// 		})
// 	})
// }


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
