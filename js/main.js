$(document).ready(function() {
    $(document).scrollTop(0);
    $(".choose-theme ion-icon").on("click", function() {
        $(".choose-theme").hide();
    });
    /* ============================== LOADING SCREEN ============================== */
    $("#preloader").css({ display: "none" });

    /* ============================== WEBSITE INTRO SCREEN ============================== */
    $("#website-intro").css({ display: "flex" });

    /* ============================== PAGE'S TITLE ============================== */
    const pageTitle = $("title").text().substring(9).toLocaleUpperCase();
    $(".page-title").text(pageTitle);

    /* ============================== VIDEO PAGE HORIZONTAL SCROLLING ============================== */
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

    /* ============================== DARK/LIGHT THEMES ============================== */
    function darkMode() {
        document.documentElement.style.setProperty("--main-clr", "#0B090A");
        document.documentElement.style.setProperty("--off-main-clr", "#121011");
        document.documentElement.style.setProperty("--sec-clr", "white");
        document.documentElement.style.setProperty("--off-sec-clr", "#d3d3d3");

        $(".website-logo-dark").css({ display: "none" });
        $(".website-logo-light").css({ display: "block" });

        $(".content-text .welcome-img-dark").css({ display: "none" });
        $(".content-text .welcome-img").css({ display: "block" });

        $(".dark-mode").css({ display: "none" });
        $(".light-mode").css({ display: "block" });
        localStorage.setItem("theme", "dark");
    }

    function lightMode() {
        document.documentElement.style.setProperty("--main-clr", "#F4F6F5");
        document.documentElement.style.setProperty("--off-main-clr", "#EDEFEE");
        document.documentElement.style.setProperty("--sec-clr", "black");
        document.documentElement.style.setProperty("--off-sec-clr", "#2C2C2C");

        $(".website-logo-dark").css({ display: "block" });
        $(".website-logo-light").css({ display: "none" });

        $(".content-text .welcome-img-dark").css({ display: "block" });
        $(".content-text .welcome-img").css({ display: "none" });

        $(".dark-mode").css({ display: "block" });
        $(".light-mode").css({ display: "none" });
        localStorage.setItem("theme", "light");
    }

    $(".dark-mode").click(function() {
        document.documentElement.style.setProperty("--main-clr", "#0B090A");
        document.documentElement.style.setProperty("--off-main-clr", "#121011");
        document.documentElement.style.setProperty("--sec-clr", "white");
        document.documentElement.style.setProperty("--off-sec-clr", "#d3d3d3");

        $(".website-logo-dark").css({ display: "none" });
        $(".website-logo-light").css({ display: "block" });

        $(".content-text .welcome-img-dark").css({ display: "none" });
        $(".content-text .welcome-img").css({ display: "block" });

        $(".dark-mode").css({ display: "none" });
        $(".light-mode").css({ display: "block" });
        localStorage.setItem("theme", "dark");
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

        $(".dark-mode").css({ display: "block" });
        $(".light-mode").css({ display: "none" });
        localStorage.setItem("theme", "light");
    });

    /* ============================== LOCAL STORAGE ============================== */
    if (localStorage.getItem("theme") == "dark") {
        darkMode();
    }
    if (localStorage.getItem("theme") == "light") {
        lightMode();
    }
});

/* ============================== SIDEBAR ============================== */
function openSideBar() {
    $("#sidebar").css({ width: "300px" });
    $("#body").css({ overflow: "hidden" });
    $("#body").css({ height: "100%" });
    $("#lower-opacity").css({ display: "block" });
}

function closeSideBar() {
    $("#sidebar").css({ width: "0px" });
    $("#body").css({ overflow: "overlay" });
    $("#body").css({ height: "" });
    $("#lower-opacity").css({ display: "none" });
}