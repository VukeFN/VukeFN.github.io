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
            .appendTo(".settings ul")
            .slideDown("fast");
    }
}

const settings = {
    //Player COUNTING
    settings1: {
        one: {
            "Activate on Game Phase": "Game Start",
        },
        two: {
            "When Triggered Transmit On": "CH 01",
        },
        three: {
            "When Triggered Transmit On": "CH 06",
        },
        four: {
            "When Triggered Transmit On": "CH 07",
        },
    },

    //SETTINGS Mutators
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

    //SETTINGS Top 10
    settings3: {
        one: {
            "Trigger When Receiving From": "CH 05",
            "When Triggered Transmit On": "CH 07",
        },
        two: {
            "*** Transmit on Score == Placement Being Awarded ***": "",
            "Score Change When Activated": "1",
            "Transmit on Score": "10",
            "Reset When Receiving From": "CH 01",
            "Increment When Receiving From": "CH 02",
            "Decrement When Receiving From": "CH 03",
            "On Score Output Transmit To": "CH 08",
        },
        three: {
            "*** This trigger enables the Top 10 Points ***": "",
            "Enabled on Game Start": "DISABLED",
            "Enable When Receiving From": "CH 06",
            "Trigger When Receiving From": "CH 08",
            "When Triggered Transmit On": "CH 04",
        },
        four: {
            "*** The Score to award players when 10 left ***": "",
            "Score Value": "5",
            "Score Change When Activated": "1",
            "Activate When Receiving From": "CH 05",
            "Enabled When Receiving From": "CH 08",
            "Disable When Receiving From": "CH 07",
        },
    },

    //SETTINGS TOP 5
    settings4: {
        one: {
            "*** Transmit on Score == Placement Being Awarded ***": "",
            "Score Change When Activated": "1",
            "Transmit on Score": "5",
            "Reset When Receiving From": "CH 01",
            "Increment When Receiving From": "CH 02",
            "Decrement When Receiving From": "CH 03",
            "On Score Output Transmit To": "CH 09",
        },
        two: {
            "*** This trigger enables the Top 5 Points ***": "",
            "Enabled on Game Start": "DISABLED",
            "Enable When Receiving From": "CH 06",
            "Trigger When Receiving From": "CH 09",
            "When Triggered Transmit On": "CH 04",
        },
        three: {
            "*** The Score to award players when 5 left ***": "",
            "Score Value": "3",
            "Score Change When Activated": "1",
            "Activate When Receiving From": "CH 05",
            "Enabled When Receiving From": "CH 09",
            "Disable When Receiving From": "CH 07",
        },
    },

    //SETTINGS TOP 3
    settings5: {
        one: {
            "*** Transmit on Score == Placement Being Awarded ***": "",
            "Score Change When Activated": "1",
            "Transmit on Score": "3",
            "Reset When Receiving From": "CH 01",
            "Increment When Receiving From": "CH 02",
            "Decrement When Receiving From": "CH 03",
            "On Score Output Transmit To": "CH 10",
        },
        two: {
            "*** This trigger enables the Top 3 Points ***": "",
            "Enabled on Game Start": "DISABLED",
            "Enable When Receiving From": "CH 06",
            "Trigger When Receiving From": "CH 10",
            "When Triggered Transmit On": "CH 04",
        },
        three: {
            "*** The Score to award players when 3 left ***": "",
            "Score Value": "3",
            "Score Change When Activated": "1",
            "Activate When Receiving From": "CH 05",
            "Enabled When Receiving From": "CH 10",
            "Disable When Receiving From": "CH 07",
        },
    },

    //SETTINGS TOP 1
    settings6: {
        one: {
            "*** Transmit on Score == Placement Being Awarded ***": "",
            "Score Change When Activated": "1",
            "Transmit on Score": "1",
            "Reset When Receiving From": "CH 01",
            "Increment When Receiving From": "CH 02",
            "Decrement When Receiving From": "CH 03",
            "On Score Output Transmit To": "CH 11",
        },
        two: {
            "*** This trigger enables the Top 1 Points ***": "",
            "Enabled on Game Start": "DISABLED",
            "Enable When Receiving From": "CH 06",
            "Trigger When Receiving From": "CH 11",
            "When Triggered Transmit On": "CH 04",
        },
        three: {
            "*** The Score to award players when 1 left ***": "",
            "Score Value": "3",
            "Times Can Trigger": "1",
            "Activate When Receiving From": "CH 05",
            "Enabled When Receiving From": "CH 11",
            "Disable When Receiving From": "CH 07",
            "On Max Triggers Transmit To": "CH 12",
        },
        four: {
            "*** This ends the game and awards victory ***": "",
            "End Round When Receiving From": "CH 12",
        },
    },
};