$(document).ready(function() {

   $('header.top').anystretch("img/hero.jpg", {speed: 150});

   $('form').each(function () {

      $(this).validate({
         rules: {
            'email': {
               minlength: 2,
               required: true,
               email: true
            }
         },
         highlight: function(label) {
            $(label).closest('.form-control').addClass('has-error');
         },
         errorPlacement: function(error, element) {
            error.appendTo(element.closest('.form-group'));
         },
         success: function(label) {
            $(label).text('OK!').addClass('valid').closest('.form-control').addClass('has-success');
         }
      });

   });

});