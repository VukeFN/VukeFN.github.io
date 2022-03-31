/* ============================== LOADING PAGE ============================== */
window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
    this.document.getElementById("website-intro").style.display = "flex";
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

/* ============================== DEVICE SETTINGS POPUP ============================== */

function openDeviceSettings() {
    var width = $(window).width();
    console.log("the window's width is " + width);

    if (width < 800 || width == 800) {
        document.getElementById("settings").style.width = "100%";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("body").style.height = "100%";
    } else if (width > 800) {
        document.getElementById("settings").style.width = "50%";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("body").style.height = "100%";
        document.getElementById("lower-opacity-settings").style.width = "100vw";
        document.getElementById("lower-opacity-settings").style.left = "0vw";
    }
}

function closeDeviceSettings() {
    document.getElementById("settings").style.width = "0";
    document.getElementById("body").style.overflow = "overlay";
    document.getElementById("body").style.removeProperty = "height";
    document.getElementById("lower-opacity-settings").style.width = "0";
    document.getElementById("lower-opacity-settings").style.left = "0";
}

function openGearPopup() {
    document.getElementById("gear-popup").style.display = "flex";
    document
        .getElementById("gear-btn")
        .setAttribute("onclick", "closeGearPopup()");
}

function closeGearPopup() {
    document.getElementById("gear-popup").style.display = "none";
    document
        .getElementById("gear-btn")
        .setAttribute("onclick", "openGearPopup()");
}