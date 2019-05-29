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
