// JAVASCRIPT
$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});

//NAVBAR COLLAPSE
(function ($) {
    $(function () {
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    });
})(jQuery);