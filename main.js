function openNav() {
    document
        .getElementById("nav-menu-icon")
        .setAttribute("name", "close-outline");
    document
        .getElementById("nav-menu-icon")
        .setAttribute("onclick", "closeNav()");
    document.getElementById("nav-menu").style.height = "150px";
    document.getElementById("nav-menu").style.boxShadow =
        "3px 4px 5px 6px var(--main-clr)";
    document.getElementById("nav-menu").style.right = "20px";
    document.getElementById("nav-menu").style.padding = "20px";
}

function closeNav() {
    document.getElementById("nav-menu-icon").setAttribute("name", "menu-outline");
    document.getElementById("nav-menu-icon").setAttribute("onclick", "openNav()");
    document.getElementById("nav-menu").style.height = "0";
    document.getElementById("nav-menu").style.boxShadow = "none";
    document.getElementById("nav-menu").style.right = "0";
    document.getElementById("nav-menu").style.padding = "0";
}

function openSideBar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("body").style.height = "100%";
    document.getElementById("lower-opacity").style.width = "calc(100vw - 300px)";
    document.getElementById("lower-opacity").style.left = "300px";
}

function closeSideBar() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("body").style.overflowY = "overlay";
    document.getElementById("body").style.removeProperty = "height";
    document.getElementById("lower-opacity").style.width = "0";
    document.getElementById("lower-opacity").style.left = "0";
}

function openDeviceSettings() {
    document.getElementById("settings").style.width = "50%";
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("body").style.height = "100%";
}

function closeDeviceSettings() {
    document.getElementById("settings").style.width = "0";
    document.getElementById("body").style.overflowY = "visible";
    document.getElementById("body").style.removeProperty = "height";
}

window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
    this.document.getElementById("website-intro").style.display = "block";
});