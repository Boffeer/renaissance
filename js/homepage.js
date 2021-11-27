

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
			// console.log(input.getAttribute('value'));
		});
	})

})



let articlesMasonry;
let articlesSlider;
let servicesMasonry;
let servicesSlider;

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
	resizeConstructors.forEach(constructor => {
		setTimeout(() => {
			useCorrectServicesLayout(constructor)
		}, 2000);
	})
});
