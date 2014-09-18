$(document).ready(function() {
    $("#button-no").click(function() {
        $('#play-no').addClass("show");
        $('#play-no').removeClass("hide");
        $('#play-yes').addClass("hide");
    });
    $("#button-yes").click(function() {
        $('#play-yes').addClass("show");
        $('#play-yes').removeClass("hide");
        $('.ready-to-play').addClass("hide");
        $('#play-no').addClass("hide");
    });
});

$(document).ready(function() {
    $("#section-1 input:last-of-type").change(function() {
        $("#section-2").css("opacity", "1.0");
    });

    $(".nl-dd").click(function() {
        $("#section-3").css("opacity", "1.0");
    });

    $("#section-3 input:last-of-type").change(function() {
        $("#section-4").css("opacity", "1.0");
    });

    $("#section-4 input:last-of-type").change(function() {
        $("#section-5").css("opacity", "1.0");
    });

    $("#section-5 input:last-of-type").change(function() {
        $("#section-6").css("opacity", "1.0");
    });

    $("#section-6 input:last-of-type").change(function() {
        $("#section-7").css("opacity", "1.0");
    });

    $("#section-7 input:last-of-type").change(function() {
        $("#section-8").css("opacity", "1.0");
    });

});