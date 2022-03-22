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