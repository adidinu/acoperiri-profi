const menus = document.querySelectorAll('.js-open-menu')

for(let i = 0; i < menus.length; i++){
  menus[i].addEventListener('mouseover', ()=>{
    const rel = menus[i].closest('.js-menu-rel')
    const subMenu = rel.querySelector('.sub-menu');
    if(subMenu){
      subMenu.classList.add('show');
      subMenu.addEventListener('mouseleave', ()=>{
        subMenu.classList.remove('show');
      })
    }
  })
}