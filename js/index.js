let lazyLoadInstance = new LazyLoad();

let servicesMasonry = new Masonry( '.services-list', {
	itemSelector: '.services-list-card',
	columnWidth: '.services-list-card',
	gutter: '.services-list-card--gutter',
});

const servicesCards = document.querySelectorAll('.services-list-card');

const servicesCardFlippedClass = 'flipped';

servicesCards.forEach(card => {
	// card.classList.add(servicesCardFlippedClass);

	const input = card.querySelector('.input');

	card.addEventListener('click', (event) => {
		const serviceCard = this;
		let card = event.target

		card.parentNode.classList.add(servicesCardFlippedClass);


		// Toggles dropdown if input__wrapper has inputTypeClass === 'input--dropdown'
		const inputTypeClass = 'input--dropdown'
		const inputDropdownClass = '.input-dropdown'
		if (card.classList.value.includes(inputTypeClass)) {
			const dropdown = card.querySelector(inputDropdownClass);
			const dropdownShownClass = 'shown';

			input.focus;
			input.onfocus = () => {
				// setTimeout more, than onblur to fix issue while you make another click on input, when dropdown is shown
				setTimeout(() => {
					dropdown.classList.add(dropdownShownClass);
				}, 100)
			}
			input.onblur = () => {
				// if (!dropdown.classList.value.includes(dropdownShownClass) && (event.target !== input)) {
					setTimeout(() => {
						dropdown.classList.remove(dropdownShownClass);
					}, 100)
				// }
			}
			console.log(event.target)
		}

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


let articlesMasonry = new Masonry('.articles-list', {
	itemSelector: '.articles-list-article',
	columnWidth: '.articles-list-article',
	gutter: '.articles-list-article--gutter',
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
