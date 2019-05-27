import { BODY, HTML } from '../constants';
const menuBtn = $('.js-btn-menu');
const openMenu = 'is-open-menu';
menuBtn.on('click', () => {
  (!HTML.hasClass(openMenu)) ? HTML.addClass(openMenu) : HTML.removeClass(openMenu);
});
