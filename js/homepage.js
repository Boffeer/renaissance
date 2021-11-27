

const servicesCards = document.querySelectorAll('.services-list-card');
const servicesCardFlippedClass = 'flipped';

servicesCards.forEach(card => {
	// card.classList.add(servicesCardFlippedClass);

	const input = card.querySelector('.input');

	card.addEventListener('click', (event) => {
		const serviceCard = this;
		let card = event.target

		card.parentNode.classList.add(servicesCardFlippedClass);

		// at index.js
		toggleDropdown(event, input, card);


	})

	let handledDropdownItems = card.querySelectorAll('.input-dropdown-list-item');
	handledDropdownItems.forEach(item => {
		item.addEventListener('click', () => {
			const itemValue = item.innerText;
			input.setAttribute('value', itemValue);
			console.log(input.getAttribute('value'));
		});
	})

})



  /**
   * Sticky Header
   */
//   let isWindowScrolled = $(this).scrollTop() > 100;
//   let isStickyHeaderAllowed = window.innerWidth >= 768;
//   function stickyHeader() {
//     if ($(this).scrollTop() > 100 && window.innerWidth >= 768) {
//       $(".header-menu").addClass("header-menu--scrolled");
//     } else {
//       $(".header-menu").removeClass("header-menu--scrolled");
//     }
//   }
//   $(window).on("scroll", function () {
//     stickyHeader();
//   });
//   stickyHeader();

//   // MASK
//   $("input[name=tel").inputmask("+7 (999) 999-99-99");

//   /**
//    * DROPDOWN
//    */
//   $(".faq-list-card-top").each(function () {
//     $(this).on("click", function () {
//       $(this).toggleClass("faq-list-card-top--opened");
//       $(this).parent().find(".faq-list-card-bottom").slideToggle();
//     });
//   });

//   /**
//    * TABS
//    */
//   $(".cases-showcase-tabbar__button").each(function () {
//     $(this).on("click", function () {
//       $(".cases-showcase-tabbar__button").removeClass(
//         "cases-showcase-tabbar__button--current"
//       );
//       $(this).addClass("cases-showcase-tabbar__button--current");
//       var target = $(this).attr("data-target");

//       $(".cases-showcase-tabs-tab").hide();
//       $('.cases-showcase-tabs-tab[data-target="' + target + '"]').show();

//       $("html, body").animate(
//         { scrollTop: $(".cases").offset().top - 40 },
//         800
//       );
//     });
//   });

//   /**
//    * POPUPS
//    */
//   modality({
//     pop: ".form--header-menu-callback",
//     clickTrigger: ".header-menu__callback",
//     popCloserType: "inner",
//   });
//   modality({
//     pop: ".pop-thanks",
//     clickTrigger: ".pop-thanks",
//     popCloserType: "inner",
//   });

//   /**
//    * AJAX SEND
//    */
//   $(".form").each(function () {
//     $(this).on("submit", function (event) {
//       event.preventDefault();
//       let userName = $(this).find('input[name="user-name"]');
//       let userTel = $(this).find('input[name="user-tel"]');
//       // console.log('аякс пошел', userName.val(), userTel.val(), $(this));
//       $.ajax({
//         url: "send.php",
//         type: "POST",
//         dataType: "json",
//         data: {
//           user_name: userName.val(),
//           user_tel: userTel.val(),
//         },
//         success: function (data) {},
//       });
//       $(this)[0].reset();
//       // console.log('отправляем')
//       ym(82308838, "reachGoal", "form-submit");
//       closePop(
//         document.querySelector(".form--header-menu-callback-wrapper"),
//         document.querySelector(".form--header-menu-callback")
//       );
//       showPop(
//         document.querySelector(".pop-thanks-wrapper"),
//         document.querySelector(".pop-thanks")
//       );
//       setTimeout(function () {
//         closePop(
//           document.querySelector(".pop-thanks-wrapper"),
//           document.querySelector(".pop-thanks")
//         );
//       }, 5000);
//       return false;
//     });
//   });

