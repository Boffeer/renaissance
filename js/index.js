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
// /Steps


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
const body = document.querySelector('body');
burgerButton.addEventListener('click', () => {
  if (burgerMenu.classList.value.includes('opened')) {
    burgerMenu.classList.remove('opened');
    burgerButton.classList.remove('opened');
    body.classList.remove('scroll-blocked');
  } else {
    burgerMenu.classList.add('opened');
    burgerButton.classList.add('opened');
    body.classList.add('scroll-blocked');
  }
});
// /Burger


// Smooth anchors
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
// /Smooth anchors

// Scroll to top v2
function smoothScroll(targetElement, duration) {
  let target = document.querySelector(targetElement);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;

  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapset = currentTime - startTime;

    var run = ease(timeElapset, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapset < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation)
}
// /Smooth scroll v2

const scrollToTopButtons = document.querySelectorAll('.button-scroll-top');
scrollToTopButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('html', 5000);
  })
})


// Add dropdowns to inputs with modificator
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


const dropdownInputs = document.querySelectorAll('.input--dropdown');
dropdownInputs.forEach(input => {
  input.addEventListener('click', (event) => {
    toggleDropdown(event, event.target, input)
  })
  input.click();
})
// /Add dropdowns to inputs with modificator


// Fixing random page position
document.querySelector('html').scrollTop = 0;


// ANIMATE SELECED EELEMENTS

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
  {
    el: '.bullets-card__badge',
    animation: 'fadeInUp',
    hasDelay: true
  },
  {
    el: '.bullets-card__desc',
    animation: 'fadeInUp',
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
        // console.log(delay)
        let delayTiming = `${delay}s`;
        animated.style.setProperty('--animate-delay', delayTiming);
        animated.style.setProperty('--animate-duration', '1s');
      }
    }
  })
  delay = 0;
})

new WOW().init();
// /ANIMATE SELECTED ELEMENTS

// header coloring
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 50) {
    if  (!header.classList.value.includes('scrolled')) {
      header.classList.add('scrolled')
    }
  } else {
    header.classList.remove('scrolled')
  }
})
// /header coloring

// const parallaxed = document.querySelectorAll('.b_parallax')
// parallaxed.forEach(item => {
//   item.style.transition = `all 0.3s ease`;
// })

// window.addEventListener('mousemove', (event) => {
//   let xOffset = 0.5 - (event.clientX + 0) / window.innerWidth / 2;
//   let yOffset = 0.5 - (event.clientY + 0) / window.innerHeight / 2;
//   // console.log(`
//   //   x: ${xOffset}
//   //   y: ${yOffset}
//   // `)
//   let comparableHeight = window.innerHeight / 3.5;
//   parallaxed.forEach(item => {
//     if (comparableHeight > item.getBoundingClientRect().top) {
//       var offset = 5 + parseInt(item.getBoundingClientRect().top);
//       let translate = "translate3d("+Math.round(xOffset*offset)+"px,"+Math.round(yOffset*offset)+"px,0px)";
//       item.style.transform = translate;
//       // console.log(translate)
//     }
//   })
// })

// window.addEventListener('mousemove', function(event){
//     if(typeof movewait != 'undefined'){
//         clearTimeout(movewait);
//     }
//     movewait = setTimeout(function(){
//       console.log(event.clientX, '/', event.clientY)
//       let xOffset = event.clientX / 10;
//       let yOffset = event.clientY / 10;
//       parallaxed.forEach(item => {
//         item.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`
//       })
//     },200);
// });

  // $(window).on('mousemove',function(e){
  //   var width=$(window).width(),
  //       height=$(window).height(),
  //       offsetX=0.5-e.pageX/width,
  //       offsetY=0.5-e.pageY/height,
  //       $parallaxItem=$('.parallax');

  //   $parallaxItem.each(function(i,el){
  //     var offset = parseInt($(el).data('offset'));
  //     let translate = "translate3d("+Math.round(offsetX*offset)+"px,"+Math.round(offsetY*offset)+"px,0px)";
  //     $(el).css({
  //       '-webkit-transform':translate,
  //       'transform':translate,
  //       '-moz-transform':translate
  //     });
  //   });
  // });

// news videos to open in popup


// open menu by click
const headerMenus = document.querySelectorAll('.header-nav-dropdown');
const headerMenuOpenedClass = 'opened'

// function initMenusHeight() {
//   setTimeout(() => {
//     headerMenus.forEach(menu => {
//       const menuDropdown = menu.querySelector('.header-nav-dropdown-links')
//       menuDropdown.setAttribute('data-height', menuDropdown.getBoundingClientRect().height);
//       setTimeout(() => {
//         menuDropdown.style.height = '1px';
//       }, 400)
//     })
//   }, 1000)
// }

// let menusList = [];
// window.addEventListener('resize', () => {
//   initMenusHeight()
// })
// initMenusHeight()

document.addEventListener('click', (event) => {
  const dropdownMenu = event.path[0]
  if (dropdownMenu.classList.value.includes('header-nav-dropdown')) {
    if (dropdownMenu.parentElement.classList.value.includes(headerMenuOpenedClass)) {
      event.path[0].parentElement.classList.remove(headerMenuOpenedClass)
    } else {
      event.path[0].parentElement.classList.add(headerMenuOpenedClass)
    }
  } else {
    headerMenus.forEach(menu => menu.classList.remove(headerMenuOpenedClass))
  }
})

// /open menu by click

let triangles = [...document.querySelectorAll('.triangle')];
let triangleActiveClass = 'triangle--hidden';
function handleTrianglesAppear(spreadElements) {
	documentHeight = window.innerHeight;
	centerDistance = documentHeight / 2;
	spreadElements.map((item) => {
    item.classList.add(triangleActiveClass)

		if (item.getBoundingClientRect().top < centerDistance) {
			item.classList.remove(triangleActiveClass)
		} else if (item.getBoundingClientRect().top > centerDistance - 30) {
			item.classList.add(triangleActiveClass)
		}
	})
}
document.addEventListener('scroll', function() {
	handleTrianglesAppear(triangles);
});

setTimeout(() => {
  handleTrianglesAppear(triangles);
}, 200)
