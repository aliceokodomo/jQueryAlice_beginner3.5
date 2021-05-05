var div = "<div></div>";
var input = "<input  >"
$(document).ready(function() {
    $("body").prepend(div, input);
    $("div").css({ 'backgroundColor': 'green', 'width': '400px', "height": "80px", "position": "relative" });
    $("input").css("marginTop", "20px");
})
$(document).ready(function() {
    $('input').focus(function() {
        $(document).keydown(function(e) {
            switch (e.which) {
                case 37: // flèche gauche
                    $("div").animate({
                        left: "-=10"
                    });
                    break;
                case 38: // flèche haut
                    $("div").animate({
                        top: "-=10"
                    });
                    break;
                case 39: // flèche droite
                    $("div").animate({
                        left: "+=10"
                    });
                    break;
                case 40: // flèche du bas
                    $("div").animate({
                        top: "+=10"
                    });
                    break;
            }
        });
    });
});