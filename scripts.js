$(document).ready(function () {
    // Make shapes disappear on click
    $('#circle_1, #rectangle_1, #triangle_1').click(function () {
        $(this).css('display', 'none');
    });

    // Pause animation on click
    $('#circle_2, #rectangle_2, #triangle_2').click(function () {
        if ($(this).css('animation-play-state') === 'running') {
            $(this).css('animation-play-state', 'paused');
        } else {
            $(this).css('animation-play-state', 'running');
        }
    });

    // Change colour on click
    $('#circle_3, #rectangle_3, #triangle_3').click(function() {
        const colors = ["darkmagenta", "lightcoral", "palevioletred"];
        const currentColor = $(this).attr("fill");
        const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
        $(this).attr("fill", nextColor);
    });

});