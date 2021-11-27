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
if (anchors != undefined && anchors != null) {
  anchors.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
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
    });
  })
}
// /SMOOTH ANCHORS

// SCROLL TO TOP
const scrollToTopButtons = document.querySelectorAll('.button-scroll-top');
scrollToTopButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    let currentPageOffset = document.querySelector('html').scrollTop;
    while (currentPageOffset > 1) {
      currentPageOffset--;
      setTimeout(() => {
        document.querySelector('html').scrollTop--
      }, 1)
    }
  })
});
// /SCROLL TO TOP

// FAQ
function toggleDropdown(event, input, iteratable) {
	// Toggles dropdown if input__wrapper has inputTypeClass === 'input--dropdown'
	const inputTypeClass = 'input--dropdown'
	const inputDropdownClass = '.input-dropdown'
	if (iteratable.classList.value.includes(inputTypeClass)) {
		const dropdown = iteratable.querySelector(inputDropdownClass);
		const dropdownShownClass = 'shown';

		input.focus;
		input.onfocus = () => {
			// setTimeout more, than onblur to fix issue while you make another click on input, when dropdown is shown
			setTimeout(() => {
				dropdown.classList.add(dropdownShownClass);
        iteratable.classList.add(dropdownShownClass);
			}, 100)
		}
		input.onblur = () => {
			// if (!dropdown.classList.value.includes(dropdownShownClass) && (event.target !== input)) {
				setTimeout(() => {
					dropdown.classList.remove(dropdownShownClass);
          iteratable.classList.remove(dropdownShownClass);
				}, 100)
			// }
		}
		// console.log(event.target)
	}
}
// /FAQ

const dropdownInputs = document.querySelectorAll('.input--dropdown');
dropdownInputs.forEach(input => {
  input.addEventListener('click', (event) => {
    toggleDropdown(event, event.target, input)
  })
  input.click();
})


document.querySelector('html').scrollTop = 0;


const animatedElements = [
  {
    el: 'h1',
    animation: 'fadeInLeft',
  },
  {
    el: 'h2',
    animation: 'fadeInLeft',
  },
  {
    el: 'h3',
    animation: 'fadeInLeft',
  },
  {
    el: 'h4',
    animation: 'fadeInLeft',
  },
  {
    el: 'h5',
    animation: 'fadeInLeft',
  },
  {
    el: 'h6',
    animation: 'fadeInLeft',
  },
  {
    el: '.interrupter',
    animation: 'fadeInLeft',
  },
  {
    el: '.services-list-card',
    animation: 'fadeInUp',
    hasDelay: true
  },
  {
    el: '.services-list-card__desc',
    animation: 'fadeInLeft',
    hasDelay: true
  },
  {
    el: '.services-list-card__icon',
    animation: 'fadeInLeft',
    hasDelay: true
  },
  {
    el: '.about-row-desc__text',
    animation: 'fadeInUp',
  },
  {
    el: '.articles-list-article',
    animation: 'fadeInUp',
    hasDelay: true
  },
  {
    el: '.programms-table__row',
    animation: 'fadeInUp',
    hasDelay: true
  },
  {
    el: '.articles-list-article__desc',
    animation: 'fadeInLeft',
    hasDelay: true
  },
  {
    el: '.newsletter-from',
    animation: 'fadeInUp',
  },
  {
    el: '.articles-about-list-card',
    animation: 'fadeInLeft',
    hasDelay: true
  },
]

let delay = 0;
animatedElements.forEach(el => {
  let toAnim = document.querySelectorAll(el.el);
  toAnim.forEach(animated => {
    if (animated != null || animated != undefined) {
      animated.classList.add('animate__animated', 'animate__' + el.animation, 'wow',)
      if (el.hasDelay) {
        delay += 0.5;
        console.log(delay)
        let delayTiming = `${delay}s`;
        animated.style.setProperty('--animate-delay', delayTiming);
        animated.style.setProperty('--animate-duration', '1s');
      }
    }
  })
  delay = 0;
})

new WOW().init();
