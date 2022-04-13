/* ============================== LOADING PAGE ============================== */
$(document).ready(function() {
    $(document).scrollTop(0);
    $("#preloader").css({ display: "none" });
    $("#website-intro").css({ display: "flex" });

    const pageTitle = $("title").text().substring(9).toLocaleUpperCase();
    $(".page-title").text(pageTitle);

    $(".scroll-left").click(function() {
        const currentParent = $(this).parent([0]).attr("id");
        console.log(currentParent);
        $(`#${currentParent} .sec-devices`).scrollLeft(
            $(`#${currentParent} .sec-devices`).scrollLeft() - 300
        );
    });

    $(".scroll-right").click(function() {
        const currentParent = $(this).parent([0]).attr("id");
        console.log(currentParent);
        $(`#${currentParent} .sec-devices`).scrollLeft(
            $(`#${currentParent} .sec-devices`).scrollLeft() + 300
        );
    });

    $(".dark-mode").click(function() {
        document.documentElement.style.setProperty("--main-clr", "#0B090A");
        document.documentElement.style.setProperty("--off-main-clr", "#121011");
        document.documentElement.style.setProperty("--sec-clr", "white");
        document.documentElement.style.setProperty("--off-sec-clr", "#d3d3d3");

        $(".website-logo-dark").css({ display: "none" });
        $(".website-logo-light").css({ display: "block" });

        $(".content-text .welcome-img-dark").css({ display: "none" });
        $(".content-text .welcome-img").css({ display: "block" });

        $("#website-intro #website-intro-logo-dark").css({ display: "none" });
        $("#website-intro #website-intro-logo").css({ display: "block" });

        $(".dark-mode").css({ display: "none" });
        $(".light-mode").css({ display: "block" });
    });
    $(".light-mode").click(function() {
        document.documentElement.style.setProperty("--main-clr", "#F4F6F5");
        document.documentElement.style.setProperty("--off-main-clr", "#EDEFEE");
        document.documentElement.style.setProperty("--sec-clr", "black");
        document.documentElement.style.setProperty("--off-sec-clr", "#2C2C2C");

        $(".website-logo-dark").css({ display: "block" });
        $(".website-logo-light").css({ display: "none" });

        $(".content-text .welcome-img-dark").css({ display: "block" });
        $(".content-text .welcome-img").css({ display: "none" });

        $("#website-intro #website-intro-logo-dark").css({ display: "block" });
        $("#website-intro #website-intro-logo").css({ display: "none" });

        $(".dark-mode").css({ display: "block" });
        $(".light-mode").css({ display: "none" });
    });
});

/* ============================== SIDEBAR ============================== */
function openSideBar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("body").style.height = "100%";
    document.getElementById("lower-opacity").style.display = "block";
}

function closeSideBar() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("body").style.overflow = "overlay";
    document.getElementById("body").style.removeProperty = "height";
    document.getElementById("lower-opacity").style.display = "none";
}