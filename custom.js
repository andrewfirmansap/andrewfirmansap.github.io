
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

var _CONTENT = [
    'Software Engineer',
    'Web Developer',
    'Backend Developer',
    'PHP Developer',
    'SilverStripe Specialist',
    'MySQL Wrangler',
    'API Integrator',
    'System Debugger',
    'JavaScript Explorer',
    'RESTful API Crafter',
    'Side Project Dreamer',
    'Code Refactorer',
    'SQL Query Tuner',
    'Tech Learner',
    'AI Enthusiast',
    'Clean Code Advocate',
    'Gamer',
    'Digital Minimalist',
    'Problem Solver',
    'Performance Tweaker',
    'Framework Navigator',
    'Codebase Archaeologist'
  ];
  
var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#i-am-a-block");
function Type() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text + " _";
    _PART_INDEX++;
    if (text === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 30);
        }, 1000);
    }
}
function Delete() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text + " _";
    _PART_INDEX--;
    if (text === '') {
        clearInterval(_INTERVAL_VAL);
        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;
        _PART_INDEX = 0;
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Type, 80);
        }, 100);
    }
}
_INTERVAL_VAL = setInterval(Type, 80);

