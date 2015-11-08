$(document).ready(function ($) {

    $(function () {
        $("#draggable").draggable({
            containment: ".block-left__main",
            scroll: false
        });
    });

});
$(function () {
    var spinnerX = $("#spinnerX").spinner({
        min: 0
    });
    var watermark = $(".block-left__img");

    spinnerX.on('spin', function (event, ui) {
        var currentVal = ui.value;

        watermark.css({
            left: currentVal + 'px'
        })
    });

    var spinnerY = $("#spinnerY").spinner({
        min: 0
    });

    spinnerY.on('spin', function (event, ui) {
        var currentVal = ui.value;

        watermark.css({
            top: currentVal + 'px'
        })
    })

});
