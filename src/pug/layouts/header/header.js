let lastScrollTop = 0;

const header = document.querySelector('header.header');
document.documentElement.style.setProperty('--header-height', `-${header.offsetHeight}px`);

window.addEventListener('scroll', () => {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop !== lastScrollTop) {
		if (scrollTop > lastScrollTop) {
			header.classList.add('hide');
		} else {
			header.classList.remove('hide');
		}
		lastScrollTop = scrollTop;
	}
});
