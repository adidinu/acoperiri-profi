const menus = document.querySelectorAll('.js-open-menu');
const navWrapper = document.querySelector('.nav-wrapper');
const subMenus = document.querySelectorAll('.sub-menu');
const mobileMenuToggle = document.querySelector('.open-menu');
const mobileNav = document.querySelector('.mobile-popup');
const closeMobileMenu = document.querySelector('.close-menu');

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

const hideNav = (e) => {
  if(!e.target.closest('.open-menu') && !e.target.closest('.mobile-popup')){
    mobileNav.classList.remove('show');
    document.body.style.overflow = "";
    document.body.classList.remove("overlay");
  }
}

mobileMenuToggle.addEventListener('click', () => {
  mobileNav.classList.add('show');
  document.body.style.overflow = "hidden";
  document.body.classList.add("overlay");
});

document.addEventListener('click', hideNav);

closeMobileMenu.addEventListener('click', (e) =>{
  mobileNav.classList.remove('show');
  document.body.style.overflow = "";
  document.body.classList.remove("overlay");
})
