/* ============================== LOADING PAGE ============================== */
$(document).ready(function() {
    $("#preloader").css({ display: "none" });
    $("#website-intro").css({ display: "flex" });

    const pageTitle = $("title").text().substring(9).toLocaleUpperCase();
    $(".page-title").text(pageTitle);

    $(".scroll-left").click(function() {
        $(".sec-devices").scrollLeft($(".sec-devices").scrollLeft() - 350);
    });

    $(".scroll-right").click(function() {
        $(".sec-devices").scrollLeft($(".sec-devices").scrollLeft() + 350);
    });
});

/* ============================== SIDEBAR ============================== */
function openSideBar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("body").style.height = "100%";
    document.getElementById("lower-opacity").style.width = "calc(100vw - 300px)";
    document.getElementById("lower-opacity").style.left = "300px";
}

function closeSideBar() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("body").style.overflow = "overlay";
    document.getElementById("body").style.removeProperty = "height";
    document.getElementById("lower-opacity").style.width = "0";
    document.getElementById("lower-opacity").style.left = "0";
}