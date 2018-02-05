$(function(){
    var ctaOriginal = $('#cta-btn').text();
    $('#cta-btn').on('mouseenter', function(e){
        this.text = 'Book a service';
    });
    $('#cta-btn').on('mouseleave', function(e){
        this.text = ctaOriginal;
    });

    if ($(window).innerWidth() <= 480) {
        $('#content-image').css('top', -$('#ordered-list').outerHeight()-30);
        $('#ordered-list').css('top', $('#content-image').outerHeight()+30);
    }

    $('#mobile-nav-btn').on('click', function(e){
        $( "#mobile-nav-container" ).slideToggle( "slow");
    });
});