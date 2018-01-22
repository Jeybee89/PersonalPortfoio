$(document).ready(function () {

$(function() { // Parallax backgroung effect

  var $window = $(window);

    $('section[data-type="background"]').each(function() {

    var $bgobj = $(this);

        $(window).scroll(function() {

        var yPos = -($window.scrollTop() / $bgobj.data('speed'));

        var coords = '50%' + yPos + 'px';

        $bgobj.css({backgroundPosition: coords });

        }); // end window
    });

});

$('h1.hidden').fadeIn(2000).removeClass('hidden');
$('p.hidden').fadeIn(3000).removeClass('hidden');

/* form validation plugin */
$.fn.goValidate = function() {
    var $form = this,
        $inputs = $form.find('input:text');

    var validators = {
        name: {
            regex: /^[A-Za-z]{3,}$/
        },
        pass: {
            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        },
        email: {
            regex: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
        },
        phone: {
            regex: /^[2-9]\d{2}-\d{3}-\d{4}$/,
        }
    };
    var validate = function(klass, value) {
        var isValid = true,
            error = '';

        if (!value && /required/.test(klass)) {
            error = 'This field is required';
            isValid = false;
        } else {
            klass = klass.split(/\s/);
            $.each(klass, function(i, k){
                if (validators[k]) {
                    if (value && !validators[k].regex.test(value)) {
                        isValid = false;
                        error = validators[k].error;
                    }
                }
            });
        }
        return {
            isValid: isValid,
            error: error
        }
    };
    var showError = function($input) {
        var klass = $input.attr('class'),
            value = $input.val(),
            test = validate(klass, value);

        $input.removeClass('invalid');
        $('#form-error').addClass('hide');

        if (!test.isValid) {
            $input.addClass('invalid');

            if(typeof $input.data("shown") == "undefined" || $input.data("shown") == false){
               $input.popover('show');
            }

        }
      else {
        $input.popover('hide');
      }
    };

    $inputs.keyup(function() {
        showError($(this));
    });

    $inputs.on('shown.bs.popover', function () {
  		$(this).data("shown",true);
	});

    $inputs.on('hidden.bs.popover', function () {
  		$(this).data("shown",false);
	});

    $form.submit(function(e) {

        $inputs.each(function() { /* test each input */
        	if ($(this).is('.required') || $(this).hasClass('invalid')) {
            	showError($(this));
        	}
    	});
        if ($form.find('input.invalid').length) { /* form is not valid */
        	e.preventDefault();
            $('#form-error').toggleClass('hide');
        }
    });
    return this;
};
$('form').goValidate();

/* ==== Date input ==== */

$(document).ready(function(){
     var date_input=$('input[name="date"]'); //our date input has the name "date"
     var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
     var options={
       format: 'dd/mm/yyyy',
       container: container,
       todayHighlight: true,
       autoclose: true,
     };
     date_input.datepicker(options);
   })
/* === progressbar === */
$(function () {
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});

$( window ).scroll(function() {
  // if($( window ).scrollTop() > 10){   scroll down abit and get the action
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });

 //  }
});





});
