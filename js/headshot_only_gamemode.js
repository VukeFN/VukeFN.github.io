/* =============== GEAR POPUP =============== */
function openGearPopup() {
    $("#gear-popup").css({ display: "flex" });
    $("#gear-btn").attr("onclick", "closeGearPopup()");
}

function closeGearPopup() {
    $("#gear-popup").css({ display: "none" });
    $("#gear-btn").attr("onclick", "openGearPopup()");
}

$(document).ready(function() {
    $("div.sec-devices > div").click(function(e) {
        $("div").removeClass("active");
        $(this).addClass("active");
        checkIfMarkedAsDone();
        let deviceType = $(this).attr("class").split(" ")[0];
        loadSettings(
            $(this).parent().parent().attr("id"),
            $(this).attr("data-channel"),
            deviceType
        );
    });
    $(".close").click(function() {
        $(".settings").css({ width: "0px" });
        $("body").css({ overflow: "overlay", height: "" });
        $("div").removeClass("active");
        $(".lower-opacity").css({ width: "0" });
        closeGearPopup();
    });

    function checkIfMarkedAsDone() {
        if ($("div.active").hasClass("marked-as-done")) {
            $(".mark-as-done-btn").parent().css({ display: "none" });
            $(".unmark-as-done-btn").parent().css({ display: "block" });
        } else if ($("div.active").hasClass("marked-as-done") === false) {
            $(".mark-as-done-btn").parent().css({ display: "block" });
            $(".unmark-as-done-btn").parent().css({ display: "none" });
        }
    }
    checkIfMarkedAsDone();

    $(".mark-as-done-btn")
        .parent()
        .click(function() {
            $("div.active").addClass("marked-as-done");
            $(".mark-as-done-btn").parent().css({ display: "none" });
            $(".unmark-as-done-btn").parent().css({ display: "block" });
        });
    $(".unmark-as-done-btn")
        .parent()
        .click(function() {
            $("div.active.marked-as-done").removeClass("marked-as-done");
            $(".mark-as-done-btn").parent().css({ display: "block" });
            $(".unmark-as-done-btn").parent().css({ display: "none" });
        });
});

function loadSettings(parent, trigger, deviceType) {
    var width = $(window).width();

    $(".settings ul").html("");
    $(`<li class="settings-title">
    <h2>CUSTOMIZE</h2>
    <span class="device-name">${deviceType}</span></li>`)
        .appendTo(".settings ul")
        .slideDown("fast");
    $(".settings").css({ width: "50vw" });
    $("body").css({ overflow: "hidden", height: "100%" });
    $(".lower-opacity").css({ width: "100vw" });
    if (width < 900) {
        $(".settings").css({ width: "100vw" });
    }

    console.log(`parent: ${parent}, channel: ${trigger}`);
    for (let [key, value] of Object.entries(settings[parent][trigger])) {
        $(`<li class="item"><h2>${key}</h2><span>${value}</span></li>`)
            .not(value)
            .appendTo(".settings ul")
            .slideDown("fast");

        $(".show-in-video").attr("href", settings[parent][trigger].link);
    }
}

const settings = {
    //OUTSIDE PLAYING AREA
    settings1: {
        one: {
            "Modify ": "BOTH",
            "Effect ": "SET TO",
            "Effect Magnitude": "200",
            "Effect Duration": "INFINITE",
            "Show Visual Effect on Player": "NO",
            "Time to respawn": "INSTANT",
            "Ambient Audio": "OFF",
            "Pick Up Audio": "OFF",
            "Apply To": "ALL PLAYERS",
            "Pickup when Received From": "CHANNEL 1",
            link: "https://www.youtube.com/watch?v=vIFzcxy0jZ8&t=12s",
        },
        two: {
            "**DROP A GOLD PUMP SHOTGUN IN HERE**": "",
            "Auto Reload": "ON",
        },
    },

    //INSIDE PLAYING AREA
    settings2: {
        one: {
            "***This mutator must cover the whole Playing Area***": "",
            "Allow Weapon Fire": "YES",
            "Zone Width": "9",
            "Zone Depth": "9",
            "Zone Height": "3",
            "On Player Entering Zone Transmit On": "CHANNEL 1",
            link: "https://www.youtube.com/watch?v=vIFzcxy0jZ8&t=71s",
        },
        two: {
            "Use As Island Start": "NO",
            "Visible During Game": "NO",
        },
    },
};