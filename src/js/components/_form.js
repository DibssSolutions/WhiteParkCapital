import validate from '../lib/jquery.form-validator.js';
import { ACTIVE } from '../constants';

$.validate({ form: '.js-form' });


$('.js-form').on('submit', function(e) {
  e.preventDefault();
  var data = {
    name: $('#name').val(),
    email: $('#email').val(),
    message: $('#message').val()
  };
  $.ajax({
    type: 'POST',
    url: '../send-email.php',
    data: data,
    success: () => {
    	$(this).addClass('is-success');
    	$(this)[0].reset();
    	setTimeout(() => {$(this).removeClass('is-success');}, 3000);
    }
  });
});

// const control = $('input, textarea');
// const filled = 'is-filled';
// const checkInputValue = (that) => {
//   const value = that.val();
//   const parent = that.parent('.js-form-control');
//   if (value) {
//     parent.addClass(filled);
//   } else {
//     parent.removeClass(filled);
//   }
// };

// control
//   .each(function() {
//     const that = $(this);
//     checkInputValue(that);
//   })
//   .on('focus', function() {
//     const that = $(this);
//     that.addClass(filled);
//   })
//   .on('blur', function() {
//     const that = $(this);
//     setTimeout(() => {
//       checkInputValue(that);
//     }, 100);
//   });
