
$(document).ready(function () {
    $("#clickMe").click(function () {
        $("#message").text("Button clicked!");
    });
});
// Animation Fade in Out
$(document).ready(function () {
    $("#brighton_exp_penjelasan").hide();
    $(".penjelasan").hide();
    function checkVisibility() {
        $(".fade-in-out").each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass("visible");
            } else {
                $(this).removeClass("visible");
            }
        });
    }

    $(window).on("scroll resize", checkVisibility);
    checkVisibility(); // Run on page load

    // custom JS
    function renderSite(url) {
        $("#website_preview").attr("src", url);

    }
    $("#brighton_exp").click(function () {
        $(".penjelasan").hide();
        renderSite("https://www.brighton.co.id");
        $("#brighton_exp_penjelasan").toggle();
    });
    $("#ubs_exp").click(function () {
        $(".penjelasan").hide();
        renderSite("https://ubslifestyle.com/");
        $("#ubs_exp_penjelasan").toggle();
    });
});