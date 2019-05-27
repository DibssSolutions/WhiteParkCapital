import { ANIMATE } from '../constants';
import { SCROLL_TO } from '../utils';
import { TimelineMax } from 'gsap';

const hero = $('.js-hero');
const titles = $('.js-hero-title');
const titlesText = $('.js-hero-title [data-anim="text-from-bottom"]');
const bottomLine = $('.js-hero-bottomseparator');
const topLines = $('.js-hero-top-line');
const topSeparatorImg = $('.js-topseparator-img');
const btn = $('.js-hero-btn');

let tlItems = new TimelineMax({ paused: true });
tlItems
  .to(topSeparatorImg, 0.6, { 
    opacity: 1, 
    ease: Power2.easeInOut
  }, 0.35)
  .to(topLines, 0.5, { 
    css: { scale: 1 }, 
    ease: Quad.easeInOut 
  }, 0.6)
  .staggerTo(titlesText, 1, {
    y: 0,
    opacity: 1,
    ease: Power2.easeInOut
  }, 0.2, 0.4)
  .to(bottomLine, 0.5, { 
    css: { scale: 1 }, 
    ease: Quad.easeInOut 
  }, 1.2)
  .add(() => {
    titles.addClass(ANIMATE);
  },1.2)
  .to(btn, 0.5, {
    y: 0,
    opacity: 1, 
    ease: Power2.easeInOut
  }, 1.4);

setTimeout(() => {
  hero.addClass(ANIMATE);
  tlItems.play();
},0.4);

btn.on('click', function(e) {
  e.preventDefault();
  const offset = $($(this).attr('href')).offset().top;
  SCROLL_TO(offset);
});
