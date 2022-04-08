$(document).ready(function() {
    $("div.sec-devices > div").click(function(e) {
        $("div").removeClass("active");
        $(this).addClass("active");
        let deviceType = $(this).attr("class").split(" ")[0];
        loadSettings(
            $(this).parent().parent().attr("id"),
            $(this).attr("data-channel"),
            deviceType
        );
    });
    $(".close").click(function() {
        $(".settings").css({ width: "0px" });
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

/* =============== GEAR POPUP =============== */
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

function loadSettings(parent, trigger, deviceType) {
    var width = $(window).width();

    $(".settings ul").html("");
    $(`<li class="settings-title">
    <h2>CUSTOMIZE</h2>
    <span class="device-name">${deviceType}</span>
</li>`)
        .appendTo(".settings ul")
        .slideDown("fast");
    $(".settings").css({ width: "50vw" });
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
    //SETTINGS Mechanic Devices
    settings1: {
        1: {
            "**Drop the items listed in the video in this device**": "",
            "Class Name": "Gold Spaz",
            "Class Identifier": "2",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=47s",
        },
        2: {
            "**Drop the items listed in the video in this device**": "",
            "Class Name": "Purple Spaz",
            "Class Identifier": "3",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=116s",
        },
        3: {
            "**Drop the items listed in the video in this device**": "",
            "Class Name": "Gold Striker",
            "Class Identifier": "4",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=123s",
        },
        4: {
            "Class to switch to": "2",
            "Time to Switch": "INSTANT",
            "Enabled During Phase": "NONE",
            "Enable When Receiving From": "CHANNEL 1",
            "Disable When Receiving From": "CHANNEL 4",
            "When Class Switched Transmit On": "CHANNEL 11",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=173s",
        },
        5: {
            "Class to switch to": "3",
            "Time to Switch": "INSTANT",
            "Enabled During Phase": "NONE",
            "Enable When Receiving From": "CHANNEL 2",
            "Disable When Receiving From": "CHANNEL 5",
            "When Class Switched Transmit On": "CHANNEL 11",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=212s",
        },
        6: {
            "Class to switch to": "4",
            "Time to Switch": "INSTANT",
            "Enabled During Phase": "NONE",
            "Enable When Receiving From": "CHANNEL 3",
            "Disable When Receiving From": "CHANNEL 6",
            "When Class Switched Transmit On": "CHANNEL 11",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=226s",
        },
        7: {
            "Trigger when Receiving From": "CHANNEL 1",
            "When Triggered Transmit On": "CHANNEL 5",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=246s",
        },
        8: {
            "Trigger when Receiving From": "CHANNEL 1",
            "When Triggered Transmit On": "CHANNEL 6",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=268s",
        },
        9: {
            "Trigger when Receiving From": "CHANNEL 2",
            "When Triggered Transmit On": "CHANNEL 4",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=282s",
        },
        10: {
            "Trigger when Receiving From": "CHANNEL 2",
            "When Triggered Transmit On": "CHANNEL 6",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=296s",
        },
        11: {
            "Trigger when Receiving From": "CHANNEL 3",
            "When Triggered Transmit On": "CHANNEL 4",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=306s",
        },
        12: {
            "Trigger when Receiving From": "CHANNEL 3",
            "When Triggered Transmit On": "CHANNEL 5",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=317s",
        },
    },

    //SETTINGS Loadout Selector Area
    settings2: {
        one: {
            "*** This mutator must cover the area where players spawn ***": "",
            "Allow Weapon Fire": "YES",
            "Zone Width": "100",
            "Zone Depth": "100",
            "Zone Height": "100",
            "Enabled At Game Start": "NO",
            "Enable When Receiving From": "CH 01",
            "Disable When Receiving From": "CH 02",
            "On Player Entering Zone Transmit On": "CH 02",
        },
        two: {
            "*** This mutator must cover the entire playable area ***": "",
            "Allow Weapon Fire": "YES",
            "Zone Width": "100",
            "Zone Depth": "100",
            "Zone Height": "100",
            "Enabled At Game Start": "NO",
            "Enable When Receiving From": "CH 04",
            "Disable When Receiving From": "CH 05",
            "On Player Entering Zone Transmit On": "CH 05",
        },
        three: {
            "*** This mutator must cover the entire playable area, but not island start spawn pads. ***": "",
            "Allow Weapon Fire": "YES",
            "Zone Width": "100",
            "Zone Depth": "100",
            "Zone Height": "100",
            "Enabled At Game Start": "YES",
            "On Player Leaving Zone Transmit On": "CH 03",
        },
    },
};