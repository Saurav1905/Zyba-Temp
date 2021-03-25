function showNewBookingModal() {
  console.log("nav-on");
  document.querySelector("#new-booking-modal").style.display = "flex";
  if (document.querySelector("#new-booking-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#new-booking-modal");
    if (!container.contains(e.target)) {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    }
  });

  // for history modal

  // document.querySelector("#history-modal").style.display = "flex";
  // if (document.querySelector("#history-modal").style.display === "flex") {
  //   document.querySelector(".non-floating").style.filter =
  //     "brightness(50%) contrast(50%)";
  //   document.querySelector(".non-floating").style.backgroundColor =
  //     "rgba(32, 32, 32, 0.48)";

  //   document.querySelector("html").style.overflowY = "hidden";
  // }

  // document.addEventListener("mouseup", function (e) {
  //   var container = document.querySelector("#history-modal");
  //   if (!container.contains(e.target)) {
  //     container.style.display = "none";

  //     document.querySelector(".non-floating").style.filter = "none";
  //     document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

  //     document.querySelector("html").style.overflowY = "scroll";
  //   }
  // });
}

function showBookingHistoryModal() {
  document.querySelector("#history-modal").style.display = "flex";
  if (document.querySelector("#history-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#history-modal");
    if (!container.contains(e.target)) {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    }
  });
}

function showBookingModal() {
  console.log("nav-on");
  document.querySelector("#show-booking-modal").style.display = "flex";
  if (document.querySelector("#show-booking-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#show-booking-modal");
    if (!container.contains(e.target)) {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    }
  });
}

function chooseProfModal() {
  console.log("nav-on");
  document.querySelector("#choose-prof-modal").style.display = "flex";
  if (document.querySelector("#choose-prof-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#choose-prof-modal");
    if (!container.contains(e.target)) {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    }
  });
}

function showAddEmpModal() {
  console.log("nav-on");
  document.querySelector("#add-emp-modal").style.display = "flex";
  if (document.querySelector("#add-emp-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#add-emp-modal");
    if (!container.contains(e.target)) {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    }
  });
}

function showEditEmpModal() {
  console.log("nav-on");
  document.querySelector("#edit-emp-modal").style.display = "flex";
  if (document.querySelector("#edit-emp-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#edit-emp-modal");
    if (!container.contains(e.target)) {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    }
  });
}

function showDelEmpModal() {
  var container1 = document.querySelector("#edit-emp-modal");
  container1.style.display = "none";
  console.log("nav-on");
  document.querySelector("#del-emp-modal").style.display = "flex";
  if (document.querySelector("#del-emp-modal").style.display === "flex") {
    document.querySelector(".non-floating").style.filter =
      "brightness(50%) contrast(50%)";
    document.querySelector(".non-floating").style.backgroundColor =
      "rgba(32, 32, 32, 0.48)";

    document.querySelector("html").style.overflowY = "hidden";
  }

  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#del-emp-modal");
    if (!container.contains(e.target)) {
      container.style.display = "none";

      document.querySelector(".non-floating").style.filter = "none";
      document.querySelector(".non-floating").style.backgroundColor = "#ffffff";

      document.querySelector("html").style.overflowY = "scroll";
    }
  });
}
