

const servicesCards = document.querySelectorAll('.services-list-card');

// uncomment this to return flipping effect
// const servicesCardFlippedClass = 'flipped';
const servicesCardFlippedClass = 'no-flip';

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
		// pagination: '.services-slider__pagination',
		masonry: '.services-list',
		masonryCard: '.services-list-card',
		gutter: '.services-list-card--gutter',
		variableSlider: servicesSlider,
		variableMasonry: servicesMasonry,
		buttons: '.services-slider__buttons',
		buttonNext: '.services-slider__button-next',
		buttonPrev: '.services-slider__button-prev',
		onSlideChange: function(slider, buttons) {
			let activeIndex = slider.activeIndex;
			let slides = [...document.querySelector(this.swiper).querySelectorAll('.swiper-slide')];
			setTimeout(()=> {
				let sliderNumber = slides[activeIndex].ariaLabel
				document.querySelector(buttons).setAttribute('data-page', sliderNumber)
			}, 100)
		},
		onInit: function(slider, buttons) {
			let activeIndex = slider.activeIndex;
			let slides = [...document.querySelector(this.swiper).querySelectorAll('.swiper-slide')];
			setTimeout(()=> {
				let sliderNumber = slides[activeIndex].ariaLabel
				document.querySelector(buttons).setAttribute('data-page', sliderNumber)
			}, 100)
		}
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
			navigation: {
				nextEl: $.buttonNext,
				prevEl: $.buttonPrev,
			},
			pagination: {
				el: $.pagination
			},
			autoHeight: true,
			spaceBetween: 50,
			on: {
				transitionEnd: function() {
					if ($.onSlideChange) {
						$.onSlideChange(this, $.buttons);
					}
				},
				init: function() {
					if ($.onInit) {
						$.onInit(this, $.buttons);
					}
				}
			}
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


window.addEventListener('DOMContentLoaded', (event) => {
	const articleMedia = document.querySelectorAll('.articles-list-article-media');

	articleMedia.forEach((media, index) => {
		let ytId = media.getAttribute('data-yt-id');
		let ytThumbUrl = `https://i.ytimg.com/vi/${ytId}/hq720.jpg`;
		let ytVideoUrl = `https://www.youtube.com/embed/${ytId}/?autoplay=1&mute=1`;
		// let ytVideoUrl = `https://www.youtube.com/watch?v=${ytId}`;

		let thumb = media.querySelector('.articles-list-article-media__thumb');
		let video = media.querySelector('.aritlces-list-article-media__video');
		let play = media.querySelector('.articles-list-article-media__play');

		video.setAttribute('data-src', ytVideoUrl);
		thumb.src = ytThumbUrl;

		let videoClass = `js_articles__video--${index}`;
		let playClass = `js_articles__play--${index}`;
		video.classList.add(videoClass)
		play.classList.add(playClass)

		console.log(videoClass, playClass)

		function onOpenFunction() {
			let ytVideo = video
			let ytSrc = ytVideo.getAttribute('data-src')
			ytVideo.setAttribute('src', ytSrc);
			ytVideo.style.display = 'block';
		}
		function onCloseFunction() {
			let ytVideo = video
			let ytSrc = ytVideo.getAttribute('data-src')
			ytVideo.removeAttribute('src', ytSrc);
		}

		poppa({
			pop: `.${videoClass}`,
			clickTrigger: `.${playClass}`,
			onOpen: onOpenFunction,
			onClose: onCloseFunction,
		})
	})

});

// const articlePlay = document.querySelectorAll('.aritlces-list-article-media__video')
// const articleVideos = document.querySelectorAll('.aritlces-list-article-media__video')

// articleVideos.forEach((video, index) => video.classList.add(`pop-video-${index}`))
