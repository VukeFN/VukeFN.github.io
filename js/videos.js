$(document).ready(function() {
    $("input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".video").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    const width = $(window).width();
    if (width > 500) {
        $(".no-video-hint").hover(
            function() {
                $(".tooltip").css({ opacity: "1" });
            },
            function() {
                $(".tooltip").css({ opacity: "0" });
            }
        );
    }

    if (width < 500 || width === 500) {
        $(".no-video-hint").mousedown(function() {
            $(".tooltip").css({ opacity: "1" });
            $(".tooltip").fadeIn(500).delay(3000).fadeOut(500);
        });
    }

    $("ion-icon").remove("title");
});