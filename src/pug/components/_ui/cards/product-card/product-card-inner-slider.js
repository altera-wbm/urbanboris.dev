import Swiper from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const sliders = document.querySelectorAll(".product-card-inner-slider");

if (sliders.length) {
	sliders.forEach((slider) => {
		const pagination = slider.querySelector(".swiper-pagination");
		const btnNext = slider.querySelector(".swiper-button-next");
		const btnPrev = slider.querySelector(".swiper-button-prev");

		new Swiper(slider, {
			modules: [Navigation, Pagination, EffectFade],
			slidesPerView: 1,

			effect: "fade",
			speed: 500,

			navigation: {
				nextEl: btnNext ? btnNext : null,
				prevEl: btnPrev ? btnPrev : null,
			},

			pagination: {
				el: pagination ? pagination : null,
				clickable: true,
			},
		});

		slider.querySelectorAll(".swiper-pagination-bullet").forEach((el) =>
			el.addEventListener("mouseover", () => {
				el.click();
			}),
		);
	});
}
