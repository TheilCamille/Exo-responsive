$( "#cross" ).hide();
$( ".menu" ).hide();
$('header').sticky({topSpacing:0})
$( "#hamburger" ).click(function() {
    
    $( ".menu" ).slideToggle("slow", function() {
        $( "#hamburger" ).hide();
        $( "#cross" ).show();
        $(".menu").addClass('fixed');
        
    });
});

$( "#cross" ).click(function() {
    $( ".menu" ).slideToggle("slow", function() {
        $( "#cross" ).hide();
        $( "#hamburger" ).show();
        $(".menu").removeClass('fixed');
        $
    });
});

