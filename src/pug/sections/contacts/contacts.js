// Табы
const tabsBtn = document.querySelectorAll('.store-locator__tab');
const tabs = document.querySelectorAll('.store-locator__tabs-item');

tabsBtn.forEach((btn, index) => {
	btn.addEventListener('click', () => {

		tabs.forEach((tab, tabIndex) => {
			tab.classList.toggle('store-locator__tabs-item--active', tabIndex === index);
		});

		tabsBtn.forEach((button, btnIndex) => {
			button.classList.toggle('store-locator__tab--active', btnIndex === index);
		});
	});
});

// список адресов
const locatorItems = document.querySelectorAll('.store-locator__item-header');
locatorItems.forEach(target => {
	target.addEventListener('click', function() {
		const item = this.closest('.store-locator__item');
		item.classList.toggle('store-locator__item--active');
	});
});
