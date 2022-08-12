$(document).ready(function () {
  $(".section-devices > div:not(#scroll)").on("click", function (e) {
    $("div").removeClass("active");
    $(this).addClass("active");
    checkIfMarkedAsDone();
    let deviceType = $(this).attr("class").split(" ")[0];
    loadSettings($(this).parent().parent().parent().attr("id"), $(this).attr("data-channel"), deviceType);
  });
  $(".close").on("click", function () {
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
    .click(function () {
      $("div.active").addClass("marked-as-done");
      $(".mark-as-done-btn").parent().css({ display: "none" });
      $(".unmark-as-done-btn").parent().css({ display: "block" });
    });
  $(".unmark-as-done-btn")
    .parent()
    .click(function () {
      $("div.active.marked-as-done").removeClass("marked-as-done");
      $(".mark-as-done-btn").parent().css({ display: "block" });
      $(".unmark-as-done-btn").parent().css({ display: "none" });
    });
});

/* =============== GEAR POPUP =============== */
function openGearPopup() {
  document.getElementById("gear-popup").style.display = "flex";
  document.getElementById("gear-btn").setAttribute("onclick", "closeGearPopup()");
}

function closeGearPopup() {
  document.getElementById("gear-popup").style.display = "none";
  document.getElementById("gear-btn").setAttribute("onclick", "openGearPopup()");
}
/* =============== GEAR POPUP =============== */

/* =============== SETTINGS MENU =============== */
function loadSettings(parent, trigger, deviceType) {
  var width = $(window).width();

  $(".settings ul").html("");
  $(`<li class="settings-title"><h2>CUSTOMIZE</h2><span class="device-name">${deviceType.split("-").join(" ")}</span></li>`)
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
    $(`<li class="item"><h2>${key}</h2><span>${value}</span></li>`).not(value).appendTo(".settings ul").slideDown("fast");

    $(".show-in-video").attr("href", settings[parent][trigger].link);
  }
}

const settings = {
  //SETTINGS Game Start (Black Box)
  settings1: {
    1: {
      "Enabled During Phase": "Game Countdown Only",
      "Use As Island Start": "No",
      "Visible during games": "No",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=75s",
    },
    2: {
      "Zone Width": "3",
      "Zone Depth": "3",
      "Zone Height": "2",
      "Enabled During Phase": "None",
      "Enabled When Receiving From": "Channel 11",
      "On Player Entering Zone Transmit On": "Channel 12",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=117s",
    },
    3: {
      "Zone Width": "3",
      "Zone Depth": "3",
      "Zone Height": "3",
      "Enabled During Phase": "None",
      "Enabled When Receiving From": "Channel 13",
      "On Player Entering Zone Transmit On": "Channel 14",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=195s",
    },
  },

  //SETTINGS Loadout Selecting Area
  settings2: {
    1: {
      "Teleporter Group": "None",
      "Teleporter Target Group": "None",
      "Face player in teleporter direction": "Yes",
      "Teleport to When Receiving From": "Channel 12",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=244s",
    },
  },

  //SETTINGS Game Manager
  settings3: {
    1: {
      Round: "1",
      "On Round Start Transmit On": "Channel 10",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=290s",
    },
    2: {
      Delay: "2 Seconds",
      "Trigger Sound": "Disabled",
      "Trigger VFX": "Disabled",
      "Trigger when Receiving From": "Channel 10",
      "When Triggered Transmit On": "Channel 11",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=315s",
    },
    3: {
      Round: "2",
      "On Round Start Transmit On": "Channel 13",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=355s",
    },
    4: {
      Round: "3",
      "On Round Start Transmit On": "Channel 13",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=374s",
    },
    5: {
      Round: "4",
      "On Round Start Transmit On": "Channel 13",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=378s",
    },
    6: {
      Round: "5",
      "On Round Start Transmit On": "Channel 13",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=382s",
    },
  },

  //SETTINGS Team Selecting Area
  settings4: {
    1: {
      "Barrier Style": "Invisible",
      "Zone Shape": "Box (Hollow)",
      "Barrier Width": "2",
      "Barrier Depth": "3",
      "Barrier Height": "4",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=470s",
    },
    2: {
      "Barrier Style": "Starfield",
      "Zone Shape": "Box (Hollow)",
      "Barrier Width": "3",
      "Barrier Depth": "4",
      "Barrier Height": "3",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=515s",
    },
    3: {
      "Teleporter Group": "None",
      "Teleporter Target Group": "None",
      "Teleporter Rift Visible": "No",
      "Face player in teleporter direction": "Yes",
      "Teleport to When Receiving From": "Channel 8",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=637s",
    },
    4: {
      "Compare PLayer Count": "Do Not Compare",
      "Counted Team": "Team 2",
      "Icon Scale": "1.25x",
      Color: "Bright Red",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=687s",
    },
    5: {
      "Compare PLayer Count": "Do Not Compare",
      "Counted Team": "Team 3",
      "Icon Scale": "1.25x",
      Color: "Yellow",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=737s",
    },
    6: {
      "Turn On Text": "RED",
      "Interaction Radius": "0.75m",
      "Auto-Save State": "Yes",
      "Auto-Load State": "Game Start",
      "Store State Per Player": "Yes",
      "Check State at Game Start": "Disabled",
      "Turn Off When Receiving From": "Channel 32",
      "Check State When Receiving From": "Channel 14",
      "Clear All Persistence Data for Current Players": "Channel 32",
      "When Turned On Transmit On": "Channel 15",
      "If On When Checked Transmit On": "Channel 15",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=785s",
    },
    7: {
      "Turn On Text": "Yellow",
      "Interaction Radius": "0.75m",
      "Auto-Save State": "Yes",
      "Auto-Load State": "Game Start",
      "Store State Per Player": "Yes",
      "Check State at Game Start": "Disabled",
      "Turn Off When Receiving From": "Channel 32",
      "Check State When Receiving From": "Channel 14",
      "Clear All Persistence Data for Current Players": "Channel 32",
      "When Turned On Transmit On": "Channel 16",
      "If On When Checked Transmit On": "Channel 16",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=892s",
    },
    8: {
      Duration: "15 Seconds",
      "Completion Behavior": "Disable",
      "Visible During Games": "No",
      "Display Time In": "Seconds Only",
      "Timer Running Text": "Pick Your Team",
      "Start When Receiving From": "Channel 8",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=952s",
    },
    9: {
      "Team to Switch to": "Team 2",
      "Time to Switch": "Instant",
      "Display VFX on Activation": "No",
      "Change Player to Team when Receiving From": "Channel 15",
      "When Team Switched Transmit On": "Channel 17",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=973s",
    },
    10: {
      "Team to Switch to": "Team 3",
      "Time to Switch": "Instant",
      "Display VFX on Activation": "No",
      "Change Player to Team when Receiving From": "Channel 16",
      "When Team Switched Transmit On": "Channel 18",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=1005s",
    },
  },

  //SETTINGS Fighting/Playing Area
  settings5: {
    1: {
      "Teleporter Group": "None",
      "Teleporter Target Group": "None",
      Team: "Team 2",
      "Teleporter Rift Visible": "No",
      "Play Visual Effects": "No",
      "Play Sound Effects": "No",
      "Face player in teleporter direction": "Yes",
      "Teleport to When Receiving From": "Channel 17",
      "Enable When Receiving From": "Channel 20",
      "Disable When Reciving From": "Channel 19",
      "When Teleported to Transmit On": "Channel 19",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=1032s",
    },
    2: {
      "Teleporter Group": "None",
      "Teleporter Target Group": "None",
      "Enabled During Phase": "None",
      Team: "Team 2",
      "Teleporter Rift Visible": "No",
      "Play Visual Effects": "No",
      "Play Sound Effects": "No",
      "Face player in teleporter direction": "Yes",
      "Teleport to When Receiving From": "Channel 17",
      "Enable When Receiving From": "Channel 19",
      "Disable When Reciving From": "Channel 20",
      "When Teleported to Transmit On": "Channel 20",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=1032s",
    },
    3: {
      "Teleporter Group": "None",
      "Teleporter Target Group": "None",
      Team: "Team 3",
      "Teleporter Rift Visible": "No",
      "Play Visual Effects": "No",
      "Play Sound Effects": "No",
      "Face player in teleporter direction": "Yes",
      "Teleport to When Receiving From": "Channel 18",
      "Enable When Receiving From": "Channel 22",
      "Disable When Reciving From": "Channel 21",
      "When Teleported to Transmit On": "Channel 21",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=1093s",
    },
    4: {
      "Teleporter Group": "None",
      "Teleporter Target Group": "None",
      "Enabled During Phase": "None",
      Team: "Team 2",
      "Teleporter Rift Visible": "No",
      "Play Visual Effects": "No",
      "Play Sound Effects": "No",
      "Face player in teleporter direction": "Yes",
      "Teleport to When Receiving From": "Channel 18",
      "Enable When Receiving From": "Channel 21",
      "Disable When Reciving From": "Channel 22",
      "When Teleported to Transmit On": "Channel 22",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=1146s",
    },
    5: {
      "Allow Weapon Fire": "Yes",
      "Zone Width": "4",
      "Zone Depth": "6",
      "Zone Height": "2",
      "On Player Entering Zone Transmit On": "Channel 11",
      link: "https://www.youtube.com/watch?v=YgiAJ-3v0_Y&t=1196s",
    },
  },
};
/* =============== SETTINGS MENU =============== */
