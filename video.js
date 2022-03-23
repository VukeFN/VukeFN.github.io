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