// let servicesMasonry = new Masonry( '.services-list', {
// 	itemSelector: '.services-list-card',
// 	columnWidth: '.services-list-card',
// 	gutter: '.services-list-card--gutter',
// });

/*
	{
		brakpoint: number
		swiper: swiper element class
		wrapper: swiper-wrapper element
		slide:
		masonry: contianer
		gutter: class
	}
*/

let articlesMasonry;
let articlesSlider;
let servicesMasonry;
let servicesSlider;

// let articlesMasonry = new Masonry('.articles-list', {
// 	itemSelector: '.articles-list-article',
// 	columnWidth: '.articles-list-article',
// 	gutter: '.articles-list-article--gutter',
// })
const resizeConstructors = [
	{
		breakpoint: 992,
		swiper: '.services-slider',
		wrapper: '.services-list',
		slide: '.services-list-card',
		pagination: '.services-slider__pagination',
		masonry: '.services-list',
		masonryCard: '.services-list-card',
		gutter: '.services-list-card--gutter',
		variableSlider: servicesSlider,
		variableMasonry: servicesMasonry,
	},
	{
		breakpoint: 992,
		swiper: '.articles-list__wrapper',
		wrapper: '.articles-list',
		slide: '.articles-list-article',
		pagination: '.articles-slider__pagination',
		masonry: '.articles-list',
		masonryCard: '.articles-list-article',
		gutter: '.articles-list-article--gutter',
		variableSlider: articlesSlider,
		variableMasonry: articlesMasonry,
	}
];

function useCorrectServicesLayout($) {
	const servicesSliderEl = document.querySelector($.swiper);
	const servicesSliderWrap = document.querySelector($.wrapper);
	const servicesSlides = document.querySelectorAll($.slide);

	if (window.innerWidth < $.breakpoint) {

		if (servicesSliderEl.querySelector('.swiper-notification') != null) {
			console.log('removed')
			servicesSliderEl.querySelector('.swiper-notification').remove()
		}
		if ($.variableMasonry != undefined) {
			$.variableMasonry.destroy();
		}
		if ($.variableSlider != undefined) {
			$.variableSlider.destroy(true, true);
			$.variableSlider = null;
		}

		servicesSliderEl.classList.add('swiper')
		servicesSliderEl.removeAttribute('style')

		servicesSliderWrap.classList.add('swiper-wrapper')
		servicesSliderWrap.removeAttribute('style')

		servicesSlides.forEach(slide => {
			slide.classList.add('swiper-slide');
			slide.removeAttribute('style')
		});

		$.variableSlider = new Swiper($.swiper, {
			pagination: {
				el: $.pagination
			},
			autoHeight: true,
			spaceBetween: 50,
		});
	} else {
		if ($.variableSlider != undefined) {
			$.variableSlider.destroy(true, true);
			$.variableSlider = null;
		}
		if ($.variableMasonry != undefined) {
			$.variableMasonry.destroy();
		}
		servicesSliderEl.classList.remove('swiper', 'swiper-initialized', 'swiper-horizontal');
		servicesSliderEl.removeAttribute('style')
		if (servicesSliderEl.querySelector('.swiper-notification') != null) {
			console.log('removed')
			servicesSliderEl.querySelector('.swiper-notification').remove()
		}

		servicesSliderWrap.classList.remove('swiper-wrapper');
		servicesSliderWrap.removeAttribute('style')
		servicesSliderWrap.removeAttribute('id')

		servicesSlides.forEach(slide => {
			slide.classList.remove('swiper-slide');
			slide.removeAttribute('style')
		});
		$.variableMasonry = new Masonry( $.masonry, {
			itemSelector: $.masonryCard,
			columnWidth: $.masonryCard,
			gutter: $.gutter,
		});
	}
};
resizeConstructors.forEach(constructor => {
	useCorrectServicesLayout(constructor)
})
window.addEventListener('resize', () => {
	// if (timeOut != undefined) {
	// 	clearTimeout(timeOut)
	// }
	// var timeOut = setTimeout(() => {
		resizeConstructors.forEach(constructor => {
			setTimeout(() => {
				useCorrectServicesLayout(constructor)
			}, 2000);
		})
	// }, 1000)
});
