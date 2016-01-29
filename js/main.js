$(document).ready(function(){

    $("#text1").delay(1000).animate({ opacity: 1 }, 2000);
    $("#offsetText").delay(2000).animate({ opacity: 1 }, 2000);
    $("#offsetImage").delay(3000).animate({ opacity: 1 }, 2000);

    $('#homeLink').click(function()
    {
        $('html, body').animate({
            scrollTop: $("#emptyFiller").offset().top
        }, 1000);
    });

    $('#aboutLink').click(function()
    {
        $('html, body').animate({
            scrollTop: $("#aboutSection").offset().top - $('#topBanner').height()
        }, 1000);
    });

    $('#FAQLink').click(function()
    {
        $('html, body').animate({
            scrollTop: $("#FAQSection").offset().top - $('#topBanner').height()
        }, 1000);
    });

});
