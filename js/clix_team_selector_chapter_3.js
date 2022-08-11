$(document).ready(function () {
  $("div.sec-devices > div").click(function (e) {
    $("div").removeClass("active");
    $(this).addClass("active");
    checkIfMarkedAsDone();
    let deviceType = $(this).attr("class").split(" ")[0];
    loadSettings($(this).parent().parent().attr("id"), $(this).attr("data-channel"), deviceType);
  });
  $(".close").click(function () {
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

function loadSettings(parent, trigger, deviceType) {
  var width = $(window).width();

  $(".settings ul").html("");
  $(`<li class="settings-title">
    <h2>CUSTOMIZE</h2>
    <span class="device-name">${deviceType.split("-").join(" ")}</span>
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
  settings4: {},

  //SETTINGS Fighting/Playing Area
  settings5: {},
};
