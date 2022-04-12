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
    //SETTINGS Mechanic Devices
    settings1: {
        1: {
            "-- Drop the items listed in the video in this device --": "",
            "Class Name": "Gold Spaz",
            "Class Identifier": "2",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=47s",
        },
        2: {
            "-- Drop the items listed in the video in this device --": "",
            "Class Name": "Purple Spaz",
            "Class Identifier": "3",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=116s",
        },
        3: {
            "-- Drop the items listed in the video in this device --": "",
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
        13: {
            "Trigger when Receiving From": "CHANNEL 9",
            "When Triggered Transmit On": "CHANNEL 11",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=337s",
        },
        14: {
            "Trigger when Receiving From": "CHANNEL 10",
            "When Triggered Transmit On": "CHANNEL 11",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=357s",
        },
        15: {
            "Duration ": "15 SECONDS",
            "Start Timer at Game Start": "ON",
            "Completion Behavior": "DISABLE",
            "Display Time in": "SECONDS ONLY",
            "Timer Running Text": "Pick Your Weapons",
            "On Success Transmit on": "CHANNEL 7",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=373s",
        },
        16: {
            "Activate on Game Phase": "GAME START",
            "When Triggered Transmit On": "CHANNEL 15",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=427s",
        },
        17: {
            "Activate on Game Phase": "GAME START",
            "When Triggered Transmit On": "CHANNEL 17",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=450s",
        },
        18: {
            "-- This is a copy of another class designer -- ": "",
            "Class Name": "Default Class",
            "Class Identifier": "1",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=477s",
        },
    },

    //SETTINGS Loadout Selector Area
    settings2: {
        1: {
            "Barrier Style": "STARFIELD",
            "Block Weapon Fire": "NO",
            "Zone Shape": "BOX (HOLLOW)",
            "Barrier Width": "8",
            "Barrier Depth": "8",
            "Barrier Height": "8",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=499s",
        },
        2: {
            "Island Code": "9851-8864-4564",
            "Set Island Title Text Visibility": "OFF",
            "Set Matchmaking Text Visibility (Deprecated)": "OFF",
            "Enable Audio": "NO",
            "Enable as Art": "YES",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=667s",
        },
        3: {
            "Island Code": "0124-1296-5081",
            "Set Island Title Text Visibility": "OFF",
            "Set Matchmaking Text Visibility (Deprecated)": "OFF",
            "Enable Audio": "NO",
            "Enable as Art": "YES",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=667s",
        },
        4: {
            "Island Code": "4286-1044-0789",
            "Set Island Title Text Visibility": "OFF",
            "Set Matchmaking Text Visibility (Deprecated)": "OFF",
            "Enable Audio": "NO",
            "Enable as Art": "YES",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=667s",
        },
        5: {
            "Turn On Text": "PICK",
            "Turn Off Text": "UNPICK",
            "Turn Off When Receiving From": "CHANNEL 4",
            "When Turned On Transmit On": "CHANNEL 1",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=696s",
        },
        6: {
            "Turn On Text": "PICK",
            "Turn Off Text": "UNPICK",
            "Turn Off When Receiving From": "CHANNEL 5",
            "When Turned On Transmit On": "CHANNEL 2",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=775s",
        },
        7: {
            "Turn On Text": "PICK",
            "Turn Off Text": "UNPICK",
            "Turn Off When Receiving From": "CHANNEL 6",
            "When Turned On Transmit On": "CHANNEL 3",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=798s",
        },
        8: {
            "Allow Building": "NO",
            "Zone Width": "8",
            "Zone Depth": "8",
            "Zone Height": "4",
            "Enabled During Phase": "NONE",
            "Enable When Receiving From": "CHANNEL 7",
            "On Player Entering Zone Transmit On": "CHANNEL 8",
            link: "https://www.youtube.com/watch?v=F1ZAi2UVZyc&t=820s",
        },
    },
};