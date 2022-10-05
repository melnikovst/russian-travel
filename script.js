const ru = document.querySelector('.ru');
const en = document.querySelector('.en');

ru.addEventListener('click', () => {
  if (en.classList.contains('header__link_active')) {
    en.classList.remove('header__link_active');
    ru.classList.add('header__link_active');
  }
});

en.addEventListener('click', () => {
  if (ru.classList.contains('header__link_active')) {
    ru.classList.remove('header__link_active');
    en.classList.add('header__link_active');
  }
});
