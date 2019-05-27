import slick from 'slick-carousel';
import { mediaWidth } from '../utils';
import { WIN } from '../constants';

const slider = $('.js-slider');
const options = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
    	slidesToShow: 2,
  		slidesToScroll: 2
      }
    },
    {
      breakpoint: 479,
      settings: {
    	slidesToShow: 1,
  		slidesToScroll: 1
      }
    }
  ]
};

slider.slick(options);


const tabsSlider = $('.js-tabs-slider');

const initStripSlider = (container, option, widht) => {
  if (mediaWidth(widht)) {
    if (container.hasClass('slick-initialized')) return;
    container.slick(option);
  }
  else {
    if (!container.hasClass('slick-initialized')) return;
    container.slick('unslick');
  }
};
const tabSliderOption = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

initStripSlider(tabsSlider, tabSliderOption, 1024);

let timeout;
WIN.on('resize', () => {
  clearTimeout(timeout);
  timeout = setTimeout( () => {
    initStripSlider(tabsSlider, tabSliderOption, 1024);
  }, 200);
});
