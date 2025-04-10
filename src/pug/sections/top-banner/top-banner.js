import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slider = document.querySelector(".top-banner-slider");

if (slider) {
	const pagination = slider.querySelector(".swiper-pagination");
	const btnNext = slider.querySelector(".swiper-button-next");
	const btnPrev = slider.querySelector(".swiper-button-prev");
	console.log(btnNext);

	new Swiper(slider, {
		modules: [Navigation, Pagination, Autoplay],
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		// spaceBetween: 20,
		slidesPerView: 1,

		navigation: {
			nextEl: btnNext ? btnNext : null,
			prevEl: btnPrev ? btnPrev : null,
		},

		pagination: {
			el: pagination ? pagination : null,
			clickable: true,
			// dynamicBullets: true,
		},
	});
}
