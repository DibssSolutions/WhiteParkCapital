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
    	const successBlock = $('.js-form-success', $(this));
    	successBlock.addClass(ACTIVE);
    	$(this)[0].reset();
    	setTimeout(() => {successBlock.removeClass(ACTIVE);}, 3000);
    }
  });
});
