const menus = document.querySelectorAll('.js-open-menu');
const navWrapper = document.querySelector('.nav-wrapper');
const subMenus = document.querySelectorAll('.sub-menu');

navWrapper.addEventListener('mouseleave', (e) => {
  subMenus.forEach((subMenu) => {
    subMenu.classList.remove('show');
  });
});

menus.forEach((menu) => {
	menu.addEventListener('mouseover', () => {
		subMenus.forEach((subMenu) => {
			subMenu.classList.remove('show');
		});
		const rel = menu.closest('.js-menu-rel');
		const subMenu = rel.querySelector('.sub-menu');
		if (subMenu) {
			subMenu.classList.add('show');
			subMenu.addEventListener('mouseleave', () => {
				subMenu.classList.remove('show');
			});
		}
	});
});


